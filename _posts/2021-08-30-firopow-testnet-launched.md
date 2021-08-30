---
layout: post
title: "FiroPoW Testnet Launched"
summary: "FiroPoW is our new mining algorithm targeted at GPUs that keeps mining accessible to everyone"
tags: [news, dev]
author: "Reuben Yap"
img: "/blog/assets/firopow-testnet-launched.png"
---
We have launched our testnet for FiroPoW! FiroPoW is our new mining algorithm targeted at GPUs that keeps mining accessible to everyone.

Firo has always been a strong believer in the power of Proof-of-Work (PoW). PoW enables community building, fair distribution and ties the value of Firo to the physical world with energy. Firo combines PoW with ChainLocks to enable all the benefits of PoW along with immunity against 51% attacks and single confirmation finality.

However many of the benefits of PoW are lost if they are controlled by a few people with access to specialized hardware to mine such as ASICs and FPGAs instead of being available to the average user with easy access to commodity hardware such as GPUs and CPUs.

## The Argument for GPU mining

FiroPoW is a variant of ProgPoW that has been tuned to fit Firo’s requirements. The creators of ProgPoW, IfDefElse, [argued for the importance of mining to remain in the hands of commodity hardware:](https://eips.ethereum.org/EIPS/eip-1057#rationale-for-pow-on-commodity-hardware)

**No natural distribution:** There isn’t an economic purpose for ultra-specialized hardware outside of mining and thus no reason for most people to have it.

**No reserve group:** Thus, there’s no reserve pool of hardware or reserve pool of interested parties to jump in when coin price is volatile and attractive for manipulation.

**High barrier to entry:** Initial miners are those rich enough to invest capital and ecological resources on the unknown experiment a new coin may be. Thus, initial coin distribution through mining will be very limited causing centralized economic bias.

**Delegated centralization vs implementation centralization:** While pool centralization is delegated, hardware monoculture is not: only the limiter buyers of this hardware can participate so there isn’t even the possibility of divesting control on short notice.

**No obvious decentralization of control even with decentralized mining:** Once large custom ASIC makers get into the game, designing back-doored hardware is trivial. ASIC makers have no incentive to be transparent or fair in market participation.

This is why Firo has always kept with its policy of remaining accessible to commodity hardware, first with our work on [MTP](https://arxiv.org/pdf/1606.03588.pdf) and now with our transition to FiroPoW which is more efficient and even more difficult to build specialized machines for.

## Why not CPU mining?

While CPU mining appears on the face of it to be more fair than GPU mining, the wide prevalence of [botnets](https://securityintelligence.com/network-attacks-containing-cryptocurrency-cpu-mining-tools-grow-sixfold/), idle server farms and those utilizing free credits for cloud computing mean that there again are a small group of users with an unfair advantage.

This was experienced by many chains with CPU-friendly mining algorithms including our own in the early days of the project.

## How FiroPoW works

Unlike previous mining algorithms which aimed to raise the cost of building specialized machines, FiroPoW was designed to tailor the algorithm to the hardware so that the GPU becomes the “specialized hardware” and uses as much of the GPU as possible.

The algorithm enforces both memory and compute hard computations which is achieved by:

* leveraging pseudo random access to a Directed Acyclic Graph (DAG) (which is a large and increasing memory file)

* shuffling (in a deterministic way) the order of a series of math operations which receive input data from the DAG itself

FiroPoW adds another trick to the mix which is a random element that means that a part of the algorithm constantly morphs and changes itself every block, making it impossible to build an ASIC with a fixed workflow or a bitstream for FPGAs.

FiroPoW also doesn’t require a large proof unlike MTP which greatly reduces blockchain bloat and network bandwidth requirements.

## What is required to mine FiroPoW?

Upon deployment, FiroPoW will require 4GB+ of RAM which will constantly grow by 8 MB every 1300 blocks (~4.5 days). This maintains the existing balance of GPUs mining Firo and maintains profitability by keeping out outdated cards with 4 GB or less memory that tend to be owned by a small set of large scale miners who purchased them en-masse for dirt cheap.
In short, you need a graphics card with more than 4GB of ram.

## How to get Started with FiroPoW

To connect to our testnet with FiroPoW, build Firo’s binary using [this branch on Github](https://github.com/firoorg/firo/tree/progpow) and run it with the -testnet flag.

We have an [open source reference miner](https://github.com/firoorg/firominer) available and have also contacted several third party miner developers to work on optimized versions of it.

There is also a [testnet mining pool](https://testnet.mintpond.com/#!/firo) online provided courtesy of [MintPond.](https://mintpond.com/)

We plan to launch FiroPoW on Firo’s mainnet in approximately a month to give time for our ecosystem partners to test and prepare for the transition.

## Credits

We would like to thank Kristy Leigh O’Minehan (one of the creators of ProgPoW of which FiroPoW is a variant) and Andrea Lanfranchi for their help, advice and input in implementing FiroPoW and its miner. A very big thank you to JC from [Mintpond](https://mintpond.com/) for provision of a [testnet stratum](https://testnet.mintpond.com/#!/firo) and his work on providing a [reference FiroPoW stratum.](https://github.com/MintPond/ref-stratum-firo) We would also like to thank and acknowledge the help and support received from Blondfrogs, Bigpiggy, Delgon and Greer.
