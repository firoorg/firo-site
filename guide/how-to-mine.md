---
layout: guide
title: "How to Mine Firo (FIRO) with FiroPoW"
summary: ""
tags: [guide]
author: "Anwar P."
img: ""
permalink: /guide/how-to-mine-firo.html
---
![](/guide/assets/how-to-mine/MiningGuide-Sparky.png)

Firo is designed to be mined by GPUs.

The FiroPoW mining algorithm (a modified version of ProgPoW 0.9.4) is designed to utilize all parts of a GPU and includes a random sequence that changes every block to add further ASIC and FPGA resistance.

We believe in the importance of fair distribution in FIRO and remain committed to having it mineable using commodity hardware like GPUs. The VRAM requirement is targeted to be mineable by GPUs with 8GB VRAM and above to keep old hardware off but keeping it accessible to most modern GPUs.

Before you begin, make sure you have a Firo (FIRO) address where you want your mining payouts to go to. We do not recommend mining directly to an address owned by an exchange. To get one, download a [Firo wallet]({{ site.baseurl }}/get-firo/download/) and sync it with the network. 

This guide is written for Windows users. Linux users can follow the same steps using the Linux packages and commands noted along the way.

## Step 1: Getting your Miner

We recommend **Firominer**, Firo's open source reference miner. It supports both NVIDIA and AMD GPUs, has no developer fee, supports both pool and solo mining, and performs within about 1% of closed-source miners.

