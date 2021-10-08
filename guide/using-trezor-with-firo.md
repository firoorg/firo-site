---
layout: guide
title: "How to Use Trezor With Firo"
summary: 
tags: [guide]
author: "Sebastian M."
permalink: /guide/using-trezor-with-firo.html
img: "/guide/assets/using-trezor-with-firo/a_trezor.jpg"
---

# How to use Trezor with Firo

This guide is correct for Trezor One and Trezor T with firmwares 1.10.3 or 2.4.2. 

Firo is currently not supported in the [Trezor Wallet web interface](https://wallet.trezor.io) or [Trezor Suite.](https://suite.trezor.io/)

## Setting up Trezor with Electrum Firo

1. Download the latest version of Electrum-Firo from [https://github.com/firoorg/electrum-firo/releases](https://github.com/firoorg/electrum-firo/releases)

2. Create a new wallet with **File -> New/Restore.**

3. The Install Wizard will appear. Pick a name for a new wallet or keep the default name default_wallet. Click on **Next** when done.

4. Choose **Standard wallet.** Click **Next.**

5. **Choose Use a hardware device.** Click **Next.**

6. At Hardware Keystore, choose **[Trezor, initialized].** Click **Next.** Enter your PIN when prompted.

7. At Script type and Derivation path, leave everything on default. Click **Next.**

8. You will be prompted to encrypt the wallet file. Encrypting your wallet will mean that you will need your device just to view the balance. You will still be prompted to confirm your transaction on the device if you choose not to encrypt the wallet file. If you are unsure, do not encrypt the wallet. Click Next when done.

## Using Trezor with Electrum Firo

1. Start Electrum Firo with your Trezor hardware wallet connected. Enter your PIN when prompted.

2. You should now be able to access your funds on Electrum Firo.
