---
layout: post
title: "New Wallet Beta Release"
summary: "We are happy to launch a beta release of our new wallet interface"
tags: [news, dev]
author: "Reuben Yap"
img: ""
alt: ""
---
We are happy to launch a beta release of our new wallet interface. We want to make using Zcoin a great experience, and our new wallet aims to do this along with encouraging users to use our Sigma privacy features. [Download it now!](https://github.com/firoorg/firo-client/releases) Here are ways that we are improving the wallet experience compared to the original Qt interface!

## Anonymity Loves Company

The more people keep their funds anonymized in [Sigma]({{ site.baseurl }}/2019/03/20/what-is-sigma.html), the more anonymous everyone becomes! Our wallet now prompts to keep a certain percentage of your funds anonymized in Sigma, and this setting is configurable. 

![](/blog/assets/new-wallet-beta-release/privacy.png) 

The wallet prompts anytime you start it up or whenever you receive new funds! 

![](/blog/assets/new-wallet-beta-release/suggestions.png) 

It will let you know how the anonymization process is going. 

![](/blog/assets/new-wallet-beta-release/progress.png) 

And show you clearly how your funds were broken down into each denomination. 

![](/blog/assets/new-wallet-beta-release/anonymize.png)

## Znode Management


We have also made it easier to start nodes that are missing or new by showing a Start Znode button when its status is not Enabled and to quickly view them on the block explorer. ![](/blog/assets/new-wallet-beta-release/znodes.png)

## What we are working on

We wanted to get this new wallet out into the hands of our users as soon as possible, but there remains much to do! In the next few releases, we will be focusing on

*   Address book
*   Mnemonic backup
*   Inbuilt swap capability with Bitcoin/Ethereum without requiring KYC to serve as a conduit for anonymizing these assets.
*   Translation support especially for Chinese.

In the mid to long term we will also be working on:

*   More granular coin control
*   Receiver Address Privacy (BIP47 Payment Codes) address support
*   Light wallet mode
*   Znode wizard creation
*   Interaction with Exodus (Zcoin tokenization layer) tokens.

We will continue releasing both Qt versions and the revamped wallet versions incrementally but the intention is to transition fully to this wallet interface eventually. 

Please give it a go and let us know what you think!