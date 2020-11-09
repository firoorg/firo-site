---
layout: post
title: "Paving the way to privacy on by default (with opt-out) with Lelantus"
summary: "With this step, we foresee a big increase in take-up rate of anonymized funds"
tags: [news, dev]
author: "Reuben Yap"
img: "/blog/assets/paving-the-way-to-privacy-on/lelantus_privacy_on.webp"
alt: ""
---

Zcoin’s entire raison d’etre is financial privacy. The vast majority of our research and time has been spent in building and deploying privacy protocols for cryptocurrencies such as Zerocoin, Sigma and Lelantus.

Despite this, usage of our blockchain privacy protocol remains low. At the date of writing, around 409,000 XZC has been anonymized via Sigma since its launch in July 2019 which represents only about 4% of Zcoin’s circulating supply. In contrast, our implementation of Dandelion++, which prevents your IP address from being tied to a transaction, is on by default and is used by almost 100% of Zcoin nodes.

![Sigma](/blog/assets/paving-the-way-to-privacy-on/sigmabreakdown.webp "The current status of Sigma transactions since its activation in July 2019")

It is clear that opt-in privacy does not work and is echoed in other cryptocurrencies that adopt this model including Zcash, Dash or even Bitcoin. Low usage means low privacy as indicated by [Chainalysis’ claims](https://blog.chainalysis.com/reports/introducing-chainalysis-investigation-compliance-support-dash-zcash) that they can partially trace 99% of Zcash transactions and perform successful investigations into Dash’s PrivateSends. Other studies also indicated that despite Zcash’s advanced technology, many users who did not completely understand how its privacy worked, used it improperly and made it traceable anyway.

Various explanations have been given as to why these privacy cryptocurrencies do not seem to want to encourage greater adoption of private transactions primarily along the lines of that they need to play nice with regulators who are uncomfortable with the idea of private transactions. Dash in fact goes to great lengths to distance itself from being called a privacy cryptocurrency with a [published legal position](https://media.dash.org/wp-content/uploads/Dash-PrivateSend-Legal-Position-EN.pdf) that in terms of privacy, it is no different than Bitcoin.

The fact is this: no matter how advanced the privacy technology employed, it is meaningless if it is not used. Privacy likes being in a crowd. Privacy needs to be easy to use.

## Why hasn't Zcoin moved to privacy on by default?

When Zcoin launched in 2016 with the Zerocoin protocol, due it being originally designed for Bitcoin and its mechanism of burning and redeeming coins, it was not trivial to modify it to not require a base layer. Similarly, having a transparent layer based on Bitcoin made it easy for adoption for exchanges and wallets along with many other existing tools such as light wallets and blockchain explorers that were all built around Bitcoin.

The technology of Zerocoin itself was a limiting factor with transaction sizes that were 50x larger than regular transactions. Additionally Zerocoin transactions were computationally intensive to verify. In the early days of Zcoin, some mining pools had refused to process these transactions due to the load it placed on their servers. At the level of technology and development then, to have Zerocoin privacy on by default was simply not a practical option.

While we solved many of these problems with Sigma (one-out-of-many proofs), we saw Sigma as an intermediate protocol to Lelantus. We made some efforts in changing user behaviour by having some of our wallets actively recommend users to anonymize their funds. This met with some success but not to the level we wanted.

With the upcoming launch of Lelantus, our next gen privacy protocol, we saw it as a good opportunity to greatly improve adoption of our privacy features and privacy of Zcoin as a whole.

## Moving to a Privacy on by default with transparency opt-in model

Lelantus will launch later this year with our official QT and Electron wallets anonymizing all your funds by default. Users will be prompted to enter their wallet password when opening their wallet which will anonymize all non-locked balances. With this step, we foresee a big increase in take-up rate of anonymized funds.

Additionally, with the activation of LLMQ-based chainlocks, users will not need to wait for several confirmations before their anonymized funds are ready to be used.

Users will still retain the ability to temporarily disable this auto-anonymization for example to create their Znode collaterals. Upon restart of the wallet however, the default behaviour of anonymization of all received funds will resume.

## Why not mandatory privacy?

We are aware that many privacy purists believe that privacy should be mandatory for all transactions and it is a sentiment that the core team shares and strives towards.

With the pioneering of a new privacy protocol such as Lelantus, we believe a phased approach is prudent to give time for the privacy protocol to mature. The first launch of Lelantus this year will be the initial version which will support the burning and redeeming of arbitrary amounts. This removes the requirement of fixed denominations and also consolidates all burns and redeems into a single large anonymity set as opposed to separate anonymity sets for each denomination.

This change alone will make side channel pattern recognition attacks a lot harder and also greatly improves the practical anonymity set. Combined with the privacy on by default model with transparency opt-out, the privacy of Zcoin transactions and the anonymity set of the cryptocurrency as a whole will be increased significantly without requiring major ecosystem changes from existing exchanges and wallets. Exchanges that already know your identity can continue using fast and lightweight transparent transactions but funds will be anonymized as soon as they leave exchanges into users’ hands. Keeping a transparent layer would also allow safeguards such as rate limiters to be kept in place to combat any unexpected issues discovered especially as Lelantus gains prominence and further scrutiny.

It is worth noting that privacy protocols that use burn and redeem methods such as Lelantus and Zerocash are less susceptible to deanonymization due to low usage when compared to decoy based systems like RingCT and Mimblewimble. This is because there is no need to sample or find a limited set of decoys to mix with. The anonymity set of burn and redeem methods continue to grow as more people use the system. Even without mandatory privacy, a high enough adoption level of Lelantus will offer [higher practical privacy of the transaction graph than mandatory privacy models that use limited decoy sets](https://slideslive.com/38911785/satoshi-has-no-clothes-failures-in-onchain-privacy)

The second phase of Lelantus scheduled to happen sometime in 2021 involves the enabling of direct anonymous payments which allows users to send anonymized funds to others without revealing source or amounts and without the need for redemption to the base transparent layer. This would also involve the introduction of a new addressing system to support these new transaction types. These types of transactions will offer some of the highest levels of privacy in the entire cryptocurrency space. The second phase will also mark an increased focus in enabling Lelantus enabled mobile wallets as we shift our focus to usability rather than just protocol development. We hope that at the end of this phase, the majority of Zcoin transactions will be through Lelantus direct anonymous payments.

The completion and launch of the second phase of Lelantus will be a good time to start assessing mandatory privacy by default with Lelantus addressing. Some open engineering questions remain, such as how Znodes and their collaterals would work without a transparent base layer and whether exchanges are willing to dedicate additional computational resources to generate these private transactions in bulk. Research work is already underway such as our paper on [hierarchical one-out-of-many proofs](https://eprint.iacr.org/2020/430) which reduce transaction creation times by an order of magnitude.

## Are you worried about regulatory concerns?

Some community members have expressed concern as to how privacy coins would survive in a regulatory environment that is increasingly hostile towards privacy technologies and whether we should maintain opt-in privacy for compliance reasons.

First of all, we would like to clarify that while there is some pressure against privacy coins, many of these are imposed by banks or concerned regulators rather than it being actual law. Even the revised FATF rules that impose additional obligations on disclosure and AML for exchanges and custodial wallets do not ban privacy coins as VASPs can still disclose sender identity as they already know who you are regardless of blockchain privacy mechanisms.

We also strongly reject the common argument that privacy technologies enable illicit activity. Recent studies such as [Rand Corporation’s report](https://www.rand.org/pubs/research_reports/RR4418.html) actually states that “while privacy coins may intuitively appear likely to be preferred by malicious actors due to their purported anonymity-preserving features, there is little evidence to substantiate this claim.”

Existing mechanisms in the traditional fiat world continue to make it very easy to launder money without having to resort to the complexities and volatility of cryptocurrencies. For example, [trade based money laundering](https://www.acams.org/aml-resources/trade-based-money-laundering/) is still very easy to do and hard to detect. Additionally, the [2018 National Terrorist Financing Risk Assessment](https://home.treasury.gov/system/files/136/2018ntfra_12182018.pdf), continues to cite the banking system and complicit MSBs as the primary way terrorist funding is facilitated. Many of these reports indicate that the right way to combat these is through robust international regulation and law enforcement and improvement of coordination between the public and private sectors. None of these reports suggest the banning of privacy technologies or cryptocurrencies.

We believe privacy as a fundamental human right especially in an increasingly connected and data driven world where surveillance and data harvesting is the norm. Unlike the stance taken by some other projects, we feel it would be against our ethos to have to apologize or justify that we aren’t a privacy focused project especially when the vast majority of laws do not prohibit it. These approaches do privacy a great disservice and paint it as something to be ashamed about. If we believe in the original tenets of cryptocurrency as a decentralized and self sovereign form of money, we need to fight to maintain our right to be private.

Zcoin will always remain proud to be a privacy cryptocurrency because your money, is your business.

**PS**: Zcoin is [raising funds for its Lelantus audit via the ZCS](https://zcs.zcoin.io/proposals/lelantusaudit.html) and has 42 contributions already! Your help is greatly appreciated! Alternatively consider making a [monthly donation via Opencollective](https://opencollective.com/firo)!