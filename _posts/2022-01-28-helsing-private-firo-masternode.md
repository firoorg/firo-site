---
layout: post
title: "Helsing: Private Firo masternodes in Lelantus Spark"
summary: ""
tags: [news, dev, community]
author: "Reuben Yap"
img: "/blog/assets/firo-helsing.png"
---
We are proud to unveil our proposal for [Helsing]({{ site.baseurl }}/blog/assets/helsing-1049371.pdf), a method to enable private masternode staking in Firo. Masternodes in Firo perform several important functions such as securing the chain against 51% attacks via ChainLocks and also enabling quick finality of transactions within a few seconds.

To provide resistance against [Sybil attacks](https://en.wikipedia.org/wiki/Sybil_attack), a collateral of 1000 FIRO is staked to encourage honest behaviour of the masternode and this needs to be verified by the rest of the network. Our upcoming privacy protocol, Lelantus Spark, greatly improves privacy by hiding amounts, when funds come in and also when they are moved out. Therefore there needs to be a different method of determining whether the collateral is present while preserving privacy.

Helsing (named after [Van Helsing](https://en.wikipedia.org/wiki/Abraham_Van_Helsing) ), allows users to stake their 1000 FIRO within Spark and prove that the collateral is present and not moved within Spark without revealing the source of the coins being staked. Helsing also allows masternode payouts to be paid directly to Spark addresses directly anonymizing them.

## Why Helsing?

As a privacy centric coin, we want Spark and Spark addresses to be the default way FIRO is used and reduce the reliance on transparent addresses as part of our efforts to phase them out. Masternodes form a key component of our blockchain network and Helsing enables masternode collaterals to be held in the Spark pool and payouts to be directly anonymized. Anonymized masternode payouts increase the overall Lelantus Spark anonymity set and protects the privacy of masternode holders by preventing such funds from masternode rewards from being tied to masternodes.

## When is Helsing going live?

The current plan is to deploy Lelantus Spark on Firo’s mainnet first (estimated Q2 2022) before implementing Helsing after.  As Helsing is still a work in progress and still pending formal and external review, this gives us time for feedback, comments and suggestions from the Firo community and the wider technical community. We recommend feedback to be posted in our [forums](https://forum.firo.org/t/helsing-private-masternode-staking-in-lelantus-spark/2049)!

