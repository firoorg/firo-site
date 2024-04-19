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

If you need to rescan your wallet, please run with **\-rescan** instead. This can take between 5 to 30 minutes to run.

## Windows

Open the folder where the **firo-qt.exe** is located. Hold Shift, right-click inside the folder and select **'Open PowerShell window here'**.. In the PowerShell window that appears, type: 

```
.\firo-qt.exe -reindex-chainstate
```

![](/guide/assets/reindex-wallet/firo-qt-powershell.png)

## Linux

Navigate to the directory where your **firo-qt** binary is. In the **Terminal**, type in the following: 

```
./firo-qt -reindex-chainstate
```

![](/guide/assets/reindex-wallet/firo-qt-linux-terminal.png)

If you want to **reindex your masternode:** 

```
./firod -daemon -reindex-chainstate
```

Note that the time to finish reindex differs greatly depending on your VPS' performance.

## macOS

Using the **Terminal**, enter the following command: 

```
/Applications/firo-qt.app/Contents/MacOS/Firo-qt -reindex-chainstate
```

![](/guide/assets/reindex-wallet/firo-qt-macos-terminal.png)

## Firo Rich GUI client (Electron)

To reindex the Electron client, go to the **Debug Console**, enter the following command and press Enter:

```
setargsfornextrun -reindex
```

Restart the wallet. The reindex process will start. Once completed, the wallet's main interface will be displayed.

If you need the other options, replace `-reindex` with `-reindex-chainstate` or `-rescan`

If you were unable to start the Electron client for some reason, edit the **firo.conf** in [the data directory](https://github.com/firoorg/firo/wiki/Default-data-directories) and add one of these options that you require. **Do not** add all options.

```
reindex=1
```

```
reindex-chainstate=1
```

```
rescan=1
```
