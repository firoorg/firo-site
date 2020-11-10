---
layout: post
title: "Lelantus Cryptographic Library Audit Results
"
summary: "We are pleased to share the results of the Lelantus cryptographic library audit by Trail of Bits"
tags: [news, dev, community]
author: "Reuben Yap"
img: "/blog/assets/lelantus-cryptographic-library-audit-results/banner.jpg"
alt: ""
---
We are pleased to share the results of the Lelantus cryptographic library audit by [Trail of Bits](https://www.trailofbits.com) that was substantially funded by community donations from the [Zcoin Crowdfunding System](https://zcs.zcoin.io/proposals/lelantusaudit.html) (ZCS) and the balance from the Zcoin Development Fund. 

The audit was carried out by two Trail of Bits engineers, [Jim Miller and Will Song](https://www.trailofbits.com/about/company/). 

The audit found that aside from a few typos in the Lelantus academic paper and some underspecified areas, the implementation largely complies with the specification. The Lelantus cryptographic library had  [2 issues](https://github.com/firoorg/firo/labels/Lelantus%20Audit) (one medium severity and the other informational). There was one [high severity issue on an unfinished part of  integration code.](https://github.com/firoorg/firo/issues/888)  There were no security issues related to the implementation matching the protocol. 

All fixes to the issues have been incorporated and reviewed by Trail of Bits. You can review the summary report [here](https://github.com/trailofbits/publications/blob/master/reviews/zcoin-lelantus-summary.pdf) or for a full list of the issues along with details [here](https://github.com/firoorg/firo/labels/Lelantus%20Audit). The Lelantus cryptographic library code is also [now open sourced and available to the public](https://github.com/firoorg/firo/tree/lelantus). 

We were impressed with Trail of Bits' professionalism and expertise throughout the engagement and thank them for their excellent work!

We would like to thank all donators who made this possible. We received an amazing amount of support of [105 contributions for a total of 5569.55 XZC](https://zcs.zcoin.io/proposals/lelantusaudit.html)! 

Donators (who agreed to be publicly acknowledged) include: 

(not arranged in any order)

*   Aram Jivanyan
*   Roger Ver
*   Hakushu
*   Nico Fritschi
*   Sebastian Bausch
*   Poramin Insom
*   Ivan Brightly
*   Reuben Yap
*   David Holliday
*   Rasikh Morani
*   Savil
*   Albert Castellana
*   and many others who have chosen to remain anonymous.

If you would like to be acknowledged or we have left you out, please [contact Muggles](https://t.me/muggles)!

## What's Next?

Lelantus is also undergoing a cryptography audit by Dmitry Khovratovich from [ABDK Consulting](https://www.abdk.consulting/). The purpose of this audit is different as it focuses not on the implementation but the actual cryptography of Lelantus. We expect the results of this audit to be available in the next 1-2 weeks. This audit is being funded entirely from the Zcoin Development Fund. 

We are also wrapping up coding work on Lelantus and expect to have a Lelantus testnet in the coming weeks so stay tuned! We thank everyone for their support, belief and patience in getting Lelantus right!