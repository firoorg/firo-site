---
layout: post
title: "Lelantus reactivated on Firo"
summary: "Lelantus reactivated on Firo with additional hardening measures after completion of the hard fork"
tags: [news, dev, community]
author: "Reuben Yap"
img: "/blog/assets/lelantus-reactivated-on-firo/lelantus-reactivation.png"
---
With the [release of Firo v14.6.0](https://github.com/firoorg/firo/releases) and the hard fork completed, [Lelantus]({{ site.baseurl }}/2021/01/06/lelantus-activating-on-firo.html) private transactions have now been re-enabled.

The team, alongside external researchers and auditors, have worked hard to bring Lelantus back online. In addition to our team members Aram Jivanyan, Aaron Feickert, Levon Petrosyan and Peter Shugalev, who have worked tirelessly on this, we would like to thank PinkPanther and Trail of Bits for their assistance in identification of the issue, reviewing the code and cryptography.

Besides closing off the original attack vector, we have taken this opportunity to further harden our implementation of Lelantus with [additional checks](https://github.com/firoorg/firo/pull/1012) as part of a defense-in-depth strategy.

We also would like to thank our community for their understanding and patience as we continue to push the frontiers of research in privacy technology!
