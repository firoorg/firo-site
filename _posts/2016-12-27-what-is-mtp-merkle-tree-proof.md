---
layout: post
title: "What is MTP (Merkle Tree Proof) and why it is important to Zcoin"
summary: "MTP was created as a way to remedy the disparity between ordinary users and adversaries/cheaters"
tags: [news, dev]
author: "Reuben Yap"
img: ""
alt: ""
---
[![Merkle Tree Proof (MTP) Algorithm in Zcoin
](https://img.youtube.com/vi/DAJirQaBIzYmaxresdefault.jpg)](https://youtu.be/DAJirQaBIzY)

**Update:** This post has been updated as at 24 May 2018 to reflect new developments in MTP and the new memory requirements for our MTP implementation. 

Zcoin is working to be the first cryptocurrency to implement MTP as a proof of work algorithm and work is ongoing. As the foundation of a coin’s security with also fundamental implications as to distribution and also verification speed, implementation of MTP is very high on our list of priorities and in our roadmap. Implementation of MTP is also expected to bring down wallet initialization times due to its fast verification as compared to the current stop gap Lyra2z implementation. 

The MTP algorithm was devised by Alex Biryukov and Dmitry Khovratovich from the University of Luxembourg in their paper published on the 11 June 2016 titled [Egalitarian Computing](https://arxiv.org/pdf/1606.03588v1.pdf). These are the same researchers who came up with Equihash that is currently used in ZCash. 

An updated paper which received funding from Zcoin introduced v.1.2 of the MTP algorithm was released in January 2018 which addressed attack vectors discovered by [academic peer review](https://eprint.iacr.org/2017/497) and also through the [MTP bounty program organized and funded by Zcoin](https://zcoin.io/mtp-audit-and-implementation-bounty/). 

##Egalitarian Computing

MTP was created as a way to remedy the disparity between ordinary users and adversaries/cheaters where the latter could use botnets, GPU, FPGA and ASICS to gain a significant advantage and mount a cheaper attack. The basic concept is that it should establish the same price/cost for a single computation unit on all platforms. This means that no single device should gain a significant advantage over another for the same price hence promoting egalitarian computing. With egalitarian computing, attackers would need to spend the same amount as ordinary users for equivalent ‘hashing’ power. As attackers need to usesimilar hardware as ordinary users, automated large-scale attacks become no longer possible. This combined with the fact hashing in MTP is highly memory intensive, users infected by trojans to participate in botnets would experience noticeable performance degradation and therefore more likely to suspect something is amiss. Botnet resistance is an important feature that was not addressed in previous ASIC resistant algorithms.

Massive centralization can be seen with many existing proof of work algorithms such as SHA256 (Bitcoin), Scrypt (Litecoin, Dogecoin) and X11 (Dash) where hashing power is centralized in ASIC farms and normal users are not incentivised to participate in the security of the network. Even in newer schemes such as Ethash which is used in Ethereum, although it is deliberately designed to be GPU friendly (more than a 100x more efficient than on a CPU), this still encourages GPU farms and centralization. Recently, Bitmain also announced an Ethash ASIC. 

This doesn’t mean that we discourage GPU mining, but with MTP it is foreseen that even with GPUs mining, CPU mining would still remain competitive. 

##Fast and lightweight Verification

MTP although it is computationally and memory intensive to find the solution, once found, its solution can be quickly and efficiently verified without requiring a lot of memory. Our MTP implementation will use 4GB of RAM making it noticeable on many CPUs thus discouraging botnets as it would be noticeable to the user, MTP proofs are designed to support RAM usage up to 8 gb while remaining quick to verify that is not possible with other existing PoW implementations. 

This is important since by keeping verification quick, this makes the network more resistant to DoS attacks that target verifiers. It also allows lightweight hardware such as smartphones to perform verification which is not possible on many other hard memory hard algorithms. Verification speed of MTP is expected to be pretty quick.

Source: [https://www.usenix.org/system/files/conference/usenixsecurity16/sec16\_paper\_biryukov.pdf](https://www.usenix.org/system/files/conference/usenixsecurity16/sec16_paper_biryukov.pdf) There may also be a possibility that as MTP uses merkle-trees, merkle-tree optimizations may be possible and this is an area we are researching into. 

##Progress Free

A mining algorithm should be ‘progress-free’ meaning that mining must be a stochastic process where there is always a non-zero chance that the solution is found and being independent of any previous events. This prevents centralization and mitigates network delays. 

Therefore a mining algorithm with an ‘initialization phase’ is not truly progress-free since the chances of finding a solution when initializing is zero. This is one of the main reasons why Biryukov and Khovratovich decided to develop MTP despite already developing Equihash since Equihash still requires a long initialization phase that certifies the memory allocation and is therefore not ‘progress-free’. Furthermore, Equihash doesn't scale well with higher memory usage. 

It is believed that the shorter an initialization phase, the more decentralized mining can be since everyone starts from an even playing field and economies of scale or network location plays much less a role in mining efficiency.

##Summary

MTP is an amazing new mining algorithm that is high performance, high security and promotes egalitarian computing. Zcoin intends to be the first to implement this and we forsee that MTP will offer good future proofing. Being a privacy centric coin, it is even more important that mining power is decentralized and as such we are focusing on working on the very core of Zcoin’s security first before embarking on other features. We hope to finish MTP implementation in the coming months.