---
layout: post
title: "You've Heard About Zcash. Let Me Tell You About Firo."
summary: "Reuben Yap shares the story behind nearly ten years of privacy research, community, and what makes Firo worth knowing"
tags: [community]
author: "Reuben Yap"
img: "/blog/assets/meet-firo/banner.png"
---
*By Reuben Yap, Co-Founder of Firo*

I've been happy to see the renewed interest in Zcash. Financial privacy needs more people paying attention, and Zcash has done a great deal to bring people into this space. Its researchers have made important contributions to zero-knowledge cryptography, including Halo and the work that removed the need for a trusted setup in its newer shielded transaction system. That work deserves recognition.

It has also made me want to tell a little more of Firo's story.

I've spent much of the past decade helping build this project. Naturally, I care about it. But what keeps me interested is more than the time I've put in. It's the research we've contributed, the things people can already do with Firo, and the people who have kept showing up to make it better.

Some of that is easy to miss from outside our community. You might recognise the name without knowing much about what we've built. You might remember us as Zcoin and not have looked at the project for years.

So this is an invitation to take another look. There is room to appreciate Zcash and be interested in Firo too.

## Nearly Ten Years of Figuring Things Out

We launched as Zcoin in 2016, implementing the Zerocoin privacy protocol. The original academic work wasn't ours, and its researchers deserve that credit. Our contribution began with putting it into practice and then working through its limitations.

One of those limitations was the trusted setup. In July 2019, we deployed Sigma, helping pioneer the practical use of zero-knowledge privacy without a trusted setup in a live cryptocurrency. Lelantus followed, moving beyond fixed denominations to allow arbitrary amounts and partial redemptions. Each step addressed something that had made private money harder to use.

Lelantus Spark brought that work together with sender, receiver and amount privacy for Spark-to-Spark transactions, reusable private addresses and view keys for selective disclosure. It retains the no-trusted-setup approach, using a modular collection of purpose-built proofs. Spark went live in January 2024 after years of development and independent cryptographic and implementation reviews.

Those protocol names represent a lot of patient work. Looking back, I'm proud that we forged our own path. We kept asking what needed to improve and were willing to do the research to get there.

It has been especially rewarding to see that research become useful elsewhere. Beam's Lelantus-MW adapts Lelantus to its Mimblewimble design. The Seraphis research developed for Monero also drew on Spark's membership-proof construction and security argument. These are independent projects with their own contributions, but there is a connection to work done at Firo.

For a relatively small project, that means a lot to us. It means the work has value beyond the people who happen to hold our coin.

## What That Work Looks Like When You Use It

Most people shouldn't need to understand a proof system to make a payment. They want to send money, know that it has arrived and avoid exposing their financial life in the process.

That is why we have spent time on the things around the privacy protocol too.

Firo's hybrid security model combines proof-of-work mining with collateralised masternode quorums adopted and modified from Dash. Since 2021, ChainLocks has provided near-instant finality once a newly mined block receives its quorum signature. InstantSend handles the earlier part of the payment, locking transactions within seconds before the next block arrives. Together, they make private payments much more practical.

We benefited from Dash's work on these technologies, and its developers deserve credit. Over the years, I've also kept sharing what we were building with Joel Valenzuela. Seeing Firo combine strong privacy with instant payments helped encourage his push for Dash to take privacy more seriously.

I'm glad the influence has gone both ways. Those relationships matter, and I would rather see good ideas travel between projects than have every development become a competition.

Spark Names address another everyday frustration: long payment addresses. You can share a readable name that resolves to a private Spark address without giving people a searchable record of your payments or balance. A payment name can be public without making your finances public.

We were the first project to go live with Dandelion++, which works behind the scenes, making it harder for network observers to trace a transaction's broadcast back to its originating node. It complements the information protected on-chain by Spark.

We have also taken accessible mining seriously. For most of Firo's block-reward distribution to date, mining has remained free of known ASICs. That gave people a way to participate as the currency was being distributed without needing access to specialised mining machines. FiroPoW continues that effort with a design optimised for commodity GPUs and resistance to ASICs and FPGAs. We even recently [updated our reference FiroPoW miner](https://firo.org/2026/09/18/firominer-140-release.html), giving the community a competitive and open source miner with no dev fee.

For me, these choices belong together. Privacy matters, but so does whether a payment is convenient, whether it settles quickly and whether ordinary people can participate in the network.

