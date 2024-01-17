---
layout: post
title: "Zcoin's Sigma is released"
summary: "We are proud to finally release Zcoin 13.8.2 which will activate our Sigma privacy protocol"
tags: [news, dev]
author: "Reuben Yap"
img: "/blog/assets/sigma-is-released/banner.jpg"
alt: ""
---

**Update:** This post has been updated to reflect the new Zcoin version and hard fork date. 

We are proud to finally release Zcoin 13.8.2 which will activate our Sigma privacy protocol on block **184,200** or approximately **30 July 2019**. This release is a culmination of work that began in early 2018 and a [testnet launch](https://zcoin.io/sigma-testnet-available-for-public-testing/) in early May 2019. 

Users will need to update their existing wallets and Znodes to 13.8.2 before the hard fork block 184,200\. You can check the latest block height on our [explorer](https://explorer.zcoin.io/).

## Instructions for Users

1.  Backup your existing wallet by going to File > Backup wallet and saving it in a safe location. As we use a new wallet format, the new converted wallet will not be compatible with older versions so it is prudent to keep the old one for safety. 

![](/blog/assets/sigma-is-released/backup.png)

2.  Close your wallet.
3.  Download the new wallet [here]({{ site.baseurl }}/get-firo/download/).
4.  Run the installation or if you prefer just replace the zcoin-qt file.
5.  If you have existing unspent Zerocoins, when the hard fork date rolls about, you will be presented with a Remint tab that will allow you to convert your existing Zerocoins to Sigma mints.
6.  If you are late in upgrading and upgrade past the hard fork date, you may be prompted to [reindex your wallet]({{ site.baseurl }}/guide/reindex-wallet.html).
7.  Needless to say, if you need help, do so only via the official channels in [Discord under #support](https://discord.gg/7Jb4QzK) or Telegram in [Zcoin Support](https://t.me/zcoinsupport)  do not accept help from anyone whom you don't trust. **Team members will NEVER initiate any direct messages or PMs.**

## Instructions For Znode Users

Follow the standard instructions [here](https://zcoin.io/znode-upgrade-guide/) to upgrade. If you upgrade late past the hard fork date, you will be prompted to reindex your wallet.

## Other Improvements in this Release

Although our rich graphical GUI is still under development, our QT wallet layout has been updated to make significantly easier to do Sigma mints and spends. The wallet can now automatically pick the right denominations and can also automatically remint any change to prevent privacy leakage. 

![](/blog/assets/sigma-is-released/sigmaqt.png)

Fees for Sigma mints and spends have also been adjusted to be dynamic based on size and are much cheaper than before instead of a fixed fee. 

MTP verification performance has also been improved by about 20-30% through software optimizations.

## Learning more about Sigma

The [Sigma privacy protocol](https://zcoin.io/what-is-sigma-and-why-is-it-replacing-zerocoin-in-zcoin/) represents a very important innovation in blockchain privacy as it combines the high privacy of zero knowledge proof schemes without many of its associated drawbacks. It provides a compelling alternative to zkSNARKs which has very high anonymity and great performance but does this at the cost of [trusted setup](https://zcoin.io/ufaqs/what-is-trusted-setup/), exotic cryptography and complicated constructions that are prone to errors. 

It is based off the paper [Groth, J. and Kohlweiss, M. (2015). One-Out-of-Many Proofs: Or How to Leak a Secret and Spend a Coin](https://www.iacr.org/archive/eurocrypt2015/90560252/90560252.pdf) which was further optimized in [Short Accountable Ring Signatures based on DDH.](https://eprint.iacr.org/2015/643) 

Sigma also forms an essential building block of our upcoming [Lelantus privacy protoco](https://zcoin.io/lelantus-zcoin/)l which further expands Sigma's capabilities and privacy. To find out more about Sigma you can read on [here](https://zcoin.io/what-is-sigma-and-why-is-it-replacing-zerocoin-in-zcoin/).   

![](/blog/assets/sigma-is-released/zcoin_table_coloured5-01.png)