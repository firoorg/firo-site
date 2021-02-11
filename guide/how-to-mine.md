---
layout: guide
title: "How to Mine Firo (FIRO) with MTP"
summary: ""
tags: [guide]
author: "Anwar P."
img: ""
permalink: /guide/how-to-mine-firo.html
---
Currently [Firo](https://firo.org) can be mined by CPU and GPUs though are most efficient on GPUs. 

We use the MTP algorithm which is designed to be ASIC-resistant to lengthen fair distribution and allow home miners to participate for as long as possible. 

Before you begin, make sure you have a Firo (FIRO) address where you want your mining payouts to go to. To get one, download a [Firo wallet](https://firo.org/get-firo/download/) and sync it with the network. 

The guide is meant for Windows users though Linux users can easily adapt it.

## Step 1: Getting your Miners

* [Nvidia GPU: Official Firo ccminer by djm34](https://github.com/firoorg/ccminer/releases)
* [AMD GPU: Official Firo sgminer by djm34](https://github.com/firoorg/sgminer/releases)
* [Nvidia GPU: T-Rex Miner](https://github.com/trexminer/T-Rex/releases) (closed source with 1% fee)
* [Nvidia GPU: TT-Miner](https://bitcointalk.org/index.php?topic=5025783.0) (closed source with 1% fee)
* [Nvidia GPU: Cryptodredge](https://github.com/technobyl/CryptoDredge/releases) (closed source with 2% fee)
* [cpuminer by djm34](https://github.com/firoorg/cpuminer/releases)

**Warning:** Miners are listed here for convenience but non-official miners have not been vetted. Use at your own risk. 

Extract the exe binary into a folder of your choice.

## Step 2: Registering with a Pool (if not solo mining)

There are several pools running Firo on MTP (arranged in alphabetical order). The ones we recommend are as follows:

* [Mintpond](https://mintpond.com/#!/firo)
    * zcoin.mintpond.com:3000
	* [Mintpond's Firo mining guide](https://mintpond.com/getting-started-guide/firo)
* [ZelLabs](https://zellabs.net/coins/xzc)
    * us-zcoin.zellabs.net:7015 (USA)
* [Zergpool](http://zergpool.com)
    * mtp.mine.zergpool.com:3000 (Europe)
* [dapool](https://dapool.io/)
	* firo.dapool.io:3355
* [F2Pool (PPS Pool)](https://www.f2pool.com/)
    * xzc.f2pool.com:5780 (Asia)
* [Whibbit](https://pool.whibbit.cn/)
	* firo.whibbit.cn:30512
* [2Miners](https://2miners.com/xzc-mining-pool)
    * xzc.2miners.com:8080
* [Solo Pool](https://xzc.solopool.org/)
    * s3.solopool.org:8014

Get yourself and account there and make sure you obtain a **username** and **worker** details and the **pool's address** and **port.**

## Step 3: Configuring your Miner

Open your favourite text editor, cut and paste the following line corresponding to your selected pool and miner and edit it accordingly.

### For Pool Mining

For cpuminer:

`cpuminer.exe -a mtp -o stratum+tcp://POOLADDRESS:PORT -u username.worker -p password -t numberofthreads`

If -t is not specified, it will use the maximum number of threads. It is recommended to have a computer with a decent amount of RAM for stability. For ccminer (Nvidia):

`ccminer.exe -a mtp -o stratum+tcp://POOLADDRESS:PORT -u username.worker -p password`

For sgminer (AMD):

`sgminer.exe --kernel mtp -o stratum+tcp://POOLADDRESS:PORT -u username.worker -p 0,strict,verbose,d=700 --worksize 256 --intensity 18`

For T-Rex Miner (Nvidia):

`t-rex.exe -a mtp -o stratum+tcp://POOLADDRESS:PORT -u username.worker -p password`

For CryptoDredge (Nvidia):

`CryptoDredge.exe -a mtp -o stratum+tcp://POOLADDRESS:PORT -u username.worker -p x`

For TT-Miner (Nvidia):

`TT-MinerCmd.exe -A MTP-100 -P username.worker@POOLADDRESS:PORT`

After pasting it in, save the file as a .bat file (for e.g. **miner.bat**) in the same folder where you had extracted the miner binary to earlier. 

![](/guide/assets/how-to-mine/minerbat.png)

### For Solo Mining

You will need to edit **firo.conf** to allow rpc calls. Navigate to the location of the firo data files, default is **%appdata%\firo** 

Make a new file called firo.conf and add and adapt these lines:

    rpcuser=firo (up to you to change)`
    rpcpassword=mtp (up to you to change)`
    rpcport=8382
    rpcallowip=127.0.0.1
    listen=1
    server=1
    daemon=1

Once this is done, restart your Firo wallet and ensure it is synced. Then make a new file called miner.bat as below and save in the same folder as where you had extracted the miner binary to earlier.

`ccminer.exe -a mtp http://127.0.0.1:8382 -u firo -p mtp --no-getwork --coinbase-addr YOURFIROADDRESS`

## Step 4: Running the Miner

Once you are done, run the bat file you created. You should see a window similar to this (will differ from miner to miner). Note for solo-mining you need to wait for your Firo wallet to be synced. 

If you're seeing your shares as accepted, you should be good to go! Note that it may take a few minutes for the correct speed to be reflected on your pool's website and your mining command line. 

Happy mining!

![](/guide/assets/how-to-mine/mtpmining.png)