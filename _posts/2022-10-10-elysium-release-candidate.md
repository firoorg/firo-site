---
layout: post
title: "Elysium Release Candidate is now Available"
summary: "Firo's Tokenization layer"
tags: [announcement, news, development]
author: "Reuben Yap"
img: "/blog/assets/elysium-release-candidate.png"
---
Elysium, our asset tokenisation layer, is now in release candidate status and is open for public testing. Release candidate status means that while the code is complete and fully functional, this is the final testing stage before an official release.

## What is Elysium?

Elysium is Firo’s tokenisation layer that provides a platform for anyone to create their own custom tokens. These tokens enjoy all the privacy advantages of Lelantus technology at a protocol level and low fees.  

Fees for transacting with these tokens are paid in Firo that have been anonymised using Lelantus. Unlike other tokenisation platforms, the fee payer’s identity is hidden when transacting with these tokens. The tokens are, by default, sent using Lelantus technology and are anonymised when received.  

Some of the potential use cases where Elysium can be used are:  
a) anonymous voting tokens,
b) private stablecoins,
c) asset-backed tokens,
d) fun meme or community coins with privacy.  

The launch of Elysium expands the use cases of Firo not only to be a privacy coin but also a utility token for a privacy ecosystem.

Our partners at [DotOracle are working to bridge assets from other chains into Elysium](https://firo.org/2022/01/18/dotoracle-partnership.html) to take advantage of the privacy feature that Firo has with cheap fees. Using DotOracle, you can bridge ERC20, BEP20, TRC20, etc, tokens into Elysium to transact privately.


## Elysium Release Candidate

Before trying out the release candidate, **please remember that this is a release candidate and should not be meant to be used in production wallets**.  

Download links are available below

[Firo Client v3.0.0 Elysium Release Candidate](https://github.com/firoorg/firo-client/releases/tag/v3.0.0-elysium-rc) for Windows, MacOS and Linux (UI)

[Firo v0.14.11.1 Elysium Release Candidate](https://github.com/firoorg/firo/releases/tag/v0.14.11.1-elysium-rc) for Linux only (CLI only)

If you have used Elysium before, please delete all folders beginning with *MP\* _ and also Elysium_TXDB*

**As always, please back-up your wallet prior to updating (Settings>Backup Wallet) and store it separately.**

We advise using testnet to test Elysium for yourself.

### Firo Client Elysium Release Candidate v3.0.0  

1) Launch the Firo Client in testnet

![](/blog/assets//elysium-post/Elysium1.jpg)

2) After the main screen appears, head over to Settings and enable Elysium. The client will restart and let it sync to the latest block.

![](/blog/assets//elysium-post/Elysium2.jpg)

3) You can choose to create a new token or add an existing one
	
a) To create a token, Select the Create Token button. You can fill in the desired information in the text box. 
		
You will be required to have some transparent testnet Firo in your wallet to create tokens. You can obtain testnet Firo by visiting the Firo testnet faucet at https://testexplorer.firo.org/faucet.  
Once you have created the token, It will begin adding the token to the blockchain. 

![](/blog/assets//elysium-post/Elysium3.jpg)

![](/blog/assets//elysium-post/Elysium4.jpg)

![](/blog/assets//elysium-post/Elysium5.jpg)  

b) To add an existing token to your wallet, Select the “Add existing token”. Enter the Token ID and press enter to search for its existence in the blockchain.  

![](/blog/assets//elysium-post/Elysium6.jpg)

4) Finally, you have added a token to your wallet. You can send the tokens from the Send tab. You can secure your tokens by clicking the anonymization button at the top to anonymize your Firo/tokens.  

![](/blog/assets//elysium-post/Elysium7.jpg)

![](/blog/assets//elysium-post/Elysium8.jpg)
