---
layout: post
title: "Disclosure of Bug in Zcoin"
tags: [announcement, news, development]
author: "Reuben Yap"
---

**Core Team Note (21 February 2025):**

***A portion of the content below contains outdated or incorrect information. Specifically, the disclosed figure of 384,400.82 XZC forged is incorrect and the actual inflation is less at 320,841.99803185 of which 168,101.68037465 coins were recovered and [burnt](https://explorer.firo.org/tx/0b53178c1b22bae4c04ef943ee6d6d30f2483327fe9beb54952951592e8ce368) making the total inflation of this bug at 152,740.3176572 coins. This can be verified by this [pull request](https://github.com/firoorg/firo/pull/1502). Original post below remains unchanged.***

In Zcoin, we have discovered and patched a critical bug that allowed for inflation. The bug has no relation to our Sigma privacy technology.

The bug was a result of us merging in code from [Bitcoin core 0.14](https://web.archive.org/web/20201109030722/https://github.com/bitcoin/bitcoin/pull/9049) that contained a critical inflation bug that was reported in [CVE-2018-17144.](https://bitcoincore.org/en/2018/09/20/notice/) At the time of disclosure of the CVE, we were then on the older Bitcoin core 0.13; and therefore, we were not vulnerable.

While performing our major core upgrade from Bitcoin core 0.13 to core 0.14 the bug was merged into our release on the 3 June 2020. Due to an oversight, the fix that came only in [Bitcoin core 0.16.3](https://bitcoincore.org/en/2018/09/20/notice/) was not incorporated in our core upgrade. To exploit this bug, a miner would need to acquire enough hashrate to solve a block.

An attack occurred on 14 August 2020 20:16:42 UTC time at block 293526, where a rogue miner mined a block that exploited this bug. From our analysis of the blockchain, a total of 384,400.82 XZC was forged of which we managed to freeze 173,269.86 XZC with the assistance of the mining pools and another 161,664.24 XZC were sent to identified exchanges. Exchanges have confirmed a freeze of a substantial amount of XZC deposited with them along with the proceeds from such trades and are awaiting investigation and resolution.

To close off the bug quickly, we contacted and did a disclosure to the mining pools who performed an emergency fix to stop the attack and reject Sigma privacy transactions while we worked on a public release to resolve the issue. We also instructed major exchanges such as Binance, Huobi, Bittrex, MXC and AEX to shut down deposits/withdrawals and lock down funds that had not been traded yet. Significant portions of XZC and the relevant proceeds remain locked down at exchanges and we are currently in discussions with them to ideally destroy the inflated XZC created from the attack that had not been traded.

While preparing for the public release, a second attack occurred which was stopped by our hot fix. However, this caused a chain split on the unupgraded network that necessitated an early public release of Zcoin v.0.14.0.4. The release of Zcoin v0.14.0.5 today restores the ability to do Sigma privacy transactions that will be re-enabled on block 296900 (approximately 26 August 2020: 1:30 PM UTC). We expect exchanges to open deposits and withdrawals again soon.

We would like to thank all the mining pools, exchanges and other Zcoin ecosystem players that cooperated with the core team, without which the problem would have been much more severe. Special thanks to 2Miners, Mintpond, F2Pool and Binance and Allnodes for the exceptional assistance we have received. We also express our appreciation to Zergpool, ZelPool, Solopool, Huobi, Bittrex, MXC and AEX who cooperated with us through this. We would also like to thank users for their patience and understanding, and apologize for the inconvenience caused by the emergency updates.

We look forward to  a positive resolution with exchanges on the locked funds, which we have requested they burn. We will post further updates as the situation unfolds.
