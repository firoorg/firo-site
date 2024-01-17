---
layout: guide
title: "How to Mine Firo (FIRO) with FiroPoW"
summary: ""
tags: [guide]
author: "Anwar P."
img: ""
permalink: /guide/how-to-mine-firo.html
---
![](/guide/assets/how-to-mine/firopow-banner.png)

Firo is designed to be mined by GPUs.

The FiroPoW mining algorithm (a modified version of ProgPoW 0.9.4) is designed to utilize all parts of a GPU and includes a random sequence that changes every block to add further ASIC and FPGA resistance.

We believe in the importance of fair distribution in FIRO and remain committed to having it mineable using commodity hardware like GPUs.

Before you begin, make sure you have a Firo (FIRO) address where you want your mining payouts to go to. To get one, download a [Firo wallet]({{ site.baseurl }}/get-firo/download/) and sync it with the network. 

The guide is meant for Windows users though Linux users can easily adapt it.

## Step 1: Getting your Miners

* [Official reference miner](https://github.com/firoorg/firominer/releases) (open source, no fee. Performance on newer AMD cards is poor on the reference miner) 
* [Nvidia GPU: T-Rex Miner](https://github.com/trexminer/T-Rex/releases) (closed source, 1% fee)
* [AMD GPU: Team Red Miner](https://github.com/todxx/teamredminer/releases) (closed source, 2% fee)
* [AMD GPU: SRBMiner-Multi](https://github.com/doktor83/SRBMiner-Multi/releases) (closed source, 0.85% fee)

**Warning:** Miners are listed here for convenience. Non-official miners have not been vetted. Use at your own risk. All fees are to the developers of the miners.

Extract the exe binary into a folder of your choice.

## Step 2: Registering with a Pool (if not solo mining)

There are several pools running Firo on FiroPoW. Please try to spread the hashrate around so that no pool has more than 50% of the total hashrate for decentralization reasons! Note that pure 51% attacks are not possible on Firo due to Chainlocks technology which require both to compromise or take down the masternode network and have the necessary hashrate. You can view the current hashrate distribution [here](https://poolbay.io/crypto/317/firo).

* [Mintpond](https://mintpond.com/#!/firo)
    * firo.mintpond.com:3000
	* [Mintpond's Firo mining guide](https://mintpond.com/getting-started-guide/firo)
* [WoolyPooly](https://woolypooly.com/en/coin/firo)
	* pool.woolypooly.com:3104
* [2Miners](https://2miners.com/firo-mining-pool)
    * firo.2miners.com:8181
* [Nanopool's Picopool](https://picopool.org/)
    * firo-eu1.picopool.org:22222
* [Zergpool](http://zergpool.com)
    * firopow.mine.zergpool.com:3001
    * firopow.eu.mine.zergpool.com:3001
* [Solo Pool](https://firo.solopool.org/)
    * s3.solopool.org:8014
* [Cruxpool](https://www.cruxpool.com/firo)
    * firo.cruxpool.com:2222
* [Speedpool](https://mining.speedpool.top/pool/firo)
    * mining.speedpool.top:7000
* [Minerpool](https://firo.minerpool.org/)
    * firo-us-east.minerpool.org:14058
    * firo-eu.minerpool.org:14058
* [BadHasher](https://badhasher.com/pool/Firo)
    * us-stratum.badhasher.com:3318
* [K1Pool](https://k1pool.com/pool/firo)
    * us.firo.k1pool.com:3476
* For detailed stratum information, please visit the pool's own site.

Most of the pools listed here do not require registration, only a valid **Firo address** as username and **worker** details. Ensure that you also get the **pool's address** and **port.**

## Step 3: Configuring your Miner

Open your favourite text editor, cut and paste the following line corresponding to your selected pool and miner and edit it accordingly.

### For Pool Mining

Firominer:
* Nvidia:
 `firominer -U -P stratum+tcp://username.worker:password@POOLADDRESS:PORT`
* AMD:
`firominer -G -P stratum+tcp://username.worker:password@POOLADDRESS:PORT`

T-Rex Miner (Nvidia):
`t-rex.exe -a firopow -o stratum+tcp://POOLADDRESS:PORT -u username.worker -p password`

Team Red Miner (AMD):
`teamredminer.exe -a firopow -o stratum+tcp://POOLADDRESS:PORT -u username.worker -p password`

SRBMiner-Multi (AMD):
`SRBMiner-MULTI.exe --disable-cpu --algorithm firopow --pool POOLADDRESS:PORT --wallet username.worker --gpu-boost 3`

After pasting it in, save the file as a .bat file (for e.g. **miner.bat**) in the same folder where you had extracted the miner binary earlier. 

### For Solo Mining

You will need to edit **firo.conf** to allow RPC calls. Navigate to the [default data directory](https://github.com/firoorg/firo/wiki/Default-data-directories), create a file called **firo.conf,** and add and modify these lines:
```
rpcuser=RPCUSER (up to you to change)
rpcpassword=RPCPASSWORD (up to you to change)
rpcport=8382
rpcallowip=127.0.0.1
listen=1
server=1
daemon=1
```
Once this is done, restart your Firo wallet and ensure it is synced to the latest block. Then make a new file called miner.bat as below and save it in the same folder as where you had extracted the miner binary earlier.

`firominer -P http://RPCUSER:RPCPASSWORD@127.0.0.1:8382 --reward-address YOURFIROADDRESS`

Please ensure that the line in **miner.bat** matches the relevant settings from **firo.conf** such as rpcuser, rpcpassword, and rpcport.

## Step 4: Running the Miner

Once you are done, run the bat file you created. You should see a window similar to this which will differ depending on the miner you are using. For solo mining, your Firo wallet needs to be synced. 

If you're seeing your shares as accepted, you should be good to go. It may take a few minutes for the correct speed to be reflected on the pool's website and your miner.

Happy mining!
