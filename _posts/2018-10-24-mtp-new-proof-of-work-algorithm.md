---
layout: post
title: "MTP – Zcoin's New Proof-of-Work Algorithm"
summary: "Today we are announcing the release of MTP, our new Proof-of-Work algorithm"
tags: [news, dev]
author: "Reuben Yap"
img: "/blog/assets/mtp-new-proof-of-work-algorithm.png"
alt: ""
---
Today we are announcing the release of MTP, our new Proof-of-Work algorithm which will activate on the **10th December 2018.**

MTP stands for Merkle Tree Proof. Based on an academic paper, it provides what the researchers call “egalitarian computing.” The idea behind egalitarian computing is to level the playing field between people with lots of computing power (i.e., large-scale mining farms) and those with little power (i.e., home miners). In other words, **Mining for The People.**

Cryptocurrency mining today is dominated by a few large players. Through the use of [application-specific integrated circuits (ASICs)](https://medium.com/@zcoin/zcoins-stance-on-the-asic-resistance-arms-war-224854f2dd19), specialized mining equipment can be 30,000x more efficient than a standard laptop computer. This centralizes power in the hands of a few big players, especially those who can manufacture these ASICs in bulk. With MTP, we are making a statement for decentralization and also allowing home miners anywhere in the world to earn some Zcoin through mining, ensuring better distribution.

MTP is designed to make intensive use of memory. This both increases the cost of ASIC development significantly and uses memory bottlenecks to reduce the ASICs advantage. The theory is that even if ASICs are developed, the gain from ASICs can still be matched well with commodity hardware. Another advantage of intensive RAM usage is that it would likely alert a user who got infected with malware and is now mining against their will as part of a botnet as is common with CPU-friendly coins.

Development of MTP originally began in 2017. After researchers had [found issues in the original paper](https://eprint.iacr.org/2017/497), Zcoin launched [several bounties](https://zcoin.io/mtp-audit-and-implementation-bounty/) to address both issues at the theoretical level as well as in the implementation. The original researchers successively addressed the first version’s issues including further enhancements with their revised paper partially funded by Zcoin and published in January 2018. Zcoin released the first public version of MTP on their testnet in May. Since then it has been tested and refined in collaboration with several committed members of our community.

Today, MTP is ready for prime time! After more than a year of ups and downs, we are more than happy to release version 0.13.7.1! Note that activation of MTP and the accompanying block time reduction to 5 minutes requires a hard fork. You can read all about the technical side of this update here.