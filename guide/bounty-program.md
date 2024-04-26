---
layout: guide
title: "Firo Vulnerability Bounty Program"
summary: 
tags: [guide]
author: "Firo Team"
permalink: /guide/bounty-program.html
---

These are the details of the FIRO vulnerability bounty program to encourage the developer/researcher community to review and contribute to our code.

We are only accepting reports in relation to [Firo's master branch](https://github.com/firoorg/firo/tree/master). For the avoidance of doubt, we are not accepting submissions for website vulnerabilities or attacks that require >50% of the hashing power and of course, previously disclosed vulnerabilities.

Vulnerability reports are to follow [HackerOne’s Disclosure Guidelines](https://www.hackerone.com/disclosure-guidelines). Failure to follow these guidelines and the rules below may result in the bounty not being honored.

Vulnerabilities are organized into three categories.

### Critical: 10,000 up to 50,000 USD (in FIRO equivalent)

A critical vulnerability is such that impacts the Firo network as a whole, has potential to break the entire Firo network, completely removes the anonymity of Lelantus, results in the loss of Firo, or is on a scale of great catastrophe.

Example: A vulnerability that allows forged Lelantus spends to inflate coin supply.

### Major: 1,000 up to 10,000 USD (in FIRO equivalent)

A major vulnerability is such that it impacts individual nodes, routers, wallets, reduces the anonymity of Lelantus significantly (timing attacks excluded) or must be carefully exploited.

Example: The paper [Burning Zerocoins for Fun and Profit](https://www.chaac.tf.fau.de/files/2018/04/attack-cryptocur.pdf). 

### Minor: 100 up to 1,000 USD (in FIRO equivalent)

A minor vulnerability is one that has low impact or cannot be exploited easily.

If there is a dispute over the severity of a vulnerability, the Firo's team’s assessment will be definitive.

# Submission Procedure

Submissions should be sent to

reuben@firo.org

If the vulnerability is major or critical, the submission must be sent in PGP encrypted e-mail to the following address:

reuben@firo.org [PGP Public key](https://github.com/firoorg/firo/blob/master/reuben.asc)

Please remember to include your PGP public key so we can have encrypted communications.

# FAQ

## How long till I receive a response?

We aim to respond to all vulnerability reports within 3 working days. Upon responding, we will make inquiries to confirm whether the submission is indeed a vulnerability. In either case, we will respond to confirm the vulnerability or provide a reason for why it is not a vulnerability.

## How would the vulnerability be fixed?

Upon confirmation of the vulnerability, a private GitHub repo will be opened where the patch will be worked on together/reviewed with the researcher. Once this is completed, the vulnerability disclosure will be drafted and the release date discussed.

## I reported a vulnerability but have not received a response!

Please allow up to 3 working days for an initial response. Also, realize that spam filters and email, in general, can sometimes be problematic. If you ever feel we are not communicating in a timely fashion, definitely let us know.

## Would I receive credit for the submission?

By default, we will disclose the researcher that found the vulnerability along with the amount awarded. If you wish this information to be kept private, please let us know and we will honor your request.

## How are bounty payments made?

All bounties will be paid in FIRO based on the prevailing USD rate as determined by Coingecko’s average price at the time the patch is released.

## What is the PGP Public key?

[github.com/firoorg/firo/blob/master/reuben.asc](https://github.com/firoorg/firo/blob/master/reuben.asc)