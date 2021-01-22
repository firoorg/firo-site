---
layout: guide
title: "Reindexing your Firo wallet"
summary: 
tags: [guide]
author: "Anwar P."
permalink: /guide/reindex-wallet.html
---
## Reindexing your wallet

**WARNING**: it is highly recommended that you **do not proceed** unless you are directed here by members of the Firo support team. Reindexing is very time-intensive and solutions sometimes exist for your problem that only takes several minutes to solve.

Make sure you are always on the latest release by going to our [release page](https://github.com/firoorg/firo/releases/latest).

If you suspect that the chainstate is corrupted, please start the wallet with the **-reindex-chainstate flag**. This will start the Firo wallet and begin the reindex-chainstate process and **will take several hours**. 

If you suspect corrupted blocks, please run **\-reindex** instead. 

## Windows

Open the folder where the **firo-qt.exe** is located. Hold Shift, right-click inside the folder and select **'Open PowerShell window here'**.. In the PowerShell window that appears, type: 

`.\firo-qt.exe -reindex-chainstate` 

![](/guide/assets/reindex-wallet/firo-qt-powershell.png)

## Linux

Navigate to the directory where your **firo-qt** binary is. In the **Terminal**, type in the following: 

`./firo-qt -reindex-chainstate` 

If you want to **reindex your masternode:** 

`./firod -daemon -reindex-chainstate` 

Note that the time to finish reindex differs greatly depending on your VPS' performance.

## macOS

Using the **Terminal**, enter the following command: 

`/Applications/firo-qt.app/Contents/MacOS/Firo-qt -reindex-chainstate` 

## Firo Rich GUI client (Electron)

To reindex the Electron client, edit the firo.conf that is located in the data directory and add reindex=1. Save the file and start the client. Once the reindex has started, remove the reindex=1 line from the firo.conf file.
