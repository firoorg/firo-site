---
layout: post
title: "How Firo's Privacy Technology Compares to the Competition"
summary: ""
tags: [news, dev, community]
author: "Reuben Yap"
img: "/guide/assets/privacy-technology-comparison/banner.png"
alt: ""
permalink: "/guide/privacy-technology-comparison.html"
---
## Changelog

**Update:** This post was originally written in November 2017 but will be updated from time to time with recent events and cryptographic innovations. 

This post was last updated on the **15 July 2019** which includes write-ups on Sigma and Lelantus, covers the Zerocoin vulnerability, includes some new zkSNARKs variants and some additional information on Beam's MimbleWimble implementation.

### Blockchain Privacy Mechanisms

This post will give you a brief overview of the major blockchain privacy mechanisms that are implemented in cryptocurrencies today and show you how the Sigma protocol used in Zcoin and also our next generation privacy protocol Lelantus stacks up. 

Blockchain privacy is particularly tricky to achieve as public blockchains are designed so that all transactions are transparent and the supply of coins can be publicly verified. Privacy mechanisms have to ensure that both these elements are preserved even though there is a conflict between protecting privacy and maintaining public verifiability. To understand the innovation behind Sigma and Lelantus, we first need to examine the history of blockchain privacy.

### Cryptocurrency Tumblers and CoinJoin

**As used in: Dash, Bitcoin mixers** 

**Pros:**

*   Works on top of most cryptocurrencies without the need for specific consensus rules
*   Relatively simple to implement
*   Lightweight

**Cons:**

*   Basic anonymity
*   Requires mixers to be online
*   Earlier implementations involve trust in a third party mixer

One of the first methods people sought to achieve this was through the use of cryptocurrency tumblers. These work based on the principle of mixing funds with others by sending your coins to other people and then giving their coins to you. An easy way to visualize this is a group of people each putting the same number of coins into a pot, mixing it up and then each taking out the same amount of coins. The idea is that it is now hard to prove whose coin formerly belonged to whom thus providing some degree of privacy. Mixing comes with several drawbacks, mainly that you need to trust the tumbler not to steal your coins. 

CoinJoin is an improvement of this mixing idea and removes the possibility for the tumbler to steal the coins. It was popularly used in Darkcoin (now known as Dash). However, there are still many drawbacks to the system. 

![](/guide/assets/privacy-technology-comparison/coinjoin.png)

