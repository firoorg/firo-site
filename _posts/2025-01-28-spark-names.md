---
layout: post
title: "Firo Spark Names"
summary: "Privacy preserving Digital Aliases and Identities"
tags: [community, news, dev]
author: "Reuben Yap"
img: "/blog/assets/spark-names/banner.png"
---
We have a new feature coming to Firo which greatly improves two of the biggest pain points of dealing with crypto: hard to remember cryptocurrency addresses and digital identity! 

Spark Names allows users to register user-friendly human-readable names to [privacy preserving Spark Addresses]({{ site.baseurl }}/2021/08/24/presenting-lelantus-spark.html) directly on Firo’s blockchain, for e.g. ‘@sparky’ instead of a lengthy 144 character Spark address. Spark Names also allow you to attach metadata to it allowing you to add any information you wish to associate with your handle.

While the idea of registering human readable aliases to crypto addresses is not new, as seen in Namecoin, Ethereum Name Service, FIO, Handshake and Zano aliases, our Spark Names implementation offers some advantages over existing naming systems..

### i)  Spark Names as your Digital Identity
Spark Names not only tie Spark addresses to a name but can also serve as your decentralized digital identity! While many other address alias protocols primarily focus only on tying handles to crypto addresses, Spark Names allows you to optionally add metadata to your Spark Name, be it social media handles, avatar urls, and any other text based data so that your Spark Name can identify you while keeping your transaction history private. Metadata can be updated through a renewal which you can perform at any time.

### ii) Spark Names does not compromise on privacy: 
In many alias systems like ENS, the alias is tied to a crypto address that can be looked up on the blockchain. This is a huge privacy risk as now everyone not only knows that the address belongs to you, but can see all transaction activity associated with it.

![Image1](/blog/assets/spark-names/image1.png)

Spark Names are tied to privacy preserving Spark Addresses (a type of stealth address) which are not searchable on the blockchain, so someone with your Spark Name can only resolve to a Spark Address which does not reveal any transaction details associated with it. This means you can freely share your Spark Name out without someone getting information about the transactions you receive or send much like an e-mail address!

### iii) Spark Name fees fund Community Fund

As the Firo project doesn’t rely on funding from VCs or investors, it primarily relies on donations and a percentage of the block reward. As Firo gradually moves into decentralized funding, additional continuing sources of revenue are important. All Spark Name related fees are channeled towards the Community Fund led by the community elected [Community Fund Committee]({{ site.baseurl }}/2022/07/04/community-fund-committee-elected.html) which is independent from the Core team. These funds can be used to fund various tasks such as audits, community initiatives, listings or even development tasks to support Firo and its ecosystem.

In future updates should the community desire, Spark Name fees can be burnt or channeled towards miners or masternode holders that can be helpful when Firo goes into tail emission in a couple of years.

### iv) Spark Names requires renewal

Some naming schemes allow perpetual registration which can result in squatting where one user just hogs a lot of potential names. While requiring renewal does not completely prevent this, it ensures that there’s an ongoing price to squat or at least pay a bigger fee upfront to secure a multi-year registration. This also partially addresses issues where users become inactive and yet hold on to valuable aliases. Having Spark Names fee model in this way generates organic demand for FIRO and an ongoing revenue source for the FIRO ecosystem.

### v)  Fee structure based on length

Spark Name’s fee structure is based on the length of the Spark Name where shorter names have higher fees. 

* One character: 1000 FIRO/year 
* Two characters: 100 FIRO/year 
* 3-5 characters: 10 FIRO/year 
* 6 characters and above: 1 FIRO/year 

This properly recognizes the scarcity of shorter names while keeping it affordable to most users instead of a flat rate. Users are free to pre-purchase as many years as they want in advance.

### vi) Ownership proof

To prevent abuse, users can only register aliases to Spark addresses that they control and not third parties since registration requires an ownership proof. This prevents someone from assigning derogatory or offensive names to your Spark address. In the same logic, we also only allow one Spark Name per Spark address to minimize the chance of confusion.

### vii) Transfer of ownership

Spark Names allows for the transfer of ownership to a new user should a user decide to sell it. This feature would be unavailable at launch but will be added on at a later time.

### When?

We are in the final stages of coding Spark Names and have released it on our internal devnet. We expect to release Spark Names on testnet in a week or two and mainnet in a month after that. We would be requiring a hard fork along with other updates when we roll out Spark Names.

Spark name functionality is also being added into our mobile wallets.

The core team is excited to bring a new level of usability and added functionality to FIRO with Spark Names!
