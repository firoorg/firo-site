---
layout: post
title: "What you need to know about Deterministic Znodes and LLMQ"
summary: "As we near the release of deterministic Znodes and LLMQ support that comes together with a Bitcoin core upgrade, we wish to prepare Zcoin users and Znode owners on what to expect"
tags: [news, dev, community]
author: "Reuben Yap"
img: "/blog/assets/deterministic-masternodes-llmq.jpg"
alt: ""
---
As we near the release of deterministic Znodes and LLMQ support that comes together with a Bitcoin core upgrade, we wish to prepare Zcoin users and Znode owners on what to expect. We also go into the reasons as to why this upgrade is important to Zcoin's infrastructure.

## What are Deterministic Znodes?

Znodes form an incentivized node infrastructure for Zcoin. Just as miners get paid to secure the network, Znodes are paid to store the blockchain and propagate blocks and provide additional services to the blockchain (more on this later). 

The current Znode system is based off Dash's original masternode infrastructure where every Znode maintained its own Znode list and relied purely on p2p messages that were not tied to the blockchain in any way. As such, there are times where Znodes cannot come to consensus as to what the correct masternode list should look like. This meant enforcing on a consensus level the correct masternode payee sometimes resulted in forks in the network. Dash mitigated this through the use of [sporks](https://docs.dash.org/en/stable/introduction/features.html#sporks) but as sporks in its current form requires the core team to retain a master key to turn on and off certain features, we felt that as useful a feature that would be, it was against the spirit of decentralization. 

Additionally, because Znodes could not reliably reach consensus to the correct Znode list, Znode quorums were limited in size and quite fragile. A more reliable way to determine Znode payee queues and to form quorums is required to properly secure and scale Znodes so that services can properly rely on them. 

Deterministic masternode lists is a [Dash improvement proposal](https://github.com/dashpay/dips/blob/master/dip-0003.md) to resolve these issues. Instead of each Znode maintaining its own Znode list, Znodes are registered on the blockchain via special transactions. Znode rewards are now done deterministically via the on-chain data together with PoSe (Proof of Service) checks that ensures that the Znode is online and responding correctly to be considered as valid. This also means that Znode payments will be a lot more predictable and no longer relying on luck compared to the old system where once you reach the top 10% of the queue, your Znode gets randomly selected for payment. 

Also as these Znode lists can now be in sync across different nodes since they are tied to the blockchain, much larger quorum sizes can be built with Znodes allowing for greater security and decentralization. This brings us to our next topic.

## What are Long-living Masternode Quorums (LLMQ)?

The basic idea of masternode quorums were that a subset of masternodes could be picked pseudo randomly that were then trusted by the rest of the network to perform sensitive tasks. For example in Dash's original implementation this was used to achieve InstantSend which allowed transactions to be locked in a couple of seconds that disallowed conflicting transactions rather than needing to wait for a block confirmation. However the problem with the original masternode quorums were that they did not last very long and did not scale very well. as they only supported a small number of members (10 members). This was because propagating votes to larger member sets would overload the network and storing voting results on-chain would bloat it significantly. 

It was because of this reason and the inherent limitations of the older masternode system that discouraged us from enabling features such as InstantSend until we had deployed Deterministic Znodes and LLMQ. 

[LLMQ](https://github.com/dashpay/dips/blob/master/dip-0006.md) utilises BLS signature schemes that allow much larger masternode quorums (up to 400) to be created. This is because BLS signatures are short, many signatures can be combined into one (space saving) and multi signatures can be achieved with minimum communication (less network overhead). 

The benefit of larger masternode quorums are that it becomes much more costly to attack since you would need to control a much greater number of Znodes to have a chance at influencing quorum decisions. 

LLMQs forms a reliable and trustless way to deploy services such as Chainlocks which protects the chain against 51% mining attacks and  InstantSend which allows almost instant confirmation of transactions. Both these technologies rely on LLMQs for its security.

## When will Chainlocks and InstantSend be activated?

Due to the complexity of this upgrade to Deterministic Znodes and LLMQ without using sporks, Chainlocks and InstantSend will not be activated off the bat to minimize moving parts. We intend to deploy this shortly after a successful deployment.

## What do I need to do if I own an existing Znode?

Once we release the new wallet version, users will have around 3 weeks (6048 blocks) to upgrade to the new wallet software. This will be a mandatory upgrade. The guide to upgrade will be available [here](https://github.com/firoorg/firo/wiki/Migrating-your-Legacy-Znodes-to-the-new-Deterministic-Znodes-system).

**Remember that many scammers will be out to offer help to you to help you migrate so don't accept unsolicited private messages even if it appears from a trusted person (in fact none of the core team members will ever initiate a message to you first). We will also never send out private messages on wallet updates.**

After the 3 weeks have passed, the new deterministic Znodes system will be open for registration. Users will be required to re-register their Znodes using the new deterministic Znode system. During this registration period which will also last 3 weeks, the existing legacy Znodes will continue to operate and payments will still be done using the legacy system. You would not need to move your 1000 XZC Znode collateral. 

After the end of the 3 week registration period, the old Znode system will cease to function and deterministic Znodes will take over the Znode payment system. Even if you have missed the window for the re-registration of your Znode, don't worry, as you will continue to be able to do so. However, we recommend existing Znode owners to do it as soon as they can to avoid missing out on payments.