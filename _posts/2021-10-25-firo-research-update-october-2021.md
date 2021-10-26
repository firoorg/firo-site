---
layout: post
title: "Firo Research Update October 2021"
summary: "An update about Lelantus Spark, MTP stripping and Light wallets"
tags: [news, dev, community]
author: "Reuben Yap"
img: "/blog/assets/firo_research_update.png"
---
Here’s an update of what Firo has been researching over the past few months. Most research over the past few months has been focused on improving and hardening Lelantus Spark and we are pleased to share major updates on that front.

We also have been doing research into privacy preserving methods to do light wallets.

## LELANTUS SPARK

## Lelantus Spark: Diversified Addresses

The first major update, diversified addressing, allows users to generate an unlimited number of Spark addresses from a single seed. 

When scanning the chain to identify coins, the user only needs to scan each coin once to identify which (if any) diversified address is the coin's recipient. This feature is similar to diversified addresses in [Zcash](https://z.cash/) and subaddresses in [Monero](https://www.getmonero.org/) and [Seraphis](https://github.com/UkoeHB/Seraphis), may be useful to retailers, exchanges, and other users who require efficient scanning operations when dealing with large numbers of people sending funds to them.

We have engaged auditors to review Lelantus Spark’s cryptography and reviewers will examine two related preprint updates that enable diversified addresses in different ways: [one version](https://github.com/AaronFeickert/spark-paper/tree/diversified-addressing-schnorr) uses Schnorr proofs, while the [other version](https://github.com/AaronFeickert/spark-paper/tree/diversified-addressing) uses an embedded Diffie-Hellman key exchange.

## Lelantus Spark: Threshold Signatures with FROST

The second major update, threshold signing, extends Spark's multisignature capabilities to enable smaller groups of signers to authorize the spending of coins. Multisignature operations allow groups of non-trusting users to collaboratively produce addresses.

When coins are received by such an address, one or more of the users are required to authorize the spending of such coins; notably, Spark requires that these authorizations be indistinguishable from non-multisignature operations.

The original version of the Spark preprint described a multisignature construction based on [MuSig](https://eprint.iacr.org/2018/068) that required the collaboration of all users in the signing group. However, some protocols and applications require threshold signing, where any group of signers (of a specified size) can authorize spend operations.

This is a more complex construction to design securely, so the Spark update under review uses a hybrid approach of techniques from MuSig and [FROST](https://eprint.iacr.org/2020/852) to efficiently enable spend authorizations with arbitrary threshold sizes.

It is important to note that while the Spark multisignature algorithms are based on those of MuSig and FROST, they are distinct from them, and should be considered experimental as they lack separate formal security proofs.

Anyone is welcome to read or review the preprint updates, which are contained in feature branches of [this repository](https://github.com/AaronFeickert/spark-paper), or to make suggestions for fixes and improvements.

The authors hope these updates will prove useful to the ecosystem, and look forward to updating the Spark preprint with the results of review!

## MTP Stripping

As Firo has successfully migrated to [FiroPoW](https://firo.org/2021/10/01/firopow-and-instantsend-release.html), the size of our blockchain will grow at a slower pace keeping node requirements in check. However there remains the issue of existing MTP proofs which occupy 200 kB per block regardless of the transactions within it. We are working on a way to strip such MTP proofs so that they need not be retained which would allow much faster full node syncing and further lower node requirements.

## LIGHT WALLETS

Lelantus Spark is designed to be efficiently used in light wallets and we will be publishing a note on this soon. Firo still retains a transparent layer for legacy and interoperability and until that is phased out, efficient ways to sync a wallet while preserving privacy is required.
 
Currently Firo utilizes Electrum infrastructure to support the backend of light wallets which include third party mobile wallets such as Trust Wallet, Edge and Coinomi. The primary drawback of Electrum is that Electrum can log IP addresses connecting to it and also tie it to the addresses that you look up using it. You will need to trust the Electrum server not to log or use this information. While the core team’s own Electrum infrastructure does not do this, it is best for privacy not to rely on trust.

Our team has been looking at [Neutrino](https://github.com/lightninglabs/neutrino) and [Utreexo](https://dci.mit.edu/utreexo) solutions. Currently we are leaning towards Neutrino due to it being much simpler, not requiring serious consensus changes and is further along in having usable code. We plan to combine Neutrino with Spark support to have a privacy preserving solution to sync Firo wallets in a couple of seconds.
