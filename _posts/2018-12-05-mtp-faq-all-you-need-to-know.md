---
layout: post
title: "MTP FAQ: All You Need to Know"
summary: ""
tags: [news, dev, community]
author: "Sebastian M."
img: "/blog/assets/mtp-faq/banner.jpg"
alt: ""
---

## Q: What do I need to do to get ready for MTP?

Make sure you're updated to the [latest Zcoin release](https://github.com/firoorg/firo/releases) (0.13.7.4) before the 10th December 12:00 GMT. 

**UPDATE: Please update to 0.13.7.5 before December 17th! From this date on only clients with version 0.13.7.5 or higher will be able to connect to the right chain** 

If you're hosting a Znode, make sure [that's updated]({{ site.baseurl }}/guide/masternode-upgrade.html) as well. 

It is recommended to use the latest release which contains important bug fixes along with huge performance improvements and bandwidth savings. 

Although we expect all exchanges to support MTP, if you don't want to have any delays, it is recommended to withdraw your XZC and keep them in wallets that you control.

## Q: What happens if I don't update on time?

If you don't update on time, your wallet balances may be incorrect until you update the Zcoin wallet to a MTP supported release. 

If you're running a Znode, your Znode will fall off the queue and not be entitled to payments until you update to a MTP supported release.

## Q: How can I mine MTP?

When MTP launches, we will have a [CPU](https://github.com/firoorg/cpuminer) and a [GPU](https://github.com/firoorg/ccminer) (nVidia) miner. These are reference implementations and can be fine-tuned. Please refer to the [mining guide](http://zcoin.io/guide-on-how-to-mine-zcoin-xzc/). 

If you want to join the people testing MTP, please join the _#mtp-testers_ channel on our [Discord](https://discordapp.com/invite/4FjnQ2q).

## Q: MTP needs a lot of RAM. Does that mean it’s best to mine with a CPU and as much RAM as I can get?

No. Just because MTP needs a lot of RAM, doesn’t mean more RAM is better. In fact, throwing more RAM at the algorithm does not give you an advantage at all. For our reference miner, MTP needs a fixed 4 GB per thread so with an 8-core processor, you would need 32 GB of RAM (and a little spare for your OS to run) to mine on all cores. Having more than 32 GB of RAM in this case will not be of any benefit. 

We expect as more optimised miners are developed that can share the memory pad, it will be possible for multiple threads to share a common 4 gb memory allocation.

## Q: Which will be the best equipment to mine MTP?

Probably GPUs with at least 4.5 GB of RAM. MTP claims 4 GB of working memory on either a GPU (total vRAM) or CPU (RAM per thread). In our tests, we achieved around 400-500 KH/s on an nVidia 1080ti GPU and 5-6 KH/s per thread on an older Intel i7 4790k CPU.

## Q: Will the Znode system requirements increase with MTP?

Yes. As MTP proofs are around 200 kB each, this means that at least 200 kB of data will be written to the hard disk every 5 minutes. This amounts to about 21 GB of disk space needed per year.

## Q: Where should I keep my coins during the fork? Which exchanges support the fork? How to get free coins?

The short answers are: It doesn’t matter. All of them. There will be no free coins. 

A hard fork is just a software change that’s not backwards compatible. This means new software will not be compatible with old software. If there’s a blockchain involved, people running the old version will form a side chain to the MTP main chain. Being on the side chain, though, is useless as miners will mine on the new chain, exchanges will not support it and so on. So even if you got "free" coins, you couldn’t do anything with them. 

All wallet providers will likely upgrade their wallets to the new version. If you want to be 100% sure, please use our wallet. We will definitely upgrade ?