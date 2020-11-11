---
layout: post
title: "Zcoin releases paper on Hierarchical One-out-of-many Proofs"
summary: "We are proud to publish from Zcoin’s research labs a new paper on hierarchical one-out-of-many proofs (HOOOMP) which improves proving time by an order of magnitude"
tags: [news, dev]
author: "Reuben Yap"
img: "/blog/assets/hierarchical-proofs/banner.jpg"
alt: ""
---
We are proud to publish from Zcoin's research labs a new paper on [hierarchical one-out-of-many proofs (HOOOMP)](https://eprint.iacr.org/2020/430) which improves **proving time by an order of magnitude**. [One-out-of-many proofs](https://eprint.iacr.org/2014/764) (which is a type of zk proof) forms the basic building block for Sigma and our very own Lelantus. We are excited that Zcoin's work in creating Lelantus has revived interest in one-out-of-many proofs which is also used in Lelantus-MW  (developed by Beam), Anonymous Zether (developed by Benedict Bunz et al and further extended by JP Morgan), Triptych and Arcturus (both developed in Monero Research Labs). 

One of the open challenges of scaling one-out-of-many proof implementations such as Lelantus for use in larger anonymity sets has been proving time: the time it takes to generate the zero knowledge proof. Proving time increases linearly with the size of the set. For example, for anonymity sets of 262,144, a single Lelantus proof would take around 14 seconds to generate making it not ideal especially not for mobile devices. Using HOOOMP can potentially bring this down to the 1-2 seconds range making larger anonymity sets much more practical. 

HOOOMP's basic concept is that proofs can be arranged into an hierarchy where the knowledge of the secret element opening to zero can be proved for a smaller set,  which in turn is provably a "blinded" version of one out of many subsets of the original bigger set. This allows a search of a smaller set rather than having to go through the entire set. HOOOMP also retains all the efficient batch verification properties of the original one-out-of-many proofs and also like the original, does not require any new cryptographic assumptions or trusted setup. 

![](/blog/assets/hierarchical-proofs/hooompgraph-1024x853.png)

We continue to work hard in pushing the boundaries of privacy technology in blockchain applications and we hope that HOOOMP will continue to expand the possibilities and utility of one-out-of-many proof schemes. The HOOOMP paper can be read on [IACR's Cryptology ePrint archive](https://eprint.iacr.org/2020/430). 

Other Zcoin research papers relating to privacy:

*   [Lelantus: Towards Confidentiality and Anonymity of Blockchain Transactions from Standard Assumptions](https://eprint.iacr.org/2019/373)
*   [Enabling Direct Untraceable Anonymous Payments in the Lelantus Protocol](https://lelantus.io/enabling-untraceable-anonymous-payments.pdf)