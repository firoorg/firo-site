---
layout: guide
title: Upgrading your Firo masternode
summary: 
tags: [guide]
author: "Sebastian M."
permalink: /guide/masternode-upgrade.html
---
Here’s a quick step-by-step guide to get your masternode up and running with the latest version in a few minutes. This guide assumes you are upgrading from a previous 0.14.x.x version to the **latest {{ site.data.downloads.firo_qt_version }}**. If you are upgrading from earlier versions, please adjust the folder paths in step 4 accordingly. 

Please note that if you did not update in time to a mandatory release or before the hard fork, your masternode will stop receiving rewards. It is highly advisable to update to the latest stable version as soon as possible.

1.  Log on to your masternode
2.  Copy a link to the Linux archive from [GitHub](https://github.com/firoorg/firo/releases/latest) or [Sourceforge](https://sourceforge.net/projects/firoorg/files/) by right-clicking the file name (e.g. firo-{{ site.data.downloads.firo_qt_version }}-linux64.tar.gz) and selecting the copy link menu item in your browser.
3.  On the masternode’s command line, type **wget** and insert the copied link after it like so: 

`cd ~` 
`wget https://github.com/firoorg/firo/releases/download/v{{ site.data.downloads.firo_qt_version }}/firo-{{ site.data.downloads.firo_qt_version }}-linux64.tar.gz` 

This will download the archive to your masternode.

4.  Stop the old daemon  

`cd ~/firo-{{ site.data.downloads.firo_old_commit }}/bin` 
(this is the folder of the major version you are upgrading _from_) 
`./firo-cli stop` 
and remove the old version 
`cd ~` 
`rm -rv firo-{{ site.data.downloads.firo_old_commit }}` 
(see above) 

5.  Unpack the downloaded archive by typing 
`tar xvzf firo-{{ site.data.downloads.firo_qt_version }}-linux64.tar.gz` 

6.  Now you can start your masternode again 
`cd ~/firo-{{ site.data.downloads.firo_new_commit }}/bin` 
(new version)
`./firod -daemon` 

**Always check that your masternode is running normally after every upgrade** with 
`./firo-cli getinfo`
`./firo-cli evoznode status`

Failure to check can cause your masternode to **get banned** some time later.

While you're at it, don't forget to upgrade your local wallet too! Just [download](https://firo.org/get-firo/download/) from our website and install replacing the old version. Just make sure to always have a backup of your wallet.dat! 

If you have any questions, feel free to join our [Discord](https://discord.com/invite/TGZPRbRT3Y) or [Telegram](https://t.me/firoorg) groups.
