---
layout: post
title: "A smaller FIRO blockchain: MTP Data Stripping"
summary: "Reducing Firo's Blockchain Size"
tags: [news, dev]
author: "Reuben Yap"
img: "/blog/assets/mtp-data-stripping.png"
---

We have been working on solving one of Firo’s pain points which is the size of the blockchain which currently stands at 60+ GB. A big proportion of this was the MTP proofs in the block header that were needed in our previous mining algorithm to prove that work was done correctly. These proofs occupied 200 kB per block regardless of the number of transactions within it.

Firo has since transitioned fully into [FiroPoW](https://firo.org/2021/10/01/firopow-and-instantsend-release.html) and therefore we have worked out a way to strip these MTP proofs to reduce the amount of space needed to host a full node of Firo. We now have [ready code](https://github.com/firoorg/firo/tree/mtp-data-strip) that we are testing that will allow a new user syncing the blockchain from scratch to strip these MTP data proofs after they are downloaded. On our mainnet blockchain this brings down storage requirements from 60 GB to 3.5 GB, a drop of 17x. Existing nodes can still choose to retain the MTP proofs should they wish. We expect to deploy this in the next couple of weeks. Once this upgrade is complete, old blocks would also be transferred in ‘stripped’ form without the MTP proofs, greatly reducing the amount of data needed to sync Firo’s blockchain.

As we prepare the way for deploying our groundbreaking work in [Lelantus Spark](https://firo.org/2021/08/24/presenting-lelantus-spark.html), one of the goals of Firo’s core team has been to focus on improving the user experience of using Firo. To this end, in the past few months we have deployed InstantSend that allows instant private transactions, FiroPoW which greatly also reduces network bandwidth and storage requirements for nodes and now MTP data stripping. 

We are also close to having Lelantus support with mobile wallets and also are building privacy preserving light wallets and finalizing GUI elements for Elysium, Firo’s tokenization layer. We would like to thank our FiroFam for being a part of the next stage of evolution of Firo in building a cryptocurrency that is private, decentralized and free.
