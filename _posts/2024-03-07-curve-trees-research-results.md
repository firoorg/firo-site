---
layout: post
title: "Curve Trees: Global Anonymity Sets for Lelantus Spark"
summary: "Curve trees scale zero-knowledge proofs for global anonymity"
tags: [News, Dev]
author: "Reuben"
img: "/blog/assets/curvetreesnotes/banner.png"
---
We are proud to publish the [results of the research grant on curve trees]({{ site.baseurl_root }}/about/research/papers/Lelantus_Sparks_with_Curve_Trees__Implementation_Notes.pdf) carried out by Aram Jivanyan and funded by the [MAGIC Firo Fund](https://magicgrants.org/funds/firo/). [Curve trees](https://eprint.iacr.org/2022/756) is a new technique that allows scaling zero-knowledge membership proofs to allow global anonymity sets, meaning that the ZKP is performant enough that it can encompass all transactions in a blockchain. It achieves this without any need for a trusted setup, a key requirement of Firo’s privacy research, while retaining small transaction sizes and quick proving and verification times. Curve trees also allow for efficient batching verification techniques, which can further decrease the marginal cost of proof verification. 

Lelantus Spark’s unique modular design allows the upgrading of its components, and in this case, curve trees would replace Spark’s use of [one-out-of-many proofs](https://eprint.iacr.org/2014/764.pdf). The research note covers the necessary modifications to implement curve trees in Spark to scale it to global anonymity sets. 

We would like to thank Luke Parker [(kayabanerve)](https://github.com/kayabaNerve) and Aaron Feickert of [Cypher Stack](https://cypherstack.com/) for their valuable feedback and help in grasping curve trees and how they would apply to Spark. 

Related article: 

[Advancing Privacy: Aram Jivanyan advancing Lelantus Spark]({{ site.baseurl_root }}/2023/05/26/elliptic-curves-research.html) 

[MAGIC Firo Fund](https://magicgrants.org/funds/firo/)
