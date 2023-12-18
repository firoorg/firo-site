---
layout: post
title: "Enabling Direct Untraceable Anonymous Payments in Lelantus"
summary: "Direct anonymous payments which hide sender, recipient and value; only showing that a valid transaction has happened is the holy grail of privacy."
tags: [news, dev]
author: "Reuben Yap"
img: "/blog/assets/direct-untraceable-anonymous-lelantus/anonpay_in_lelantus.jpg"
alt: ""
---
Zcoin's privacy comes from its unique mechanism of allowing people to destroy coins and then allow them to redeem them for brand new coins with no previous transaction history which is in our opinion, is superior to other privacy methods which involve mixing or hiding in a crowd.

An easy to visualize how the **"burn and redeem"** privacy mechanism works is imagine money disappearing from one wallet and then at any time after that, magically reappearing in another wallet without showing how it appeared there. This is the basic concept behind Zerocoin (no longer in use) and [Sigma]({{ site.baseurl }}/2019/03/20/what-is-sigma-and-why-is-it-replacing-zerocoin-in-zcoin.html) (which is what Zcoin uses today).

When we revealed [Lelantus,]({{ site.baseurl }}/2019/04/14/lelantus-firo.html) our next gen privacy protocol, we saw it as a matured version of this “burn and redeem” privacy approach combining

* High anonymity sets (~100k)
* No fancy cryptography with an easy to understand construction
* No trusted setup
* No need for fixed denominations.

## Enabling Direct Anonymous Payments

However for the highest level of privacy, direct anonymous payments which hide sender, recipient and value, only showing that a valid transaction has happened is the holy grail of privacy.

The original version of Lelantus had some limited support for this but required the receiver to redeem first (revealing the amount) and then burning it again. This problem is what we call the “self spend” issue which made direct anonymous payments inefficient and bad from a usability standpoint. This is why we had directed research to find a solution to this problem and after some months of work we have made further improvements to the Lelantus protocol.

The new updated Lelantus protocol has roughly equivalent performance characteristics with the original Lelantus with some minor differences:

* Mints are slightly larger (couple of bytes)
* Direct anonymous sends are now slightly smaller
* Balance proofs with multiple inputs are slightly larger
* Range proofs are slightly smaller.

## Things Left to Do

The construction laid out in this addendum to the Lelantus paper is informal and lacks security analysis for the moment which we will be working on. We are putting this paper out early to seek feedback and validation of the ideas posed.

The construction also prevents address re-use meaning the recipient always has to produce a new address for each transaction and it would be ideal to come up with a system to allow some form of ‘stealth addressing’.

## Special Thanks

We would like to extend special thanks to [Sarang Noether](https://github.com/SarangNoether) from [Monero Research Lab](https://web.getmonero.org/resources/research-lab/) who throughout the process gave invaluable feedback and evaluation of the new Lelantus protocol along with proof reading and improving the quality of the paper.

## Learn more about Lelantus

[Link to paper on enabling Direct Untraceable Anonymous Payments in Lelantus](https://lelantus.io/enabling-untraceable-anonymous-payments.pdf)

[Gitter link to discussion on Lelantus and Lelantus variants (such as Lelantus-MW)](https://gitter.im/lelantus-protocol/)

[Telegram link to Lelantus discussion (bridged with Gitter)](https://t.me/lelantus)

## Presenting at CESC

We will be presenting Lelantus at the upcoming [CESC conference.](https://cesc.io/)

![](/blog/assets/direct-untraceable-anonymous-lelantus/EDzgxj8XsAEgnw9.jpg)