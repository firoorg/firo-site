---
layout: post
title: "Elysium Testnet and GUI"
summary: ""
tags: [news, dev, community]
author: "Reuben Yap"
img: "/blog/assets/elysium-testnet/day-7-firo-gui-elysium.png"
---

Elysium is Firo’s tokenization layer that allows anyone to create their own tokens and enjoy all the privacy advantages of Lelantus technology. It opens the door to private stablecoins and voting tokens. Today we’re happy to open Elysium for testing on our testnet!

We are also in the process of finalising the architecture for bridging assets from other chains into Elysium via decentralised custodians to allow Firo to serve as privacy infrastructure for the entire crypto economy to take advantage of privacy technology that is built directly into the protocol allowing cheap private transactions.

To use Elysium on Testnet, see the instructions below. We are still fine tuning Elysium and appreciate any feedback or bug reports on [our Github.](https://github.com/firoorg/firo/issues)

## Starting the wallet with Elysium on testnet

Windows:

`firo-qt.exe -testnet -elysium`

Linux:

`./firo-qt -testnet -elysium`

MacOS:

`./firo-qt -testnet -elysium`

If you have trouble with MacOS security settings, please modify your **firo.conf** and add **testnet=1**

## Requirements

Please use the [testnet faucet](https://testexplorer.firo.org/faucet) to obtain testnet FIROs. If you require more, please contact Anwar in the public Telegram or Discord channels.

Transparent Elysium operations requires transparent FIRO in the address used while private Elysium operations requires private FIRO. Please anonymise as necessary.

## Guide

A rough guide to Elysium is [available here.](https://gist.github.com/sproxet/a39e152fdbc4e7d552d09bdbba881ad5) A more comprehensive guide is being worked on.

![](/blog/assets/elysium-testnet/elysium-testnet-01.png)

![](/blog/assets/elysium-testnet/elysium-testnet-02.png)
