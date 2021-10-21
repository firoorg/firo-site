---
layout: guide
title: "How to provide liquidity for FIRO/BNB on PancakeSwap"
summary: "Participate in our liquidity pool on BSC"
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

## Adding liquidity to PancakeSwap

Before starting, you must **have some BNB** in your wallet to pay the transaction fees.

Navigate to the [WBNBFIRO pair page on PancakeSwap.](https://pancakeswap.finance/info/pool/0xd4de573f4af499b28ac387fac607f1bb819eca10)

Click on the 'Connect Wallet' button on the top right of the page and choose the Metamask wallet you have setup earlier. Unlock the wallet if requested.

  ![](/guide/assets/liquidity-provider-firo-bnb/wbnbfiro_pair.png)

Click on 'Add liquidity'.

  ![](/guide/assets/liquidity-provider-firo-bnb/wbnbfiro_add_lp.png)

Enter the amount of FIRO and WBNB that you wish to add to the liquidity pool.

Click on 'Supply' when done. Confirm the transaction on your wallet.

Once done, you will return to the same page again. Click on the 'Supply' button, and in the pop up verify all details are correct, then click 'Confirm supply' and confirm the transaction on your wallet.

Once the transaction confirms, your FIRO and WBNB will be added to the liquidity pool.

## Checking your liquidity on PancakeSwap

Navigate to [the PancakeSwap Liquidity page](https://pancakeswap.finance/liquidity) and ensure that your wallet is connected. Your liquidity information will be displayed.

## Removing liquidity from PancakeSwap

1. Navigate to [the PancakeSwap Liquidity page.](https://pancakeswap.finance/liquidity)
2. (Skip this step if your wallet is already connected) Click on the 'Connect Wallet' button on the top right of the page and choose the Metamask wallet you have setup earlier. Unlock the wallet if requested.

![](wbnbfiro_remove_lp.png)

{:start="3"}
3. Locate the pair that you wish to remove liquidity from. Click on 'Remove' button
4. At next page, set the amount of Liquidity to be removed
5. Click on the 'Enable' button. Sign the request on your wallet
6. Once done, you will return to the same page again. Click on the 'Remove' button, and in the pop up verify all details are correct, then click 'Confirm' and confirm the transaction on your wallet.
7. Once the transaction confirms, your FIRO and BNB will be returned to your wallet along with any fees you have earned from providing liquidity to the pool.