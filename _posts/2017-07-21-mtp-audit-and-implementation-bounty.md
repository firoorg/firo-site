---
layout: post
title: "Bounty for MTP Audit ($10,000) and MTP Implementation ($2,500)"
summary: ""
tags: [news, dev]
author: "Reuben Yap"
img: ""
alt: ""
---
[MTP (Merkle Tree Proof)]({{ site.baseurl }}/2016/12/27/what-is-mtp-merkle-tree-proof.html) is a new proof of work algorithm that was presented at the USENIX Security Symposium 2016 and has attracted substantial attention from the cryptocurrency and academic community. To further encourage research and scrutiny into MTP, we are sponsoring two bounties. These are separate bounty challenges from the [MTP miner development competition](https://zcoin.io/mtp-open-source-miner-bounty-challenge/). 

[![](/blog/assets/mtp-audit-and-implementation-bounty/Zcoin-iconpack.png)](https://zcoin.io/what-is-mtp-merkle-tree-proof-and-why-it-is-important-to-zcoin/)

## MTP Audit Bounty: 10,000 USD Total

### Rules

*   Anyone who manages to find an attack or cheating strategy on the principles in the [MTP paper](https://www.usenix.org/system/files/conference/usenixsecurity16/sec16_paper_biryukov.pdf) will be entitled to claim a share of the bounty.
*   Findings from [Dinur and Nadler's work](https://eprint.iacr.org/2017/497.pdf) are excluded as they have already been addressed. However an attack on 'data-independent MTP' as described in the same paper would be eligible.
*   A submission can contain multiple attack/cheat strategies.
*   In the event of submissions from different parties that involve the same attack vector/cheating strategy, only the first submission as received by the Zcoin team shall be eligible to the bounty.
*   Submissions will be made public though the Zcoin team reserves the right to determine the date of publication. Submitters are not allowed to disclose early. We will publish submissions on this [Github wiki page](https://github.com/zcoinofficial/zcoin/wiki/MTP-Audit-and-Implementation-Bounty-Submissions).
*   This bounty does not reward the finding of implementation bugs of MTP in Zcoin which is dealt with in the MTP Implementation Bounty below.
*   Submissions are to be made to our e-mail **team@zcoin.io** and should include a proposed fix if possible. **Please include Bitcoin or Zcoin adddress that you will receive the reward in your submission.**
*   Deadline of submission is **30 September 2017** but remember it is better to submit early as duplicates are not rewarded.

### How Bounty is Distributed

*   A total of USD 10,000 is available for this bounty.
*   If there are a few attack vector/cheating strategies submitted from different people, the MTP Attack Bounty is divided per unique attack vector/cheating strategy.
*   Submissions that include a proposed fix to MTP are given double weightage in dividing the bounty. If there is only one submission under the MTP Audit Bounty but it does not include a fix, the bounty payable shall only be USD5,000.00
*   E.g. Tom finds 3 attack vectors but does not give any fixes for them and Amy finds 1 attack vector and gives a fix for it. Therefore the bounty of USD10,000 is divided as follows. USD6,000 to Tom and USD4,000 to Amy.
*   Bounty is to be paid in BTC (following Bitstamp price) or XZC (following Bittrex price) equivalent upon announcement of MTP Audit Bounty winners.

We reserve the right to extend the deadline for the miner dev competition in the event a flaw is found. The time of extension shall take into account the time required to make modifications to the miner to accommodate any fixes.

## MTP Implementation Bounty : 2,500 USD TOTAL

### Rules

*   Anyone who manages to find an implementation or coding error that allows an attack/cheating strategy on Zcoin's implementation of MTP as in this tree: [https://github.com/zcoinofficial/zcoin/tree/mtptest](https://github.com/zcoinofficial/zcoin/tree/mtptest) and provide the fix to it will be entitled to claim a share of the bounty.
*   A submission can contain multiple bugs/errors.
*   In the event of submissions from different parties that involve the same bug/error, only the first submission shall be eligible to the bounty.
*   Submissions will be made public though the Zcoin team reserves the right to determine the date of publication. Submitters are not allowed to disclose early. We will publish submissions on this [Github wiki page](https://github.com/zcoinofficial/zcoin/wiki/MTP-Audit-and-Implementation-Bounty-Submissions).
*   This bounty does not reward the finding of attack vectors/cheating strategy in MTP itself which is covered in the MTP Audit Bounty above.
*   Submissions are to be made to our e-mail **team@zcoin.io** and **must include fix. Please include Bitcoin or Zcoin adddress that you will receive the reward in your submission.**
*   Deadline of submission is **30 September 2017** but remember it is better to submit early as duplicates are not rewarded.

### How Bounty is Distributed

*   A total of USD2,500.00 is available for this bounty. However, the team may at its discretion reserve the right to increase this bounty.
*   If there are a few coding errors submitted from different people, the MTP Implementation Bounty is divided per error/bug. The team reserves the right to determine what constitutes a single error/bug.
*   Bounty is to be paid in BTC (following Bitstamp price) or XZC (following Bittrex price) equivalent upon announcement of MTP Implementation Bounty winners.