---
layout: post
title: "Correcting Firo’s Reported Supply and Market Cap Figures"
summary: ""
tags: [community, news, dev]
author: "Reuben Yap"
img: "/blog/assets/correction-blogpost.png"
---

Dear Firo Community,

We would like to inform you about an important update regarding Firo’s reported circulating supply and market capitalization as listed on CoinGecko and CoinMarketCap (CMC). Please rest assured that there has been **no new vulnerability** discovered, nor any actual increase in Firo’s real supply. Instead, the discrepancy stems from outdated API endpoints and a miscalculation in supply reporting.

## Background

On February 21, 2025, at block height 1049420 (06:42 UTC), both CoinGecko and CMC were found to be using an old API endpoint on the Insight explorer.

`https://explorer.zcoin.io/api/zerocoin/getrealsupply`

This endpoint dates back to when Firo was known as Zcoin. As a result of this outdated API, Firo’s supply was incorrectly reported as **14,701,999**, significantly lower than its actual figure.

## Reasons for the Discrepancy

### Incorrect Zerocoin Inflation Calculation

The old API on the Insight explorer used the following formula to calculate Zerocoin-related supply:

`Coinbase - Zerocoin mints + Zerocoin spends`

However, in the code, **Zerocoin spends** was treated as a negative number which caused the spend amount to be subtracted from the total instead of it being added back in, leading to an underestimation of Firo’s supply.

* The erroneous calculation was introduced [here](https://github.com/firoorg/insight-api-firo/commit/bd535426e082b2ecbb1ec0d9849c37e0884b2866) in 2018.

* Specifically, the bug can be traced to [this part of the code.](https://github.com/firoorg/insight-api-firo/commit/bd535426e082b2ecbb1ec0d9849c37e0884b2866#diff-2dc1e3cd3d8546425b65b839444b59413f1ee621908bac40ddcd4b263047e1ccR63)

This issue only exists on the Insight Explorer code and not the core Firo software.

### Unaccounted Inflation from Bitcoin CVE-2018-17144

Additionally, the old API did not factor in **152,740.3176572** coins created due to the [Bitcoin CVE-2018-17144 vulnerability](https://firo.org/2020/08/20/disclosure-of-bug-in-zcoin.html) in 2020.

## Correct Supply Figure

The correct supply figure, as of block 1049420, is approximately **16,964,245.** The following pull request consolidates the calculation of disclosed Zerocoin attacks and the inflation amounts from Bitcoin CVE-2018-17144 into the `gettotalsupply` command:

* [PR #1502: Correct total supply calculation](https://github.com/firoorg/firo/pull/1502)

As explained further below, this does not factor coins in Lelantus and Sigma pools. While no new Lelantus or Sigma coins can be created, withdrawals from the respective pools are still allowed.

## Updated Inflation Calculation for Bitcoin CVE-2018-17144

After a detailed review, we also discovered that the original estimate of coins created from the Bitcoin CVE-2018-17144 vulnerability was overstated. Here is the corrected breakdown:

1. **Total created from CVE-2018-17144:**

* 320,841.99803185 Firo

(Previously reported as ~384,400.82268276)

{:start="2"}
2. **Recovered and [burnt:](https://explorer.firo.org/tx/0b53178c1b22bae4c04ef943ee6d6d30f2483327fe9beb54952951592e8ce368)**

* 168,101.68037465 Firo

{:start="3"}
3. **Net Inflation from CVE-2018-17144:**

* 152,740.3176572 Firo

Thus, the underreporting of Firo’s supply on CMC and CoinGecko is around **2,262,246** coins, leading to a lower-than-actual market cap figure on both platforms.

## Lelantus and Sigma Considerations

### **Lelantus Vulnerability:**

We estimate around **59,000** coins may have been created via the Lelantus vulnerability. However, these figures will only be **conclusively confirmed once the Lelantus pools are closed,** which is expected around **January 2026.**

### **Sigma Pool Closure:**

We anticipate **16,072** coins to be permanently removed from circulation when the Sigma pool is closed in an upcoming hard fork. This closure will be rolled out together with the Spark Names feature.

The quantum of these coins will not drastically affect supply and once these pools are closed (meaning no more withdrawals from the Lelantus and Sigma pools would be allowed), the exact supply can be verified and updated. This balances the need to retire older privacy protocols which are no longer maintained to reduce any attack surface while giving users several years to withdraw their coins.

Sigma was replaced by Lelantus on 14 January 2021 and Lelantus was replaced by Lelantus Spark on 18 January 2024. This means that Sigma users have been given 4 years to withdraw their Sigma coins and Lelantus users will be given approximately 2 years as [decided by community feedback.](https://forum.firo.org/t/emergency-switch-functionality-for-lelantus-lelantus-spark-to-extend-or-retire/2749/37)

## Next Steps

* Updating API Endpoints

* Fixing gettotalsupply

* Ongoing Monitoring

### Updating API Endpoints

The [new and correct API endpoints](https://explorer.firo.org/api/ext/getmoneysupply) will be used by both CoinGecko and CMC, ensuring accurate reporting of Firo’s total circulating supply. This may take a while for them to verify and update their endpoints.

### Fixing gettotalsupply

The [gettotalsupply RPC command](https://github.com/firoorg/firo/pull/1502) has been updated to accurately include all known inflation from both the Zerocoin attacks and the Bitcoin CVE-2018-17144 exploit. This fix will be included in the **next release.**

### Ongoing Monitoring

We will continue to monitor and verify Firo’s total supply as we move closer to closing the Lelantus and Sigma pools. We remain committed to transparency and accuracy in all reporting.

## Conclusion

* **No New Vulnerabilities**
* **Corrected Figures**  
* **Updated Market Cap** 
* **Future Updates** 

### **No New Vulnerabilities:** 

There is no new exploit or change in the **actual** supply of Firo, merely an underreporting primarily due to old explorer APIs.

### **Corrected Figures:** 

The corrected circulating supply is around **16,964,245** Firo.

### **Updated Market Cap:** 

CMC and CoinGecko will soon update their figures, which will reflect a market cap increase of roughly **2.2 million** coins above previous reports.

### **Future Updates:** 

Once Lelantus and Sigma pools are fully closed, our supply figures will be reconfirmed and updated, ensuring continued reliability and accuracy.

We appreciate your understanding and cooperation as we work to resolve this discrepancy. Thank you for your continued support of Firo. For any questions or concerns, feel free to reach out to us on our official community channels.

