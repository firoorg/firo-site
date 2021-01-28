---
layout: post
title: "ChainLocks activated on Firo that protects against 51% attacks"
tags: [news, dev, community]
author: Reuben Yap
img: "/blog/assets/chainlocks-activated.png"
alt: ""
---

## ChainLocks activated on Firo that protects against 51% attacks

As of [block 341100](https://explorer.firo.org/block/1ca6cbd9f6e13db8e0e1db0b77f8b1a037b01c69558214bc1ae2ce1f81da4890), [ChainLocks](https://github.com/dashpay/dips/blob/master/dip-0008.md) is now activated on Firo’s mainnet.

ChainLocks utilizes our LLMQ masternode network to provide near-instant finality of blocks once confirmed and finding near-instant consensus on the longest valid/accepted chain. This method of consensus also protects against [51% attacks](https://www.investopedia.com/terms/1/51-attack.asp) while retaining the fair distribution benefits of Proof of Work (PoW).

## Why it’s needed

PoW is an excellent mechanism for ensuring fair distribution especially if mineable using commodity hardware. Anyone can participate in the network and earn a share of the block reward as long as they provide computing power when compared to other distribution mechanisms such as ICOs, pre-sales or even airdrops. It also provides an objective way to evaluate which chain is valid without relying on any external source.

While elegant, PoW isn’t perfect and either boils down to being controlled by ASICs, which are by its very nature exclusionary, or being subject to 51% attacks, where hardware can be rented to attack the network as we have [recently seen on Firo’s network](https://forum.firo.org/t/firo-51-attack-post-mortem-and-vote-on-attackers-funds/1084) and many others.

Another weakness of PoW is that there is never any finality as the chain can always be wound back with sufficient hashpower. This also means that transactions cannot be considered safe until it’s buried under sufficient blocks or confirmations making it cumbersome to use for payments.

## How it Works

ChainLocks solves this by having Firo’s masternode network form quorums that are used to sign and checkpoint blocks. The quorums used in ChainLocks have 400 masternodes per quorum. Several of these quorums exist at any one time and are selected deterministically at each block. Each quorum lasts for around 12 hours and are also constantly being recreated.

Each member of the quorum signs the first valid block it sees extending the active chain at its current height. If >=60% of the members sign a block, it is considered final and no more reorganizations below this block are allowed.

This means that transactions can be considered secure after one confirmed block with ChainLocks. On top of making 51% attacks impossible unless ChainLocks are disabled, it also prevents Selfish Mining attacks from happening as miners are incentivized to publish their blocks as soon as they find it.

## How Secure is the Chain with ChainLocks?

To mount an attack on Firo’s blockchain now would require approximately 50% of all masternodes to be taken over to disable ChainLocks and also the necessary hashrate to mount the 51% attack. As masternodes require 1000 FIRO collateral backing it, an attacker would also need to acquire significant amounts of FIRO to attack (at the time of writing, an attacker would need more than 2,000,000 FIRO).

Further calculations can be found [here](https://github.com/dashpay/dips/blob/master/dip-0008.md#calculations).

## Lelantus 

Lelantus will be reactivated early next week.


## Thanks

We would like to thank our masternode operators, mining pools, miners and exchanges in deploying ChainLocks under such short notice and who form the backbone of our ecosystem.

Last but not least we would like to thank [Dash](https://dash.org) for their innovation in coming up with [LLMQ ChainLocks](https://github.com/dashpay/dips/blob/master/dip-0008.md) and are proud to be the second project to implement it.
