--- 
layout: post 
title: "Lelantus Spark Testnet Launched" 
summary: "Public launch for Spark testnet"
tags: [news, development, community] 
author: "Augustus Jong" 
img: "/blog/assets/spark-testnet/banner.jpg" 
--- 
## Spark testnet launched

As Firo continues to push the boundaries of privacy technology, we are excited to announce the launch of our Lelantus Spark Testnet to the public. This testnet provides an environment where developers and users can experiment, evaluate, and refine the Lelantus Spark protocol before its official release on mainnet. It allows us to identify and address any potential issues, fine-tune performance, and gather valuable feedback from the community. With this, we can ensure that Lelantus Spark is robust, reliable, and ready to deliver the next level of privacy to Firo users worldwide. 

## Simplfying Privacy with Spark addresses

Lelantus Spark introduces a flexible, privacy-preserving stealth addressing system that enhances privacy for recipients of transactions. Spark addresses are not searchable on the blockchain, so that no one can look up your addresss to see how much you hold or the timing of your transactions. Additionally, sender, receiver and amounts are completely hidden when transacting between Spark addresses. More traditional addressing systems such as used in Bitcoin and Ethereum allow anyone to look up the entire history of an address by putting them into a blockchain explorer. Spark addresses completely replace our previous (Receiver Address Privacy) RAP address system which will be sunsetting.

Unlike Firo's current privacy protocol Lelantus, users can send transparent funds directly into private Spark addresses without requiring the user to perform an additional anonymisation action, greatly simplifying the use of privacy preserving transactions and its user experience. This also marks the first step of Firo's transition into mandatory privacy on all transactions.

![](/blog/assets/spark-testnet/spark-address.jpg)

## The Purpose of the Testnet

The Lelantus Spark testnet is a crucial step in Firo's commitment to rigorous testing and community involvement. By deploying the testnet, developers and users alike can assess the functionality, performance, and security of Lelantus Spark.

Feedback and insights gathered from the testnet participants will be invaluable in fine-tuning the protocol before its official launch on the mainnet. This iterative approach ensures that Lelantus Spark is robust, secure, and optimized to provide the highest levels of financial privacy for Firo users.

## How to use Testnet

Note: Please backup your mainnet **wallet.dat** BEFORE testing Spark testnet!!!

We will **NOT** be responsible for any wallet corruption.

1) Download the testnet binary

a) [Windows](https://github.com/firoorg/firo/releases/download/v0.14.12.4/firo-0f292f6f0390-win64.zip) 
b) [Mac](https://github.com/firoorg/firo/releases/download/v0.14.12.4/firo-0f292f6f0390-osx-unsigned.dmg) 
c) [Linux](https://github.com/firoorg/firo/releases/download/v0.14.12.4/firo-0f292f6f0390-x86_64-linux-gnu.tar.gz)  

2) Open command prompt/Terminal and launch firo-qt/firo-qt.exe with "-testnet" parameters. 

   Windows: `firo-qt.exe -testnet`  
   MAC: `open -a Firo-Qt --args -testnet`  
   Linux: `firo-qt -testnet`  

![](/blog/assets/spark-testnet/step2.png)

![](/blog/assets/spark-testnet/step2mac.png)

Alternatively you can edit `firo.conf` in your FIRO [data directory](https://github.com/firoorg/firo/wiki/Default-data-directories) and add the `testnet=1` argument. Launching the Firo-QT application will automatically launch testnet instead of mainnet.

![](/blog/assets/spark-testnet/firoconf.png)

3) Firo-QT (testnet) will launch and bring up the new wallet creation window

![](/blog/assets/spark-testnet/step3.png)

4) Make sure you are on the Firo Core - Wallet testnet. And let the wallet sync to the latest block.

![](/blog/assets/spark-testnet/step4.png)

5) Once synced, You are ready to use your testnet wallet. 

You can get testnet coins via the [Firo testnet Faucet](https://testexplorer.firo.org/faucet) or asking from the community via Firo [Telegram](https://t.me/firoorg) group or [Discord](https://discord.com/invite/TGZPRbRT3Y) You can lookup testnet transactions using our [testnet explorer](https://testexplorer.firo.org).

## Join the Excitement: Firo's Spark Testnet Launch Events! 

To celebrate this significant milestone, we have prepared a series of fun events that will bring us all together as a community, and ensure everyone at every level has a chance to participate! We look forward to all of your participation, as you play a crucial role in enhancing the Firo experience. Join us to make this testnet launch for Spark an astounding success! 

 ## Bug Bounty: Your Feedback Matters!  

As we prepare for the testnet launch, we invite each and every member of our community to actively participate in our Bug Bounty program. As a token of our appreciation, you'll have the opportunity to earn mainnet Firo rewards for your contributions. 

The first to report any issues on Firo's GitHub with a clear, detailed, and repeatable description will be generously rewarded. Reports that do not have a clear, detailed, and repeatable description will not be considered.

**Cosmetic/UI issues:** Up to 5 Firo rewards!  
**Minor issues:** Grab up to 50 Firo rewards!  
**Major issues:** Score up to 1000 Firo rewards!

The Firo core team will have final discretion in determining the severity of issues.  

 ## How to Participate:  

To take part in our Testnet Bug Bounty program, simply visit our GitHub repository at [GitHub Repository](https://github.com/firoorg/firo/issues) and submit your bug reports. Your involvement in shaping Firo's future is highly valued, and we can't wait to see your contributions!

 ## Spark Mayhem: Unleash the Power of Spark Addresses!

Prepare for a fun event centered around Spark Addresses - a two-part extravaganza on Facebook, Twitter, and CoinMarketCap!

**On Facebook:** Like our launch announcement post, comment with your testnet Spark Address, and share the post!  
**On Twitter:** Like, retweet, and comment with your testnet Spark Address!  
**On CoinMarketCap:** React, comment with your testnet Spark Address, and repost!  

Upon receiving your testnet Firo through your Spark Address, make sure to take note of your transaction id (txid) and the amount you received. These details will be crucial for claiming some exclusive mystery rewards later!

 ## Live Event: Firo Trivia on Kahoot!

Finally, join us for a live event that will showcase the exciting features of Spark and test your knowledge about Firo's tech and history! Prepare for an engaging quiz night that promises fun and knowledge galore with an opportunity to win exclusive Firo merchandise that will only be available during the testnet period.

 Date: August 6th, 2023
 Time: 14:30-15:30 UTC

Mark your calendars, invite your friends, and be part of this grand event as we dive deep into the new features of Firo!


