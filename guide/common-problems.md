---
layout: guide
title: "Common Wallet Problems and Solutions"
summary: ""
tags: [news, dev, community]
author: "Anwar P."
img: ""
alt: ""
permalink: "/guide/common-problems.html"
---

This guide lists the common problems you might face while using the Firo wallets. If your problem is not listed here, please visit the #support channel on [Discord](https://discord.com/invite/TGZPRbRT3Y) or [Telegram.](https://t.me/firoorg)

## Firo-QT

### Breaking masternode collateral

If you wish to stop your masternode and break the 1000 FIRO masternode collateral, you must first enable Coin Control.

1. **Settings -> Options -> Wallet -> Enable coin control features**

2. Once done, you should be able to see an **Input button** in the **Send tab.** Click on **Use transparent balance** button at the bottom right.

3. Click on **Inputs** button. Find your 1000 FIRO collateral, right-click and choose **Unlock unspent.**

The 1000 FIRO should now be available for you to send.

### Mining payouts

If you frequently receive mining payouts of 0.1 FIRO or similar amounts, you might encounter problems when trying to send as the transaction can be too big.

In the **Transaction tab**, you can double-click on the problematic transaction and check the following:
* Status: 0/offline, has not been successfully broadcast yet
* Transaction total size: several hundred bytes

1. To workaround this issue, enable Coin Control in Firo QT by doing **Settings -> Options -> Wallet -> Enable coin control features.**

2. Once done, you should be able to see an **Input button** in the **Send tab**. 

3. Use this Coin Control to combine your input transactions into manageable amounts and send it to yourself to consolidate.

Example: you receive a lot of 0.1 FIRO transactions. Use Coin Control to combine them into 1.0 or 2.0 FIRO before trying to send out a big amount like 100 FIRO.

If you frequently encounter this problem, some recommendations are:
* regularly combine these mining payouts instead of waiting until you want to send them out.

## Electrum Firo

### Mining payouts and hardware wallets

When using a hardware wallet as the receiving address for mining pools' payout, the amount of input transactions can overwhelm the hardware limitations of the hardware wallet.

1. In Electrum-Firo, select **View -> Show coins**. 
2. Right-click on only one entry and select **Spend**, then use the **Send tab** to send the selected inputs. Your hardware wallet should prompt you almost immediately.

3. If that is successful, try **Ctrl + Left Click** in the Coins tab to select a maximum of five inputs. Then right-click and select **Spend**, again using the **Send tab** to send the FIRO out.

4. You might notice a bit of sluggishness while waiting for the hardware wallet to show the transaction approval prompt.

5. You can try with 10, 15 or 20 inputs. Exceeding 20 inputs is not recommended as it can cause the hardware wallet to time out.

If you frequently encounter this problem, some recommendations are:
* increase the payout threshold of the mining pool if possible. Example: 0.5 FIRO instead of the default 0.1 FIRO;
* do not use an address on the hardware wallet as the receiving address for pool payout;
* regularly combine these mining payouts instead of waiting until you want to send them out.
