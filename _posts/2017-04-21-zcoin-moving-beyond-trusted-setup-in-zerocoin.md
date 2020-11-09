---
layout: post
title: "Zcoin moving beyond trusted setup in Zerocoin"
summary: "Solving the trustless setup problem through the use of the Sigma protocol"
tags: [news, dev]
author: "Reuben Yap"
img: ""
alt: ""
---

## What is a Trusted Setup?

Zero knowledge setups offer amazing anonymity with anonymity sets exceeding thousands compared to previous anonymity schemes that typically only offer a dozen or so. One of the primary criticisms of Zerocoin and other zero knowledge coins like Zcash is that it requires a **'trusted setup'** phase. A trusted setup means you need to trust someone to generate some initial parameters and then destroy those parameters.

A way to visualize it would be akin to making a lock and then trusting that person to destroy the only key to it. It is however not easy to prove that the key was destroyed, for e.g. in our example scenario, was a duplicate made somewhere? Or a photo taken of the key before it was destroyed? The same type of problems exist when trying to prove that the initial parameters were permanently destroyed and not known by anyone.

The consequences of having the initial parameters leaked is that someone can generate coins out of thin air by doing forged Zerocoin spend transactions. In Zcoin, this is mitigated somewhat by having an auditable supply.

## How is Trusted Setup implemented in Zcoin?

Zerocoin as implemented in Zcoin and in the original paper currently uses RSA accumulators which require the generation of two large [prime numbers.](https://en.wikipedia.org/wiki/Prime_number) We utilized the RSA-2048 parameters generated in 1991 from the [RSA factoring challenge](https://www.emc.com/emc-plus/rsa-labs/historical/the-rsa-factoring-challenge-faq.htm) which was an academic challenge to learn about the difficulty of factoring large number and the parameters we used had a **USD200,000** prize if someone managed to factor it. To this day, no one has claimed the prize or announced a successful factorization of RSA-2048 with the last publicly successful factorization at RSA-768.

Using the RSA factoring challenge parameters meant that you did not need to trust the Zcoin developers and only trust that the parameters from the RSA factoring challenge remained secure. For further reading on the RSA factoring challenge, you can read more [here.](https://github.com/firoorg/firo/wiki/Parameters-in-set-up-phase-for-Zerocoin-in-Zcoin) However, we recognize that having a trusted setup is not ideal and it was always in our roadmap to implement a trustless setup. There has been previous attempts to remove the trusted setup in Zerocoin and the most well known one was the proposed use of RSA UFOs which thus far have been impractical to implement.

## How Zcoin is removing the trusted setup

We are therefore very happy to announce that we believe we have found the answer in solving the trustless setup problem through the use of the [Sigma protocol](https://eprint.iacr.org/2014/764.pdf)  in Zerocoin as detailed by Jens Groth and Markulf Kohlweiss from University College London and Microsoft Research.

In a nutshell, the **Sigma (Σ) protocol** does the following:

* No more trusted setup

* RSA accumulators are replaced with elliptic curve groups

* Reduction of Zerocoin proof sizes from 25 kb to around ~1kb allowing more Zerocoin transactions per block and making Zcoin much more scalable.

* Higher security using 256-bit elliptic curves roughly equivalent to 3072 bit RSA (currently we are using 2048 bit RSA)

We have also found the Sigma (Σ) protocol implemented in existing open source repositories greatly reducing the amount of work required to implement it in Zcoin. The Zcoin team will need to further examine its verification speed and computation time using the Sigma (Σ) protocol. We plan to implement the Sigma (Σ) protocol after MTP completion and Znodes. We are of the opinion that once Zcoin implements the Sigma (Σ) protocol, we would have a very compelling solution, offering the power and large anonymity sets of zero knowledge proofs with low proof size without having to trust anyone with the generation of initial parameters which is required in [other zero knowledge setups such as in Zcash.](https://petertodd.org/2016/cypherpunk-desert-bus-zcash-trusted-setup-ceremony)

## Update on MTP Development

We know many of you are eager to hear about how we are coming along with MTP since we released it on Zcoin’s testnet. MTP continues to be tested and the dev team has made good progress on it with no major hurdles encountered.

We are also testing various parameters to achieve a good balance between GPU and CPU performance while remaining ASIC resistant. We continue to work towards releasing MTP on mainnet as soon as possible along with GPU miners. It is promising to see so many top devs interested in the work we do and have received a lot of constructive feedback on it. We welcome anyone who wishes to work with us in improving MTP!

Once we have finalized the parameters, we will hold a competition  to develop MTP miners with attractive bounties to incentivize efficient open sourced miners to the public.
