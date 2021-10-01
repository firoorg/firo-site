---
layout: post
title: "New mandatory update Firo v0.14.9.0"
summary: "Hard Fork scheduled October 26th. FiroPoW and Instant Send."
tags: [news, dev, community]
author: "Reuben Yap"
img: "/blog/assets/development-update-firo.png"
---
We are proud to announce the release of **Firo v0.14.9.0** that will enable FiroPoW and Instant Send. This is a **mandatory update** that will come into force on mainnet on **October 26th, 6:00 UTC** so you must [update your wallet and nodes to v0.14.9.0](https://firo.org/get-firo/download/) prior to this date for a seamless transition.

## What is FiroPoW

FiroPoW is Firo's new mining algorithm that will replace Firo’s current mining algorithm: MTP (Merkle Tree Proof). It is highly optimized for GPU mining and designed to be both FPGA and ASIC resistant to even the playing field and allow people to mine from their own consumer hardware. We have always been big fans of Proof of Work’s ability to tie the value of a virtual currency to the real world along with a way to distribute Firo’s supply in a fair and decentralized manner free from restrictions.

FiroPoW follows [ProgPoW’s 0.9.4 spec](https://github.com/ifdefelse/ProgPOW) with a small change to have the algorithm randomly change with every block. The starting DAG size will be slightly over 4GB and will increase by 8MB every 1300 blocks (~4.5 days). This DAG size has been chosen to support most modern graphics cards.

FiroPoW blocks (excluding transactions) are ~500x smaller than MTP which greatly reduces blockchain bloat and network bandwidth requirements. The gap between Nvidia and AMD graphics cards is also narrowed allowing more users to mine competitively.

We will be releasing updated guides to mine Firo using the new FiroPoW algorithm and expect wide third party miner support and pools. We would like to thank everyone who has supported Firo’s ecosystem on this.

## What is Instant Send?

Instant Send allows transactions to be safely considered final within seconds even without waiting for block confirmation. Combined with ChainLocks technology which makes blocks final with a single confirmation, it allows Firo to be used as a currency for even real life transactions. Both these technologies utilize Firo’s masternode network’s quorums.

Once Firo reaches **block 421150**, Instant Send transactions will be default for all wallet transactions including Lelantus transactions and we will be working with ecosystem players such as exchanges to allow for fast recognition of Firo deposits.

## What’s Next?

FiroPoW is a significant improvement that reinforces our commitment to making Firo mineable with consumer hardware and levelling the playing field. It also greatly improves Firo’s scalability by reducing storage and network requirements. 

InstantSend greatly improves functionality as a currency and the user experience of Firo by reducing the time needed to wait before a transaction is considered final to a couple of seconds.

We believe privacy technology goes hand in hand with a good user experience and we’ll be working hard on this with native mobile wallets and fast sync wallets coming soon.
