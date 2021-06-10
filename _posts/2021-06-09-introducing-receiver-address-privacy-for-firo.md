---
layout: post
title: "Introducing Receiver Address Privacy for Recurring Firo Payments"
summary: "Firo launches RAP addresses on mainnet to provide on-chain recipient privacy."
tags: [news, dev, community]
author: "Reuben Yap"
img: "/blog/assets/rap-launch/rap-launch.png"
---
We are proud to announce the launch of Receiver Address Privacy (RAP) on Firo’s mainnet! RAP allows users to post their RAP address publicly without compromising on privacy. You can share your RAP address in the same way you share an email address. No one can tell how many payments you have received or which transactions are yours even if they have your RAP address.

RAP addresses seek to solve the problem of address re-use. Today if you posted your Bitcoin or Ethereum address publicly, someone could look up the address on a blockchain explorer and know exactly how much you have received using that address and all activities associated with it. The same problem also occurs if you have a recurring payment, for e.g. a salary payment where if you use a single address for it, someone can easily know how much you are being paid. The recommended way to overcome this is for the payee to keep sharing freshly generated addresses but this is often cumbersome.

RAP addresses solve this by serving as a special type of address you can safely re-use because each sender to a RAP address can derive up to 2 billion deposit addresses that are unique to them.

## How does it work? 

RAP addresses are an adaptation of [BIP47 Reusable Payment Codes](https://github.com/bitcoin/bips/blob/master/bip-0047.mediawiki) by Justus Ranvier and also popularized by [Samourai wallet for Bitcoin.](https://blog.samouraiwallet.com/post/137698771697/why-were-bringing-reusable-payment-codes-to-the) They work by sending a one-time notification transaction on-chain to the receiver which establishes a payment channel between the sender and receiver. The sender can then automatically derive new addresses without the receiver’s further input. This all happens using the existing blockchain network without requiring any third party servers. Unfortunately, due to the lack of on-chain privacy mechanisms on Bitcoin, this notification transaction can be a privacy leak as it establishes a relationship between one of the sender’s addresses with the receiver.

Firo’s implementation of BIP47 in RAP addresses differs in one significant way: the sender sends the notification transaction in a [private Lelantus transaction](https://firo.org/2021/01/06/lelantus-activating-on-firo.html) so that the source of the notification transaction is unknown which solves this privacy leak.

Firo’s implementation is also the first complete implementation of BIP47 in C++ and on a desktop wallet.

## How can Firo users access this feature?

RAP addresses are currently accessible via Firo’s latest official QT wallet v14.7.0 and work is being done to integrate it into our desktop Electron wallet. RAP addresses are a soft fork so the upgrade and adoption of these addresses are optional.

![](/blog/assets/rap-launch/rap1.png)

![](/blog/assets/rap-launch/rap2.png)

All funds held in RAP addresses can be restored using the same mnemonic seed words that back up your wallet.

## How does it differ from traditional stealth addresses?

RAP addresses have similar utility to stealth addresses. Different implementations of stealth addresses have some disadvantages like a need to extensively scan the whole blockchain or have a secure channel to share the keys. RAP addresses do not have such drawbacks.

Furthermore, payments to RAP addresses are indistinguishable from any other transaction and therefore cannot be identified or censored.

Check out Splineapple’s video overviewing the release: [https://www.youtube.com/watch?v=9Qk-X0vnV5M](https://www.youtube.com/watch?v=9Qk-X0vnV5M)

We’re excited to have successfully implemented RAP addresses into Firo; solving an important part of onchain privacy, namely receiver privacy. We also would like to give a special shoutout to our core developer Andrey Bezrukov who did most of the heavy lifting in implementing RAP addresses and [Arcadia Group](https://arcadiamgroup.com/) who provided an early working implementation which was partially funded through our [Community Crowdfunding System.](https://ccs.firo.org)