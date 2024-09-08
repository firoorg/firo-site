---
layout: post
title: "Firo Finalized Tokenomics Results"
summary: "The Firofam have voted and spoken."
tags: [community, news, dev]
author: "Reuben Yap"
img: "/blog/assets/finalized-tokenomics-2024/banner.png"
---
Through Firo's governance process, Firo's emission and block reward division has been finalized! A huge thank you  to everyone who voted and shared their thoughts and feedback.

Through several rounds of polls, the community has decided on the implementation of three things to Firo's tokenomics:

* A fixed emission of 6.25 FIRO/block until the cap of 21.4 million FIRO is hit
* A tail emission of 1 FIRO/block thereafter
* A block reward division of 70% Masternodes, 5% Miners, 15% Dev, 10% Community (previously 50% Masternodes, 25% miners, 15% Dev, 10% community)

View the [final poll results](https://forum.firo.org/t/poll-final-tokenomics-and-block-division/3379)

For a more accurate reflection of community sentiment, we employed a system known as [ranked-choice voting or instant run-off](https://www.youtube.com/watch?v=3Y3jE3B8HsE). This system allowed voters to select multiple choices and then rank them in order of preference, ensuring that the final decision better represents the community's preferences.

## Governance

To read through how the Firo community arrived at this decision, you can follow the timeline and links to the relevant discussions below:
* April 2024: Initial discussion about tokenomics. [blog](https://firo.org/2024/04/23/firo-tokenomics-and-halving.html) [forum](https://forum.firo.org/t/firo-tokenomics-discussion-with-upcoming-halving/3162)
* June-July 2024: Polls were held regarding [tail emission](https://forum.firo.org/t/firo-tokenomics-discussion-with-upcoming-halving/3162], the [development and community fund], and [the rate of emission](https://forum.firo.org/t/poll-should-firo-keep-its-halving-schedule-or-should-we-revisit-our-emission-curve/3276)
* July 2024: A [thread](https://forum.firo.org/t/discussion-on-final-poll-options-for-tokenomics-and-block-division/3345) was opened to ensure that the final poll's voting options would cover all options that the community cared about.
* August 2024: [Final polls](https://forum.firo.org/t/poll-final-tokenomics-and-block-division/3379) to vote on the proposed changes.

## Effect of Changes

The primary effect of the changes is to provide improved incentives for masternodes for the next 4 years, recognizing their continued role and unwavering support of the network. Miners will still contribute to the hybrid PoW/masternode consensus mechanism, but while the hashrate adjusts, there may be a period of slow blocks until the difficulty adjusts to the new hashrate. The chain will remain protected against 51% attacks with Firo's [masternode chainlocks](https://firo.org/2021/01/28/chainlocks-activated-mainnet.html). Assuming current masternode numbers are maintained at around 3900+ master nodes, the current returns of a masternode will increase from around 16.5% p.a. to around 22% p.a.

There is also a significant change to the supply schedule of Firo to reflect the existence of developed infrastructure and markets for the distribution of cryptocurrencies compared to the time when Bitcoin was first created. Prior to the change, Firo followed Bitcoin's emission schedule and the block reward would have halved roughly every 4 years with it finally ceasing after it hit 21.4 million. Firo has had a single halving prior to this and was set to have its 2nd halving in mid September 2024. With the new change coming into effect, there will be no more halvings and the existing emission of 6.25 FIRO/block is maintained until the supply of 21.4 million has been fully issued over the next 5-6 years.

After the 21.4 million limit is hit, to ensure a stable monetary supply and a continued stable security subsidy, a fixed tail emission of 1 FIRO/block will continue in perpetuity which works out to be 0.98% inflation rate p.a. at the beginning and over time trends to 0%. To read more about the effects of tail emission and how it leads to a stable monetary supply that is neither inflationary nor deflationary, you can read this [article](https://petertodd.org/2022/surprisingly-tail-emission-is-not-inflationary). There's also strong [academic evidence](https://www.cs.princeton.edu/~arvindn/publications/mining_CCS.pdf) that indicates that having no block reward results in instability in Bitcoin.

To view the effect of changes in tokenomics to Firo's supply over time, we've plotted this graph from the hard fork date of block 958655 (approximately 16 September 2024) over the next 20 years.
[chart]

## Future Direction

The core team is making a firm commitment not to propose further changes to Firo's tokenomics until tail emission is hit. This commitment is aimed at providing stability and certainty to the Firo community, ensuring a secure and confident future.

We will be deploying these changes in release [Firo v.14.14.0](https://github.com/firoorg/firo/releases), as these changes are scheduled to come into force by block 958655 (approximately 16 September 2024). Please ensure you are updated to the [latest version](https://github.com/firoorg/firo/releases) as soon as possible.

In the coming weeks, the core team will also be rolling out an updated roadmap for Firo, laying out development and adoption goals for the next few years. This will also include research into blockchain consensus models that would be secure and sustainable through tail emission and also a renewed focus on increasing awareness and adoption.

Again, we would like to thank the community members who have stood by the project and taking part in governance to guide Firo's future.
