---
layout: post
title: "Anonymize your Firo with Lelantus and Win!"
summary: "To celebrate the reactivation of Lelantus and to encourage use of Lelantus anonymization transactions, we are holding a month long community event where anybody who anonymizes with Lelantus stands a chance to win Firo!"
tags: [news, community]
author: "Reuben Yap"
img: "/blog/assets/anonymize-and-win.png"
---
There is a huge random element to win but the more often you anonymize your funds with Lelantus and the bigger the amount, the higher the chance you stand to win. We will credit the prizes directly to the address that anonymized the funds so your privacy is retained!

1. Only Lelantus mints from blocks 369,000 to 377,630 will be eligible for this contest. Lelantusjmints are not counted.
2. **Only mints of size 1 FIRO** and above are factored in. This is to discourage spam transactions.
3. Addresses that have multiple mints from a single address are excluded. This is to discourage address re-use which undermines privacy.

Things to avoid:
1. If you are sending using Lelantus to your own address, **make sure that the address is fresh and unused**. Duplicate addresses are excluded from selection
2. **Do not redeem the entire amount you have anonymized** and **avoid redeeming amounts that have the exact same amount you minted**. This is to prevent correlation analysis based on amounts.

## Prizes:

1st Prize: 400 FIRO  
2nd Prize: 250 FIRO  
3rd to 10th prize: 25 FIRO  
11th to 25th prize: 10 FIRO  

We recommend using our official [QT wallet](https://github.com/firoorg/firo/releases) to anonymize. If you want more fine grained control over your Lelantus mints, you can go to *Settings>Options>Wallet>Enable lelantus manual-anonymize* page.

For those who are curious on the exact formula on how the winners are selected can view the process below which is done deterministically so people can verify the results:

1. Collect all qualifying Lelantus mints (value equal or above 1 FIRO, made within blocks 369,000 to 377,630 and not minted from an address with previous Lelantus mints during the period)
2. Calculate sha256 hash of the collected mints
3. Initialize python standard PRNG with the sha256 hash
4. Run PRNG to produce 25 results
5. Sort the results based on their minted amounts
