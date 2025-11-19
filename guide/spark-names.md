---
layout: guide
title: "Spark Names"
summary: 
tags: [guide]
author: "Anwar P."
permalink: /guide/spark-names.html
---

**This guide is a work in progress.**

## Transferring Spark Names

Transferring a Spark Name requires both sender and receiver to run RPC commands in the Debug Console (on Firo Core) or through firo-cli (on daemon), and wallet to be unlocked with `walletpassphrase`.

Only the last step will actually create a transaction. Ensure that you have sufficient private balance to pay the transaction fee.

**WARNING:** If the Spark Name has text in the `additionalData` field, it will be wiped if you did not re-enter it again.

### 1. Requesting

The **receiver** executes the following command which will output a `requestHash` when successful:

`requestsparknametransfer "name" "newsparkaddress" "oldsparkaddress" years "additionalData"`

### 2. Transferring

The **sender** executes the following command using the `requestHash` from the receiver. This will output a `transferproof` when successful:

`transfersparkname "oldSparkAddress" "requestHash"`

### 3. Submitting

The **receiver** executes the following command using the `transferproof` from the sender. This step requires private balance to pay the transaction fee and will output a transaction ID when successful.

`registersparkname "name" "newsparkaddress" years "oldsparkaddress" "transferproof" "additionalData"`
