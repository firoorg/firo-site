---
layout: guide
title: "Migrating your wallet from Zcoin to Firo "
summary: 
tags: [guide]
author: "Anwar P."
permalink: /guide/firo-migration-guide.html
---
## Important notes

* There are **no chain swaps.**

* You **do not need to send Zcoin** from the Zcoin wallet to the Firo wallet.

* You will need to **update to the latest Electrum-Firo** to continue using your hardware wallet.

* Ledger and Trezor users will need to **update their firmware to a version that supports Firo.**

## Things to do before updating

* backup wallet.dat

* check the current data directory ( Help -> Debug window -> Datadir )

* check current block on Zcoin wallet ( Help -> Debug window -> Current number of blocks )

* check current Zcoin wallet version ( Help -> Debug window -> Client version )

* all the above information are IMPORTANT if you want to get help!

**REMEMBER:** If you use a different data directory, it is your responsibility to ensure the Firo QT wallet starts with the correct directory.

Default data directory for Zcoin are:

```
Windows: C:\Users\YOURUSERNAME\AppData\zcoin
Linux: ~/.zcoin
MacOS:  /Users/YOURUSERNAME/Library/Application\ Support/zcoin/
```

## Step 1

Download and install the latest version here:

[https://github.com/firoorg/firo/releases/latest](https://github.com/firoorg/firo/releases/latest)

## Step 2

On QT wallet's first startup, you will be presented with the following:

### If you are using a custom data directory

![](/guide/assets/firo-migration-guide/datadir_select.PNG)

The wallet will ask you to specify the data directory. Select the one you previously used for Zcoin and proceed. 

**If it asks you to create a new wallet**, you did not specify the correct data directory. Close the wallet by clicking the 'Cancel' button at the bottom of the "Create and recover wallet", and follow the steps in **Resetting Options** at the bottom of this guide.

### If you are using the default data directory

![](/guide/assets/firo-migration-guide/firo-qt-migrate.PNG)

The wallet will ask you if you want to migrate the default data directory from zcoin to firo. Press Yes to proceed.

## Step 3

The Firo QT wallet should now show your balance, transactions and masternode (if any).

## After migrating

![](/guide/assets/firo-migration-guide/use-transparent-balance.jpg)

The new wallet defaults to Sending your private balance that were anonymised with the Lelantus protocol. This can cause the **"The amount exceeds your balance"** error to appear if you try to send your non-anonymised balance.

Click on the **'Use Transparent Balance'** on the bottom right of the Send tab to switch to your non-private balance. You should now be able to send them out.

## Stuck on block 336890

If you are **stuck on block 336890**, update to the [latest version](https://github.com/firoorg/firo/releases/latest) and do the following:

### Wallet: 

Go to Help -> Debug Window -> Console and enter:

`reconsiderblock bac60b152687f66dc8e70896642b76334f04b256a6875f6c048b153aad923406`

Output will be (null). Restart wallet and it should start syncing.

### Masternode: 

`./firo-cli reconsiderblock bac60b152687f66dc8e70896642b76334f04b256a6875f6c048b153aad923406`

## Resetting options

### Windows

Open the folder where the **firo-qt.exe** is located. Hold Shift, right-click inside the folder and select **'Open PowerShell window here'**. In the window that appears, type:

`.\firo-qt.exe -resetguisettings`

The wallet should now start with the 'Choose your data directory' window.

### MacOS

Using the **Terminal**, enter the following command:

`/Applications/firo-qt.app/Contents/MacOS/Firo-qt -resetguisettings`

The wallet should now start with the 'Choose your data directory' window.

### Linux

Navigate to the directory where your **firo-qt** binary is. In the **Terminal**, type in the following:

`./firo-qt -resetguisettings`

The wallet should now start with the 'Choose your data directory' window.