*   You need to trust the tumbler for your anonymity as the mixer can log identifiable information and knows how the mix is happening along with each user’s input address and the address they are receiving coins to. This issue can be avoided by using blind digital signatures but then the anonymity of CoinJoin relies strongly on the possibility to connect to the tumbler in an anonymous manner, e.g., via the Tor network.
*   It requires people involved in the mixing to be online for a mixing transaction to happen. If no one wants to mix for the right denominations, your mix can be delayed.
*   The anonymity is limited by the amount of people you mix with. A typical round of Dash’s privatesend mixing involves 3 participants only though this can be repeated.
*   Even with multiple rounds of CoinJoin mixing, [recent research](https://arxiv.org/pdf/1708.04748.pdf) shows that a user’s wallet can be identified if they are not careful with browser cookies when making payments because mixing only obscures the transaction links between addresses but does not break them completely.
*   It is easy to disrupt a run of CoinJoin and delay the completion of the transaction for the other participants.

What's more, Dash's implementation, called PrivateSend, is susceptible to [cluster intersection attacks](https://arxiv.org/pdf/1709.02489.pdf). 

Other improvements such as CoinShuffle++ removed the need for a trusted third party but are still subject to the other drawbacks of CoinJoin, namely a limited anonymity set and the requirement that participants are online. 

The main benefit of mixer type schemes is that they are relatively simple and work on top of the cryptocurrency without the need to use specific consensus rules. With appropriate precautions, CoinJoin can provide a basic degree of anonymity and is used in Wasabi wallet. However even Wasabi wallet's creator admits that it is a [temporary hack](https://en.cryptonomist.ch/2019/07/08/wasabi-wallet-privacy-2/) and that privacy will be priced out of Bitcoin's main chain. 

The more recent [Tumblebit](https://medium.com/@nopara73/tumblebit-vs-coinjoin-15e5a7d58e3) seems to be a very promising improvement over mixing type schemes but is beyond the scope of this article. TumbleBit, however, is a privacy scheme not implemented at the protocol level and still requires other people to make available their funds for mixing as compared to the other schemes we will cover below. Its main benefit, the same with CoinJoin is that it can be implemented on top of Bitcoin or any other coin based on Bitcoin without any requirement to change the protocol.

### CryptoNote and Ring Signatures

**As used in: Monero, Particl** 

**Pros:**

*   No need for a mixer and mixing is done automatically
*   Can be implemented with privacy on by default
*   Anonymity increases as time passes as outputs become the new inputs of new mixes
*   Hides transaction amounts when implemented with RingCT (or bulletproofs)
*   Well researched cryptography

**Cons:**

*   Does not break transaction links, merely obscures them, hence a ['decoy' model](https://slideslive.com/38911785/satoshi-has-no-clothes-failures-in-onchain-privacy).
*   Scalability issues because of large transaction sizes and a non prunable blockchain
*   Risks of blockchain being deanonymized in the future or through incorrect implementations
*   Cannot take advantage of existing Bitcoin ecosystem and requires separate integration work
*   Ring size is practically limited
*   Cannot use simple payment verification (SPV) and therefore you always have to run a full node or connect to one (no light wallets)
*   Tricky to implement some layer 2 solutions such as Lightning Network
*   Does not have supply auditability meaning [hidden inflation can go undetected](https://www.getmonero.org/2017/05/17/disclosure-of-a-major-bug-in-cryptonote-based-currencies.html).

The next anonymity scheme we will explore is ring signatures as used in CryptoNote currencies such as Monero which significantly improves anonymity over regular mixer type schemes. A ring signature works by proving someone signed the transaction from a group of people without revealing which person it was. One common proposed use case of ring signatures is for it to be used to provide an anonymous signature from a “high-ranking White House official” without revealing which official signed the message. 

CryptoNote uses ring signatures in a way whereby a user can craft a transaction and use the outputs of other similar transactions on the blockchain automatically to form the inputs to a ring signature transaction so that it is unclear which input belongs to the person doing the transaction. It does this automatically without requiring other users to specify that they wish to mix and does not need to wait for other people to provide funds since it’s just scanning the blockchain for those outputs to use. As there is no mixer, there’s no mixer you need to trust. Monero also recently implemented RingCT (Ring Confidential Transactions) which hides transaction amounts as well. 

![](/guide/assets/privacy-technology-comparison/cryptonote.png) 

Ring signatures as currently implemented in CryptoNote currencies also have limitations concerning practical ring size (the number of other outputs you are taking) as the size of a transaction grows linearly as the ring size increases. This is why by Monero has a relatively small ring size of 11\. This means on a per transaction basis, the anonymity is limited by the number of participants in the ring. Blockchain analysts although they might not be able to prove transactions are linked, they can calculate the odds that they are. This is  primary drawback of Cryptonote is that it doesn't break the links between transactions but merely obscures it with decoy inputs and outputs. 

Also, security researchers have found ways to make educated guesses as to which transaction is the real one by tying it to the timing of transactions. In any mix of one real coin and a set of fake coins bundled up in a transaction, the real one is very likely to have been the most recent coin to have moved prior to that transaction. Before a recent change from Monero's developers, that timing analysis correctly identified the real coin more than 90 percent of the time, virtually nullifying Monero's privacy safeguards. After that change to how Monero chooses its mixins, that trick now can spot the real coin just 45 percent of the time—but still narrows down the real coin to about two possibilities, far fewer than most Monero users would like. 

Another criticism of CryptoNote is that if there’s a weakness in its ring signature implementation or a reasonably powerful quantum computer becomes feasible, the entire blockchain history is deanonymized and retroactively exposed. This cannot be fixed after the fact. In fact, a flawed implementation in a CryptoNote currency called ShadowCash allowed for its blockchain to be deanonymized in its entirety. However, a practical quantum computer is still quite some time off, and it boils down to whether several-year-old transactions data are still valuable For this data to be useful, it will most likely need to be combined with external data. 

It is also to worth pointing out that with RingCT which hides transaction amounts, supply auditability is sacrificed. Supply auditability is the ability to verify that no new coins are being secretly generated and to know precisely how many coins exist at a point in time. In Monero’s implementation of RingCT, someone who breaks the discrete logarithm that underpins RingCT can forge coins without anyone knowing it. That being said this is probably only a theoretical possibility as the [discrete logarithm problem](https://en.wikipedia.org/wiki/Discrete_logarithm) is widely used in cryptography and it is expected that discrete logarithms will remain viable until the age of quantum computing. However bugs can also affect this and the lack of supply auditability can complicate detecting hidden inflation. [A bug in Cryptonote that allowed unlimited inflation was indeed discovered](https://www.getmonero.org/2017/05/17/disclosure-of-a-major-bug-in-cryptonote-based-currencies.html) but was patched before anyone could take advantage of it. 

Using an entirely different codebase than Bitcoin also means third parties have to do more work to integrate CryptoNote into their existing ecosystems. Simple Payment Verification (SPV) is also not supported making light wallet implementations problematic. 

Despite these drawbacks, CryptoNote today has proven itself to be one of the better and well-reviewed privacy technologies out there and the only instances where it has been publicly deanonymized arose from improper implementation such as the ShadowCash fiasco or through the use of mixin-0 transaction in Monero which resulted in a cascade effect that [rendered 87% of inputs traceable](https://eprint.iacr.org/2017/338) (subsequently mitigated for newer transactions). However newer techniques in blockchain analysis may greatly reduce Cryptonote's anonymity as it is a ['decoy' based system](https://slideslive.com/38911785/satoshi-has-no-clothes-failures-in-onchain-privacy) which was recently demonstrated in the paper [FloodXMR](https://eprint.iacr.org/2019/455) which shows that a relatively cheap attack can be mounted by flooding transactions to remove mixins from transaction inputs. There is however some ongoing debate as to the cost and efficiency of such techniques.

### Zerocoin and Zcoin

**As used in: Zcoin (prior to April 2019), PIVX (disabled), Veil (Disabled)** 

**Pros:**

*   No need for a mixer
*   Very high anonymity in the many thousands (if not more) with a single mint and spend transaction and completely breaks transaction links between addresses.
*   Retains some degree of supply auditability since amounts are not hidden and coins have to be spent to base layer.
*   Uses well-researched cryptography

**Cons:**

*   **Zerocoin is currently broken due to a [cryptographic flaw in one of its proofs](https://zcoin.io/cryptographic-description-of-zerocoin-attack/).** Although it can be fixed, better implementations such as Sigma and Lelantus will replace it.
*   Proof sizes are currently large (10-25 kB)
*   Requires a trusted setup
*   Incorrect implementation or leakage of trusted setup parameters can lead to forgery of coins.
*   Requires fix denominations
*   Some care is required when doing Zerocoin mints and spends. Users have to keep coins minted before they intend to spend to prevent timing attacks.

We now come to Zerocoin as implemented in Zcoin. Unlike the previous anonymity schemes which involve obscuring the real transactions with other inputs or transactions, the Zerocoin protocol completely breaks the transaction links between coins through the use of zero-knowledge proofs. 

In simple terms, a zero-knowledge proof is a proof you did something or know something without revealing any other information other than you did it. For example, proving that you know a password without actually telling the password. 

Zerocoin works by allowing you to burn coins (otherwise known a Zerocoin mint) and then later redeem an equivalent number of brand new coins (known as a Zerocoin spend). These coins appear with no prior transaction history and are similar to newly mined coins. The zero-knowledge proof is used to prove that you indeed burnt coins without revealing the specific coins that you burnt. Using the proof you are furthermore entitled to redeem an equivalent number of new, clean coins. 

![](/guide/assets/privacy-technology-comparison/zerocoin.png) 

This means that unlike in CoinJoin and CryptoNote where the anonymity set is limited by either the number of participants or the ring size, Zerocoin would provide a larger anonymity set. Your anonymity set is with every other person who has done a Zerocoin mint of a particular denomination. This set is created appended immediately without waiting. This allows the anonymity set to scale into the many thousands with a single Zerocoin mint and spend cycle. Also, the coins truly have their transaction links broken as they appear as completely brand new coins compared to merely being obscured through previous methods. 

This anonymity scheme is not without some drawbacks. In return for the huge anonymity set and breaking of transaction links, Zerocoin requires a one time trusted setup to generate initial parameters. In Zerocoin these are two very large prime numbers that need to be destroyed. Knowledge of these two large prime numbers would allow someone to forge Zerocoin spends and create coins out of thin air. To mitigate this, Zcoin uses parameters from the RSA Factoring Challenge held in 1991 where they took special steps to destroy the prime numbers and had a USD200,000 bounty to successfully factor it for 16 years before the challenge was ended. Till today the RSA-2048 parameters used remain, to the best of our knowledge, unfactored and 2048-bit RSA remains widely used today having stood the test of time and will be practically unbreakable at least until the advent of quantum computing. 

![](/guide/assets/privacy-technology-comparison/rsa-factoring-challenge.png) 

It is worth noting that the knowledge of these two primes or successful factoring will not compromise the anonymity of Zerocoin but will merely allow the forging of coins. Additionally, this is mitigated by the fact that Zcoin’s supply is auditable so the forging of coins can be detected. In fact, due to a bug in the implementation (and not from the breaking of RSA), the forging of coins actually happened to Zcoin but was thankfully detected and stopped. It goes to show how in zero-knowledge proof coins which involve some form of burning and creation of new coins, supply auditability is particularly important. 

It is also worth noting that Bitcoin itself suffered a [hyperinflation bug in 2010](https://en.bitcoin.it/wiki/Value_overflow_incident) allowing 184.4 billion coins to be generated out of thin air which was detected because of supply auditability. As recent as September 2018, [another hyperinflation bug was detected in Bitcoin](https://bitcoinmagazine.com/articles/good-bad-and-ugly-details-one-bitcoins-nastiest-bugs-yet/) but remain unexploited. 

Another limitation of Zerocoin is that fixed denominations need to be used for minting and spending and the zero-knowledge proof sizes for a Zerocoin spend are relatively large at 25 kB (can be reduced to around 10 kB with lowered parameters), comparable to a classic Cryptonote RingCT transaction. Unlike CryptoNote where all transactions are of this size, only Zerocoin spend transactions occupy this amount of space. Normal transactions still occupy the same size as Bitcoin transactions. Compared to other transactions, Zerocoin spend transactions are also computationally intensive to verify, taking about half a second to do so. 

Also, incorrect use or predictable use of Zerocoin mint and spend transactions such as always minting and spending at regular intervals, or doing mints and spends immediately or using the same IP address for a mint and spend can possibly compromise anonymity thus some care is required. It is recommended that users mint coins in reserve before they even want to spend. The longer the coin stays in a minted form, the better the anonymity. This is being alleviated by Zcoin's upcoming GUI which recommends the user to keep a certain percentage of their coins minted. 

Summing up, Zerocoin offers very strong anonymity with a huge anonymity set with no transaction linking but currently requires a trusted setup, additional storage on the blockchain and additional computational resources to verify. Also [a cryptographic flaw discovered by the Zcoin team](https://zcoin.io/cryptographic-description-of-zerocoin-attack/) has rendered Zerocoin in its current form unusable until it is fixed. As Zcoin is moving on with Sigma and Lelantus, no further effort will be expended in fixing Zerocoin.

### [Sigma](https://firo.org/2019/03/20/what-is-sigma.html)

**As used in: Zcoin, NIX** 

**Pros:**

*   No need for a mixer
*   Very high anonymity with anonymity sets of up to around 100,000\. Mint and spend transactions and completely breaks transaction links between addresses.
*   Retains some degree of supply auditability since amounts are not hidden and coins have to be spent to base layer.
*   Uses well-researched cryptography
*   Small proof sizes of around 1.5 kB
*   No trusted setup

**Cons:**

*   Still uses fixed denominations as in Zerocoin
*   Some care is required when doing Sigma mints and spends. Users have to keep coins minted before they intend to spend to prevent timing attacks
*   Difficult to scale past anonymity sets of 100,000 without cryptographic breakthrough

[Sigma](https://firo.org/2019/03/20/what-is-sigma.html) is a privacy protocol developed and pioneered by Zcoin and works very similarly to Zerocoin. It has two key differentiators: it doesn't require trusted setup and its proof sizes are significantly smaller at around 1.5 kB (compared to Zerocoin's 25 kB). 

Sigma is based on the academic paper [One-Out-Of-Many-Proofs: Or How to Leak a Secret and Spend a Coin (Jens Groth and Markulf Kohlweiss)](https://eprint.iacr.org/2014/764.pdf) which replaces RSA accumulators by utilizing Pedersen commitments and other techniques which cryptographic construction does not require trusted setup. The only system parameters required in the Sigma setup are ECC group specifications and the group generators. This construction was further optimized in the paper [Short Accountable Ring Signatures based on DDH (Jonathan Bootle, Andrew Cerulli, Pyrros Chaidos, Essam Ghadafi, Jens Groth and Christophe Petit).](https://eprint.iacr.org/2015/643.pdf) 

Sigma is basically a greatly improved Zerocoin. Its only remaining weaknesses is that it still requires fixed denominations, meaning that it can be easier to discern patterns of mints and spends if one is not careful and anonymity sets are limited to practically around 100,000 before performance degrades. 

![](/guide/assets/privacy-technology-comparison/oneoutofmanyproofs.png)

### [Lelantus](https://firo.org/2019/04/14/lelantus-firo.html)

**As used in: Zcoin (in development)** 

**Pros:**

*   No need for a mixer
*   Very high anonymity with anonymity sets of up to around 100,000\. Mint and spend transactions and completely breaks transaction links between addresses.
*   Uses well-researched cryptography and only requiring DDH cryptographic assumptions
*   Small proof sizes of around 1.5 kB
*   No trusted setup
*   Doesn't use fixed denominations
*   Can do direct anonymous payments without having to convert to base coin.
*   Scalable enough to allow privacy on by default

**Cons:**

*   Difficult to scale past anonymity sets of 100,000 without cryptographic breakthrough
*   Direct anonymous payments in current form require recipient to spend and remint the coin again to prevent the sender from finding out when that coin is spent
*   Still in early development. Zcoin has completed its cryptographic libraries and Sarang Noether from Monero has also completed a proof of concept implementation.

Lelantus further expands on Sigma by removing the requirement for fixed denominations and also allowing for direct anonymous payments that do not reveal amounts. Lelantus is a creation of Zcoin's cryptographer Aram Jivanyan as part of our efforts to continuously improve our privacy protocol and its full paper is available to read [here](https://eprint.iacr.org/2019/373). 

Lelantus retains all the benefits of Sigma of not requiring trusted setup, but removes the remaining weakness of requiring fixed denominations by utilizing double-blinded commitments and a modification of bullet-proofs to hide transaction amounts. Users can burn arbitrary amounts and redeem arbitrary amounts as well making it much harder to tie spends to mints. 

If there is any weakness to Lelantus is that the anonymity set is still limited to about 100,000 before performance makes it impractical to implement however we believe that analysis of such large anonymity sets may prove to be impractical. This anonymity set is still magnitudes higher compared to almost all other privacy mechanisms with the exception of Zerocash with its own set of trade offs (trusted setup, complicated construction, etc) which we will explore further below. 

Direct anonymous payments at the current state of research also require an additional spend and remint step to anonymize the coins from the original coin sender. We are still pursuing further research to improve and scale this  further. 

![](/guide/assets/privacy-technology-comparison/lelantusmint.png) 

![](/guide/assets/privacy-technology-comparison/lelantuspend.png)

## **Zerocash and Zcash**

**As used in: Zcash, Horizen, Komodo** 

**Pros:**

*   Potentially the best anonymity set encompassing all coins minted and breaks transaction links between addresses.
*   Proof sizes are small and fast to verify
*   Hides transaction amounts
*   No need for conversion to a base coin and anonymized coins can be sent directly to each other.

**Cons:**

*   Private transactions are computationally intensive (though much improved with Sapling upgrade)
*   Complicated trusted setup that has to be arranged by the team
*   Incorrect implementation or leakage of trusted setup parameters can lead to forgery of coins.
*   Supply cannot be audited therefore if coins are forged and come out from thin air, they cannot be detected. Bugs of this nature were both found [before launch](https://blog.z.cash/fixing-zcash-vulns/) and also on [live mainnet](https://fortune.com/2019/02/05/zcash-vulnerability-cryptocurrency/).
*   Uses relatively new cryptography and based on cryptographic assumptions (KEA) that have been criticized.
*   Complicated construction and difficult to understand in full meaning that only a handful of people can grasp the cryptography and code and may be prone to errors.

One of the leading privacy schemes is the Zerocash protocol as used in ZCash. Zerocash builds on the work of Zerocoin and seeks to address the perceived shortcomings of Zerocoin. With Zerocash and its use of zkSNARKs, proof sizes are now only 1 kb and are very fast to verify. Furthermore, all transaction amounts are hidden and there is no longer a need to use fixed denominations when doing a minting transaction. Zerocash also allows people to transfer Zerocash’s equivalent of ‘Zerocoins’ to each other without the need to convert back into the base coin. Its anonymity set is also the largest among all previous anonymity schemes involving all minted coins regardless of the denomination on the blockchain. 

A cursory glance at this would make it seem that Zerocash makes Zerocoin obsolete. However, to achieve this, it had to trade off certain benefits that Zerocoin has. 

First of all, Zerocash lacks supply auditability. Like Zerocoin, Zerocash requires a trusted setup, but Zerocash’s setup is much more complicated. Zcash utilized a multi-party ceremony involving six people set up in a way that the only way these parameters could be leaked is if all six in the ceremony colluded to retain the keys. In other words, you have to trust all of these six people that they destroyed the initial parameters and also that the ceremony was carried out correctly. This is a serious enough problem that Zcash is organizing a [new trusted setup ceremony.](https://z.cash.foundation/blog/powers-of-tau/) 

![](/guide/assets/privacy-technology-comparison/grinder.png) 

If there is a bug in the code, or a cryptographic flaw or an issue with the multi-party trusted setup, an attacker can possibly generate unlimited Zcash and unlike in Zerocoin, this additional supply <span style="text-decoration: underline;">**cannot be detected**</span>. Especially in a system that operates on similar principles with Zerocoin that allows the creation of new coins, supply auditability becomes increasingly important. 

Zcash actually had one of these [bugs live on its mainnet from launch until the 28 October 2018, a period of two years, before it was patched](http://fortune.com/2019/02/05/zcash-vulnerability-cryptocurrency/) arising from a [cryptographic flaw](https://z.cash/blog/zcash-counterfeiting-vulnerability-successfully-remediated/). There is no way to tell whether this bug was taken advantage of prior to being patched and there was a gap of 8 months from the time of finding of the bug till it was patched. This wasn't the first time such a bug was discovered. Zerocash early in its development also had the [InternalH Collision Vulnerability](https://blog.z.cash/fixing-zcash-vulns/) which would have allowed forging of coins as well. Although this bug never made it to production, it highlights the potential risks. 

[BTCP, a fork-merge of Zcash and Bitcoin also suffered hidden inflation](https://coinmetrics.io/bitcoin-private/) which went undetected for over almost ten months. This inflation was only detected by examining the UTXO import process when they were importing over the Bitcoin UTXOs. This wasn't due to a flaw in the cryptography but rather a covert premine and it highlights the potential issues of having an unauditable supply. 

We highlight that even a highly vetted project as Bitcoin suffered numerous hyperinflation bugs such as the [value overflow incident](https://en.bitcoin.it/wiki/Value_overflow_incident) and the more recent [CVE-2018-17144](https://bitcoincore.org/en/2018/09/20/notice/). Bitcoin retaining supply auditability allowed these bugs to be detected or to be confirmed that no exploit took place.

Another trade-off is the use of new experimental cryptography called zkSNARKs which are effectively only used in Zerocash. There is a lot less scrutiny on it and therefore is not as battle-tested as RSA which has been in use and reviewed for many years and continues to be widely used. zkSNARKs uses cryptographic assumptions which remain rather experimental. Unlike well established cryptography stalwarts like the [discrete log assumption](https://en.wikipedia.org/wiki/Discrete_logarithm#Algorithms) or [factorization hardness](https://en.wikipedia.org/wiki/Integer_factorization), zkSNARKs security is based on variants of the Knowledge Of Exponent (KEA) assumption for bilinear groups (instantiated via certain pairing-friendly elliptic curves). KEA has not been well researched or deployed and is also [subject to criticism](https://www.iacr.org/cryptodb/archive/2003/CRYPTO/1571/1571.ps).  Some experts believe the cryptography behind [zkSNARKs to be relatively weak](https://petertodd.org/2016/cypherpunk-desert-bus-zcash-trusted-setup-ceremony). 

Zerocash is also highly complex and has been described as 'moon math', meaning that only a handful of people can properly understand and audit it and even can be challenging to spot bugs to its complexity. In fact, with the [Zcash counterfeiting bug](https://z.cash/blog/zcash-counterfeiting-vulnerability-successfully-remediated/), the following was quoted:

*   _Discovery of the vulnerability would have required a high level of technical and cryptographic sophistication that very few people possess._
*   _The vulnerability had existed for years but was undiscovered by numerous expert cryptographers, scientists, third-party auditors, and third-party engineering teams who initiated new projects based upon the Zcash code._

This is effectively '[security through obscurity](https://en.wikipedia.org/wiki/Security_through_obscurity)'. Sigma, Lelantus, RingCT and Mimblewimble constructions in comparison are much easier to understand. 

Another drawback of Zerocash in its original form, the generation of a private transaction takes significantly longer than any of the previous privacy schemes approaching a minute on a powerful computer and much longer on slower systems while requiring several gigabytes of RAM. This resulted in very few people using its privacy features and also may exclude less powerful systems such as mobile devices. Zcash has made substantial improvements on this in their latest Sapling upgrade through the use of new BLS12-381 curves bringing down generation time down to several seconds and requiring around 40 mb of memory making it finally feasible for mobile devices. However compared to other privacy schemes in this article, it still represents the most computationally intensive process. 

So although Zerocash offers potentially the highest anonymity and relatively good performance, it does this at the cost of supply auditability combined with a complicated cryptographic construction, the requirement of trusted setup, the use of new experimental cryptography and computational complexity when creating private transactions. 

The Zcash team is, however, conducting research on zkSTARKs (the replacement to zkSNARKs) which doesn’t require a trusted setup and uses cryptography with simpler cryptographic assumptions. However, to date, zkSTARKS is currently impractical to use due to large proof sizes and also the computational requirements for creation of zkSTARKs remains high. There are also other interesting zkSNARKs variants that have yet to be implemented such as [Sonic](https://eprint.iacr.org/2019/099) and [Spartan](https://eprint.iacr.org/2019/550) that addresses the trusted setup issue in different ways but with its own set of trade-offs that is beyond the scope of this article.

### **Mimblewimble**

**As used in: Grin, Beam** 

**Pros:**

*   All transactions are private
*   Uses well established cryptography
*   Hides transaction amounts
*   Blockchain can reduce in size as it only retains UTXOs
*   No re-use of address problems

**Cons:**

*   Needs interaction between receiver and sender. Cannot post address and receive. Multi party transactions are problematic as all parties need to communicate to create a transaction. Mitigated somewhat with [SBBS](https://github.com/BeamMW/beam/wiki/Secure-bulletin-board-system-(SBBS)) and/or [one side payments](https://github.com/BeamMW/beam/wiki/One-side-payments) which comes at the cost of some privacy.
*   Does not break transaction links, merely obscures them, hence a ['decoy' model](https://slideslive.com/38911785/satoshi-has-no-clothes-failures-in-onchain-privacy).
*   Monitoring the network can reveal details as to how the transactions are joined.
*   If a block doesn't have many transactions, anonymity is significantly reduced since it relies on other transactions to join with. Beam introduces additional decoys outputs if needed if insufficient transactions happen.
*   Cold storage in hardware wallets are tricky to implement
*   Smart contracts are harder on Mimblewimble since no scripting language but some functionality can be done through development in "Scriptless Scripts"
*   Relatively early in development and doesn't share Bitcoin core code making building and integrating it into the infrastructure would need independent development.

Grin and Beam are both implementations of MimbleWimble. Mimblewimble works via two primary methods, by hiding all transaction values and secondly by aggregating all transactions into one big transaction so that in a block, it appears as a giant transaction of many inputs with many outputs. Just looking at it from the blockchain alone, you can only guess which outputs came from which inputs provided that there are a few transactions in the same block. Mimblewimble also allows another feature called cut-through whereby if A pays to B who then pays it entirely to C, the blockchain can record A to C without even showing B. 

An easy way to imagine this is comparing how transactions look like in Bitcoin vs how a transaction looks like once it's aggregated in Mimblewimble. 

Imagine A sends to B and C. In a separate transaction D sends to E and F.  
In Bitcoin this would be seen as  
(Inputs) A > (Outputs) B, C  
(Inputs) D > (Ouputs) E,F 

They would also have transaction values further making them unique. 

In Mimblewimble, all transactions values are hidden and these transactions are aggregated so once the transactions are joined in the block it will look like:

(Inputs) A, D > (Outputs) B, C, E, F

Now it is unclear who sent to who! 
 
![](/guide/assets/privacy-technology-comparison/btcmw.png) 
 
However the big assumption is that no one is monitoring the network as these transactions propagate and before they are recorded onto the blockchain. With vanilla Mimblewimble, someone could create a malicious node that connects to all other nodes in the network and record the transactions before they are combined together thus able to deanonymize the transactions meaning it would have the same privacy as Bitcoin except that addresses are used only once and transaction values are hidden. 


To mitigate this, both Grin and Beam use Dandelion technology which changes the way transactions are propagated. Instead of broadcasting each transaction to all peers, the transaction is first sent through a series of randomly selected peers (stem phase) and only then diffused to the entire network (fluff phase). Each succeeding node rolls a dice to determine whether to continue the stem phase (90% change) or switch to fluff phase (10% chance). While the transactions are in stem phase, they are also joined together with other transactions before being broadcasted widely. This makes it much harder for a node to have a full picture of how the transactions are joined together. It is however not a perfect solution and clues can still be gleaned by the way the transactions are bunched together before they are added to the block. Beam's implementation does make this harder by introducing decoy outputs when needed in the dandelion stem. 

This combined with the fact that  Mimblewimble is also a decoy-based system similar to Cryptonote (although it achieves it using different methods), it still suffers the [same drawbacks as other 'decoy' based privacy systems where repeated transactions can further reduce the anonymity as taint trees still remain](https://slideslive.com/38911785/satoshi-has-no-clothes-failures-in-onchain-privacy). Additionally, if there are not many transactions in a block, this reduces privacy greatly while Beam's implementation of MW attempts to mitigate this by introducing decoys where needed. As explained before, active monitoring of the network can dilute this even further. 

![Image result for mimblewimble transaction](/guide/assets/privacy-technology-comparison/mwtx.png) Example of a transaction graph that can be built by tracing the MimbleWimble transactions. 

A big drawback of MimbleWimble is the need for interaction between the receiver and sender (meaning the receiver and sender need to communicate directly to communicate a blinding factor) and a massively different scheme that does away with addresses. This means you cannot just post an address on a website and have to give a new value all the time. This also complicates multi party transactions, for example A sending money to B, C, D, E in one transaction would require each of these parties to communicate to A before the send can happen. Beam's implementation addresses this through the use of a Secure Bulletin Board system which allows people to post their messages to Beam's full nodes so that the blinding factor can be communicated once the user comes online though further research is required if this compromises privacy. 

Also although there are no addresses, the Pedersen commitments are still unique and therefore on its own MimbleWimble does not hide the transaction graph meaning you can still see how the funds flow, and thus can be considered 'one time' addresses. This means that without the added workarounds of Dandelion and Coinjoin, Mimblewimble's privacy is equivalent to Bitcoin except that addresses are only used once and transaction values are hidden. 

Grin doesn't have a scripting language so implementing smart contracts can be challenging though developments in "Scriptless Scripts" may enable similar functionality for a reduced set. 

With full hidden values, [Mimblewimble doesn't have supply auditability as it relies on Bulletproofs/Confidential Transactions](https://medium.com/@nopara73/confidential-transactions-bulletproofs-the-elephant-in-the-room-cfdb37ce509) to check whether any additional coins have been created out of thin air. However the cryptography behind it is well understood and therefore is not as a huge a problem as with the Zerocash protocol.

## Evaluating Other Privacy Schemes and Why Isn’t My Favorite Privacy Coin Featured in This Article?

All of the blockchain privacy schemes listed here are well reviewed by researchers and the concepts well understood. However, there are many coins in the privacy space but only a handful that really protect it. These are the key factors when coming across a new privacy mechanism:

*   **Does it offer privacy on the blockchain?** Some privacy coins market themselves as providing privacy but completely don't offer any privacy on the blockchain (see also this [article](https://zcoin.io/the-difference-between-privacy-on-the-blockchain-and-hiding-your-ip-address/) on how protecting your IP address/TOR alone is insufficient).
*   **Is the privacy mechanism written by experts and reviewed?** Read to see if their privacy scheme was vetted by cryptographers and has academic papers referencing it! Many are just cooked up by developers or programmers without any history in cryptography or information security. The technologies implementing privacy technology are generally not easy and even world class cryptographers make mistakes.
*   **Is it merely a rebrand of existing technology? **Some projects rename existing privacy schemes with their own names and pass it off as their own. This is acceptable if they disclose the original privacy technology behind it.
*   **Does it involve centralized trust? **If a privacy scheme that relies on you to trust someone else to protect your privacy, it is generally a poor privacy scheme. This covers some pseudo privacy coins that use centralized mixers.
*   **Does the team understand the cryptography behind these schemes? **This is hard to determine unless you're an expert yourself. Check their team to see if there is anyone with cryptography credentials on their team or on their list of advisors.

## Summary

Every anonymity scheme has its own sets of benefits and trade-offs, and we believe that continuous exploration and research of these privacy schemes can only serve to improve blockchain privacy as a whole. We at Zcoin strongly believe that [Sigma](https://firo.org/2019/03/20/what-is-sigma.html) and [Lelantus](https://firo.org/2019/04/14/lelantus-firo.html) compares very favorably to other anonymity schemes by providing a very well-rounded anonymity package, giving very strong anonymity using proven cryptography while remaining scalable and auditable. 

A comparison chart of Zcoin's solutions with other leading privacy technologies can be found below. 

![](/guide/assets/privacy-technology-comparison/comparison-table-coloured.png) 

We hope this article gives you a much better understanding of how various privacy tech works on the blockchain. An earlier version of this article was posted [here](https://steemit.com/zcoin/@zcoinofficial/an-overview-of-blockchain-privacy-mechanisms-and-how-zerocoin-in-zcoin-usdxzc-not-zcash-stacks-up).
