---
layout: guide
title: "How to use Spark Names"
summary: "Instructions on how to use Spark Names, a Spark address alias, on the Firo Core (Qt) wallet"
tags: [guide]
author: "Anwar P."
permalink: guide/using-spark-names.html
img: ""
---

## Registering a Spark Name

**Notes:** 
* You must have sufficient private Firo balance in order to register a Spark Name.
* You cannot register more than one Spark Address to a Spark Name.

1. In the **Receive tab**, click on the **Create Spark Name button.**
2. Paste an existing Spark Address, or click on the **Generate new button** to generate a new one.
3. Enter the Spark Name you wish to register and the number of years. You can register a minimum of 1 year and a maximum of 15 years. A shorter Spark Name will require a higher fee than a longer one.
4. Enter any additional information you wish to be associated with the Spark Name. **This information is public.**

## Extending validity of a Spark Name

**Note:** _You must have sufficient private Firo balance in order to extend the validity._

**WARNING:** Do not extend your Spark Name validity before block 1,329,000 (approximately 22 June 2026). Extensions after this date are safe.

1. In the **Receive tab**, click on the **My Spark Names button.** 
2. Select a Spark Name you would like to extend and click on the **Extend button.**
3. Enter the number of years you would like to add to the validity. The new estimated expiry date is shown on-screen.

## Transferring a registered Spark Name to another Spark address

**Note:** _You must have sufficient private Firo balance in order to receive the transferred Spark name._

Spark Name transfers are done on-chain. Buying and selling Spark Names can be done manually off-chain, but ensure you do not get scammed!

Transferring Spark Names requires the sender and receiver to execute RPC commands. In Firo Core (Qt), this can be accessed by going to **Help -> Debug window -> Console.**

1. Receiver

`requestsparknametransfer "name" "newsparkaddress" years "oldsparkaddress" "additionalData"`

This will output a `requestHash` that can be provided to the Sender in the next step. 

{:start="2"}

2. Sender

`transfersparkname "oldSparkAddress" "requestHash"`

This will output a `transferproof` that can be provided to the Receiver in the next step. You must first unlock your wallet with `walletpassphrase YOURPASSWORD 60` before running this command.

{:start="3"}

3. Receiver

`registersparkname "name" "sparkaddress" years "oldsparkaddress" "transferproof" "additionalData"`

Receiver runs the above RPC command to "re-register" the Spark Name with the new Spark Address. This will output a transaction ID, and the transfer will be completed once the transaction is mined into a block. You must have sufficient private Firo balance in order to run this command.
