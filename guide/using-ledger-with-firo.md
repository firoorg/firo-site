---
layout: guide
title: "How to Use Ledger With Firo"
summary: "Instructions on how to use Firo on Ledger with the Electrum Firo wallet"
tags: [guide]
author: "Anwar P."
permalink: /guide/using-ledger-with-firo.html
img: ""
---
A Ledger Device is a hardware wallet that is considered one of the most secure ways to store your digital assets. Ledger uses an offline, or cold storage, method of generating private keys, making it a preferred method for many crypto users. This guide will help you to connect your Ledger device to the Electrum Firo light wallet. The Electrum Firo light wallet enables you to Send and Receive FIRO, and setup Firo masternodes with the Ledger Device with the assistance of the Firo Masternode Tool.

**Firo accounts cannot be added to the Ledger Live app.**

## Requirements

* Set up Ledger live with your device.

* Update the firmware on your device.

* Install the **Bitcoin app** as Firo requires it.

* Install the [latest version of Electrum Firo.](https://github.com/firoorg/electrum-firo/releases/latest)

## Installing the Firo app

1. Open the **Manager** in Ledger Live.

2. Connect and unlock your device.

3. If asked, allow Ledger Manager on your device.

4. Find **Firo** in app catalog.

![](/guide/assets/ledger/electrum-ledger-install-02.png)

5. Click the Install button of the app.

    Your device will display **Processing…**
	
    The app installation is confirmed.

## Setting up your Ledger device with Electrum Firo

1. Download the latest version of Electrum Firo from [https://github.com/firoorg/electrum-firo](https://github.com/firoorg/electrum-firo/releases)

2. Create a new wallet with **File -> New/Restore.**

3. The Install Wizard will appear. Pick a name for a new wallet or keep the default name default_wallet. Click on **Next** when done.

4. Choose **Standard wallet.** Click **Next.**

![](/guide/assets/ledger/electrum-ledger-create-02.png)

5. Make sure your device is connected and the Firo app is open on the device. Choose **Use a hardware device.** Click **Next.**

![](/guide/assets/ledger/electrum-ledger-create-03.png)

6. At Hardware Keystore, choose **[ledger, initialized, hid].** Click **Next.**

![](/guide/assets/ledger/electrum-ledger-create-04.png)

7. At Script type and Derivation path, leave everything on default. Click **Next.**

![](/guide/assets/ledger/electrum-ledger-create-05.png)

8. You will be prompted to encrypt the wallet file. Encrypting your wallet will mean that you will need your device just to view the balance. You will still be prompted to confirm your transaction on the device if you choose not to encrypt the wallet file. If you are unsure, do not encrypt the wallet. Click **Next** when done.

## Connecting Ledger device to Electrum Firo

1. Unlock the device and choose the Firo app.

2. Start Electrum Firo.

## Viewing account balance

Your Balance is displayed at the bottom left of the Electrum-Firo window.

## How to receive FIRO

1. Click the **Receive** tab.

2. Click on **New Address** button to generate an address.

3. To verify the address on your device, click on **Wallet -> Find** and **View -> Show Addresses.**

![](/guide/assets/ledger/electrum-ledger-receive-04.png)

4. Copy the address generated earlier and paste it into the **Find** field.

5. Right-click on the results and choose **Show on Ledger.**

6. The address should appear on your device, and you can scroll and **Approve** to continue.

## How to send FIRO

1. Click on the **Send** tab. Enter the address and the amount you wish to send, then click on the **Pay** button. In the Confirm Transaction window, click on **Send.**

![](/guide/assets/ledger/electrum-ledger-send-01.png)

![](/guide/assets/ledger/electrum-ledger-send-02.png)

2. Verify the amount and address to send to on your device and **Accept** to confirm the transaction.

3. The transaction should now be broadcasted. It will take about five minutes on average to confirm.

## Support

* Subreddit: [r/firoproject](https://www.reddit.com/r/FiroProject/)

* Telegram: [@firosupport](https://t.me/firosupport)

* Forum: [https://forum.firo.org](https://forum.firo.org)

Administrators and team members **will never message you first.** Please be wary of impersonators.