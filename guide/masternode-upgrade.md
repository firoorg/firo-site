---
layout: guide
title: Upgrading your Firo masternode
summary: 
tags: [guide]
author: "Sebastian M."
permalink: /guide/masternode-upgrade.html
---
Here’s a quick step-by-step guide to get your masternode up and running with the latest version in a few minutes. This guide assumes you are upgrading from a previous 0.14.x.x version to the **latest 0.14.3.0**. If you are upgrading from earlier versions, please adjust the folder paths in step 4 accordingly. 

Please note that if you did not update in time to a mandatory release or before the hard fork, your masternode will stop receiving rewards. It is highly advisable to update to the latest stable version as soon as possible.

**Important notice for v0.14.3.0:** You can migrate your default data directory and zcoin.conf with the **-migratetofiro** flag. This only works if you are using the default data directory.

If you are using a **custom data directory (-datadir), please migrate manually** by renaming your custom data directory/ zcoin.conf to firo.conf, and making sure that the **-datadir=** flag is pointing to the correct directory.

1.  Log on to your masternode

2.  Copy a link to the Linux archive from [GitHub](https://github.com/firoorg/firo/releases/latest) or [Sourceforge](https://sourceforge.net/projects/firoorg/files/) by right-clicking the file name (e.g. firo-0.14.3.0-linux64.tar.gz) and selecting the copy link menu item in your browser.

3.  On the masternode’s command line, type **wget** and insert the copied link after it like so: 

`cd ~`
`wget https://github.com/firoorg/firo/releases/download/v0.14.3.0/firo-0.14.3.0-linux64.tar.gz` 

This will download the archive to your masternode.

**Please skip to the next step 4a if you are applying v0.14.3.0 hotfix**

4.  Stop the old daemon  

`cd ~/zcoin-0.14.0/bin` 
(this is the folder of the major version you are upgrading _from_) 
`./zcoin-cli stop` 
and remove the old version 
`cd ~` 
`rm -rv zcoin-0.14.0` 
(see above)

4a. Before stopping the old deamon, Invalidate block

`cd ~/firo-0.14.2/bin`
`./firo-cli invalidateblock 3cac3898a559b3c0d924abdba66f94e3660138447ee341b8ae8c351c83c72732`
then stop the old version
`./firo-cli stop`

5.  Unpack the downloaded archive by typing 
`tar xvzf firo-0.14.3.0-linux64.tar.gz`

6.  Now you can start your masternode again 
`cd ~/firo-0.14.3/bin` 
(new version) 
`./firod -daemon`

**Additional command for hotfix upgrade**
`./firo-cli reconsiderblock 3cac3898a559b3c0d924abdba66f94e3660138447ee341b8ae8c351c83c72732`

**Always check that your masternode is running normally after every upgrade** with 
`./firo-cli getinfo`
`./firo-cli evoznode status`

Failure to check can cause your masternode to **get banned** some time later.

While you're at it, don't forget to upgrade your local wallet too! Just [download](https://firo.org/get-firo/download/) from our website and install replacing the old version. Just make sure to always have a backup of your wallet.dat! 

If you have any questions, feel free to join our [Discord](https://discordapp.com/invite/4FjnQ2q) or [Telegram](https://t.me/firoproject) groups.
