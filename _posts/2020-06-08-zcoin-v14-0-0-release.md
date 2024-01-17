---
layout: post
title: "Zcoin v14.0.0 Release with Deterministic Znodes and LLMQ"
summary: "This is a mandatory upgrade and a major release"
tags: [news, dev]
author: "Reuben Yap"
img: "/blog/assets/newsoftwarelease.jpg"
alt: ""
---
We are proud to release Zcoin v14.0.0. This is a **mandatory upgrade and a major release** with 14,296 commits touching over 2,831 files since the v13.8.10. **Please update before 22 June 2020.**

##What’s New

*An upgrade to Bitcoin core 14/15 with an improved code structure and vastly improved syncing speeds
*Deterministic Znode Lists
*Long-lived masternode quorums (LLMQ)

This upgrade builds a much more solid codebase and with the move to Deterministic Znodes, ensures a much more reliable Znode network. To find out more about deterministic Znodes and LLMQ, [read here.]({{ site.baseurl }}/2020/05/26/what-you-need-to-know-about-deterministic-masternodes-and-llmq.html)

Issues such as out of sync Znode lists, false alarms of **NEW_START_REQUIRED**, variance in Znode payments and micro chain splits should be a thing of the past.

The launch of Deterministic Znodes and LLMQ also paves the way open for 51% attack protection with Chainlocks and instant sends which will be coming soon.

##What Do I Need to Do?

You will need to update your wallet and/or your Znode to the latest version before **block 278300** (Approximately June 22 2020, 12:00 UTC). This is just a simple step of backing up your wallet first, and then just running the new installation file or replacing your binary.

*Remember that many scammers will be out to offer help to you to help you migrate so don’t accept unsolicited private messages even if it appears from a trusted person (in fact none of the team members will ever initiate a message to you first).
*We will also never send out private messages on wallet updates.
*Always download from our [official Github](https://github.com/firoorg/firo/releases) and not via links provided in chat.
*ASK IN PUBLIC IF YOU’RE UNSURE!

If you own a Znode, you will need to register your Znode with the new Znode system. The system will be open for registration past block **278300**. Attempts to register before this will be met with an error. [The guide to do this is here.](https://github.com/firoorg/firo/wiki/Migrating-your-Legacy-Znodes-to-the-new-Deterministic-Znodes-system)

Existing Znodes will continue to receive payments with the old system until block **284400 (Approximately July 13 2020, 12:00 UTC).** After this point if you have updated and also registered with the new Znode system, your Znode will now receive rewards on the new system with no interruption. If you fail to register your Znode on the new Znode system, your Znode will stop receiving rewards until you register with the new Znode system and you will then re-enter the queue.

##What if I am using a hardware wallet with Znode Tool?

Download the new [Znode-Tool-Evo from here.](https://github.com/firoorg/znode-tool-evo/releases) The Znode Tool migration guide is [available on the Zcoin wiki.](https://github.com/firoorg/firo/wiki/Znode-Tool-migration-guide)

##What if I am using the Electron Rich GUI wallet?

Please download and upgrade to [version 1.1.0 from Github](https://github.com/zcoinofficial/zcoin-client/releases). Follow the migration guide [on the Zcoin wiki.]((https://github.com/firoorg/firo/wiki/Migrating-your-Legacy-Znodes-to-the-new-Deterministic-Znodes-system))