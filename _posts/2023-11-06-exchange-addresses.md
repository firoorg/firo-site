---
layout: post
title: "Exchange Addresses"
summary: "A Pragmatic Approach balancing privacy and adoption"
tags: [announcement, news]
author: "Reuben Yap"
img: "/blog/assets/exchangeaddresses/banner.png"
---
A month ago, we opened up to the community [a discussion of upcoming MiCA regulations](https://forum.firo.org/t/firo-private-transactions-balancing-with-mica-regulations/3010) and its effect on Firo and other privacy assets. We sought feedback from the community on how to navigate through this.

## Upcoming MiCA Regulations

MiCA Regulations that come into force next year, introduce under [Article 76(3)](https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX:32023R1114) a requirement for exchanges to prevent trading of crypto-assets that have “inbuilt” anonymization functions unless the holders of the crypto-assets and their transaction history can be identified by the crypto-asset service providers operating a trading platform for crypto-assets.

![](/blog/assets/exchangeaddresses/article76-3.png)

Firo’s core team objects to the vague wording employed by the regulations and whether it’s a meaningful distinction between assets with “inbuilt” anonymization functions such as Firo, Monero and Zcash vs chains that have privacy tools (for e.g. Tornado Cash/Railgun on Ethereum, Samourai Whirpool, Wasabi Wallet on Bitcoin, CashFusion on Bitcoin Cash and Coinshuffle++ on Decred). Furthermore, no distinction is being made between chains that have mandatory privacy and those that still retain their transparent layers.

We have already seen pre-emptive actions on this and Firo and a handful of other privacy-preserving assets have been made [unavailable for trading](https://www.theblock.co/post/249473/binance-privacy-coins-belgium) in several European countries by Binance due to local regulations.

## The current landscape of Centralised and Decentralised Exchanges

Despite these objections, the reality is that these regulations are coming into force and large centralised exchanges need to comply to continue operating. Centralised exchanges in the current ecosystem still play an enormous role in increasing adoption by serving as onramps/offramps to fiat and building various payment and swap provider integrations. For e.g. Travala, Locktrip, Binance Pay, ChangeNow and many others rely on centralised exchanges in their backends.

While there exist centralised exchanges that do not require KYC, even if they have been reliable, their owners are often anonymous and therefore there is a lot of trust placed in them to operate fairly and not run away with customers’ funds.

Even with the increase of decentralised exchange (DEX) adoption, many of these avenues often still have centralised points as we have seen from the [control of front-ends](https://support.uniswap.org/hc/en-us/articles/18783694078989-Unsupported-Token-and-NFT-Policy) or [suspension of trading.](https://thedefiant.io/thorswap-suspends-trading-after-illicit-fund-flows-identified) Alternatives are being built such as SeraiDEX, BasicSwap, DCRDex and KomodoDEX (of which FiroDEX is based), but are either still in development or have not reached the point that they are user-friendly enough for wide adoption. We are confident that these will improve over time.

As such there needs to be a pragmatic approach for Firo to remain listed on centralised exchanges without compromising on our core values of privacy.

## How are exchanges interpreting Article 76(3)?

While there are multiple ways to interpret the MiCA regulations, the way that some key exchanges are interpreting it is that they need to be able to 

i) identify the depositor; and  

ii) be able to see the depositor’s transaction history  

which will allow them to satisfy the second limb of Article 76(3) which states that privacy assets can be traded if the exchange can “identify” the holders of those crypto-assets and their transaction history.

Exchanges already can identify their depositors through their KYC policies. The transaction history is the one that is harder to comply with. While this is technically possible with the use of view keys such as those available in Lelantus Spark, it would require additional tooling for exchanges to build to scan for transactions. More importantly, it would reveal the user’s entire transaction history with that wallet, not just transactions with the exchange. We are of the opinion that this is an unacceptable breach of privacy unless we make the unrealistic expectation that users should maintain a separate wallet that is just for interacting with an exchange.

## Exchange Addresses (EX-addresses)

EX-addresses is a proposal by the Firo Core team to the community as an alternative to granting full view keys to the exchange. EX-addresses function exactly the same as transparent addresses except that they will not accept Lelantus/Lelantus Spark spends and coinbase transactions (mining and masternode rewards). Another way to view this is that EX-addresses will only allow funds that come from transparent addresses. EX-addresses will be readily identifiable as they will have an “ex’ prefix on it.

Through the use of EX-addresses, exchanges are able to demonstrate to regulators that they are able to see the history of the depositing address since it is a transparent address which can be looked up in a blockchain explorer thus satisfying the second limb of Article 76(3).

Users limit the leakage of their entire wallet history to the exchange and can always do a Lelantus Spark unshield to a fresh transparent address prior to having it deposited into the exchange’s EX-address thus preserving a good degree of privacy.

We wish to limit the use of EX-addresses to only those that require it and as such they will only be able to be created via RPC commands and not through the graphic interface. Official wallets will of course still support sending to EX-addresses.

## The Roadmap to Deprecating Transparent Addresses

Mandatory privacy does have indisputable privacy benefits but comes at some cost. The core team has previously laid out its commitment to move steadily towards weaning off transparent addresses and the proposal to implement EX-addresses wasn’t taken lightly. We see this as a necessary step to balance adoption with privacy while waiting for robust decentralized options to be developed.

We however remain committed to reducing transparent address use and the core team is proposing several steps in aid of this that will be coming all in 2024.

Phase 1 (January 2024) : 
* EX-addresses introduced together with Spark launch. Miners and masternode rewards cannot enter into EX-addresses encouraging them to use our full wallet instead of pointing them to an exchange address. Our wallets prompt and encourage anonymisation by default.

Phase 2 (Q2 2024):  
* A few months after Spark mainnet launch, we plan to make all mining and masternode rewards go mandatorily into Spark addresses. This will significantly increase the anonymity set as new issuance enters into the Spark pool.

Phase 3 (Q3 2024): 
* Later in 2024, we plan to launch [Helsing](https://firo.org/2022/01/28/helsing-private-firo-masternode.html) which allows masternode collateral to be held in Spark addresses further reducing the need for transparent addresses.

After these phases, we expect to further improve Firo’s anonymity set by the introduction of Spark Assets which allow the creation of private assets that all share a common anonymity pool and further DEX integrations to further bolster the resiliency of Firo’s ecosystem and reduce reliance on CEXes.

## Invitation for Feedback

We invite our Firo Fam to comment and give feedback on this in our [forums](https://forum.firo.org/t/firo-private-transactions-balancing-with-mica-regulations/3010)! The core team serves as stewards of the project and places high importance on our community to guide Firo’s direction. We hope that this post explains core team’s recommendation and proposed direction and are excited to finally bring Spark to fruition!

Youtube video: [Exchange Addresses, A Pragmatic Approach balancing privacy and adoption](https://youtu.be/C0UB6AKfIlA)
