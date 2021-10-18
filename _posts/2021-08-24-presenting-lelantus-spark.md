---
layout: post
title: "Presenting Lelantus Spark, Firo’s Flexible New Privacy Protocol"
summary: "Firo unveils a protocol that introduces several new privacy-preserving features."
tags: [news, dev]
author: "Reuben Yap"
img: "/blog/assets/unveiling-lelantus-spark.png"
---

**Update:** Lelantus paper is now available on IACR eprint with full security proofs. Read here: [https://eprint.iacr.org/2021/1173](https://eprint.iacr.org/2021/1173)

Privacy is about consent, and Firo protocols aim to provide users with clear and consistent transaction privacy. With past protocols, we have always sought to create innovative methods for protecting data and preventing prying eyes from monitoring spending patterns.

That’s why we would like to introduce our new privacy protocol that we’ve been working on: **Lelantus Spark.**

Spark is a natural evolution of our work in [Lelantus v1/v2](https://eprint.iacr.org/2019/373) and retains many key benefits including:

* No trusted setup

* Straightforward construction

* Relies on well established cryptographic assumptions

* Efficient with support for batch verification

More importantly, Spark introduces several exciting new privacy-preserving features such as:

* Spark addresses;

* Efficient multisignature Operations;

* Incoming and full view keys;

* Modular design

[View Lelantus Spark's preprint paper.](https://eprint.iacr.org/2021/1173)

## Spark Addresses

Lelantus Spark introduces a new, non-interactive addressing system that greatly enhances the privacy of the recipient of the transaction. Funds kept in Spark addresses are hidden, meaning no one will know how much you hold and when you send funds from it—enabling private storage of your Firo. 

Previously, publicly shared addresses could be directly searched on a blockchain explorer and anyone could see when it received a payment. Even with hidden amounts and a hidden sender, the fact that someone has received a payment at a particular time is leaked. To mitigate this, users were recommended to always share new addresses for every single payment, which is a cumbersome process.

Spark addresses solves this by allowing people to publicly share their address without it being searchable on the blockchain! Spark addresses instead automatically allows senders to generate one-time addresses on behalf of the recipient, which then designates who can spend the funds in the transaction. Additionally, third parties then are unable to easily link the recipient’s wallet address to a transaction on the blockchain without the assistance of additional external information.

Currently with Lelantus v1, users are required to anonymize any funds received, a function that has to be done manually and requires the private key. 

With Spark, users can send Firo from transparent addresses directly into Spark addresses. Spark addresses greatly simplify anonymizing funds and makes Spark-only wallets a lot simpler, greatly enhancing privacy. 

We are also in the midst of discussions with exchanges to allow withdrawals directly to Spark addresses. It is our hope that Spark addresses will become the default way people use Firo.


## Multisignature

Multisignature operations enable multiple mutually non-trusting parties to cooperatively generate, receive and authorize transactions associated with a multisig address.

Spark supports efficient signing and multisignature operations through the use of a modified Chaum-Pedersen discrete logarithm proof. This has proven useful in custody and decentralized exchanges, as well as any scenarios where you want more than one party approving a transaction.

## View Keys

Spark allows incoming and full view keys that provide flexibility in transaction visibility. With view keys, wallet owners can grant third parties opt-in visibility into incoming and/or outgoing transactions to their wallet addresses.

This feature offers several practical use cases for individuals, organizations and charities:

* Balances can be determined for accounting and auditing purposes

* Offloaded scan services can be used on online and mobile wallets

* Benefactors can view balances and transaction values

As we gradually transition away from transparent addresses, this feature will become more important.

## Computation offloading

Lelantus Spark’s flexible key structure allows for offloading transaction creation, chain scanning and balance computation without delegating spend authority. This means that low-powered devices like hardware wallets can support Lelantus Spark transactions by offloading the heavy computation to your PC or phone.

## Modular design and time tested building blocks

Spark's modular design uses well-understood cryptographic building blocks like Pedersen commitments, range proofs, zero-knowledge one-of-many proofs, and discrete logarithm equality proofs that enable straightforward security analysis without the need for trusted setup processes.

[Watch Firo’s Aram Jivanyan and Cypher Stack’s Aaron Feickert discuss Lelantus Spark’s advantages (Youtube link)](https://www.youtube.com/watch?app=desktop&v=vEZC1fTYRZk)

## How is this different from other privacy protocols?

The Ring-CT based protocol currently used in Monero practically limits sender anonymity due to space and time scaling of its underlying signature scheme. Triptych, which was inspired by our work on Lelantus and a frontrunner for scaling ring sizes in Monero, has a complex and cumbersome multisignature process. Both schemes lack full view key support and only support incoming view keys.

The Sprout and Sapling protocols supported by Zcash (and their currently deployed related updates) while offering the highest levels of theoretical anonymity sets, require trusted parameter generation to bootstrap their circuit-based proving systems. It also has huge code size and complexity while relying on more complicated assumptions.

The Mimblewimble-based construction used as the basis of Grin can leak graph information prior to a merging operation performed by miners though the protocol in Beam utilizes an opt-in Lelantus-MW and additional decoys as a mitigation. Addressing in Mimblewimble constructions remains problematic either relying on interaction between sender and receiver or one-time vouchers which cannot be reused.

We believe Lelantus Spark represents a holistic balance of high anonymity, simplicity and flexibility and offers a compelling alternative to existing cryptocurrency privacy protocols.

## What’s next?

We will be continuing to work on the Lelantus Spark paper and will be finalizing protocol security proofs in the coming weeks before posting it to the IACR preprint archive.

We are also exploring other useful functionality related to payment proofs, improved addressing, and protocol transitions that are relevant to Spark.

We expect to begin coding certain components of Lelantus Spark in Q4 2021, with an estimated release in Q2 2022 to give time for audits. This means that Firo will be skipping implementation of Lelantus v2 in favor of Lelantus Spark.

## Credits

We’d like to give Aram Jivanyan (Firo) and Dr. Aaron Feickert (Cypher Stack) special recognition for their hard work in creating and developing Lelantus Spark. We also would like to thank pseudonymous researcher koe for his helpful collaboration and discussion during the initial design process for Spark. We’re proud of their accomplishments and are thrilled to build a new protocol that furthers Firo’s mission of offering privacy-preserving solutions. 

We hope that Lelantus Spark is a useful contribution to the ecosystem and welcome feedback from research and development communities!