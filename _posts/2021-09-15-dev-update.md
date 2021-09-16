---
layout: post
title: "Firo Dev Update - September 2021"
summary: "An update on Firo's latest development."
tags: [news, dev, community]
author: "Reuben Yap"
img: "/blog/assets/development-update-firo.png"
---
Here's a quick update on what Firo has been working behind the scenes:

## Lelantus Spark

We have made significant headway in our next generation privacy protocol [Lelantus Spark!](https://firo.org/2021/08/24/presenting-lelantus-spark.html)

Lelantus Spark's security proofs have been completed and the paper has been [uploaded to IACR's preprint archive.](https://eprint.iacr.org/2021/1173.pdf) We are in the process of seeking cryptographic audits.

Significant improvements have been made in performance and [proof of concept code](https://github.com/firoorg/spark) is also now available.

We continue to explore further optimizations and improvements in addressing.

We are also doing a preliminary investigation of [hardware acceleration](https://en.wikipedia.org/wiki/Hardware_acceleration) of Lelantus Spark to improve scalability.

## FiroPoW

[FiroPoW is on testnet](https://firo.org/2021/08/30/firopow-testnet-launched.html) and is ready for deployment. We are waiting for InstantSend to be completed before deployment on mainnet so both FiroPoW and InstantSend can be rolled out together in one hard fork.

Our reference miner is out and from our talks with third party miner devs, both AMD and Nvidia cards will have miners available upon release to mainnet.

Electrum versions of our wallet with FiroPoW are also being developed. FiroPoW blocks are about 500 times smaller than MTP blocks which will drastically improve scalability and lower system requirements.

We will be investigating ways that we can strip MTP proofs from older blocks for faster sync and lowering node requirements in the future.

## InstantSend

We have launched [an internal devnet for InstantSend](https://github.com/firoorg/firo/tree/devnet) and have been testing before rolling it  out on testnet. We are tweaking the UI to indicate instant-locked transactions and to make them available immediately for spending. By default, all transactions from our wallets will be via InstantSend.

Our use of Dandelion++ does slow down InstantSend slightly due to the way Dandelion++ stealthily propagates the transaction before broadcasting it publicly, hiding the originating node of the transaction but is still sufficient for transactions to be 'confirmed' in a couple of seconds. Dandelion++ can be disabled to make InstantSend faster, but is not recommended for privacy reasons.

## Mobile Wallet

Internal development build of our mobile wallet with Lelantus support is almost complete, with backend functions for Lelantus completed and UI elements being corrected.

## Firo Client (Electron Wallet)

After completing [our GUI revamp,](https://firo.org/2021/08/27/firo-client-release-210.html) significant performance improvements have been made. We are also working on streamlining the GUI further especially when it relates to address book functionality.

## Trezor Firo support

Firo support for Trezor is [set to be re-enabled](https://github.com/trezor/trezor-firmware/issues/1767) at the next Trezor firmware release allowing users to now directly do Lelantus spends to Trezor.


# OTHER UPDATES

## Light Node Media Advisory

We have entered into an advisory arrangement with Light Node Media that has worked with well known projects such as Yubico and WAX to assist Firo with partnerships, expansion of the team and listing strategies especially in the US market.

## TikTok 

We have begun filming a series of 12 videos to be posted over the course of a month targeted at educating people on cryptocurrency and privacy. The aim is to be accessible and establish Firo as an authority on the subject of privacy to a more general audience.

## DeFi Bridges and Privacy DEXes

We have been in talks with more teams in exploring additional DeFi Bridges and privacy DEXes for Firo. Stay tuned for announcements.

[Knit Finance](https://knitfinance.medium.com/knit-finance-will-integrate-firo-to-enable-cross-chain-interoperability-a74d06c2e372) recently added Firo as a wrappable asset with [Copper](https://copper.co/) as their custodian.

## AtomicDEX

We are exploring ways to improve liquidity and the experience on AtomicDEX along with integration into Firo Client wallet. This is in line with our strategy to be less reliant on centralized exchanges and to build Firo liquidity on DEXes.

## Firo Runner

As a fun side project, we have an alpha version of an endless runner game that will allow users to compete with each other on the leaderboards to win Firo.

![](/blog/assets/firo-runner.jpg)
