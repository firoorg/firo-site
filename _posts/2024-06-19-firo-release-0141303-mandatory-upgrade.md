---
layout: post
title: "Firo Release 0.14.13.3 Mandatory Upgrade"
summary: "With performance improvements and features"
tags: [community, news,dev]
author: "Reuben Yap"
img: "/blog/assets/new-firo-release-14133.png"
---

We are proud to release Firo v0.14.13.3 which focuses on improving Spark performance, overall user experience and better Spark light wallet support.

## RPCs for better Spark light wallet support

New RPCs allow for light wallet servers to query the node for Spark state allowing for mobile wallets to recognize Spark transactions in the mempool even before they’re included in a block. It also ensures proper balance calculation in certain edge cases.

We have also added a way for mobile wallets to recognize masternode collateral so that it will ignore it when sending FIRO.

This is in preparation of our new Firo-only mobile wallet release and also a light desktop wallet developed together with Cypher Stack.

## Increase in max transaction relay size

We have [increased the maximum transaction relay size from 100 kB to 250 kB](https://github.com/firoorg/firo/pull/1457) allowing for easier consolidation of UTXOs and Spark minting. Nodes that do not upgrade will not be able to relay these larger transactions.

We have also included various other bug fixes in relation to Lelantus migration to Spark and user interface improvements.

While there is no deadline for upgrading, we recommend you to update as soon as possible. Mining pools and masternodes are encouraged to update immediately to ensure the network will propagate these larger transactions.

## Spark Optimization Improvements

We have various improvements to [Spark batch verification](https://github.com/firoorg/firo/pull/1431) and [Spark transaction processing](https://github.com/firoorg/firo/pull/1417) improving sync times.

## Sending to EX-Address support

With Binance adopting EX-addresses, we have simplified sending to EX-addresses in the UI by recognizing the EX-address and if the funds are in Spark, to do the necessary transition to a transparent address before sending to an EX-address.

[Download v0.14.13.3 now!](https://github.com/firoorg/firo/releases/tag/v0.14.13.3)



