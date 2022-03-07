---
layout: post
title: "Spats: Confidential Assets powered by Spark"
summary: ""
tags: [news, dev, community]
author: "Reuben Yap"
img: "/blog/assets/spats-paper.png"
---
We are proud to reveal Firo’s research paper [Spats (short for Spark Assets)](https://eprint.iacr.org/2022/288) that extends [Lelantus Spark](https://eprint.iacr.org/2021/1173) to support confidential assets in line with Firo’s focus on providing privacy to the wider cryptocurrency ecosystem.

Most cryptocurrency ecosystem platforms such as Ethereum, Binance Smart Chain, Solana, and Avalanche were not designed with privacy in mind. While various attempts have been made to add privacy to these ecosystems, because of the architecture of these chains, they either rely on layer 2 solutions or use complex and expensive smart contracts and often leak data in various ways. Additionally these privacy solutions are often fragmented or competing with each other diluting the anonymity set of each method.

Firo’s [Lelantus Spark](https://firo.org/2021/08/24/presenting-lelantus-spark.html) is a full privacy protocol that hides sender, receiver and the amount transferred without trusted setup. As Firo moves into supporting tokenization with [Elysium](https://firo.org/2021/12/22/elysium-testnet-and-gui.html) to build a privacy ecosystem, Spats extends Spark’s functionality to hide the asset type being transferred. 

With many existing on-chain privacy mechanisms for token ecosystems such as Tornado Cash, the asset type remains visible which limits the anonymity set within each asset type. Spats allows all assets on the tokenization layer to share the same anonymity pool, vastly improving privacy. Additionally, it retains all the benefits of Lelantus Spark so that there is no need to anonymize in fixed denominations as amounts are hidden. Also because Firo is designed for privacy, transaction fees can be paid without revealing the source unlike in other token ecosystems.

To give an example of how this would look like when fully deployed, imagine you create or bridge an asset on Elysium 2.0 called fUSD and you have another asset fDAI. When sending using Spats, a transaction sending fUSD is indistinguishable from sending fDAI. So any transaction on the Elysium 2.0 tokenization layer also improves the anonymity of all other assets in Elysium. 

## How does Spats fit in Firo’s roadmap? 

Spats uses Lelantus Spark as a base which is already in a state of advanced development and we plan to deploy Lelantus Spark on mainnet this year. Spats shares much of the same cryptographic plumbing with Lelantus Spark so much of the existing code can be adapted to support it.

Elysium 1.0 which we have on testnet and uses Lelantus (not Spark) is approaching release and as such would not support Spats just yet. We are already planning Elysium’s successor Elysium 2.0 and its expanded capabilities such as easier bridging with other chains or more advanced scripting/smart contract functionality and Spats would form part of Elysium 2.0.

With Lelantus Spark research complete we move our focus to expanding its utility and use cases beyond just supporting private payments and hope to present to the community our proposal for Elysium 2.0 as a complete holistic privacy ecosystem that can serve as infrastructure for the whole cryptocurrency ecosystem.

We welcome feedback from the academic community or researchers on our [Spats research paper!](https://eprint.iacr.org/2022/288)