Download the latest version from the [Firominer releases page](https://github.com/firoorg/firominer/releases/latest) and choose the package for your GPU:

* **NVIDIA:** the package with `cuda` in its name (for v1.4.0, `firominer-windows-x86_64-cuda12.9-opencl.zip`, or `firominer-linux-x86_64-cuda12.9-opencl.tar.gz` on Linux). It requires NVIDIA driver 576.57 or newer on Windows, or 575.57.08 or newer on Linux.
* **AMD:** the `opencl` package (for v1.4.0, `firominer-windows-x86_64-opencl.zip`, or `firominer-linux-x86_64-opencl.tar.gz` on Linux). Make sure your AMD GPU driver is up to date.

Packages are available for 64-bit Windows 10/11 and for Ubuntu 22.04 or newer (x86-64). You don't need to install the CUDA Toolkit, as the files Firominer needs are included. Older NVIDIA cards such as the GTX 10 series need a driver from the R575 or R580 branch, because newer driver branches no longer support them.

Extract the whole archive into a folder of your choice and keep its contents together. `firominer.exe` is in the `bin` folder and needs the other files that come with it, so don't move it out on its own.

**Verifying your download (recommended):** download `SHA256SUMS.txt` from the same release page. On Windows, open PowerShell in your downloads folder and run the following, using the name of the file you downloaded:

```
Get-FileHash .\firominer-windows-x86_64-opencl.zip -Algorithm SHA256
```

The hash shown should match the line for that file in `SHA256SUMS.txt`. On Linux, run `sha256sum --check --ignore-missing SHA256SUMS.txt` from your downloads folder.

**Antivirus warnings:** antivirus software, including Windows Defender, often flags cryptocurrency miners as potentially unwanted applications, and this may happen with Firominer too. Only download miners from their official release pages and verify the checksum before adding an exclusion for the miner's folder.

### Other Miners

Other FiroPoW miners are also available. These are closed source and charge a developer fee:

* [Nvidia/AMD GPU: TeamBlackMiner](https://github.com/sp-hash/TeamBlackMiner) (closed source, 0.5% fee)
* [Nvidia/AMD GPU: SRBMiner-Multi](https://github.com/doktor83/SRBMiner-Multi/releases) (closed source, 0.85% fee)
* [Nvidia/AMD GPU: GMiner](https://github.com/develsoftware/GMinerRelease/releases) (closed source, 1% fee)
* [AMD GPU: Team Red Miner](https://github.com/todxx/teamredminer/releases) (closed source, 2% fee)

**Warning:** Third-party miners are listed here for convenience and have not been vetted. Use at your own risk. All fees go to the developers of the miners.

If you use one of these miners, extract its download into a folder of your choice.

## Step 2: Registering with a Pool (if not solo mining)

There are several pools running Firo on FiroPoW. Please try to spread the hashrate around so that no pool has more than 50% of the total hashrate for decentralization reasons! Note that pure 51% attacks are not possible on Firo due to Chainlocks technology which requires an attacker to either take down or take over the masternode network and also have 51% of the hashrate. You can view the current hashrate distribution [here](https://miningpoolstats.stream/firo).

Currently Cedric-Crispin is the only pool with [Spark Address payout support](https://firo.cedric-crispin.com/start-mining/). Others only support transparent FIRO payouts. We recommend asking your favorite mining pool to add Spark Address support!

* [cedric-crispin](https://firo.cedric-crispin.com/) Spark Address and Spark Name payout support
    * firo.cedric-crispin.com:4064
    * firo.cedric-crispin.com:4065 (SSL)
* [EthCore](https://kriptokyng.com)
    * ethcore.ru:2073 (low-diff)
    * ethcore.ru:2075 (high-diff)
    * ethcore.ru:2077 (SSL)
* [Rplant](https://pool.rplant.xyz/)
    * eu.rplant.xyz:17045
    * asia.rplant.xyz:17045
    * na.rplant.xyz:17045   
* [WoolyPooly](https://woolypooly.com/en/coin/firo)
	* pool.woolypooly.com:3104
* [Kriptokyng](https://kriptokyng.com)
    * stratum.kriptokyng.com:3094 (PPLNS)
    * stratum.kriptokyng.com:1094 (SOLO)
* [Pooly.ca](https://pooly.ca/)
	* stratum+tcp://pooly.ca:3094
* [Meowpool](https://meowpool.net/)
	* stratum+tcp://meowpool.net:7278 (PPLNS)
* [SmoozyPool](https://www.smoozypool.es/)
	* stratum+tcp://(Firo-Address).(Name)@smoozypool.es:4031 (PPLNS)

* For detailed stratum information, please visit the pool's own site.

Most of the pools listed here do not require registration, only a valid **Firo address** as username and **worker** details. Ensure that you also get the **pool's address** and **port.**

## Step 3: Configuring your Miner

### Pool Mining with Firominer

Windows packages include a ready-made launcher called `mine_firo.bat` in the `bin` folder. Open it in Notepad (right-click the file and choose **Edit** or **Edit in Notepad**), find the line that starts with `"%~dp0firominer.exe"` and replace the pool details with your own:

```
"%~dp0firominer.exe" -P "stratum+tcp://WALLET.WORKER:PASSWORD@POOLADDRESS:PORT"
```

* `WALLET`: your Firo address
* `WORKER`: a name for this mining rig
* `PASSWORD`: your pool password. Use `x` if your pool doesn't need one.
* `POOLADDRESS:PORT`: your pool's address and port from Step 2

Then save the file.

The launcher points to cedric-crispin (`firo.cedric-crispin.com:4064`) by default, so change the pool address and port if you use a different pool. Keep the quotation marks. Lines starting with `rem` are comments and are ignored. Some pools use a different login format, so check your pool's site if your shares aren't accepted. To use a pool's SSL port, replace `stratum+tcp://` with `stratum+ssl://`.

By default, Firominer mines on every GPU it detects. To choose explicitly, add `-U` for NVIDIA (CUDA) or `-G` for AMD (OpenCL) right after `"%~dp0firominer.exe"`, for example:

```
"%~dp0firominer.exe" -G -P "stratum+tcp://WALLET.WORKER:PASSWORD@POOLADDRESS:PORT"
```

You can also add a backup pool by adding a second `-P` with another pool's details. Firominer switches to it if the first pool can't be reached.

On Linux, run Firominer from the extracted folder:

```
./bin/firominer -P "stratum+tcp://WALLET.WORKER:PASSWORD@POOLADDRESS:PORT"
```

### Pool Mining with Other Miners

Open your favourite text editor, paste the line for your miner and edit it with your pool details.

TeamBlackMiner (Nvidia/AMD):

```
TBMiner.exe --algo firopow --hostname POOLADDRESS --port PORT --wallet WALLETADDRESS --worker-name WORKER --server-passwd x
```

SRBMiner-Multi (Nvidia/AMD):

```
SRBMiner-MULTI.exe --disable-cpu --algorithm firopow --pool POOLADDRESS:PORT --wallet USERNAME.WORKER
```

Gminer:

```
miner.exe --algo firopow --server POOLADDRESS:PORT --user username.worker
```

Team Red Miner (AMD):

```
teamredminer.exe -a firopow -o stratum+tcp://POOLADDRESS:PORT -u username.worker -p password
```

Save the file as a .bat file (for example, **miner.bat**) in the same folder as the miner's executable.

### Solo Mining with Firominer

Firo's network difficulty is low enough that solo mining is a realistic option. Every block you find pays the full block reward straight to your address, though payouts arrive less regularly than with a pool. Solo mining with Firominer requires no pool; it mines directly against your own synced Firo wallet running on the same computer.

The block reward must go to a **transparent Firo address**. Spark addresses can't be used as a solo mining reward address.

First, edit **firo.conf** to allow RPC calls. Navigate to the [default data directory](https://github.com/firoorg/firo/wiki/Default-data-directories), create a file called **firo.conf** and add these lines, replacing `RPCUSER` and `RPCPASSWORD` with a username and password of your choice:

```
rpcuser=RPCUSER
rpcpassword=RPCPASSWORD
rpcport=8382
rpcallowip=127.0.0.1
listen=1
server=1
daemon=1
```

Avoid characters such as `@`, `:` and `/` in your RPC username and password, since they would break the connection line below.

Restart your Firo wallet and wait until it is synced to the latest block.

Next, in Firominer's `bin` folder, make a copy of `mine_firo.bat` and rename it `solo_firo.bat`. Open `solo_firo.bat` in Notepad and replace the line that starts with `"%~dp0firominer.exe"` with:

```
"%~dp0firominer.exe" -P "getwork://RPCUSER:RPCPASSWORD@127.0.0.1:8382" -r YOURFIROADDRESS
```

Change `RPCUSER`, `RPCPASSWORD` and the port `8382` so they match your **firo.conf**, replace `YOURFIROADDRESS` with your transparent Firo address, and save the file.

On Linux, run:

```
./bin/firominer -P "getwork://RPCUSER:RPCPASSWORD@127.0.0.1:8382" -r YOURFIROADDRESS
```

## Step 4: Running the Miner

Double-click the .bat file you created or edited (for Firominer, `mine_firo.bat` or `solo_firo.bat`). A console window opens and shows the miner's progress.

When Firominer starts, it generates the DAG and prepares its mining code on each GPU, so give it a minute or two before your hashrate appears.

For pool mining, you should be good to go once you see your shares accepted. It may take a few minutes for the correct speed to be reflected on the pool's website and in your miner.

For solo mining, there are no shares. Firominer only submits a solution when it finds a block. The reward then shows up in your wallet and becomes spendable once it has enough confirmations. Keep your Firo wallet open and synced while you mine.

### Troubleshooting Firominer

* **No GPUs detected:** update your GPU driver, and for NVIDIA cards check that it meets the minimum version in Step 1. To see which GPUs Firominer detects, open PowerShell in the Firominer folder and run `.\bin\firominer.exe --list-devices`.
* **Missing file errors:** make sure you extracted the whole archive and that `firominer.exe` is still in the `bin` folder with the files it came with.
* **Errors while generating the DAG:** your GPU may not have enough free memory. Close other programs using the GPU and check that it meets the VRAM requirement above.
* **Firominer disappears or won't start:** your antivirus may have quarantined it. See the antivirus note in Step 1.

For all available options, run `.\bin\firominer.exe --help` or see the [Firominer README](https://github.com/firoorg/firominer#readme). You can report problems on [GitHub](https://github.com/firoorg/firominer/issues).

Happy mining!
