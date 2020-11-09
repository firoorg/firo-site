---
layout: post
title: "How to backup your Firo wallet with a mnemonic seed phrase"
summary: 
tags: [guide]
author: "Anwar P."
permalink: /guide/backing-up-wallet-with-mnemonic-seed-phrase.html
---
The release of [Zcoin Core wallet v0.13.8.10](https://github.com/firoorg/firo/releases) introduces the mnemonic (seed phrase) backup feature following the [BIP39 standard](https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki). This means that you can now easily store a backup of your wallet offline as well as restoring your Zcoin Core wallet to other compatible wallets that supports mnemonic words instead of only storing your wallet.dat file.

## Creating a new wallet with a mnemonic seed phrase

![](/guide/assets/backing-up-wallet-with-mnemonic-seed-phrase/seed_01.png) 

1. Select "**Create a new wallet**". 

2. Choose either 12 or 24 words seed. 24 words seed is selected by default although 12 word seed is also available for compatibility reasons. A 24 word seed provides 256-bit security while a 12 word seed provides 128-bit security.

![](/guide/assets/backing-up-wallet-with-mnemonic-seed-phrase/seed_02.png)

**WARNING:** Do not use the mnemonic words in the example above! If you do, your funds will be gone!

You can also add a mnemonic passphrase by checking the "Use seed passphrase" box to prevent easy access to your seed. However this means you should backup your mnemonic passphrase as well as the seed phrase. 

3. Click on "**OK**". 

4. After your wallet has been created, you will be presented with a window containing your mnemonic seed words. You will need to write down these words and store them in a secure location. Once you have done so, click on the "**Next**" button. 

5. You will be prompted to enter your mnemonic seed words again to ensure that they were written down correctly. **This is your last chance to view and record this mnemonic seed words as after this, if you lose it, you will lose all your funds.** Enter all the words in the correct order and click on "**Finish**" to verify that you have recorded your seed phrase correctly.

## Restoring wallet from seed phrase

![](/guide/assets/backing-up-wallet-with-mnemonic-seed-phrase/seed_03.png) 

**WARNING:** Do not use the mnemonic words in the example above! If you do, your funds will be gone!

**Note: Electrum, from which Electrum-XZC was forked from uses a different seed phrase standard and thus cannot be imported.** 

1. Select the "**Recover existing wallet**" and choose the number of words matching your backed up mnemonic words.

2. Enter your backed up seed words into the "**Input words here**" box. 

3. If you have secured your seed words with a passphrase when creating the seed, click on "**Use seedphrase (optional)**" and enter in your mnemonic passphrase here (this is not the same as your wallet password). 

4. Click the "**OK**" button.