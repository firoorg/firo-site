---
layout: post
title: "Lelantus Spark is live on Firo"
summary: "Lelantus Spark is live on Firo’s mainnet"
tags: [announcement, news, dev]
author: "Reuben Yap"
img: "/blog/assets/sparkislive/banner.png"
---
We are pleased to announce that Lelantus Spark, our next gen privacy protocol is now live on Firo’s mainnet! This forms the culmination of years of research and development from the first time [Spark was announced in 2021.](https://firo.org/2021/08/24/presenting-lelantus-spark.html)

Since then, it has gone through several revisions and improvements and has undergone two cryptography audits ([Hashcloak,](https://firo.org/about/research/papers/Lelantus_Spark_Audit_Report.pdf) [Daniel (Linfeng) Zhao](https://firo.org/about/research/papers/LinfengSparkAudit.pdf)) and a [code and implementation audit.](https://firo.org/about/research/papers/lelantus_spark_code_audit_report.pdf)

Please ensure you’re updated to [the latest version of Firo.](https://firo.org/get-firo/download/)

Let’s do a quick run-through of what’s new in this update!

## Spark Addresses 

Users can now use Spark addresses where people can directly send FIRO to them and have them automatically anonymized. **These addresses are not searchable on the blockchain or an explorer** and therefore no one can look them up to find out when you have received or sent money or how much funds you have in it. Moving forward, we foresee Spark addresses to be the primary way users interact with each other and are the default way to send and receive FIRO within our official wallets.

Spark addresses on mainnet have a prefix of "sm" and are 144 characters long.

![Spark address example](/blog/assets/sparkislive/sparkaddress.png)

## Spark Transactions

Spark transactions hide sender, receiver and amounts while everyone can still verify the blockchain state through the use of zero-knowledge proofs. This is the key feature of Spark, which preserves financial privacy while allowing universal verifiability that makes blockchain technology possible.

Spark transactions have very high anonymity sets and are less susceptible to statistical analysis on coin age or taint when compared to other privacy protocols such as RingCT. It also does not require any special trust requirements like zkSNARK constructions and employs a modular approach where specialized zero-knowledge proofs respectively prove specific things vs more complex circuit designs. This allows easier formal security analysis and allows for upgradability where components can be switched out.

![Spark transaction example on explorer](/blog/assets/sparkislive/sparktransaction.png)

## Exchange Addresses

This update also introduces [Exchange Addresses](https://firo.org/2023/11/06/exchange-addresses.html) which allow exchanges to maintain compliance with regulations without affecting user privacy. **Users do not need to create these addresses.**

Exchange addresses differ from regular transparent addresses in that they cannot directly receive funds from Spark, Lelantus, mining or masternode rewards. If you have funds in Spark/Lelantus or from mining or masternode rewards, you would need to send these funds to a transparent address first before sending them to an Exchange Address.

Below is a quick summary of what funds Exchange Addresses can use.

❌Spark / Lelantus —> Exchange Address 
❌Mining/masternode rewards —> Exchange Address 
✅Transparent address —> Exchange address 
✅Spark / Lelantus → Transparent address → Exchange address 
✅Mining/Masternode rewards → Transparent address → Exchange address 

These addresses can be identified with an EX prefix and are 36 characters long. 

For e.g. _EXXazVWwJNbNPBo7b2sqVtveudqHSxGVGzgJ_


## What’s next?

In the immediate short term, the core team will be focusing on getting the rest of the ecosystem using Spark and Exchange Addresses and also several user experience improvements.

These include:
* [Stack wallet](https://stackwallet.com/) (both desktop and mobile) to be released with Spark support within the next couple of days.
* Allowing wallets to directly unshield from Spark > Transparent > Exchange Addresses so that users do not need to care about which address type they’re interacting with.
* Several exchanges have informed us of their intention to use Exchange Addresses and we are assisting them with tooling over providing proofs of payments when sending from Spark/Lelantus transactions.
* Some exchanges have indicated interest in using Spark addresses.
* Extend support of Exchange Addresses to Electrum
* Clean up of Electron Firo client
* Telegram/Discord tip bot support of Spark transactions

Thereafter, in the following months, we’ll be focusing on increasing Spark address use with the following:
* All mining and masternode rewards to mandatorily go into Spark addresses
* Deployment of [Helsing](https://firo.org/2022/01/28/helsing-private-firo-masternode.html), to allow masternode collateral to be held in Spark addresses

Concurrently, we are in the midst of developing and/or researching:
* **Spark Assets for Elysium [(Spats)](https://firo.org/2022/03/07/spats-confidential-assets-lelantus-spark.html):** The ability to create confidential assets using Spark technology where sender, receiver, amount and asset type are hidden. Work has already been done on the cryptographic library for this.
* **Curve Tree Research:** [Curve tree research](https://firo.org/2023/05/26/elliptic-curves-research.html) is completed and is in the process of being documented.

Spark is not a completion of a journey but the beginning of a new era of privacy.

## Thank you

Lelantus Spark would not have been possible if not for the support and efforts of many people and organizations. We would like to thank **Aram Jivanyan and Aaron Feickert** (CypherStack) for creating and improving Lelantus Spark, **Levon Petrosyan, Petr Shugalev** for contributing the vast majority of Spark implementation code, **Anwar P** for the tireless hours on tests, [**CypherStack**](https://cypherstack.com/) for supporting us in many ways including the implementation of Spark in their [Stack Wallet](https://stackwallet.com/) and [**HashCloak**](https://hashcloak.com/) for their constant support and the excellent work in the Spark audit.

Additionally, the generous donations of [**Arcadia Group](https://arcadia.agency/) , Rasikh Morani, Firo Fam** and the support from the **Community Fund Committee** have allowed us to continue development and research during the depths of the bear market. We would also like to thank MAGIC Fund for administering the [Firo MAGIC fund](https://magicgrants.org/funds/firo/) that has allowed us to fund our research and security services.  












