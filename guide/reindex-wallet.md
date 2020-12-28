---
layout: guide
title: "Reindexing your Firo wallet"
summary: 
tags: [guide]
author: "Anwar P."
permalink: /guide/reindex-wallet.html
---
## Reindexing your wallet

If you have trouble syncing your wallet and it appears to be stuck on a block, please start it again with the **-reindex-chainstate flag**. This will start the Firo wallet and begin the blockchain reindex process and **will take several hours**. 

If you suspect corrupted blocks, please run **\-reindex** instead. 

Make sure you are always on the latest release by going to our [release page](https://github.com/firoorg/firo/releases).

## Windows


Open the folder where the **firo-qt.exe** is located. Hold Shift, right-click inside the folder and select **'Open command window here'**. In the Command Prompt that appears, type: 

`firo-qt.exe -reindex-chainstate` 

If you also want to rescan for Firo Sigma mints, do the following (which will also reindex) 

`firo-qt.exe -zapwalletmints` 

**Windows 10:** Windows 10 has changed the default Command Prompt to PowerShell. If this is the case, **Shift + right-click inside the folder** and click **'Open PowerShell window here'**. 

Type .\\firo-qt.exe, add the **-reindex-chainstate** flag and press **Enter**. Note the period and backslash. 

![](/guide/assets/reindex-wallet/firo-qt-powershell.png)

## Linux

Navigate to the directory where your **firo-qt** binary is. In the **Terminal**, type in the following: 

`./firo-qt -reindex-chainstate` 

If you also want to rescan for Firo Sigma mints, do the following (which will also reindex) 

`./firo-qt -zapwalletmints` 

If you want to **reindex your Znode:** 

`./firod -daemon -reindex-chainstate` 

Note that the time to finish reindex differs greatly depending on your VPS' performance.

## macOS

Using the **Terminal**, enter the following command: 

`/Applications/firo-qt.app/Contents/MacOS/Firo-qt -reindex-chainstate` 

And to do it with scanning of Firo Sigma mints, do the following (which will also reindex). 

`/Applications/firo-qt.app/Contents/MacOS/Firo-qt -zapwalletmints`

## Firo Rich GUI client (Electron)

To reindex the Electron client, open the firo.conf and add reindex=1. Save the file and start the client. Once the reindex has started, remove the reindex=1 line from the firo.conf file.