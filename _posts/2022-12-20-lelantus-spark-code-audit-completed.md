---
layout: post
title: "Lelantus Spark Code Audit Completed"
summary: "HashCloak has concluded the Lelantus Spark Audit"
tags: [announcement, news, Development]
author: "Reuben"
img: "/blog/assets/spark-completed.png"
---
[HashCloak](https://hashcloak.com/) has just concluded the audit of Firo’s [Lelantus Spark]({{ site.baseurl }}/2021/08/24/presenting-lelantus-spark.html) implementation! 

The audit ran from 24 October 2022 until 28 November 2022, with an initial report delivered on 9 December 2022. The final report taking note of all fixes done by the core team, was delivered on 19 December 2022 and is available [here]({{ site.baseurl }}/about/research/papers/lelantus_spark_code_audit_report.pdf).

The audit found no critical or high severity issues. The report's other findings have all been [resolved in the updated codebase](https://github.com/firoorg/firo/commit/60dba45a8aee17cae0bc24d12d4071b39583781b). A copy of the report is available [here]({{ site.baseurl }}/about/research/papers/lelantus_spark_code_audit_report.pdf).

We would like to thank HashCloak and [Cypher Stack](https://www.cypherstack.com/) for their fantastic work on the audit and [MAGIC Grants](https://magicgrants.org/MAGIC-Grants-Saves-Firo-Community-8000-Lelantus-Spark-Audit/) for assisting with the milestone payments to HashCloak.

This audit would not have been possible without the Firo community's support, which fully funded the audit costing USD 80,000. We would like to give a special shout-out to Rasikh Morani from [Arcadia Group](https://www.arcadiamgroup.com/) and the Community Fund Committee for their generous contributions towards the audit.

Spark is the culmination of years of work of Firo from our roots with Zerocoin, Sigma and Lelantus. Our prior research removed trusted setup and the requirement of fixed denominations. The introduction of Spark heralds in fully confidential transactions, and powerful and flexible Spark addresses designed to protect recipient privacy. These addresses are also feature-packed with support for efficient multi-sig, incoming and outgoing view keys, diversified addressing and the ability to offload chain scanning and balance computation without giving up spend authority. Spark is also built to last, with a modular structure allowing components to be upgraded as the technology improves.

[Lelantus Spark](https://eprint.iacr.org/2021/1173) is live on [devnet](https://www.gemini.com/cryptopedia/blockchain-testnet-devnet-sandbox-crypto-mainnet#section-what-is-a-devnet-blockchain-development-network) as we further clean up the code and fix bugs. We expect to launch testnet shortly in January.
