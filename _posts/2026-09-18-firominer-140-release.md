---
layout: post
title: "Firominer 1.4.0 Brings Firo's Reference Miner Back Up to Speed"
summary: "No developer fee, NVIDIA and AMD support, and performance within 1% of closed-source miners."
tags: [community]
author: "Reuben Yap"
img: "/blog/assets/firominer140/banner.png"
---
Firominer 1.4.0 is out. It's our open source FiroPoW miner, and it now mines Firo on both NVIDIA and AMD GPUs within roughly 1% of the performance of popular closed-source miners. It has no developer fee, supports solo mining directly from your own Firo node, and all of its code is on GitHub under the GPL-3.0 license meaning anyone using or modifying this code similarly has to open source their modifications and improvements.

Download it from the [v1.4.0 release page](https://github.com/firoorg/firominer/releases).

## Why We Updated the Reference Miner

Firominer was always meant to be a reference miner: a working, open implementation of FiroPoW that others could take, improve and maintain as their own miners.

Instead, the network ended up relying on a set of closed-source miners. Several of these are no longer maintained. Others still charge fees of up to 2%, even though their FiroPoW support has seen little development, in some cases for years. Miner developers are entitled to charge for their work. Still, it left Firo miners with few options that were both up to date and free to use.

So we took the initiative and brought the reference miner up to date ourselves. We made it competitive on performance and added support for current GPUs and drivers.

In our own testing of 1.4.0 on real hardware, and in reports from community miners, Firominer now comes within about 1% of closed-source alternatives on both NVIDIA (CUDA) and AMD (OpenCL) cards. Those miners charge developer fees of up to 2% of hashing time, while Firominer charges nothing. Once fees are counted, the difference in what reaches your wallet is small, and against the higher-fee miners Firominer comes out ahead.

## Why Open Source Miners Matter

### You Can Check What Runs on Your Rig

A miner runs for days at a time with direct access to your hardware, often on the same machine as your wallet. With Firominer, anyone can read the code, build it from source and confirm it does what it says. Each release also ships with a combined *SHA256SUMS.txt* file, so you can check that the archive you downloaded is the one we published.

### Solo Mining Keeps Firo Decentralized

Firo's network difficulty is low enough that solo mining is a realistic option. Every block you find pays the full reward straight to your own address. Most closed-source FiroPoW miners only support pool mining. With those miners you pay a pool fee on top of the miner's fee, and your hashrate adds to what large pools already control.

Firominer connects directly to your own Firo node and mines on its block template, with no pool in between. Every solo miner adds another independent operator building blocks, which spreads block production more widely. Solo payouts arrive less regularly than pool payouts, but you keep all of each reward. You can also sign the blocks you find with a custom message by applying a small companion patch to the Firo daemon.

### Anyone Can Carry It Forward

Open code doesn't depend on any one team, including ours. Anyone can fork Firominer, improve it and release their own miner under its GPL-3.0 license. That is what a reference miner is for, and we'd welcome other developers building on it.

### It Fits How Firo Is Built

Firo develops its privacy technology in the open, because privacy claims only mean something when people can verify them. A competitive open source miner applies the same approach to the software that secures the network.

## What's Changed Since 1.1.0

If you last used Firominer at 1.1.0, these are the changes that matter most:

- **AMD support is back.** Version 1.1.0 shipped without an AMD build because its OpenCL performance wasn't competitive. 1.4.0 includes an OpenCL package with a reworked OpenCL path that brings AMD cards close to other miners.
- **Current NVIDIA GPUs and drivers.** The CUDA package is built on CUDA 12.9 Update 2, with improved work scheduling. The runtime libraries are included, so you don't need a separate CUDA install. Older Maxwell, Pascal and Volta cards still work on R575 or R580 drivers.
- **Better GPU detection.** An updated OpenCL loader detects current AMD and NVIDIA drivers on Windows. On Linux, more OpenCL runtimes are recognized, including Mesa Rusticl.
- **More reliable pool and solo mining.** Stratum and getwork handling have been hardened, with better reconnection and device recovery. You can also choose between mainnet, testnet, devnet and regtest.
- **Updated, verifiable packages.** Dependencies are current, including OpenSSL 3.5 LTS. Linux and Windows packages come with checksums and list their dependency versions and licenses.
- **Easier start on Windows.** Windows packages include a mine_firo.bat launcher. Edit it with your pool and wallet details, then run it to start mining.

The full list is in the [changelog](https://github.com/firoorg/firominer/blob/main/CHANGELOG.md).

## Getting Started

Download Firominer 1.4.0 from the [release page](https://github.com/firoorg/firominer/releases/tag/v1.4.0). Our [mining guide](https://firo.org/guide/how-to-mine-firo.html) explains how to set it up for pool or solo mining.

## Thank You
 
A big thank you to Zed, Centaurea, Flow666, and Kgiggles for helping us test Firominer 1.4.0. Your feedback and reports were invaluable for this release.

## Help Us Improve It

Run Firominer on your own cards, compare it with what you use now, and tell us how it goes. Benchmarks, bug reports and pull requests are all welcome on [GitHub](https://github.com/firoorg/firominer). If you run a pool, please consider adding Firominer to your setup guides.
