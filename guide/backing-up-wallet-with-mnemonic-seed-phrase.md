---
layout: guide
title: "How to backup your Firo wallet with a recovery seed phrase"
summary: 
tags: [guide]
author: "Anwar P."
permalink: /guide/backing-up-firo-wallet-with-recovery-seed-phrase.html
---
The recovery seed phrase backup feature was introduced in December 2019 with version [0.13.8.10](https://github.com/firoorg/firo/releases), following the [BIP39 standard](https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki). 

This allows you to easily store a backup of your wallet offline as well as restoring it to other compatible wallets that supports seed phrase, instead of just backing up your wallet.dat file previously.

**Warning:** Electrum-Firo uses a different seed phrase standard and thus **cannot be imported** into the QT or Electron wallet. You can import the QT/Electron seed phrase into Electrum-Firo, but ensure the **BIP39** option is checked.

## Creating a new wallet with seed phrase

![](/guide/assets/backing-up-wallet-with-mnemonic-seed-phrase/seed_firo01.png) 

1. Select "**Create a new wallet**". 

2. Choose either 12 or 24 words seed phrase. 24 words seed phrase is selected by default although 12 word seed phrase is also available for compatibility reasons. A 24 word seed phrase provides 256-bit security while a 12 word seed phrase provides 128-bit security.

![](/guide/assets/backing-up-wallet-with-mnemonic-seed-phrase/seed_firo02.png)

**WARNING:** Do not use the seed phrase in the example above! If you do, your funds will be gone!

Optional: You can also add an additional passphrase by checking the "Use additional passphrase (optional)" box to prevent easy access to your seed phrase. However this means you should backup this passphrase as well as the seed phrase.

**WARNING:** If you are unsure, do not use an additional passphrase. Unlike the BIP39 wordlist, there are no checks if your additional passphrase is valid!

**CAUTION:** This additional passphrase is not the same as your wallet's password that you use to unlock your wallet or send a transaction.

3. Click on "**OK**". 

4. After your wallet has been created, you will be presented with a window containing your seed phrase. You will need to write down this seed phrase and store them in a secure location. Once you have done so, click on the "**Next**" button. 

5. You will be prompted to enter your seed phrase again to ensure that they were written down correctly. **This is your last chance to view and record this seed phrase as after this, if you lose it, you will lose all your funds.** Enter all the words in the correct order and click on "**Finish**" to verify that you have recorded your seed phrase correctly.

## Restoring wallet from seed phrase

![](/guide/assets/backing-up-wallet-with-mnemonic-seed-phrase/seed_firo03.png) 

**WARNING:** Do not use the seed phrase in the example above! If you do, your funds will be gone!

1. Select the "**Recover existing wallet**" and choose the number of words matching your backed up seed phrase.

2. Enter your backed up seed phrase into the "**Input recovery seed phrase here**" box. 

3. If you have secured your seed phrase with a passphrase when creating the seed phrase, click on "**Use additional passphrase (optional)**" and enter in your additional passphrase here (this is not the same as your wallet's password). 

4. Click the "**OK**" button.
