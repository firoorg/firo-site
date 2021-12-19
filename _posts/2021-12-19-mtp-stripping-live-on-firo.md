---
layout: post
title: "MTP stripping live on Firo"
summary: "Smaller blockchain is here!"
tags: [news, dev, community]
author: "Reuben Yap"
img: "/blog/assets/day-4-mtp-stripping.png"
---
[MTP stripping](https://firo.org/2021/11/08/mtp-data-stripping.html) is now live on Firo with [our latest release.](https://github.com/firoorg/firo/releases) MTP stripping brings down the size of Firo’s blockchain from over 60+ GB to under 4 GB bringing down node requirements and also making it practical to run on your regular computing device especially on SSDs where space is precious.

MTP stripping works by removing unneeded [MTP data proofs](https://arxiv.org/pdf/1606.03588.pdf) from our previous PoW. Nodes can still choose to retain these proofs if needed. As more nodes use the MTP stripping mode, nodes will also push older blocks in stripped form, greatly reducing the amount of data required to do a fresh sync.

## How to Use MTP Stripping

A new fresh sync would automatically strip MTP proofs. If you have an existing installation that you want to use the stripped version, you would need to clear off your existing downloaded blockchain (but don’t delete your wallet) and resync which may take a while so only do this if you’re not in a hurry to use your wallet.

Follow [this guide](https://github.com/firoorg/firo/wiki/MTP-stripping) to use MTP stripping. Make sure you backup your wallet!
