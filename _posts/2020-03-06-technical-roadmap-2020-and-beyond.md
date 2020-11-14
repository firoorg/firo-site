---
layout: post
title: "Zcoin Technical Roadmap 2020 and beyond"
summary: "We are happy to lay out Zcoin’s plans for the year of 2020 and beyond"
tags: [news, dev, community]
author: "Reuben Yap"
img: "/blog/assets/technical-roadmap-2020-and-beyond/banner.png"
alt: ""
---
We are happy to lay out Zcoin’s plans for the year of 2020 and beyond.

The roadmap information below is being shared in order to outline some of the project’s current plans and best estimates for Zcoin, but like everything else in life, things can change even the best laid plans whether be it due to better solutions arising, community feedback or unforeseen events.

If you have comments on our roadmap, please weigh in on our forums and let your voice be heard!

## 2020 ROADMAP
The Zcoin core team aims to complete the items listed below in 2020.

## Privacy

###  Lelantus

![](/blog/assets/technical-roadmap-2020-and-beyond/01-lelantus.png)

[Lelantus is our next generation privacy protocol](https://firo.org/2019/04/14/lelantus-firo.html) named after the Titan God of air and moving unseen.

It allows users to burn any number of coins and redeem them for brand new coins with no transaction history.

Unlike its predecessors, Sigma or Zerocoin, Lelantus doesn’t require the use of fixed denominations and can burn and redeem arbitrary amounts. This greatly improves privacy as it prevents pattern analysis of the burns and redeems and also improves efficiency. Lelantus achieves this with a relatively simple cryptographic construction making it easier to audit and also does not require a trusted setup.

### Direct Anonymous Transactions

![](/blog/assets/technical-roadmap-2020-and-beyond/02-dap.png)

Lelantus capabilities are further expanded by allowing users to pass the right to redeem brand new coins to third parties. This offers very high levels of privacy as the source of the funds and amounts are completely hidden. This will also introduce a new addressing system for Direct Anonymous Transactions.

### Receiver Address Privacy (RAP)

![](/blog/assets/technical-roadmap-2020-and-beyond/03-rap.png)

Allows for a single address to be shared publicly without loss of privacy or worries on address re-use.

## Znode Infrastructure

### Deterministic Masternodes

![](/blog/assets/technical-roadmap-2020-and-beyond/04-deterministic-masternodes.png)

Greater reliability and certainty of the state of the Znode network and payments by tying them to on-chain data.

### LLMQ (Long lived Masternode Quorums)

![](/blog/assets/technical-roadmap-2020-and-beyond/05-llmq.png)

Uses BLS signature scheme to achieve greater security and scalability of services relying on Znodes such as instant sends and Chainlocks

### ChainLocks

![](/blog/assets/technical-roadmap-2020-and-beyond/06-chainlocks.png)

Provides finality of transactions after first confirmation. Protects against 51% and double spend attacks from miners.

## Tokenization Platform

### Elysium

![](/blog/assets/technical-roadmap-2020-and-beyond/07-elysium.png)

Elysium (previously called Exodus) allows the creation of custom tokens on Zcoin’s blockchain to represent assets or currencies. Elysium tokens will have support of our Sigma privacy protocol along with Dandelion++ routing. Transactions on Elysium will be paid with Zcoin increasing demand for the native token.

Elysium can also be used as a basis for voting applications where Sigma technology can be used to do anonymous but verifiable voting.

### Zcoin Token Manager (ZTM)

![](/blog/assets/technical-roadmap-2020-and-beyond/08-ztm.png)

[ZTM](https://github.com/firoorg/ztm) provides a rich API for to ease the management of tokens on Elysium.

##Revamped Desktop Wallet

### Rich GUI Wallet

![](/blog/assets/technical-roadmap-2020-and-beyond/09-electron-wallet.png)

Our Rich GUI wallet will transition to become the default main wallet as soon as mnemonic support is added along with performance improvements. We are also working on a SPV mode for the GUI to allow fast syncing.

### Swap Capability within Wallet

![](/blog/assets/technical-roadmap-2020-and-beyond/10-inwallet-swap.png)

We are building swap capability within the wallet to anonymously swap other cryptocurrencies in or out of Zcoin.

## Mobile

### Sigma Privacy support in Edge Wallet

![](/blog/assets/technical-roadmap-2020-and-beyond/11-sigma-mobile.png)

We are in the final stages of deploying Sigma support for Zcoin in partnership with Edge wallet. This mobile wallet will be privacy on by default and have support for both IOS and Android. The backend work done for this wallet can be used for our own native wallet or other light/mobile implementations.

## In Discussion/Evaluation

The items below are in discussion and/or are seeking feedback from the community for inclusion.

### PoW Change

![](/blog/assets/technical-roadmap-2020-and-beyond/12-pow-change.png)

[The community is currently evaluating a Proof of Work algorithm](https://forum.zcoin.io/t/should-we-change-pow-algorithm/477) change to replace MTP. ProgPOW, RandomX or an improved MTP are currently leading candidates.

### Block Reward Distribution and Development Funding

![](/blog/assets/technical-roadmap-2020-and-beyond/13-block-reward.png)

[The community is currently deciding on how development should be funded after Zcoin’s block halving.](https://forum.zcoin.io/t/development-community-fund-percentage-after-block-halving/129/) Current community sentiment is on a reasonable extension of developer funding and possibly a portion of the funds going towards community initiatives (possibly via the Zcoin Crowdfunding System).

### Governance

![](/blog/assets/technical-roadmap-2020-and-beyond/14-governance.png)

Discussion with the community is being held to formalize governance of Zcoin whether it be via some form of on-chain governance or informal mechanisms.

### Snowglobe Pre-Consensus

![](/blog/assets/technical-roadmap-2020-and-beyond/15-snowglobe.png)

We are researching into Snowglobe Avalanche-based consensus algorithms to achieve finality within a few seconds and provides protection against reorganization attacks along with high throughput. We plan to evaluate this against masternode instant sends and chain-locks.

## Future / Research
The items below are currently in research phase or coding work has not yet begun.

### Aura

![](/blog/assets/technical-roadmap-2020-and-beyond/16-aura.png)

Aura is the successor privacy protocol to Lelantus. It explores a new hierarchical construction of one-out-of-many proofs which allows for greater performance and privacy. Further innovations are currently underway and will be announced.

### Cross-chain Bridges

![](/blog/assets/technical-roadmap-2020-and-beyond/17-chainbridges.png)

Bridges between Zcoin and other blockchains will allow interaction of Zcoin with other blockchains or smart contract platforms. Blockchains can now do a two-way bridge through Zcoin to create an Elysium equivalent asset to take advantage of our privacy features while maintaining the peg. We are researching ways to leverage the Znode network to perform these interactions.

### Mixnets

![](/blog/assets/technical-roadmap-2020-and-beyond/18-mixnets.png)

Mixnets offer a privacy preserving network layer that can defend against network level surveillance even against state level adversaries.

### Native Lelantus Mobile Wallet

![](/blog/assets/technical-roadmap-2020-and-beyond/19-lelantus-mobile.png)

The libraries we built for the Sigma privacy wallet can be modified to support Lelantus. We aim to build a mobile wallet with full Lelantus support.

### Fast Sync Light Clients

![](/blog/assets/technical-roadmap-2020-and-beyond/20-fastsync.png)

SPV clients, while a lot faster then downloading the entire blockchain, have weaker security and resource intensive. We are researching into alternative approaches such as FlyClient or recursive ZKPs that will allow much greater speed or almost instant syncing in clients.

### Quantum Resistance

![](/blog/assets/technical-roadmap-2020-and-beyond/21-quantum.png)

While the threat of useful quantum computing remains far away, we are researching into quantum resistant schemes of implementing the building blocks of our privacy protocols such as lattice based one-out-of-many proofs.