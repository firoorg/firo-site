---
layout: post
title: "Lelantus academic paper updated"
summary: "We have significantly updated our Lelantus academic paper to contain security proofs for all cryptographic primitives"
tags: [news, dev]
author: "Reuben Yap"
img: "/blog/assets/lelantus-academic-paper-updated/banner.png"
alt: ""
---

We have significantly updated our [Lelantus academic paper](https://zcoin.io/papers/lelantusv2.pdf) to contain security proofs for all cryptographic primitives. The paper also thoroughly analyzes the security of the payment system and provides formal security proofs showing how the Lelantus protocol satisfies the properties of transaction non-malleability, ledger indistinguishability and balance properties. 

The original Lelantus paper used several modifications of cryptographic building blocks such as the modified one-out-of-many proofs for double-blinded commitments and we provided security proofs that these primitives are secure. The revised paper formally discusses and shows the security of the payment system itself including its anonymity and balance properties. We scientifically demonstrate how payment anonymity relies on the soundness and zero-knowledge properties of the modified one-out-of many proofs and how the serial number generation process secures transaction non-malleability. We adopt the same payment system security model used by Zcash to validate their z2z transactions. 

![](/blog/assets/lelantus-academic-paper-updated/oompdb.png) 

It also combines our work on [direct anonymous payments](https://zcoin.io/direct-untraceable-anonymous-lelantus/) with review assistance from Sarang Noether of Monero Research Labs. 

We hope that this revised paper further ensures the security of Lelantus' cryptography and improves clarity of the different cryptographic building blocks. We invite cryptography researchers to give comments and feedback!

Over the next few weeks we will further go into different aspects of Lelantus and also how it compares to the leading blockchain privacy mechanisms!