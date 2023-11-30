---
layout: post
title: "Lelantus Spark Binary Release"
summary: "A Groundbreaking Advancement into Privacy"
tags: [news, dev]
author: "Augustus Jong"
img: "/blog/assets/lelantussparkbinaryrelease/banner.png"
---
We're excited to finally announce the official software release of Lelantus Spark, a groundbreaking advancement in privacy on the Firo (FIRO) network. Lelantus Spark builds upon the success of its predecessor, Lelantus, introducing cutting-edge features and enhancements. Let's dive into what makes Lelantus Spark a game-changer, how to get your hands on it, and when you can expect it to be active on the Firo mainnet.

# Mainnet Activation of Lelantus Spark

Lelantus Spark will be activated on Block **819300** (approximately **18 January 2024**). Please ensure you have upgraded your wallets and masternodes to the [latest Firo release](https://github.com/firoorg/firo/releases) before then!

## What is Lelantus Spark?

If you haven't been keeping up with Firo, let's briefly overview Lelantus Spark. Representing the next evolutionary step in Firo's commitment to privacy, Lelantus Spark is a refined and enhanced version of Firo's preceding privacy protocols. Spark combines some of the best privacy technology while remaining trustless, easy to audit, and upgradable. We are also proud that our innovations in Spark have inspired work in creating similar constructions, such as Monero’s upcoming privacy protocol, [Seraphis](https://www.getmonero.org/2021/12/22/what-is-seraphis.html), set to launch in a few years.

Key features include:

1. **Spark Addresses**  
Lelantus Spark introduces a new, non-interactive addressing system that greatly enhances the privacy of the transaction recipient. Funds kept in Spark addresses are hidden, meaning no one will know how much you hold and when you send funds from it—enabling private storage of your Firo. Spark addresses also cannot be looked up on a blockchain explorer!

2. **View Keys for Enhanced Visibility**  
With Lelantus Spark, users have the flexibility of view keys. Wallet owners can grant third parties opt-in visibility into incoming and/or outgoing transactions, offering practical use cases for accounting, auditing, and more.

3. **Computation offloading**  
Lelantus Spark’s flexible key structure allows for offloading transaction creation, chain scanning and balance computation without delegating spend authority. This means that low-powered devices like hardware wallets can support Lelantus Spark transactions by offloading the heavy computation to your PC or phone.

4. **Multisignature**  
Spark supports efficient signing and multisignature operations through the use of a modified Chaum-Pedersen discrete logarithm proof. This has proven useful in custody and decentralized exchanges, as well as in any scenario where you want more than one party to approve a transaction.

5. **Modular design**  
Spark’s modular design uses well-understood cryptographic building blocks like Pedersen commitments, range proofs, zero-knowledge one-of-many proofs, and discrete logarithm equality proofs that enable straightforward security analysis without the need for a trusted setup.

You can read more about Lelantus Spark below: 
Blog Post: [https://firo.org/2021/08/24/presenting-lelantus-spark.html](https://firo.org/2021/08/24/presenting-lelantus-spark.html) 

Eprint: [https://eprint.iacr.org/2021/1173](https://eprint.iacr.org/2021/1173)

## Download Links

You must upgrade your wallets and masternodes before mainnet activation on **Block 819300** (**approximately 18 January 2024**).

Download the binary release from the following links: 

Windows: [https://github.com/firoorg/firo/releases/download/v0.14.13.0/firo-0.14.13.0-win64-setup.exe](https://github.com/firoorg/firo/releases/download/v0.14.13.0/firo-0.14.13.0-win64-setup.exe) 

MacOS: [https://github.com/firoorg/firo/releases/download/v0.14.13.0/firo-0.14.13.0-macos.dmg](https://github.com/firoorg/firo/releases/download/v0.14.13.0/firo-0.14.13.0-macos.dmg) 

Linux: [https://github.com/firoorg/firo/releases/download/v0.14.13.0/firo-0.14.13.0-linux64.tar.gz](https://github.com/firoorg/firo/releases/download/v0.14.13.0/firo-0.14.13.0-linux64.tar.gz)

As always, Be sure to **back up your wallet** before upgrading.

For those using mobile wallets, [Stack Wallet](https://stackwallet.com/) will push an update over the next few weeks to fully support Spark.

## Exchange Addresses
The Firo Core team proposed Exchange Addresses following [discussions about the upcoming MiCA regulations](https://forum.firo.org/t/firo-private-transactions-balancing-with-mica-regulations/3010) and their potential impact on Firo and other privacy assets. The community has largely agreed with this proposal and this release will also introduce Exchange Addresses (EX-addresses). 

EX-addresses operate similarly to transparent addresses, with the distinction that they won't accept Lelantus/Lelantus Spark spends and coinbase transactions (mining and masternode rewards). In essence, EX-addresses exclusively permit funds originating from transparent addresses. You can easily identify EX-addresses as they bear an 'ex' prefix. It's important to note that this feature is designed for exchanges, and regular users will not need to take any action on their end nor would they be creating EX-addresses.

## What’s Next?

Even as we launch Spark, we are already researching upgrades to Spark, such as [curve trees](https://firo.org/2023/05/26/elliptic-curves-research.html) and expanding its functionality with [Spats](https://firo.org/2022/03/07/spats-confidential-assets-lelantus-spark.html)! We will also be implementing [Helsing](https://firo.org/2022/01/28/helsing-private-firo-masternode.html) to allow masternodes to use Spark addresses to hold their collateral.

## Thanks

Spark is the combined work of many talented people and also made possible by everyone's support. 

Firstly we would like to thank Aram Jivanyan and Aaron Feickert (CypherStack) for coming up with this amazing privacy protocol and Levon Petrosyan and Peter Shugalev for bringing Spark to reality.  

We would also like to thank all Firofam that made this possible, from the generous donations from [Arcadia](https://arcadia.agency/) and other community members, [HashCloak](https://hashcloak.com/) for their security support and audits, [CypherStack](https://cypherstack.com/) for playing a key role in our work and building [StackWallet](https://stackwallet.com/) and members of the Monero community including koe, kayabanerve and Nikolas Kratzschmar whose discussions and disclosures helped make Spark better and lastly but not least, everyone of you who have cheered us on and made our work meaningful.

See you on Spark mainnet activation! 

You can stay tuned on these developments by following our socials below: 

[Twitter/X](https://twitter.com/firoorg) 

[Youtube](https://www.youtube.com/@Firoorg) (please subscribe) 

[Blog](https://firo.org/blog/) 

[Facebook](https://www.facebook.com/firoorg) 

[Telegram](https://t.me/firoorg) 

[Discord](https://discord.gg/TGZPRbRT3Y) 

