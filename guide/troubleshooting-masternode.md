---
layout: guide
title: "Troubleshooting masternode: PoSe score and PoSe ban"
summary: 
tags: [guide]
author: "Firo Team"
permalink: /guide/troubleshooting-masternode.html
---

Masternode quorums form at certain block heights. When reaching such height, a subset of currently enabled masternodes is selected for participation in the quorum. This subset is chosen deterministically, meaning every peer on the network chooses exactly the same subset. A series of messages are then sent between quorum members to generate cryptographic keys. 

Only masternodes that are configured correctly and running at the time of quorum formation can participate in key generation. If the masternode is selected for quorum but is misconfigured, not running or did not participate, it will be penalised. The masternode will gain a PoSe score which is given by `66% x number of Registered masternodes` or `100`, whichever is greater.

The PoSe score decreases by 1 for every block mined. A masternode with a PoSe score of 3000 therefore requires 3000 blocks to be mined before its score is zeroed.

Once the PoSe score reaches **more than the total number of masternodes,** it changes status to PoSe Banned and needs to be restarted with `protx update_service` after any problems on the masternode is fixed.

## Troubleshooting

_(This list is non-exhaustive. Your masternode might be facing a problem that is not listed here.)_

* Running out of disk space

* Running out of swap space

* firod not running

* Insufficient number of connections to other masternodes

* Wrong/missing `znodeblsprivkey` in `firo.conf`

* `znodeblsprivkey=` is wrongly typed as `znodeblskey=` etc

* Not restarting firod after modifying `firo.conf`

* Stuck on a block

* IP used when registering masternode is not the same as the IP the masternode is running on

* IPv4/IPv6 interface related problems

* Problems with the datacenter

When everything is configured correctly, `./firo-cli evoznode status` and `./firo-cli getinfo` will return

```
  "state": "READY",
  "status": "Ready"
```

and the **[current block number](https://explorer.firo.org/)** along with other masternode-related status if ENABLED, or

```
  "state": "POSE_BANNED",
  "status": "Znode was PoSe banned"
```

if the masternode is POSE_BANNED.

## Restarting your PoSe Banned masternode

**The following commands must be performed on your wallet. Performing it on your masternode will not work as there is no balance to cover the transaction fee.**

After you have ensured that everything is correct, bring back your PoSe banned masternode to Enabled with this command:

```
protx update_service proTxHash ipAndPort operatorKey operatorPayoutAddress feeSourceAddress
```

Before you are able to enter the command, you must first unlock your wallet:

```
walletpassphrase "YOUR PASSWORD" 60
```

This command will unlock your wallet for 60 seconds and returns a `(null)` message when successfully executed.

`proTxHash`: original output of `protx register` command. In masternodes tab, right-click on the banned node and choose 'Copy Protx hash'.

`ipAndPort`: ipAndPort of banned masternode

`operatorKey`: znodeblsprivkey of the masternode

`operatorPayoutAddress`: `""` (if you set your operatorReward to 0)

`feeSourceAddress`: an address in wallet that has a balance to fund the transaction

This command will output a transaction ID which can then be checked at [explorer.firo.org](https://explorer.firo.org). Your node will return to Enabled after the transaction is mined.

**WARNING:** Do not change `operatorKey` if you are only reviving the banned masternode.
