---
layout: post
title: "Firo Research Update May 2021"
summary: "An update on Firo's research in the past few months. Privacy preserving light wallets, security analysis of Lelantus v2, improved batched verification, proof of concept code for hierarchical one-out-of-many proofs, anonymous and end to end verifiable and self tallying voting protocol using Lelantus"
tags: [news, dev, community]
author: "Reuben Yap"
img: ""
---
We would like to share what Firo’s research team has been working on over the past few months.

## PRIVACY PRESERVING LIGHT WALLET PROTOCOLS

We aim to have a light wallet that supports both Lelantus and transparent transactions without reliance on third-party servers or leaking UTXOs (such as Electrum). Transparent and Lelantus transactions require separate approaches.

For Lelantus only transactions, we are working on a design that would leverage Firo’s masternode network to deliver Lelantus anonymity sets to the client so it can receive and spend using Lelantus.

For transparent transactions, we find the Neutrino approach promising where all transactions in a block are compressed to be about 20 kB/block. This compressed data is then used by the client to determine whether that block has any of the client’s transactions.

A work in progress draft of our proposed wallet design can be found [here](/blog/assets/Lelantus_Light_Wallet_Design_Ideas_Draft006.pdf).

## LELANTUS

We have been spending time diving deeper into Lelantus v2 security before coding work begins. We also have been finding ways to tweak and optimize Lelantus.

## Security Analysis of Lelantus v2

Given the feedback we got earlier from Dmitry Khovratovich, we have been rewriting the protocol description of Lelantus v2 as a multi-round interactive protocol model between prover and verifier to improve its theoretical security model. Research is ongoing to ensure the desired security properties are maintained or improved with this updated construction.
	
## Improved Batched Verification

Code is available for [batch verification of range proofs](https://github.com/firoorg/firo/pull/1023). Once enabled and integrated into client code, this will enable more efficient verification.

Code is also available to improve [batch verification of one-out-of-many proofs](https://github.com/firoorg/firo/pull/1034) by reducing the complexity of the underlying cryptographic operations.

Note that all code linked here is not yet reviewed, and should not yet be considered safe for use in production.

Once reviewed and approved, both pull requests will enable more efficient transaction verification without requiring consensus changes.

## OTHER RESEARCH WORK

### Hierarchical One-out-of-many Proofs

Building on our [previous paper](https://eprint.iacr.org/2020/430.pdf), proof of concept code is now available for hierarchical one-out-of-many proofs to provide practical timing data and detail how to turn the interactive protocol into a non-interactive construction using the Fiat-Shamir method. 

### Anonymous and End-to-End Verifiable Self-Tallying Voting Protocol

Aram is working on a novel cryptographic voting protocol powered by the Lelantus concepts. This voting scheme aims to enable anonymous and end-to-end verifiable elections. But it also does not require a special trusted board to be established which will be responsible for either running a mix network or  enabling trusted decryption of the final tally. This self-tallying property will greatly simplify the initialization and setup of election processes. 

### FURTHER READING

These items were looked at purely to keep ourselves up to date on recent cryptography developments and explore promising new technology. The listing of these articles do not mean that we are intending to implement them. Many of these are still in the preprint stage and have not been peer or journal reviewed.

[Zcash Unified addresses](https://github.com/zcash/zips/issues/470)
[Veksel: Simple, Efficient, Anonymous Payments with Large Anonymity Sets from Well-Studied Assumptions](https://eprint.iacr.org/2021/327)
[Foundations of Ring Sampling](https://eprint.iacr.org/2020/1550)
[Stacking Sigmas: A Framework to Compose Σ -Protocols for Disjunctions](https://eprint.iacr.org/2021/422) (with a nice reference to Aram’s work on Hierarchical One-out-of-many Proofs!)
[Efficient Range Proofs with Transparent Setup from Bounded Integer Commitments](https://eprint.iacr.org/2021/540)
