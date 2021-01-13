---
layout: guide
title: "How to Use Trezor With Firo"
summary: 
tags: [guide]
author: "Sebastian M."
permalink: /guide/using-trezor-with-firo.html
img: "/guide/assets/using-trezor-with-firo/a_trezor.jpg"
---

We’re happy that Firo has [finally been integrated](http://zcoin.io/trezor-adds-zcoin-support-to-both-trezor-one-and-trezor-t/) with Trezor, probably the world’s most widely-used hardware wallet. While the current firmware fully supports Firo, Trezor has announced that we will only “be gradually surfacing in Trezor Wallet” and that coins “can be accessed via third-party applications like Electrum”. In this tutorial we will be showing you two ways to use your  Trezor One or Trezor T with Firo; one using the Trezor Wallet and the other using our version of Electrum, [Electrum-Firo](https://github.com/firoorg/electrum-firo/releases).

## Using Firo with Trezor Wallet

In order to configure add a Firo wallet to Trezor’s web wallet, connect your Trezor, log in to [TREZOR Wallet](https://wallet.trezor.io/) and go to **Wallet settings.** It does not matter which wallet is selected at the top. 

![Configuring Trezor for Firo](/guide/assets/using-trezor-with-firo/trezor_wallet.png)

Disregarding the **Select wallet currency** dropdown on the left, please paste [https://blockbook.firo.org](https://blockbook.firo.org) as both, the _Bitcore Server URL_ and _Explorer URL_. The wallet currency will automatically switch to **Manual configuration.**

![](/guide/assets/using-trezor-with-firo/trezor_blockbook.png)

Click **Save & Reload.**

![Trezor Firo Wallet](/guide/assets/using-trezor-with-firo/trezor_custom_backend.png) 

Note how a new entry called **Custom backend** has appeared at the top. This is your Firo wallet. You can use it to send, receive and sign or verify transactions like with any other Trezor wallet.  

## Using Trezor with Electrum

To use Trezor with Electrum-Firo, please first download Electrum-Firo from [here](https://github.com/firoorg/electrum-firo/releases) and install it. Then connect your Trezor and start Electrum-Firo.

1.  Pick a name and location for your wallet file or accept the defaults

2.  Create a **Standard wallet**

3.  In the **Keystore** selection dialogue, pick **Use a hardware device**

4.  Pick your Trezor as the **Hardware Keystore**

5.  In the **Derivation** dialogue, accept the default path or customise if you know what you’re doing.

Now the Electrum-Firo window will open and you’re ready to go!