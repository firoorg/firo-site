---
layout: post
title: "Update on Binance Monitoring Tag Issue"
summary: "An update on the monitoring tag status"
tags: [news, community]
author: "Reuben Yap"
img: "/blog/assets/binance-monitoring-status/banner.png"
---

The Firo core team would like to address some community concerns on the ongoing monitoring tag status that Binance [placed on Firo back in January,](https://www.binance.com/en/support/announcement/binance-will-extend-the-monitoring-tag-to-include-ant-firo-kp3r-mdx-mob-reef-vai-xmr-zec-zen-and-remove-the-seed-tag-for-gmx-sushi-on-2024-01-04-fd710b5e647c480ab9fe2d87e3cd4b39) along with a slew of other projects with privacy features, such as Monero, Zcash, Horizen, and Mobilecoin. Prior to this, in [May 2023 Binance had also made Firo](https://decrypt.co/142973/binance-delist-monero-zcash-4-european-countries) and other select privacy-preserving assets unavailable in certain countries in Europe. This was in response to increased pressure from regulators both from the EU (namely MiCA and AMLR) and also part of [Binance’s settlement with the US Department of Justice.](https://www.coindesk.com/policy/2023/11/21/binance-to-settle-charges-with-us-doj-source/) 

This matter has been addressed several times before in our [video updates](https://www.youtube.com/watch?v=mu1-yEfyQ18) and social channels, but we have noted that there is still a lot of misunderstanding surrounding this topic, so we would like to address the situation comprehensively.

The core team had been aware of the issue since September 2023, when Binance reached out to inform us of the new regulatory requirements being imposed on them. Even in early October, while we were aware of proposals from other projects to comply with these requirements, we were not confident that these would meet Binance’s regulatory requirements.

Because of the urgency of the matter, the core team proactively developed its own solution in the form of [Exchange Addresses]({{ site.baseurl_root }}/2023/11/06/exchange-addresses.html) while communicating with Binance’s team. We also made sure to [consult with the Firo community](https://forum.firo.org/t/firo-private-transactions-balancing-with-mica-regulations/3010) and got good support for the proposal. Binance’s team confirmed that our proposal was acceptable to their current requirements.

Our proposal was easy to implement both on the project and exchange side, didn’t require any complicated changes, and, most importantly, did not compromise users' privacy more than the status quo. While other projects proposed [alternative solutions,](https://forum.zcashcommunity.com/t/important-potential-binance-delisting/45954/94) our Exchange Address approach was [presented by Binance to these projects as the preferred solution for other privacy coins to adopt.](https://forum.zcashcommunity.com/t/important-potential-binance-delisting/45954/103) To our knowledge, both Zcash and PIVX are adopting some form of Exchange Address type while Horizen has completely removed their privacy features. We are proud to have our solution adopted to protect our fellow privacy projects’ centralized exchange (CEX) listings.

We deployed the code for Exchange Addresses in November 2023, and it was successfully activated in January 2024 together with Lelantus Spark activation. [This upgrade was supported by Binance.](https://www.binance.com/en/support/announcement/binance-will-support-the-firo-firo-network-upgrade-hard-fork-18d26ea521694a40b8bfc7bfb2a54b87) With the activation of Exchange Addresses, we were the first privacy coin on Binance to meet the new requirements. Coins that did not meet these new requirements such as Monero and Mobilecoin were delisted from Binance.

## What’s Next?

We continue to work closely with Binance’s team, which is in the midst of transitioning its infrastructure to use Exchange Addresses. Their rough estimate is that it will take about three months to implement on their end. After Exchange Addresses are implemented, their team had mentioned that we can explore reopening Firo markets in Europe again.

The Binance Monitoring Tag is reviewed once every quarter, and a decision has not been made on whether it will be removed at the next review or only after Binance has completed its Exchange Address integration. Thus far, no new regulatory requirements have been communicated, and we view the fact that Binance is in the midst of integrating Exchange Addresses as a positive sign along with their assurances that all is well at the moment.

In the meantime, we continue to improve liquidity on FIRO through other avenues and further bolster decentralized exchange (DEX) liquidity and integrations, such as with [FiroDEX](https://github.com/firoorg/FiroDEX-Desktop/releases)/Komodo Wallet, [BasicSwapDEX,](https://basicswapdex.com/) and [DCRDex.](https://dex.decred.org/) We have also been in talks with other cross-chain DEX options, such as [Serai](https://serai.exchange/) and [Maya Protocol.](https://www.mayaprotocol.com/) Showing community support in these other DEX communities would give further impetus for those projects to integrate with us and reduce reliance on centralized exchanges.

## Side Notes

There has been some discussion with Binance on whether to retain the FIRO/BTC pair or just focus on the FIRO/USDT pair, as interest in the FIRO/BTC pair currently pales to that of the FIRO/USDT pair. These discussions are unrelated to any of these regulatory concerns. We have initiated [a Hummingbot campaign to improve liquidity on FIRO/BTC]({{ site.baseurl_root }}/2024/03/19/hummingbot-firo-binance.html) and are using it to gauge community interest in the FIRO/BTC pair.

We also note that some privacy assets were excluded from the Monitoring Tag. We were advised that this was because their privacy features were not materially used when transferring to Binance and, therefore, were not a material concern, while Firo users regularly used Lelantus functions to deposit into Binance.

We would like to thank Binance for remaining open to working with privacy projects like ours on finding a path to remain listed despite immense regulatory pressure on them when the easy thing to do would be to delist. While we strongly disagree with the regulations which in our opinion are overreaching and misguided, we understand that centralized exchanges are bound by the laws that govern them. We continue to monitor the situation and would also like to reiterate that we would not take any steps that would materially compromise user privacy for the sake of compliance.
