---
layout: guide
title: "How to Use Ledger With Firo"
summary: "Instructions on how to use Firo on Ledger with the Electrum-Firo wallet"
tags: [guide]
author: "Anwar P."
permalink: /guide/using-ledger-with-firo.html
img: ""
---
## Installing Firo (Zcoin) on your Leldger

(Follow the guide on Ledger's site)[https://support.ledger.com/hc/en-us/articles/360006543693-Zcoin-Firo-XZC-] to install the Zcoin app on your Ledger. Note that you will need to **install the Bitcoin app first.**

## Setting up Electrum-Firo with your Ledger

Download the latest Electrum-Firo for your operating system and install these on your computer.

Go to File -> New/Restore. 

The Install Wizard will appear. Pick a name for a new wallet or keep the default name default_wallet. Click on Next when done.

Choose **Standard wallet**. Click Next.

Make sure your Ledger is connected and the Zcoin app is open on the Ledger. Choose **Use a hardware device.** Click Next.

At Hardware Keystore, choose **[ledger, initialized, hid].** Click Next.

At Script type and Derivation path, leave everything on default. Click Next.

You will be prompted to encrypt the wallet file. Encrypting your wallet will mean that you will need your Ledger just to view the balance. You will still be prompted to confirm your transaction on the Ledger if you choose not to encrypt the wallet file. If you are unsure, do not encrypt the wallet. Click Next when done.

You should now be able to use Ledger with the Electrum-Firo wallet. Your Ledger will prompt you for confirmation when you are sending Firo or signing a transaction.
