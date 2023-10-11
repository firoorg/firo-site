---
layout: post
title: "Update on Firo’s Security Retainer with HashCloak"
summary: "HashCloak's Fuzzing Expands Firo's Code Coverage"
tags: [announcement, news]
author: "Reuben Yap"
img: "/blog/assets/hashcloak-update/banner2.png"
---
We are happy to share the progress of the [security retainer](https://magicgrants.org/Security-Retainer-with-HashCloak/) we have with [HashCloak](https://hashcloak.com/). HashCloak’s expertise has significantly improved the security and robustness of Firo’s Spark codebase.

## Progress on Fuzzing Code Coverage:

The mainstay of our recent endeavours has been expanding Firo’s fuzzing code coverage. 

Code fuzzing, or fuzz testing, is an automated software testing technique that involves feeding a program with a wide range of randomised inputs in hopes of discovering errors, vulnerabilities, and unexpected behaviours. Once set up, fuzzing tests can run continuously without much intervention, ensuring that new vulnerabilities that might be introduced with new code updates are quickly identified. While audits, unit tests and manual testing can miss out on certain scenarios, fuzz testing can potentially cover a broader range of input combinations, increasing the likelihood of catching issues especially those edge case ones..

The results speak for themselves:

| File                  | Previous Coverage (%) | Current Coverage (%) |
| --------------------- | --------------------- | -------------------- |
| aead.cpp              | 31                    | 95.0%                |
| bech32.cpp            | 7%                    | 90.1%                |
| bpplus.cpp            | 6%                    | 93.5%                |
| chaum.cpp             | 3%                    | 48.5%                |
| coin.cpp              | 7%                    | 51.5%                |
| f4grumble.cpp         | 9%                    | 96.2%                |
| grootle.cpp           | 0.8%                  | 90.7%                |
| mint_transaction.cpp  | 0%                    | 40.5%                |
| schnorr.cpp           | 0%                    | 96.5%                |
| spend_transaction.cpp | 0%                    | 14.0%                |

## Review of Pull Requests

During the retainer period, HashCloak also assisted in the review of three significant PRs from Firo:

1) HashCloak reviewed a proposal related to updating Lelantus Spark's linking tag structure that was intended to allow more flexible membership proof upgrading options. The review identified a potential flaw in the proposed modification, leading to the withdrawal of the change. [Review the PR here](https://github.com/firoorg/firo/pull/1267).

2) HashCloak also conducted thorough evaluations on two other PRs from the core team addressing a glitch in the Lelantus state change and a Spark runaway exception and the feedback will be incorporated in the final merge.

## Wrapping Up

We look forward to continuing the security retainer with HashCloak to further increase fuzzing code coverage and to review any critical pull requests, especially with the upcoming launch of our new privacy protocol Lelantus Spark on mainnet.

We would like to extend special thanks to [MAGIC](https://magicgrants.org/) for facilitating this and the generous donations from the Firo community and [Arcadia Group](https://arcadia.agency/) that made this possible.

### About HashCloak
HashCloak Inc. is an R&D lab and consultancy focused on privacy, anonymity and scalability for blockchains and cryptocurrencies. Founded in 2019, the Toronto-based team specialises in ZKPs, anonymous networks, MPCs and other privacy-enhancing techniques. HashCloak has previously worked with Firo in auditing both the design and implementation of Lelantus Spark.

### About MAGIC Grants
MAGIC Grants is a 501(c)(3) public charity that supports cryptocurrency networks, which they believe are essential public payment infrastructure and also supports privacy. MAGIC Grants empowers communities to set up MAGIC Funds for various projects deemed essential. These Funds are semi-autonomous and can choose to fund various qualifying activities, including educational materials, essential developer maintenance, research, and security audits.

### About MAGIC Firo Fund
The MAGIC Firo Fund was established in December 2022 and is administered by the MAGIC Board independently from the Firo Core team. The MAGIC Firo Fund is funded by generous donations from Firo supporters such as Arcadia. Donations to the fund are tax deductible for US individuals and businesses

Full article: [https://magicgrants.org/Progress-on-Firo's-Security-Retainer-with-HashCloak/](https://magicgrants.org/Progress-on-Firo's-Security-Retainer-with-HashCloak/)  
Hashcloak: [https://hashcloak.com/](https://hashcloak.com/)  
MAGIC Grants: [https://magicgrants.org/](https://magicgrants.org/)  

