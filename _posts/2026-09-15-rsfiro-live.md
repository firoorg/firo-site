---
layout: post
title: "FIRO Goes Multichain: rsFIRO Is Live on Rosen Bridge"
summary: "More chains. More markets. Fewer gatekeepers. Rosen Bridge takes FIRO multichain, strengthening censorship-resistant access to trading and DeFi."
tags: [community, news]
author: "Reuben Yap"
img: "/blog/assets/rsfiro-live/banner.png"
---
FIRO is now live on Rosen Bridge. You can move native FIRO to other supported blockchains as [rsFIRO](https://www.coingecko.com/en/coins/rsfiro), trade it there, and redeem it back to native FIRO. Trading pools are already available on [Uniswap on Ethereum](https://app.uniswap.org/explore/pools/ethereum/0x385CD0e67CEae18d38c415BB01Df62BacE0C25BA), [PancakeSwap on BNB Chain](https://pancakeswap.finance/liquidity/pool/bsc/0x24EBd6F2b918437E0353DBB825bf82832b3cad27?chain=bsc) and [Mew Finance on Ergo](https://dex.mewfinance.com/ergo/liquidity/d86f6508c6b665bf4ba0bd3b56f7090404665b0cef26e5202d91127ed538f47c).

We have been [working towards this](https://firo.org/2026/03/19/firo-rosen-bridge-opinion-piece.html) because people need ways to acquire and trade FIRO that do not depend on a handful of exchanges continuing to list it. Watch the video on this rationale [here](https://www.youtube.com/watch?v=Ki5HIZn34F4).

Rosen Bridge gives us another option. It also gives the Firo community a more direct role in building the markets people use.

## Building Liquidity Without Waiting for a Listing

On Ethereum, rsFIRO works as a standard ERC-20 token. That makes it usable on the most popular decentralized exchanges without each platform having to integrate the Firo blockchain and its wallet software.

On permissionless exchanges such as Uniswap, anyone can create a pool or contribute liquidity. There is no listing application to submit or exchange approval to wait for.

For example, a community member can contribute rsFIRO and ETH to a pool. Other users can then trade against that pool without the liquidity provider needing to be online to accept each trade or run a trading bot. Providers can earn a share of trading fees, although providing liquidity carries risks, including losses compared with simply holding the assets.

A separate rsFIRO pair is not necessarily needed for every token someone wants to trade. Where suitable pools and routing support exist, a swap can pass through an intermediate asset - for example, rsFIRO to ETH, then ETH to another token. The available liquidity and fees still determine whether that trade offers a reasonable price.

The bridge makes these markets possible. Growing their liquidity will take participation from holders, traders and builders.

Today there are already [live Uniswap pools on Ethereum](https://app.uniswap.org/explore/tokens/ethereum/0x2744eA5Ac9b11CB5E3CD63D3a88E858336aEddC2), [PancakeSwap on BNB Chain](https://pancakeswap.finance/liquidity/pool/bsc/0x24EBd6F2b918437E0353DBB825bf82832b3cad27?chain=bsc) and also [MewFinance on Ergo](https://dex.mewfinance.com/ergo/liquidity/d86f6508c6b665bf4ba0bd3b56f7090404665b0cef26e5202d91127ed538f47c) allowing you to immediately swap and/or provide liquidity today!

![uniswap](/blog/assets/rsfiro-live/uniswap.png)

## How Rosen Bridge Works

Rosen Bridge coordinates transfers through the Ergo blockchain using two groups of participants. **Watchers** monitor the connected chains and report bridge transactions. **Guards** independently verify those reports and collectively authorize the corresponding transfers. This two-stage verification adds protection against fabricated or mistaken reports: Guards check the source-chain transaction themselves rather than simply trusting the Watchers before authorizing a transfer.

When you bridge FIRO out, native FIRO is held in the bridge's reserves and you receive rsFIRO on the destination chain, after applicable fees. Bridging back redeems rsFIRO for native FIRO.

Rosen distributes responsibility across a federation of Guards (current Guard set is 10) rather than putting one operator in charge while anyone with the requisite number of RSN can become a Watcher. Guards and watchers get paid by the bridging fee to continue providing their services.

## What This Means for Privacy

**rsFIRO is not a private token.** Its transfers and DEX trades are public, and the bridge itself does not provide Spark privacy.

To make private transactions, return to native FIRO and use Lelantus Spark. Doing so does not erase the public history of earlier bridge transfers or DEX trades.

This launch adds places to use and trade FIRO. It does not replace the privacy features on Firo's own chain - though we will be posting a guide on how to minimize privacy leakage while using rsFIRO soon!

## Before You Bridge or Trade rsFIRO (ETH or BSC)

### Check the Official Token Address

Always verify the contract address before buying rsFIRO or adding it to your wallet. There can be other fake ‘rsFIROs’. A token’s name or symbol alone does not establish that it is genuine - fake tokens can copy both, only the contract address is definitive.

**Network:** Ethereum mainnet  
**Token:** rsFIRO  
**Contract address:** [0x2744ea5ac9b11cb5e3cd63d3a88e858336aeddc2](https://etherscan.io/token/0x2744ea5ac9b11cb5e3cd63d3a88e858336aeddc2)  
**Decimals:** 8

**Network:** BNB Chain  
**Token:** rsFIRO  
**Contract address:** [0x13cDb5F7f398F6AF2CC3B34EB04476af3488853f](https://bscscan.com/token/0x13cDb5F7f398F6AF2CC3B34EB04476af3488853f)  
**Decimals:** 8  

**These are the token’s contract addresses, not a deposit address. Do not send funds directly to it**. For other supported chains, check the official token identifier for that network rather than assuming the Ethereum address applies.

Note that sites like Coinmarketcap, Coingecko, Etherscan and BSCScan are in the process of validating and updating the token info on their respective sites. We recommend adding the respective tokens directly to your wallet and whitelisting it so you know you’re interacting with the correct rsFIRO.

### Keep ETH Available for Transaction Fees

You will need **ETH/BNB in the same wallet on Ethereum/BNB mainnet** to send or swap rsFIRO, provide liquidity, or initiate a bridge transfer back. These network fees are paid in ETH/BNB, not rsFIRO. When providing liquidity, keep some ETH/BNB aside for future transactions rather than committing your entire balance to the pool. You can do so by using a swap service such as [wizardswap.io](https://wizardswap.io) or [exolix.com](https://exolix.com) to swap some native FIRO to ETH/BNB to your ETH/BNB wallet address.

### Do Not Send rsFIRO to a Native FIRO Exchange Deposit Address

**rsFIRO and native FIRO are different assets on different networks.** An exchange supporting FIRO does not automatically support rsFIRO.

Only send rsFIRO to a centralized exchange if its deposit instructions explicitly support **rsFIRO on the exact network you are using**. Otherwise, redeem it through Rosen Bridge to native FIRO in your own Firo wallet before making a native FIRO exchange deposit. Unsupported deposits may not be credited and may be unrecoverable.

## Bridging FIRO to Ethereum/BNB Chain

Head to [app.rosen.tech](https://app.rosen.tech/),  select FIRO as the “Source” and FIRO as the token, then choose an available destination and enter in the address in which you want to receive your rsFIRO.

![rosenbridgeBridge](/blog/assets/rsfiro-live/rosenbridge1.png)

Follow the transfer instructions and check the receiving address, fees and expected amount before sending. Switch to your transparent balance and ensure you are using a supported wallet **(Campfire or Reference Firo-QT)** that can embed the additional data to allow the bridging.

![bridge1](/blog/assets/rsfiro-live/bridge1.jpg)

![bridge2](/blog/assets/rsfiro-live/bridge2.jpg)

Click on copy and paste the data into the “Send to” or “Pay to” address field. You will see a note that the **transaction contains certain metadata. This is important as without it, your funds will not be bridged and require recovery!** 

![bridge3](/blog/assets/rsfiro-live/bridge3.jpg)

![bridge4](/blog/assets/rsfiro-live/bridge4.jpg)

Allow a few hours for bridging (typically 2-4 hours). Rosen Bridge prioritizes security and safety over speed.

You can check on the [events page](https://app.rosen.tech/events) to see how your bridging is coming along.

![rosenbridgeEvent](/blog/assets/rsfiro-live/rosenbridge2.png)

Rosen Bridge charges a fee of **0.5% of the amount transferred, with a US$10 minimum, plus network fees**. This is used to support bridge infrastructure and development. Fees can change, so check the app's quote for your chosen route before proceeding. The minimum fee can make smaller transfers expensive.

If you can't wait or your transfer is small, **vsnation**, a community member, has also built and runs **[buyfiro.app](https://buyfiro.app/)**, an independent service for acquiring FIRO and bridging FIRO. It is separate from the Firo core team; check the service for its current routes, fees and availability.

![buyfiroapp](/blog/assets/rsfiro-live/buyfiroapp.png)

If you want to bridge back from rsFIRO to FIRO, it's the same process but in reverse.

![rosenbridgeBridge2](/blog/assets/rsfiro-live/rosenbridge3.png)

## More Markets, Fewer Gatekeepers

We are preparing a quest platform to encourage people to try Firo and rsFIRO. Details will follow on our [X account](https://x.com/firoorg) and [Telegram announcement channel](https://t.me/fironews).

Thank you to the [Rosen Bridge](https://rosen.tech/) team and everyone who has helped with the integration, testing and initial liquidity. We now have another way for people to reach FIRO - and a practical way for the community to help keep it accessible and unstoppable.

With rsFIRO live, the community can do more than ask for exchange listings. We can create trading pools, contribute liquidity and bring FIRO to new users across chains. Every additional market gives people another way to reach FIRO - and makes us less dependent on the platforms that can shut us out.

**An exchange can decide what it lists. It should not get to decide FIRO's future.**
