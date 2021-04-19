---
layout: guide
title: "How to provide liquidity for FIRO/BNB on ValueDeFi"
summary: "Participate in our first liquidity pool on BSC"
tags: [guide]
author: "Anwar P."
permalink: /guide/liquidity-provider-firo-bnb.html
img: ""
---
## Connecting Metamask to Binance Smart Chain

Before starting, you will need a wallet that works with the Binance Smart Chain (BSC) network. 

[Please follow the guide here in order to connect your Metamask wallet to the BSC Network.](https://docs.binance.org/smart-chain/wallet/metamask.html)

## Adding BEP20 FIRO support to your Metamask wallet

Open your Metamask wallet and click on 'Add Token'.

In the next screen, choose 'Custom Token'. 

In the 'Token Contract Address', enter the following:

`0xd5d0322b6bab6a762c79f8c81a0b674778e13aed`

If you correctly setup your wallet with BSC in the first step, the 'Token Symbol' will be automatically filled with 'FIRO'. Click next.

Click the Add Tokens button.

## Converting FIRO to BEP20 FIRO

There are two ways to convert FIRO to BEP20 FIRO: Binance Bridge and Binance Exchange. Converting through Bridge does not require a Binance account, but converting through the Exchange does.

### Binance Bridge

Navigate to [Binance Bridge.](https://www.binance.org/en/bridge)

Click on the Connect Wallet button and choose the Metamask wallet you have setup earlier. Unlock the wallet if requested.

![](/guide/assets/liquidity-provider-firo-bnb/bridge_01.png)

Choose FIRO from the 'Asset' dropdown menu.

Enter the amount of FIRO that you want to convert to BEP20 FIRO. The 'Destination' address should be the same as the address in your Metamask wallet. Click on Next.

![](/guide/assets/liquidity-provider-firo-bnb/bridge_02.png)

Choose 'I will send the tokens from my own wallet.' At the next screen, verify that all the information is correct and check the 'I have read and agree to the terms of use' box. Click on Confirm.

![](/guide/assets/liquidity-provider-firo-bnb/bridge_03.png)

Send the **exact** amount of FIRO that you entered earlier to the displayed FIRO address.

![](/guide/assets/liquidity-provider-firo-bnb/bridge_04.png)

Once enough confirmations has been reached, you will receive the FIRO in your Metamask wallet.

### Binance Exchange

![](/guide/assets/liquidity-provider-firo-bnb/exchange_withdraw.png)

Before starting, you must first have FIRO on the exchange.

Go to Wallet -> Fiat and Spot. Head to the FIRO section and choose Withdraw.

In 'Recipient's FIRO Address', enter the address from your Metamask wallet.

For 'Transfer network', choose 'Binance Smart Chain (BSC)' and enter the amount you want to withdraw. Click on Submit when done.

Your withdrawal request will be submitted. Once processed, you will receive the FIRO in your Metamask wallet.

## Adding liquidity to Value DeFi

Before starting, you must **have some BNB** in your wallet to pay the transaction fees.

This liquidity pool requires you to **have a ratio of 70% FIRO and 30% BNB.** This ratio was picked to minimise the risk of [impermanent loss](https://academy.binance.com/en/articles/impermanent-loss-explained) for liquidity providers.

Navigate to the [WBNBFIRO pair page on ValueDeFi.](https://bsc.valuedefi.io/#/vfarm/0xffb62cebd566062991157ea7a24fff94d0a92b0c)

Click on the 'Connect Wallet' button on the top right of the page and choose the Metamask wallet you have setup earlier. Unlock the wallet if requested.

![](/guide/assets/liquidity-provider-firo-bnb/wbnbfiro_pair.png)

Click on 'Add liquidity'.

At the 'Important Notice' screen, check both boxes and click on 'I Agree'

![](/guide/assets/liquidity-provider-firo-bnb/wbnbfiro_add_lp.png)

Enter the amount of FIRO or BNB that you wish to add to the liquidity pool. The other value will automatically adjust to achieve a 70:30 ratio. Click on 'Approve FIRO' when done.

Your Metamask wallet will pop up. Unlock the wallet if requested. Verify that all the details are correct and click on the 'Confirm' button. 

Once done, you will return to the same page again. Click on the 'Supply' button, and in the pop up verify all details are correct, then click 'Confirm supply'.

Once the transaction confirms, your FIRO and BNB will be added to the liquidity pool.
