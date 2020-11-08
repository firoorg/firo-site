---
layout: post
title: "Lelantus: Firo's next gen privacy protocol"
summary: "We are proud to present Lelantus; the result of Firo's research with our cryptography advisor, Aram Jivanyan, with the assistance of Martun Karapetyan and Levon Petrosyan."
tags: [news, dev]
author: Reuben Yap
img: "/blog/assets/lelantus-firo/lelantus-firo-poramin.jpg"
alt: ""
---

**Updated on 16 July 2019** with new performance numbers, updated comparison chart and Aram's presentation at Monerokon.

Technology never stands still; especially not in the blockchain privacy space. In a few years, the industry has moved from simple mixing solutions like Coinjoin, to more advanced cryptographic implementations like ring-signatures, Zerocoin (as used by Zcoin) and Zerocash (as used in Zcash).

The tools that de-anonymise blockchains have also grown more sophisticated. Blockchain analysis is now widely available, and well-respected researchers such as Ian Miers believe that ['decoy based' systems such as Ring Signatures (as used in Monero) and Mimblewimble (as used in Grin or Beam) can be deanonymized especially when there are repeat transactions.](https://www.youtube.com/watch?v=9s3EbSKDA3o)

While Zerocoin offered very good anonymity, it suffered from three main issues:

* **Fixed denominations**

You had to burn and redeem Zerocoins in fixed denominations. If you burnt 10 Zcoins, you would have to redeem 10 Zcoins as well. This greatly limited usability, and restricted anonymity to within the group using the same denomination. It also created a problem with change: how could you send fewer Zcoin than the smallest denomination. Other projects gave the change to miners' fees and reminted any other balance, but this is not ideal performance-wise and adds a lot of overheads.

* **Performance**

If Zcoin were to reach the current volume of Bitcoin transactions, Zerocoin performance would still be adequate. Proof sizes are relatively large at 25 kb, though they can be reduced to 10 kb with less security. Verification (the time a node takes to check a proof's validity) is slow at around 300-400 ms per proof, though it can be sped up with higher powered Znodes. However, performance numbers are insufficient if were to move to a ‘privacy on by default’ model. We need better performance for wide-scale adoption.

* **Trusted Setup**

A trusted setup is a feature of both Zerocoin and Zerocash systems. It requires certain parameters to be generated, then destroyed. If not destroyed correctly, it allows someone to create coins out of thin air. While [Zcoin uses parameters from a 20 year old academic factoring challenge which reduces the chances of a backdoor,](https://zcoin.io/zcoin-moving-beyond-trusted-setup-in-zerocoin/) it is still an undesirable possibility which reduces trust in the system.

We have previously teased Sigma (set to go live soon) which has smaller proof sizes and no trusted setup, but it still did not address the fixed denominations issue.

We are therefore proud to present [Lelantus](https://eprint.iacr.org/2019/373); the result of Zcoin's research with our cryptography advisor, Aram Jivanyan, with the assistance of Martun Karapetyan and Levon Petrosyan.

## Greater Ease of Use

Lelantus builds on from Sigma, and allows users to burn any amount which they can then redeem any partial amount from, while keeping the rest in a burnt state.

With traditional Zerocoin or Sigma, the most efficient way to privately spend 153 coins would require 100 + 50 + 1 + 1 + 1 coins: meaning that you would need a minimum of 5 Zerocoin spends, occupying 125 kB of space. With each spend taking 300ms to verify, that’s around 1500ms of verification time. This also assumes that you had these Zerocoin mints to begin with: most users require more Zerocoin spends if they don’t have the ideal mint denominations on hand.

With Lelantus, this is greatly improved. To achieve the same private spend of 153 coins, a user simply has to use any of the mints they have done before - any arbitrary amount - and do a spend. The minimum number of spends now required is just one, and verification would take between 20 and 30 ms with batch verification, or 300 - 400 ms for a single proof.

Lelantus proofs are only 1.5 kB, so the entire transaction would take a fraction of the power the original Zerocoin protocol required.

![](/blog/assets/lelantus-firo/lelantus-firo-mint.webp)

![](/blog/assets/lelantus-firo/lelantus-firo-spend.webp)

## Better Privacy

Zerocoin's anonymity set per transaction is based on the number of mints in each denomination. When minting and spending 1 Zcoin, the anonymity set is based off the other 1 Zcoin mints - not the 10, 25, 50 or 100 denominations.

From our observation, certain mint denominations, like 25 and 50, are used less than others, which reduces their anonymity.

Furthermore, as you always have to fully redeem Zerocoins, meaning if you burn 10 you always have to redeem 10, there are timing attacks where you can guess which redemption corresponds with which burn especially if there is a pattern to them.

With Lelantus, there are no longer separate sets of mints for each denomination: all mints are in a single set. This eradicates the worry that certain denominations may be more private than others.

With Zerocoin, there has been the issue of 'tainted change,' where an amount smaller than the smallest denomination cannot be minted, therefore it can deanonymize the user. Being able to spend exact amounts with Lelantus means all 'change' is left in a minted state, so users need not worry about this.

## Privacy On by Default

When privacy is opt-in, few people choose to do so, to avoid the additional steps to make a private transaction. This can reduce the anonymity of the system as fewer people using the feature makes it easier to de-anonymise those users. We are therefore aiming to have privacy on by default with Lelantus.

Lelantus offers privacy on by default, whilst offering opt-out privacy to remain easy to integrate with exchanges and other wallets that offer regular transactions.

## Better Performance

Besides proof sizes, verification time has been effectively brought down with batch verification.

Lelantus proofs, based off Sigma, take 200 ms to verify per proof, which is significantly faster than Zerocoin. However with batch verification, where proofs are verified simultaneously together, with an anonymity set of 32,384, verifying 100 proofs takes around 2368 ms.

This means the cost of verifying a single proof is only 23.7 ms when using batch verification techniques. We utilize multi exponentiation tricks such as Pippenger's and Straus techniques to improve this as well.

![](/blog/assets/lelantus-firo/lelantus-firo-benchmark.webp)

## The Competition

The chart below illustrates how Lelantus compares to other leading privacy schemes.

![](/blog/assets/lelantus-firo/lelantus-firo-comparison.webp)

As you can see, Lelantus performs very well in all measures; offering a high degree of anonymity, good performance and low proof sizes, without relying on experimental cryptography. We believe that Lelantus offers the most rounded privacy protocol available today.

We expect Lelantus to be ready sometime in late 2019 or early 2020 as we wait for further peer review of the Lelantus paper. Sigma will be deployed in the interim in Q2 2019.

The full academic paper is available at Eprint though we expect further improvements to be made.

We would like to thank Jens Groth, Benedikt Bunz, Ariel Gabizon, Sarang Noether and Markulf Kohlweiss who provided invaluable feedback on Lelantus.

You can check out some of our videos on Lelantus below:

[![MoneroKon 2019 - Lelantus: New Protocol for Private Transactions with Hidden Origins and Amounts](https://img.youtube.com/vi/gb53Fe2iuqg/maxresdefault.jpg)](https://www.youtube.com/watch?v=gb53Fe2iuqg)

[![Zcoin presenting Lelantus at Zero Knowledge Summit 3](https://img.youtube.com/vi/uS6JGBRcX-c/maxresdefault.jpg)](https://youtu.be/uS6JGBRcX-c)

[![Zcoin's upcoming privacy protocols: Sigma and Lelantus](https://img.youtube.com/vi/HSf8bqC0Pcw/maxresdefault.jpg)](https://youtu.be/HSf8bqC0Pcw)