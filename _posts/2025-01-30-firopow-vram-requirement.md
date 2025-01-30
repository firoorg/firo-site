---
layout: post
title: "Help Shape Firo’s Mining Future: Weigh In on FiroPoW’s VRAM Requirements"
summary: ""
tags: [community, news, dev]
author: "Reuben Yap"
img: "/blog/assets/firopow_mining.png"
---

Firo’s unique hybrid consensus model relies on both Masternodes and miners to secure our network. Mining remains an essential pillar—especially for those who prefer to acquire Firo without relying on an exchange. Recent developments, however, have prompted discussions about the VRAM requirements for mining Firo. We’d like the community’s input on how to proceed.

## Background: FiroPOW’s Increasing DAG Size

When FiroPOW was introduced in 2021, it began with a VRAM requirement of **4 GB.** From the outset, our mining algorithm was designed to steadily increase its DAG size. The purpose?

1. **Discourage the use of older, dirt-cheap GPUs** that large farms could easily accumulate.

2. **Maintain a level of decentralization** by using relatively modern GPUs.

Since FiroPOW’s launch, the DAG size has continued to grow at approximately **8 MB every 1,300 blocks** (about **2.26 days**). Recently, it **surpassed 7.7 GB**, causing many 8 GB GPUs to fall below the mining threshold due to the GPU overhead.

## Why We Need to Revisit This

* **Evolving GPU Market:** Mid-range GPUs from 2015 typically had 2-4 GB of VRAM, increasing to 4–8 GB in the 2016–2019 period. Even in 2020–2023, many mid-range cards still ship with 6–8 GB. Meanwhile, rumors suggest the upcoming RTX 5060 may only have 8 GB of VRAM.

* **Continued Role of Miners:** Although Firo has a hybrid consensus system, miners still play an important part in securing the network and offering an alternative onramp to Firo ownership. If VRAM requirements climb too high, we risk excluding a broader audience of potential miners—particularly those using mid-range GPUs.

## Balancing Accessibility and Security

On one hand, **increasing the DAG size** reduces the risk of someone acquiring large amounts of outdated GPUs at bargain prices to exploit or attack the network. On the other hand, setting the VRAM requirement too high leaves many loyal miners—and potential new ones—unable to participate.

**Current Options Being Discussed**

1. **Maintain the requirement at around 8GB:**

    * This aligns with most mid-range cards from the past few years.

    * Ensures even upcoming rumored 8GB GPUs can participate.

    * If VRAM trends change significantly, we can revisit in the future.

2. **Lower to just under 6GB and allow it to creep up slowly:**

    * This potentially opens up Firo mining to more people immediately.

    * Still gradually phases out older cards but at a slower rate.

    * Balances concerns about security with broader accessibility.

    * Possibly reduces the need for a future hard-fork when VRAM in GPUs increase

3. **Keep status-quo**

    * Only higher-end cards can mine FIRO

    * Potential reduction in security as less GPUs can participate

    * More rewards for remaining miners who can still mine.


## Have Your Say in Our Forum

We believe community feedback is vital to making the best decision for Firo’s long-term health. We invite you to:

1. **Read the full discussion** on our [official forum post.](https://forum.firo.org/t/poll-what-should-the-vram-requirement-for-mining-firo-be/3877)

2. **Cast your vote** on the solution you think best supports Firo’s vision.

This is a critical moment to weigh in on the direction of our mining infrastructure. Your input will help shape how we balance accessibility with security, ensuring Firo remains both robust and welcoming to new and existing miners.

### Next Steps

*  **Join the Discussion:** Head over to our [forum thread](https://forum.firo.org/t/poll-what-should-the-vram-requirement-for-mining-firo-be/3877) and share your thoughts. Ensure you’re at least Trust Level 1.

* **Vote on Your Preferred Approach:** A simple poll is available for you to vote on locking the VRAM requirement to slightly below 8GB or adjusting it to a slower growth rate starting near 6GB or just maintaining the status quo.

* **Stay Informed:** We will announce any consensus-driven changes and next steps on our official channels.

Thank you for being part of the Firo community. Together, we can chart a path forward that keeps our network secure, decentralized, and accessible to a broad range of miners.
__—The Firo Core Team__

