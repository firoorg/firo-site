---
layout: post
title: "World’s First Large-Scale Blockchain-Based Political Election Held on Zcoin’s Blockchain"
tags: [news, community]
author: "Reuben Yap"
img: ""
---
![](/assets/thai-election-blockchain/group_01.jpg)

Over the period of 1st to the 9th of November, some of you have noticed that we had a massive surge in transactions, with hundreds to thousands of transactions being posted each block on **Zcoin’s blockchain.** We are now finally able to reveal what these transactions were. In fact, [a hint on this was given back in October](https://siamblockchain.com/2018/10/17/blockchain-on-thai-party/) with Mr. Korn Chatikavanij, former Minister of Finance revealing that political parties in Thailand have started using blockchain technology to select party leaders.

[![Zcoin tx during the election](https://img.youtube.com/vi/lIBVucbxFD0/maxresdefault.jpg)](https://www.youtube.com/watch?v=lIBVucbxFD0)

The Thai Democrat Party, Thailand’s oldest political party, recently held [a primary election to elect its new party leader.](https://www.straitstimes.com/asia/se-asia/former-thai-premier-abhisit-fends-off-challengers-to-retain-democrat-party-leadership) In the past, the party leader was selected by the party’s MPs and the party chairman. With the primary election, all Democrat party members were eligible to vote, and it represents the first time a Thai political party has selected its head with input from the grassroots.

The vote was concluded with a total of **127,479 votes** that came from all over Thailand and to the best of our knowledge this is the **world’s first application of blockchain technology in a political election of this scale** with other earlier votes on the blockchain being [small-scale test runs](https://www.swissinfo.ch/eng/crypto-valley-_-switzerland-s-first-municipal-blockchain-vote-hailed-a-success/44230928) or with [limited take-up rate](https://www.theverge.com/2018/11/10/18080518/blockchain-voting-mobile-app-west-virginia-voatz) – if they [happened at all.](https://futurism.com/sierra-leone-election-blockchain-agora)

This leadership race had unique circumstances where the stakeholders wanted to be certain that votes were not tampered with. Most e-voting systems rely on the use of a database that is controlled by an administrator. The stakeholders were unwilling to rely on this, and so it was agreed to use Zcoin’s public blockchain which had no administrator. The election mechanism, along with the [source code to enable the elections was agreed upon by all the candidates and vetted by their IT advisors](https://www.bangkokpost.com/news/politics/1571130/democrat-it-rep-eyed-for-fraud-after-copying-code) and subsequently approved by the Democrat Party Election Commission under the supervision of the Thai Election Commission.

The electronic voting took place via two methods: through voting stations nationwide utilising a Raspberry Pi based system and alternatively [a mobile voting app called D-Elect](https://play.google.com/store/apps/details?id=com.democratthailand.dconnect) that required voters to submit their photo ID.

There were two sets of data involved: identification documents and voting tallies. These datasets were encrypted and stored on IPFS, a decentralized and distributed file storage system. The IPFS hashes were then stored on the Zcoin blockchain, which acted as a decentralised immutable database while retaining auditability to the Election Commission, and the Democrat Party candidates.

For those curious, this is [a sample IPFS entry.](https://gateway.ipfs.io/ipfs/QmXMeSjjipsB6s1y5buNXyfHBbNiWRARrEZ22aaPQQgTSb)

The voter tallies and identity documents were encrypted in a way that protected voter privacy. The encryption keys were split using a cryptographic method called [Shamir’s Secret Sharing Scheme](https://en.wikipedia.org/wiki/Shamir%27s_Secret_Sharing) to ensure that not a single entity can decrypt the full set of voting data without the agreement and presence of all the stakeholders:

The voter identification documents can only be decrypted by a member of the Election Commission or a representative of the Democrat Party for the purpose of verifying the eligibility of voters.
Voting data can only be decrypted if all five parties – three representatives of each candidate, the Election Commission, and the Democrat Party – are present and in agreement.
The voting data or identification documents on their own, read without the other are insufficient to reveal how a voter voted.

At the conclusion of the vote, despite a large number of voters from all over Thailand, the final results were available in just under 12 hours. We are incredibly proud to have played a part in enabling blockchain based e-voting to gain real-world adoption and learned many valuable lessons while carrying it out.

![](/assets/thai-election-blockchain/group_02.jpg)

Despite the many challenges of e-voting, we believe it is important to pursue such endeavors to make voting or polling easier, cheaper to carry out and most importantly trusted by the voters. In this case, blockchain was a good fit, with the stakeholders’ emphasis on the integrity of the vote database with no central administrator, and also it being technology that they could understand and accept. We look forward to improving the system further such as with the use of zero-knowledge proof systems in facilitating [anonymous but verifiable voting on the blockchain.](https://repository.kulib.kyoto-u.ac.jp/dspace/bitstream/2433/217329/3/IEICE.tec.rep_IA2016-54.pdf)

**Disclaimer:** Zcoin does not endorse any political party and believes in the use of its technology in empowering personal liberties and democracy.