## The People Who Have Kept Us Here

When I think about why Firo is still here, I think about people as much as protocols.

We had early angel investors, including Roger Ver, who helped get the project started. But we have not depended on institutional venture-capital funding. Development has been sustained primarily through a share of the block reward and donations from people who believe financial privacy is worth supporting.

First of all I want to thank Poramin, the guy who started it all with a crazy idea and trusted me to steward the project all these years while quietly supporting us behind the scenes.

I also want to thank our team, who have worked tirelessly to get us here. I'm often the person talking publicly about Firo, but the work I get to talk about comes from people who have spent years researching, building, testing and solving problems most users will never see. They deserve more recognition than they get. I'm grateful for the care they put into this project, and proud to work alongside them.

We have also been fortunate to have the support of **Cypher Stack, Power Up Privacy and Arcadia**. Their support has helped keep us running and allowed important work to continue through difficult periods. I don't take any of that for granted.

Most importantly, thank you to our community.

That includes the people who have donated, but also those who contribute code, test releases, run infrastructure, community chats, help someone with their wallet or explain Firo to a friend. It includes people who have been patient with us, and people who have pushed us to do better. A project needs both.

Our [Community Funding System](https://funding.firo.org/) is a good example of that participation. Recent funded projects include developer tools, the Spark Sync Monitor, a Spark Names directory and Sal & Mark's livestream sponsorship. Spark Name fees also support the independently overseen Community Fund. It is encouraging to see people finding useful ways to contribute and getting support to pursue them, without everything having to originate with the core team.

## Making Sure People Can Reach Firo

One of the harder lessons in this space is that good privacy technology does not guarantee people will be able to reach it. A currency can work as intended and still depend heavily on a few businesses for buying, selling and liquidity.

Exchange Addresses were one response. Firo pioneered a transparent-deposit approach to meet Binance and regulator requirements while keeping private transactions available elsewhere on the network. Our approach helped establish a path for other privacy projects, including Zcash with its related TEX address format. But meeting an exchange's requirements still leaves you dependent on its future decisions.

That is why we were working towards Rosen Bridge well before this launch. We [publicly set out the reasoning in March 2026](https://firo.org/2026/03/19/firo-rosen-bridge-opinion-piece.html): Firo needed more routes to market that the community could help build itself.

Our [Rosen integration is now live](https://firo.org/2026/09/15/rsfiro-live.html), allowing people to bridge FIRO into rsFIRO and redeem it back again, with markets on Ethereum, BNB Chain and Ergo. People can create pools and contribute liquidity on permissionless exchanges without waiting for a native FIRO listing.

In the volume snapshot we were tracking on 19 September 2026, rsFIRO was at approximately US$86,000, compared with US$275,000 in reported native FIRO volume on centralised exchanges. That is almost one-third as much trading volume, just days after launch.

There are trade-offs: rsFIRO is transparent and introduces bridge and Guard-federation dependencies. Native FIRO and Spark remain the route for private transactions.

This is why Rosen is one part of a broader effort. We also want to pursue native-asset liquidity opportunities through projects such as SeraiDEX and THORChain, rather than rely on any single route. Those remain goals, not promised integrations.

I'm grateful to the Rosen team and everyone who helped with testing, integration and the first markets. This gives our community something useful to build on.

## Why I'm Still Excited

Our research is continuing too, including work towards a [post-quantum privacy protocol](https://forum.firo.org/t/firo-post-quantum/2935).

The challenge is to make that security practical: transactions people can afford, wallets they can run and a migration path they can use safely. Those are the kinds of questions that have kept us working all these years. I still find them interesting, and I still think the answers matter.

There is plenty else to do. We need to make Firo easier to use, help developers build with it, grow liquidity and explain ourselves better. Research and longevity do not automatically bring adoption.

But I do think there is a substantial project here that more people would appreciate if they got to know it.

We have a body of research that has helped others, a working private-payment system and people contributing useful things around it. Now we are seeing the beginnings of a broader market for FIRO that our community can help sustain.

That is what makes this moment interesting to me. Work that has taken years is becoming something more people can use.

For those discovering financial privacy through Zcash, I hope that interest leads you to explore the wider community too. You don't need to choose a side to appreciate the different approaches people are taking.

And for those who have been here with us: thank you. A lot of what I've described exists because you helped make it possible.

After nearly ten years, I'm still excited about where Firo can go. I would love to see more people become part of it.
