---
layout: guide
title: "How to Provide Liquidity for Firo on Pancakeswap"
summary: "How to become a liquidity provider for Firo on Pancakeswap on Binance Smart Chain (BSC)"
tags: [guide]
author: "Anwar P."
permalink: /guide/liquidity-firo-pancakeswap.html
img: ""
---
## Connecting Metamask to Binance Smart Chain

Before starting, you will need a wallet that works with the Binance Smart Chain (BSC) network. 

[Please follow the guide here in order to connect your Metamask wallet to the BSC Network.](https://docs.binance.org/smart-chain/wallet/metamask.html)

## Adding BEP20 FIRO support to your Metamask wallet

1. Open your Metamask wallet and click on 'Add Token'.

2. In the next screen, choose 'Custom Token'. 

3. In the 'Token Contract Address', enter the following:

`0xd5d0322b6bab6a762c79f8c81a0b674778e13aed`

{:start="4"}
4. If you correctly setup your wallet with BSC in the first step, the 'Token Symbol' will be automatically filled with 'FIRO'. Click next.

5. Click the Add Tokens button.

## Converting FIRO to BEP20 FIRO

There are two ways to convert FIRO to BEP20 FIRO: Binance Bridge and Binance Exchange. Converting through Bridge does not require a Binance account, but converting through the Exchange does.

### Binance Bridge

1. Navigate to [Binance Bridge.](https://www.binance.org/en/bridge)

2. Click on the Connect Wallet button and choose the Metamask wallet you have setup earlier. Unlock the wallet if requested.

![](/guide/assets/liquidity-provider-firo-bnb/bridge_01.png)

{:start="3"}
3. Choose FIRO from the 'Asset' dropdown menu.

4. Enter the amount of FIRO that you want to convert to BEP20 FIRO. The 'Destination' address should be the same as the address in your Metamask wallet. Click on Next.

![](/guide/assets/liquidity-provider-firo-bnb/bridge_02.png)

{:start="5"}
5. Choose 'I will send the tokens from my own wallet.' At the next screen, verify that all the information is correct and check the 'I have read and agree to the terms of use' box. Click on Confirm.

![](/guide/assets/liquidity-provider-firo-bnb/bridge_03.png)

{:start="6"}
6. Send the **exact** amount of FIRO that you entered earlier to the displayed FIRO address.

![](/guide/assets/liquidity-provider-firo-bnb/bridge_04.png)

{:start="7"}
7. Once enough confirmations has been reached, you will receive the FIRO in your Metamask wallet.

### Binance Exchange

![](/guide/assets/liquidity-provider-firo-bnb/exchange_withdraw.png)

Before starting, you must first have FIRO on the exchange.

1. Go to Wallet -> Fiat and Spot. Head to the FIRO section and choose Withdraw.

2. In 'Recipient's FIRO Address', enter the address from your Metamask wallet.

3. For 'Transfer network', choose 'Binance Smart Chain (BSC)' and enter the amount you want to withdraw. Click on Submit when done.

4. Your withdrawal request will be submitted. Once processed, you will receive the BEP20 FIRO in your Metamask wallet.

## Adding liquidity to PancakeSwap

Before starting, you must **have some BNB** in your wallet to pay the transaction fees and wrapped BNB (WBNB) to add to the liquidity pool.

1. Navigate to the [WBNBFIRO pair page on PancakeSwap.](https://pancakeswap.finance/info/pool/0xd4de573f4af499b28ac387fac607f1bb819eca10)
2. Click on the 'Connect Wallet' button on the top right of the page and choose the Metamask wallet you have setup earlier. Unlock the wallet if requested.

  ![](/guide/assets/liquidity-provider-firo-bnb/wbnbfiro_pair.png)

{:start="3"}
3. Click on 'Add liquidity'.

  ![](/guide/assets/liquidity-provider-firo-bnb/wbnbfiro_add_lp.png)

{:start="4"}
4. Enter the amount of FIRO and WBNB that you wish to add to the liquidity pool.

5. Click on 'Supply' when done. Confirm the transaction on your wallet.

6. Once done, you will return to the same page again. Click on the 'Supply' button, and in the pop up verify all details are correct, then click 'Confirm supply' and confirm the transaction on your wallet.

7. Once the transaction confirms, your FIRO and WBNB will be added to the liquidity pool.

## Checking your liquidity on PancakeSwap

Navigate to [the PancakeSwap Liquidity page](https://pancakeswap.finance/liquidity) and ensure that your wallet is connected. Your liquidity information will be displayed.

## Removing liquidity from PancakeSwap

1. Navigate to [the PancakeSwap Liquidity page.](https://pancakeswap.finance/liquidity)

2. (Skip this step if your wallet is already connected) Click on the 'Connect Wallet' button on the top right of the page and choose the Metamask wallet you have setup earlier. Unlock the wallet if requested.

![](/guide/assets/liquidity-provider-firo-bnb/wbnbfiro_remove_lp.png)

{:start="3"}
3. Locate the pair that you wish to remove liquidity from. Click on 'Remove' button

4. At next page, set the amount of Liquidity to be removed

5. Click on the 'Enable' button. Sign the request on your wallet

6. Once done, you will return to the same page again. Click on the 'Remove' button, and in the pop up verify all details are correct, then click 'Confirm' and confirm the transaction on your wallet.

7. Once the transaction confirms, your FIRO and WBNB will be returned to your wallet along with any fees you have earned from providing liquidity to the pool.

## Resources

* [BEP20 FIRO on Binance Smart Chain Explorer](https://bscscan.com/token/0xd5d0322b6bab6a762c79f8c81a0b674778e13aed)
* [BEP20 FIRO on PancakeSwap](https://pancakeswap.finance/info/tokens/0xd5d0322b6bab6a762c79f8c81a0b674778e13aed)