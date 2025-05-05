---
layout: guide
title: "Trading Firo on Bison Wallet (DCRDEX)"
summary: 
tags: [guide]
author: "Anwar P."
permalink: /guide/trading-firo-on-bisonwallet.html
---

![](/guide/assets/trading-firo-on-bisonwallet/bisonw_header.png)

## Preparation

Esnure that you have the latest version of the [Firo Reference (Qt) wallet](https://github.com/firoorg/firo/releases/latest) and [Bison Wallet.](https://github.com/decred/dcrdex/releases/latest)

**Important note:** Bison Wallet requires you to pay a refundable bond before you use it to trade.

## Firo Reference (Qt) Wallet configuration

You will need to configure your wallet for it to interface with Bison Wallet.

1. Ensure the wallet is not running.

2. Navigate to [your Firo data directory.](https://github.com/firoorg/firo/wiki/Default-data-directories)

3. Create the file `firo.conf` if it does not exist, or edit the existing file.

4. Add in the following lines:

```
server=1
rpcuser=username
rpcpassword=password
```

5. Start the wallet. It should now be ready to interface with Bison Wallet.

## Bison Wallet configuration

### Initial Setup

1. Download and run Bison Wallet. It will open a web interface in your default browser.
2. Set a password for Bison Wallet.. You can also restore from seed if you have an existing Bison Wallet seed.
3. A list of default wallets is shown. Press Submit to continue to the next screen.
4. You will be prompted to backup your Bison Wallet seed. Please backup if you have not done so.

### Setting up connection with Firo Reference Wallet

1. In Bison Wallet's main page, click on **Firo -> Create a Wallet.**
2. In the next page, Click on **Create a Firo Wallet.**
3. Enter the same settings that you used in firo.conf
* JSON-RPC Username
* JSON-RPC Password
* Wallet Password (if you encrypted your Firo wallet)
* Click on **Add** when done.

![](/guide/assets/trading-firo-on-bisonwallet/bond_asset.png)

If everything was configured correctly, the contents of your Firo wallet such as balance and transactions will be displayed.

### Dex account creation

Before you can start trading, you will need to create an account on the dex.

1. Click on the **Trade** button at top right and choose a trading pair.
2. Click on **Create Account.**
3. Select your bond asset.

![](/guide/assets/trading-firo-on-bisonwallet/firodrpc.png)

{:start="4"}
4. At the next page, choose your trading tier. A higher trading tier will require more bonds to be locked, but has access to higher trading limits. Click on **Submit** when done. Confirm the details on the next page, and click on **Submit** when done.
5. Once the bond transaction has confirmed you should be able to start trading.

You will also need to configure additional wallets if you want to trade on markets that utilizes networks such as Polygon or Ethereum. For example, if you want to trade on the FIRO-USDC market, you will need to have both a Polygon and a USDC.POLYGON wallet.