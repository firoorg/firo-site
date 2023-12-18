---
layout: post
title: "What is Sigma and why is it replacing Zerocoin in Zcoin?"
summary: "Sigma is Zcoin’s upcoming replacement to Zerocoin"
tags: [news, dev]
author: "Reuben Yap"
img: "/blog/assets/what-is-sigma/banner.jpg"
alt: ""
---

**Updated on 9 July 2019** 

Sigma is Zcoin's upcoming replacement to Zerocoin that is set to be activated on our mainnet on the 23 July 2019\. It makes significant improvements over Zerocoin in three areas:

*   Removal of trusted setup
*   Reduction of proof size from 25 kB to 1.5 kB
*   Improved Security

## Trusted Setup

Since the beginning of Zcoin, we have always seen the "**trusted setup**" problem as a big drawback. In a trusted setup, some secret (public) parameters are generated based on a “master private key”. These network parameters are needed to create the so called “zero-knowledge proofs”, which is the anonymizing technology that we use. The “master private key”, sometimes referred to as toxic waste, needs to be destroyed.  If this data is not destroyed, someone who has access to this key is able to generate an infinite amount of anonymous coins. In fact, one of the major criticisms of [Zerocash and zkSNARKs (not to be confused with Zerocoin as used in Zcoin)](https://zcoin.io/zcoin-and-zcash/) as implemented in Zcash is its requirement to have a [controversial trusted setup.](http://weuse.cash/2016/10/28/the-untrusted-setup/) 

An easy way to visualize trusted setup is that you create a box with a lock on it and its corresponding key. Possession of the key will allow you to create unlimited treasure from the box and therefore the key has to be destroyed. Trusted setup is effectively trusting that the key was destroyed. 

Zerocoin as implemented by Zcoin uses a [trusted setup performed by a third party in an academic challenge called the RSA Factoring Challenge in 1991](https://github.com/firoorg/firo/wiki/Parameters-in-set-up-phase-for-Zerocoin-in-Zcoin) where the incentive to insert a backdoor is low and there was a sizeable bounty on it to break it. Although this is a decent implementation with a low chance of it being compromised, we believe the whole purpose of blockchain is to build systems that do not require trust, and that same principle applies to our privacy system as well. In fact, Zcoin's initial release in 2016 was delayed as our founder Poramin Insom spent many months trying to remove trusted setup through the use of RSA UFOs which proved to be unworkable and had to settle for the RSA Factoring Challenge parameters. 

Sigma is based on the academic paper [One-Out-Of-Many-Proofs: Or How to Leak a Secret and Spend a Coin (Jens Groth and Markulf Kohlweiss)](https://eprint.iacr.org/2014/764.pdf) which replaces RSA accumulators by utilizing Pedersen commitments and other techniques which cryptographic construction does not require trusted setup. The only system parameters required in the Sigma setup are ECC group specifications and the group generators. This construction was further optimized in the paper [Short Accountable Ring Signatures based on DDH (Jonathan Bootle, Andrew Cerulli, Pyrros Chaidos, Essam Ghadafi, Jens Groth and Christophe Petit).](https://eprint.iacr.org/2015/643.pdf)

![](/blog/assets/what-is-sigma/oneoutofmanyproofs.png)

**Proof Sizes and Security**

Proof sizes are significantly reduced from 25 kB in Zerocoin to 1.5 kB in Sigma which is almost a 17x reduction making it a lot cheaper to store on the blockchain and making it possible to fit much more private send transactions in a block. We also utilize the improved Sigma techniques in the paper [Short Accountable Ring Signatures Based on DDH](https://eprint.iacr.org/2015/643/20150630:200838) to reduce proof sizes further. This solves one of the biggest problems of Zerocoin without reducing its security. 

Security via the usage of 256 bit ECC curves in Sigma is improved compared to 2048 bit RSA used in Zerocoin and is estimated to be equivalent to 3072 bit RSA. 

Our implementation also uses Pippenger and Straus' multi exponentiation algorithms for further verification efficiency.

## Opens the way to Lelantus

Sigma is a precursor to our next gen privacy protocol [Lelantus](https://eprint.iacr.org/2019/373) developed by our cryptographer Aram Jivanyan which further builds on Sigma and greatly expands its functionality and privacy features by removing the need for fixed denominations in minting and spending. Deploying Sigma gives us the necessary time to develop Lelantus properly while it undergoes academic peer review and further improvements. To learn more about Lelantus, you can go [here]({{ site.baseurl }}/2019/04/14/lelantus-firo.html).

## Quick Comparison

![](/blog/assets/what-is-sigma/zcoin_table_coloured5-01.png)