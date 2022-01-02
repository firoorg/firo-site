---
layout: guide
title: "Guide for creating a token on the Elysium layer"
summary: 
tags: [guide]
author: "Anwar P."
permalink: /guide/elysium.html
---
## Prerequisites

You must use the Elysium Testnet releases [on this page.](https://github.com/firoorg/firo/releases)

The wallet must be started with the flags `-testnet -elysium`

You will need both transparent and private balances on the FIRO base layer in order to perform the Elysium transactions. If you get any errors, please check if the address you are sending from has sufficient transparent balance on the base layer.

## Creating a token

There are two types of tokens on Elysium: fixed supply tokens and managed supply tokens. Fixed supply tokens have a fixed supply as the name implies while managed supply tokens can have their supply increased or decreased, depending on the issuer.

To create a new token, go to Elysium tab -> Create.

1. Name: the name of your token.
2. Address: the address of the issuer, in most cases yourself.
3. Category
4. Subcategory
5. URL
6. Data: a description of your token (256 characters maximum)
7. Ecosystem
8. Amount: if creating a fixed supply token, enter the amount here. If creating a manged supply token, this box is greyed out.
9. Divisible: check to ensure that your token is divisible up to 8 decimal points. If unchecked, your token can only be natural numbers (e.g. 1, 2, 3)
10. Managed: if you wish for this token to be a managed supply token, ensure that the Managed checkbox is ticked.

Click on the Create button once you are ready. Your token will be created once the transaction is mined.

For managed tokens, you will need to issue the tokens before any balance will show. For fixed tokens, the whole balance will be in the issuer's address after the create token transaction is mined.

## Token management

Managed tokens can be issued to an address in the **Managed Tokens** tab.

## Sending and receiving tokens with Lelantus

Your tokens and their balances can be checked in the **Balances** tab. Elysium transactions only show up in the **Elysium->Transactions** tab, and not on the main wallet's Transaction tab.

You can use the **Send** tab to send tokens to an address. As this is private-by-default, it requires FIRO private balance on the base layer. A minimum of two mints in the token's pool is required before you can use the Send function.

You can anonymise (mint) tokens in your wallet using the **Anonymize** tab.

Transparent tokens can be sent by using the `elysium_send` command.

## Other RPC commands
