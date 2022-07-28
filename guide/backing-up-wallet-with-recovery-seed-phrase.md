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

### Firo QT

![](/guide/assets/backing-up-wallet-with-recovery-seed-phrase/seed_firo01.png) 

1. Select "**Create a new wallet**". 

2. Choose either 12 or 24 words seed phrase. 24 words seed phrase is selected by default although 12 word seed phrase is also available for compatibility reasons. A 24 word seed phrase provides 256-bit security while a 12 word seed phrase provides 128-bit security.

![](/guide/assets/backing-up-wallet-with-recovery-seed-phrase/seed_firo02.png)

**WARNING:** Do not use the seed phrase in the example above! If you do, your funds will be gone!

Optional: You can also add an additional passphrase by checking the "Use additional passphrase (optional)" box to prevent easy access to your seed phrase. However this means you should backup this passphrase as well as the seed phrase.

**WARNING:** If you are unsure, do not use an additional passphrase. Unlike the BIP39 wordlist, there are no checks if your additional passphrase is valid!

**CAUTION:** This additional passphrase is not the same as your wallet's password that you use to unlock your wallet or send a transaction.

3. Click on "**OK**". 

4. After your wallet has been created, you will be presented with a window containing your seed phrase. You will need to write down this seed phrase and store them in a secure location. Once you have done so, click on the "**Next**" button. 

5. You will be prompted to enter your seed phrase again to ensure that they were written down correctly. **This is your last chance to view and record this seed phrase as after this, if you lose it, you will lose all your funds.** Enter all the words in the correct order and click on "**Finish**" to verify that you have recorded your seed phrase correctly.

### Firo Client (Electron)

![](/guide/assets/backing-up-wallet-with-recovery-seed-phrase/firo-client/firo-client-01.png)

1. Click on the **"Create a New Wallet"** button.

![](/guide/assets/backing-up-wallet-with-recovery-seed-phrase/firo-client/firo-client-02.png)

**WARNING:** Do not use the seed phrase in the example above! If you do, your funds will be gone!

2. At the next screen, your seed phrase will be displayed. Please write it down and keep it in a safe and secure location. Click on the **"I have written down my seed phrase"** button once you have finished.

![](/guide/assets/backing-up-wallet-with-recovery-seed-phrase/firo-client/firo-client-03.png)

3. You will be asked to re-enter some parts of your seed phrase to verify that you have written them down corectly. Enter all the words in the correct order and click on **Confirm**.

![](/guide/assets/backing-up-wallet-with-recovery-seed-phrase/firo-client/firo-client-04.png)

4. At the next screen, enter your passphrase. This will be used to unlock your wallet or send a transaction.

5. Firo Client will now initialize your wallet with the seed phrase. This might take a while. Once complete, you will see the wallet's main screen.

## Restoring wallet from seed phrase

### Firo QT

![](/guide/assets/backing-up-wallet-with-recovery-seed-phrase/seed_firo03.png) 

**WARNING:** Do not use the seed phrase in the example above! If you do, your funds will be gone!

1. Select the "**Recover existing wallet**" and choose the number of words matching your backed up seed phrase.

2. Enter your backed up seed phrase into the "**Input recovery seed phrase here**" box. 

3. If you have secured your seed phrase with a passphrase when creating the seed phrase, click on "**Use additional passphrase (optional)**" and enter in your additional passphrase here (this is not the same as your wallet's password). 

4. Click the "**OK**" button.

### Firo Client (Electron)

![](/guide/assets/backing-up-wallet-with-recovery-seed-phrase/firo-client/firo-client-05.png)

**WARNING:** Do not use the seed phrase in the example above! If you do, your funds will be gone!

1. Click on the **"Recover from a Seed Phrase"** button.
2. At the next screen, select **12** or **24 words** and enter your seed phrase. If you have a protective passphrase, check the box and enter it here as well. If you never created a protective passphrase before, do not enter a protective passphrase **otherwise the wrong wallet might be restored.**

**CAUTION:** This protective passphrase is not the same as your wallet's passphrase that you use to unlock your wallet or send a transaction.

Click on the **OK** button once you have entered the seed phrase.

3. At the next screen, enter your passphrase. This will be used to unlock your wallet or send a transaction.

4. Firo Client will now start rescanning the blockchain for transactions related to your seed phrase. This might take a while. Once complete, you will see the wallet's main screen and restored balance.

* Viewing seed phrase

To view your wallet's current seed phrase, go to **Settings** -> **Show Recovery Phrase** and enter your passphrase.
