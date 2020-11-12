---
layout: post
title: Upgrading your Firo masternode
summary: 
tags: [guide]
author: "Sebastian M."
permalink: /guide/masternode-upgrade.html
---
Here’s a quick step-by-step guide to get your masternode up and running with the latest version in a few minutes. This guide assumes you are upgrading from a previous 0.14.x.x version to the **latest 0.14.0.5**. If you are upgrading from earlier versions, please adjust the folder paths in step 4 accordingly. 

Please note that there is no reason to wait for a payout, as an update completed within a timeframe of 3 hours after first stopping the daemon, will not interfere with your qualification for a reward. 

**Stuck at block 294522/294523:** please [reindex-chainstate.](https://firo.org/guide/reindex-wallet.html)

**Stuck at block 296903:** `./zcoin-cli reconsiderblock ae237b8facac8562829dc7b875de910673e1d7812e7c06a27029a032e2988423`

1.  Log on to your masternode

2.  Copy a link to the Linux archive from [GitHub](https://github.com/firoorg/firo/releases/latest) or [Sourceforge](https://sourceforge.net/projects/zcoin/files/) by right-clicking the file name (e.g. zcoin-0.14.0.5-linux64.tar.gz) and selecting the copy link menu item in your browser.

3.  On the masternode’s command line, type **wget** and insert the copied link after it like so: 

`wget https://github.com/firoorg/firo/releases/download/v0.14.0.5/zcoin-0.14.0.5-linux64.tar.gz` 

This will download the archive to your masternode.

4.  Stop the zcoin daemon 

`cd ~/zcoin-0.14.0/bin` 

(this is the folder of the major version you are upgrading _from_) 

`./zcoin-cli stop` 

and remove the old version 

`cd ~` 

`rm -rv zcoin-0.14.0` 

(see above)

5.  Unpack the downloaded archive by typing 

`tar xvzf zcoin-0.14.0.5-linux64.tar.gz`

6.  Now you can start your masternode again 

`cd ~/zcoin-0.14.0/bin` 

(new version) 

`./zcoind -daemon`

While you're at it, don't forget to upgrade your local wallet too! Just [download](https://firo.org/get-firo/download/) from our website and install replacing the old version. Just make sure to always have a backup of your wallet.dat! 

If you have any questions, feel free to join our [Discord](https://discordapp.com/invite/4FjnQ2q) or [Telegram](https://t.me/firoproject) groups.