---
layout: guide
title: "Campfire masternode setup guide"
summary: 
tags: [guide]
author: "Anwar P."
permalink: /guide/campfire-masternode-setup.html
---

## Collateral preparation

1. Tap `Receive`. Under `Address Type`, select `Transparent address`. Copy this address.

2. Send exactly **1000 FIRO** to this address

## Registration

1. Tap on the hamburger menu and choose `Masternodes`.

2. Tap on `Create Your First Masternode` if this is your first masternode, or the `+` sign if this is not.

3. Enter the IP address of the VPS together with port number `:8168`.

4. Enter the operator public BLS key.

5. (Optional) You can enter a transparent address for voting address and/or set the operator reward, but these are not needed in most cases.

6. Enter a transparent address to receive the masternode payout. This can be the same address as the collateral address earlier.

7. Press create. Once the transaction is mined, your masternode should be registered.