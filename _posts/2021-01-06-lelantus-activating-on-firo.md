---
layout: post
title: "Lelantus activating on Firo"
tags: [news, dev, community]
author: Reuben Yap
img: "/blog/assets/lelantus-activating-on-firo/banner.png"
alt: ""
---
The activation of Lelantus on Firo’s (formerly Zcoin) mainnet is only a few days away and will occur on block 336888 — approximately 14 January 2021.

Please ensure you’re on the [latest Firo release](https://github.com/firoorg/firo/releases/latest) before then!

Lelantus represents a significant milestone in blockchain privacy, bringing the highest levels of practical privacy without compromising on trustlessness. The zero-knowledge proofs used in Lelantus employ well-established cryptographic assumptions, and don't require trusted setup and use a simple, intuitive construction. 

Lelantus also scales nicely up to anonymity sets of 2^16 (65,536) or more with the utilization of optimizations and batching techniques that bring the average cost of verification of Lelantus proofs down to under 15-50 ms.

![](/guide/assets/privacy-technology-comparison/comparison-table-firo-updated.png) 

Our innovation in expanding [one-out-of-many proofs](https://eprint.iacr.org/2014/764.pdf) to support hidden amounts has opened up a whole new family of privacy protocols such as Triptych by Monero Research Labs and Lelantus-MW by Beam. Our Lelantus protocol has also earned praise among cryptographers and [prominent blockchain privacy developers](https://twitter.com/Narodism/status/1158531433826328576) for its elegant design and high practicality.

To date, audits on our cryptographic library have been performed by [Trail of Bits](https://github.com/trailofbits/publications/blob/master/reviews/zcoin-lelantus-summary.pdf) and the underlying cryptography by [ABDK Consulting,](https://www.abdk.consulting/) with plans to conduct further audits where possible.

## Privacy by default with transparency opt-in

Anonymity loves company. Therefore, the more individuals use privacy features, the more private everyone’s transactions remain! Implementation details are just as important as the underlying technology in securing users’ privacy.

This is why Lelantus marks a significant step in encouraging the use of our privacy technology by prompting users to anonymize their funds and with “on-by-default” privacy that ensures transactions sent by official Firo wallets stays private. Without these prompts, many individuals forget to utilize these features — rendering their transactions less private than intended.

Transparent transactions are still supported but will need to be explicitly selected. This maintains compatibility with existing integrations in our masternode infrastructure, third-party wallets, exchanges, atomic swaps and wrapped solutions. 

Eventually, we intend to phase out the use of transparent transactions. 

## How Lelantus works

Lelantus introduces a burn-and-redeem model, which allows individuals to ‘burn’ coins of any amount, including partial ones. All burnt coins are “placed” in a black box.

To redeem coins from the box, users produce a special receipt (which uses a type of mathematical proof) to prove the fact that you do have coins in the black box without having to show the coins you burned! 

Unlike our previous privacy protocols Zerocoin and Sigma where you had to redeem the amount you burnt in full, Lelantus allows you to do partial redemptions while keeping the remainder in the black box with its amounts hidden.

### For example:
Alice burns 100 coins but wants to redeem only 30 anonymized coins to send to Bob.

### In Zerocoin/Sigma
Alice has to redeem the entire 100 coins first, sending the 30 coins to Bob while the change of 70 is burnt again.
Third parties can narrow down the source of Bob’s coins to everyone else who burnt a 100 coins.

![/blog/assets/lelantus-activating-on-firo/sigma-spend-mint.PNG]() 

### In Lelantus
Alice can redeem 30 coins to Bob’s address while keeping the change of 70 in the black box. Third parties do not know the amount of change and can only narrow it down to everyone else who burnt coins totaling to more than 30 coins which can be also a combination of smaller burns.

![/blog/assets/lelantus-activating-on-firo/lelantus-jsplit-jmint.PNG]() 

## Staying within the black box

We have started implementing the next improvement to Lelantus which will allow users to pass the right to redeem to someone else without revealing its source or amount. 

Instead of having to redeem coins from the black box to do a transaction, you will be able to send your coins from within the black box which offers the highest levels of privacy. This also introduces a new Lelantus address system that will be used for private transactions.

We aim to roll out this improvement sometime this year.

This is thoroughly described in the [latest version of our Lelantus paper](https://eprint.iacr.org/2019/373.pdf) which has been audited by [ABDK Consulting.](https://www.abdk.consulting/)
