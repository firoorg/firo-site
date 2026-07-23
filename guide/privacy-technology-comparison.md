---
layout: guide
title: "How Firo's Privacy Technology Compares to the Competition"
summary: ""
tags: [news, dev, community]
author: "Reuben Yap"
img: "/guide/assets/privacy-technology-comparison/banner.png"
alt: ""
permalink: "/guide/privacy-coin-comparison.html"
---

### Blockchain Privacy Mechanisms

This guide provides a comparative survey of major blockchain and digital-cash privacy mechanisms that are deployed today or in active development, and explains how the Lelantus family of protocols developed for Firo, culminating in Lelantus Spark (live on Firo's mainnet since January 2024), stacks up. This is a living document that is updated from time to time with recent developments. Protocol statuses in this version were checked on **23 July 2026**.

Blockchain privacy is particularly difficult because public blockchains are designed so that everyone can validate the state of the chain and its balances. That normally means exposing transactions, addresses and amounts. Hiding this information while retaining public verifiability is not a trivial problem.

It also helps to remember that "privacy" is not one property. What the blockchain reveals (senders, receivers, amounts and transaction links), what the network reveals (IP addresses and timing), and who must remain available for the system to work (coordinators, relayers, frontends, policy-list providers or custodians) are separate questions. A design can perform well on one axis and poorly on another.

Most sections below compare underlying privacy mechanisms. Penumbra, Namada and Aztec are included as shorter project-level case studies because they show what changes when shielded payments are extended into app chains or general private execution. To understand the choices behind Lelantus and Spark, we first need to understand the alternatives.

### Cryptocurrency Tumblers and CoinJoin

**As used in: Dash, Decred, Bitcoin Cash, Bitcoin wallets and mixers**

Because the CoinJoin family now spans materially different designs, we identify where a point is not universal.

**Pros:**

- Works on top of most cryptocurrencies without requiring new consensus rules
- Non-custodial when correctly designed: a coordinator can disrupt or censor a round but cannot steal the participants' coins
- Uses ordinary transparent transactions, keeping supply fully auditable
- Modern protocols can hide the input-to-output mapping from the coordinator
- Variable amounts and output decomposition weaken exact-denomination heuristics in WabiSabi; CashFusion goes further by creating combinatorial ambiguity across many arbitrary-valued pieces. In neither case are amounts cryptographically hidden

**Cons:**

- Every input and output amount remains visible on-chain, so amount and timing analysis remain possible
- Anonymity depends on the number and genuine diversity of participants in the relevant rounds
- Participants must be online, and mixing to a useful depth can take time
- Coordinators, directory infrastructure or maker markets must remain reachable
- Pseudonymous participants are not necessarily independent people; a well-funded adversary can operate many apparent participants or makers
- A participant who refuses to sign can disrupt a round, although modern systems can identify and temporarily exclude repeat disruptors
- Careless change handling or later recombination of outputs can undo the privacy gained
- CoinJoined coins are often flagged by exchanges and compliance systems, so CoinJoin does not by itself provide fungibility

One of the first approaches to cryptocurrency privacy was the custodial tumbler. Users sent coins to an operator, who returned different coins after mixing deposits together. This could obscure ownership history, but users had to trust the tumbler not to steal funds or keep a complete log of the mapping.

CoinJoin removes the custody risk. Several users jointly construct one transaction, and each participant signs only after checking that the transaction pays the expected outputs. A coordinator may help users find one another and assemble the transaction, but it never controls the coins.

<img src="/guide/assets/privacy-technology-comparison/coinjoin.png" alt="Graphical comparison between a CoinJoin and a non-CoinJoin transaction" loading="lazy"/>

Removing theft risk does not remove metadata or participation risk. A basic coordinator may still observe inputs, IP addresses, timing and failed rounds. Tor helps with network metadata but does not solve amount correlation, wallet fingerprinting or careless post-mix spending.

The anonymity set is also limited to the crowd actually present. Dash therefore supports repeated rounds, but [cluster-intersection research](https://arxiv.org/pdf/1709.02489.pdf), an [empirical analysis of its chain](https://www.dominique-schroeder.de/publications/2021_Coin_Join_In_The_Whild_Analysis_DASH.pdf), and broader work on wallet re-identification show why repeated mixing is not equivalent to breaking the transaction graph cryptographically.

The modern CoinJoin designs deserve separate treatment.

#### CoinShuffle++ (Decred)

[CoinShuffle++](https://docs.decred.org/privacy/cspp/overview/), deployed by Decred using DiceMix Light, prevents even a malicious coordinator from learning which equal-valued mixed output belongs to which participant. The server still sees whose inputs and change entered the round, but the protocol hides the input-to-mixed-output mapping.

An earlier version of this article repeated the claim that CoinShuffle systems cannot mix more than 50 users. That is not a protocol law. Practical round sizes depend on implementation parameters, communication overhead, denial-of-service resistance and liquidity. The more durable limitations are that the server remains an availability and censorship point, values are fixed and public, and change outputs are dangerous: recombining change with mixed funds can let subset-sum and wallet-clustering analysis recover the links the round was meant to obscure.

#### WabiSabi (Wasabi) and JoinMarket

[WabiSabi](https://docs.wasabiwallet.io/using-wasabi/CoinJoin.html) uses anonymous credentials to coordinate CoinJoins with variable input and output amounts. Users are not forced into a small menu of exact denominations, and the coordinator cannot directly map registered inputs to outputs. Variable amounts and output decomposition weaken exact-denomination heuristics, but every amount and the complete transaction remain public; this is not amount hiding in the confidential-transaction sense.

The coordinator still sets admission rules and must run each round. In June 2024, zkSNACKs shut down Wasabi's default and dominant coordinator. The WabiSabi protocol and wallet did not disappear: current Wasabi clients can [discover and configure alternative coordinators](https://docs.wasabiwallet.io/FAQ/FAQ-UseWasabi.html#how-do-i-find-a-coordinator).

What disappeared was the service and liquidity most users had relied on. The result was fragmentation, extra discovery burden and smaller or less predictable crowds. This is a more precise lesson than saying Wasabi CoinJoin was simply switched off: the open protocol survived, while its dominant operational hub did not.

[JoinMarket](https://github.com/joinmarket-ng/joinmarket-ng) avoids a single coordinator by creating a market. Makers offer liquidity for a fee and takers pay to assemble a CoinJoin on demand. This is difficult to censor through one policy decision, but it introduces liquidity discovery, fees and Sybil risk. Maker identities are pseudonymous, so a taker cannot prove that several attractive offers are operated by independent entities.

JoinMarket's [**fidelity bonds**](https://gist.github.com/chris-belcher/18ea0e6acdb885a2bfbdee43dcd6b5af/) mitigate this by making maker selection depend partly on bitcoin locked for time, raising the economic cost of presenting many convincing identities. They are a meaningful defence, not proof of independence: a sufficiently capitalized adversary can still operate multiple makers, and honest liquidity can remain concentrated even without malicious intent.

#### CashFusion (Bitcoin Cash)

[CashFusion](https://github.com/cashshuffle/spec/blob/master/CASHFUSION.md), used on Bitcoin Cash through Electron Cash, does not use fixed denominations. Wallets split coins into many arbitrary-valued pieces, and a fusion transaction combines many inputs and outputs from numerous participants. Each piece remains visible, but reconstructing which pieces belong together becomes a large subset-sum problem when the round is sufficiently diverse. A blind verification scheme prevents the server from learning the input-output mapping, and wallets can fuse semi-automatically in the background.

This is strong practical ambiguity rather than a cryptographic guarantee. It weakens when rounds are small or analysts have external information; distinctive payments may still be reconstructed; participants and the server must remain online; and privacy depends on what users do with the outputs afterwards.

#### Where CoinJoin lands

CoinJoin's principal strengths are simplicity, non-custodial operation and compatibility with an existing transparent chain. Its limitations are equally persistent: amounts remain public, privacy depends on having enough concurrent, independent participants, operational infrastructure must remain reachable, and later UTXO handling can undo the result.

Coins that pass through mixers are also often assigned higher compliance risk scores. Exchanges have frozen or discouraged deposits connected to CoinJoin:

- [Binance Returns Frozen BTC After User 'Promises' Not to Use CoinJoin](https://cointelegraph.com/news/binance-returns-frozen-btc-after-user-promises-not-to-use-coinjoin)
- [BlockFi considered CoinJoin as 'prohibited activities'](https://twitter.com/BlockFiZac/status/1234531935038341120)
- [Another Crypto Exchange Discourages the Use of Bitcoin Mixing Services](https://news.bitcoin.com/another-crypto-exchange-discourages-the-use-of-bitcoin-mixing-services/)

Used carefully, modern CoinJoin can provide meaningful protection against straightforward chain analysis. It is best understood as a privacy tool layered on a transparent chain rather than a complete private-payment system.

Dash's own evolution illustrates the ceiling. Its opt-in, masternode-coordinated CoinJoin remains available, but in July 2026 Dash also activated an Orchard-based shielded pool on its Evolution chain. When the longest-running CoinJoin coin adds a shielded pool, it says something about where mixing tops out.

### CryptoNote, Ring Signatures and RingCT

**As used in: Monero, Zano and other CryptoNote-derived systems**

**Pros:**

- No mixer is needed: decoys are selected automatically from the blockchain without waiting for other users to come online
- Privacy can be mandatory and on by default, so every user contributes to the common privacy set
- Stealth addresses protect the receiver from address reuse
- RingCT hides transaction amounts
- Years of production use and comparatively well-understood algebraic building blocks

**Cons:**

- A decoy model: Monero's real spend is hidden among a fixed ring of 16 rather than proven against the full chain
- Privacy depends on the decoy-selection model resembling real spending behaviour
- Statistical analysis, flooding, timing and external metadata can make candidates very unequal
- Increasing ring size grows transaction and verification costs roughly linearly
- A failure in ring-signature, key-image or commitment logic can have retrospective privacy or supply consequences

A ring signature proves that one member of a group signed a transaction without revealing which member. CryptoNote wallets use outputs already on the blockchain as decoys, so no mixer, coordinator or contemporaneous participant is required. Combined with confidential transactions this becomes Ring Confidential Transactions (RingCT), which also hides amounts, while stealth addressing protects the receiver's published address.

<img src="/guide/assets/privacy-technology-comparison/cryptonote.png" alt="Graphical representation of the way inputs are managed in a RingCT transaction" loading="lazy"/>

Monero currently uses a mandatory ring size of 16: one real spend and 15 decoys per input. The candidates are not equally plausible. A [2017 study](https://arxiv.org/abs/1704.04299) showed that the real output was very often the most recently moved under the then-current selection algorithm. Monero has changed its model several times, but weaknesses [continued to be studied](https://github.com/monero-project/research-lab/issues/86), including a [2021 implementation error](https://github.com/monero-project/monero/issues/7807) that exposed users who spent funds shortly after receiving them.

The [OSPEAD](https://gist.github.com/Rucknium/e18c514f0ba7a6dc6c7f35f9c242a34a) work estimated that an attacker using a better statistical model could identify the true member of a ring of 16 with a top-guess probability of roughly 1 in 4.2 rather than 1 in 16. That is not an "effective anonymity set of 4.2"; it demonstrates that the posterior probabilities are uneven. [Flooding attacks](https://eprint.iacr.org/2019/455), in which an attacker creates outputs they can later rule out as decoys, put further pressure on the model, although their practical cost remains debated.

RingCT's privacy and supply security rely on several different algebraic relations: stealth-address keys, ring signatures, key images, Pedersen commitments and range proofs. A catastrophic implementation or cryptographic failure can therefore have retrospective effects, but those effects are not uniform. Whether old spends become linkable depends on which primitive fails and what external information the adversary has; a commitment failure creates a different risk from a key-image or address-key failure.

The [ShadowCash failure](https://github.com/shadowproject/shadow/issues/25) remains a warning that an implementation error in this family can expose historical activity. The post-quantum implications are compared separately later in this guide.

Despite these limitations, RingCT remains one of the most battle-tested privacy technologies in production, and mandatory privacy is a substantial strength. Monero is now addressing the decoy problem at its root with a protocol different enough to warrant its own section.

### Full-Chain Membership Proofs (FCMP++)

**As proposed for: Monero (in development; not on mainnet as of 23 July 2026)**

**Pros:**

- Proves membership against essentially every eligible output on the chain, growing the membership set from 16 to well over one hundred million
- Eliminates decoy selection and its statistical guessing game
- No trusted setup
- Works with Monero's existing addresses, avoiding the full migration the earlier Seraphis design would have required
- Preserves Monero's mandatory privacy model

**Cons:**

- Not yet live: integration, review and beta-stressnet work remain ongoing
- A major architectural step up from CLSAG ring signatures: membership is expressed as a zero-knowledge arithmetic circuit, adding circuit specification, witness generation and authenticated-tree machinery
- Proofs are larger and heavier to verify than current CLSAG rings, and proving takes longer on consumer hardware
- Wallets, nodes, hardware wallets, multisig, cold signing and reorganization handling all require substantial re-engineering
- Removes the decoy problem, not timing analysis, network metadata or exchange records
- Remains based on discrete-logarithm cryptography; the post-quantum implications are discussed in the cross-cutting section below

Monero is developing [Full-Chain Membership Proofs plus Spend Authorization and Linkability (FCMP++)](https://web.getmonero.org/2024/04/27/fcmps.html) to replace CLSAG ring signatures. Instead of proving that the real spend is one of 16 selected candidates, an FCMP proof shows that the spent output belongs to an authenticated tree built from essentially all eligible outputs on the chain. It is a different protocol, not merely a larger ring.

FCMP is built on **Curve Trees**, the membership-proof technique that [Firo's research]({{ site.baseurl }}/2024/03/07/curve-trees-research-results.html) with the help of kayabaNerve demonstrated could bring global anonymity sets to Spark, with further efficiency from Eagen's elliptic-curve divisor work.

The "++" in "FCMP++" reflects the additional spend-authorization and linkability work needed to fit Monero's existing transaction and address model so that they could keep their existing addressing system.

Today's CLSAG ring signatures are relatively direct algebraic constructions: form a fixed ring and prove authorization and linkability within it. FCMP++ is a much larger architecture. Its membership relation is arithmetized as a zero-knowledge circuit and proven with Generalized Bulletproofs. Wallets and nodes must maintain an authenticated full-chain output tree and supply the correct witness data. Circuit specification, gadget composition, witness generation, tree maintenance and a more involved prover and transcript stack all become part of the security boundary.

The comparison should remain proportional. FCMP++'s circuit is focused on membership, while spend authorization and linkability are handled by separate algebraic components. Zcash-style shielded circuits encode a substantially broader portion of the private transaction relation. FCMP++ is therefore not equivalent in scope to Orchard. It nevertheless represents a substantial increase in implementation and review complexity over ring signatures and sits architecturally between Spark's purpose-built proof components and broader shielded-pool circuits.

The engineering work is correspondingly large. Proof construction and verification are heavier than CLSAG; authenticated-tree state must be built and maintained; and hardware wallets, multisig, cold signing and reorganization handling require careful integration. As of **23 July 2026**, FCMP++ and the associated transaction work remain in [integration and beta-stressnet testing](https://github.com/monero-project/meta/issues/1421).

FCMP++ is a major and well-motivated upgrade. It removes the most persistent structural weakness of Monero's decoy model and shows the wider privacy ecosystem converging on full-chain membership proofs.

### [Lelantus v1 and the Lelantus v2 design]({{ site.baseurl }}/2019/04/14/lelantus-firo.html)

**As used in: Firo (Lelantus v1 deployed from January 2021 and later retired; Lelantus v2 was described in the paper but never deployed)**

**Pros:**

- No mixer
- Anonymity sets up to around 65,000, far above the ring-based systems of its era
- Standard DDH assumptions and no trusted setup
- Proof sizes around 1.5 kB with efficient batch verification
- Arbitrary amounts and partial redemptions, without fixed denominations
- The v2 paper design added direct anonymous payments and full amount hiding

**Cons:**

- Anonymity sets cannot scale into the millions without replacing the underlying membership proof
- Deployed Lelantus v1 hid source and change amounts rather than all transferred amounts
- No stealth addressing, so receiving addresses remained visible
- The v1/v2 balance construction lacked the clean formal security proof later provided for Spark
- Lelantus v2 remained a paper design and did not receive production deployment experience

Lelantus was created by Firo cryptographer Aram Jivanyan, and its full paper is available [here](https://eprint.iacr.org/2019/373). The deployed v1 protocol used the burn-and-redeem model pioneered by Zerocoin: coins were burned and later redeemed as new coins with no identifiable source. A user retained a receipt proving that one member of a large set had been burned, without revealing which one. This used trustless [one-out-of-many (Groth-Bootle) proofs](https://eprint.iacr.org/2014/764.pdf), [further optimized](https://eprint.iacr.org/2015/643.pdf), without a trusted setup.

<img src="/guide/assets/privacy-technology-comparison/oneoutofmanyproofs.png" alt="Graphical explanation of a one-out-of-many membership proof" loading="lazy"/>

Earlier burn-and-redeem schemes such as Zerocoin and Sigma required fixed denominations and full redemptions. Lelantus v1 introduced arbitrary amounts, partial redemptions and hidden change. A user could burn 9.23 coins, redeem 1.7 and retain the remainder privately, reducing amount correlation and simplifying UTXO management.

Lelantus v2 extended the paper design to direct anonymous payments and full amount hiding, but it was never activated on Firo. The project moved from deployed Lelantus v1 to the more complete Spark protocol instead.

<img src="/guide/assets/privacy-technology-comparison/lelantusmint.png" alt="Illustration of a Lelantus mint transaction" loading="lazy"/>

<img src="/guide/assets/privacy-technology-comparison/lelantuspend.png" alt="Illustration of a Lelantus spend transaction" loading="lazy"/>

Our work on Lelantus also revived broad interest in one-out-of-many proofs and directly inspired a new breed of privacy protocols across the industry: [Triptych](https://eprint.iacr.org/2020/018) from Monero Research Lab, [Lelantus-MW](https://github.com/BeamMW/beam/wiki/Lelantus-MW) and [Lelantus-CLA](https://eprint.iacr.org/2021/1036.pdf) from Beam.

This lineage is a contribution we are proud of: ideas developed for Firo have shaped how much of the privacy space now thinks about membership proofs.

Lelantus v1 is now retired. New mints ended when Spark activated, and the final redemption window [closed at block 1,223,500]({{ site.baseurl }}/2025/11/28/lelantus-v1-closing.html) in December 2025. We retain this section because Lelantus pioneered the ideas Spark formalized and improved.

### [Lelantus Spark]({{ site.baseurl }}/2021/08/24/presenting-lelantus-spark.html)

**As used in: Firo (live on mainnet since 18 January 2024)**

**Pros:**

- No mixer, no trusted setup, standard cryptographic assumptions and efficient batch verification
- Hides sender, receiver and amount for Spark-to-Spark transactions
- Spark's view-key design integrates incoming and outgoing disclosure; Monero's standard view-only model is primarily designed for incoming detection and needs additional data or mechanisms to account for outgoing spends
- Efficient multisig and threshold-signature support in the addressing design
- Modular, purpose-built proof components that can be reviewed and replaced separately
- Full security proofs, including balance security, plus two independent cryptography audits and an implementation audit
- Comparatively compact and explicit protocol structure for a fixed private-payment system

**Cons:**

- Membership sets are bounded in the tens of thousands of coins (currently 2^15) rather than one global set over all historical outputs, a limit set by verification performance
- One-out-of-many proofs are larger and slower to verify than the most succinct zkSNARKs, although batch verification narrows the practical gap
- Hidden amounts mean supply integrity depends on the correctness of commitments, range proofs and balance proofs rather than public summation
- Modularity shifts some risk to composition: membership, authorization, range, balance and linking-tag proofs must refer to the same transaction objects and be bound into the same transcript
- Current Spark remains based on discrete-logarithm assumptions; post-quantum implications are compared later

Lelantus Spark is the work of Firo's research team and has been [live on mainnet since 18 January 2024]({{ site.baseurl }}/2024/01/18/spark-is-live.html). It hides sender, receiver and amount and introduces **Spark addresses**: a recipient publishes one address, while each sender derives an unlinkable one-time destination. The published address is not directly searchable on-chain.

Spark's protocol integrates incoming and outgoing selective disclosure into its view-key design. This gives an auditor a more complete account when the relevant disclosure material is provided. Monero's conventional view-only model is primarily aimed at identifying incoming transactions; outgoing accounting generally requires additional data or mechanisms. These are protocol capabilities, and the ease with which particular wallets expose them can vary.

The addressing system also supports efficient multisig and threshold signatures. The full construction is specified in the [Spark paper](https://eprint.iacr.org/2021/1173), and our work was the inspiration behind Monero's Seraphis.

Spark's membership proofs currently operate over sets of 2^15 coins (32,768) using pools of anonymity and a sliding-window approach. This is large by deployed standards but remains bounded. Practical privacy also depends on pool usage, wallet behaviour and transparent entry or exit points.

#### Purpose-built proofs, and why simplicity matters

Spark is a zero-knowledge payment protocol, but its principal statements are implemented through specialized algebraic proof components rather than by encoding a broad private-transaction relation in a general-purpose arithmetic circuit. Membership, authorization, range and balance each have comparatively explicit responsibilities and interfaces. "General-purpose" here describes the proving framework and circuit-development model, not post-deployment programmability: Spark, Sapling and Orchard all enforce fixed consensus rules unless the network deploys a protocol upgrade.

Circuit frameworks can enforce the same kind of fixed protocol, but every intended rule must ultimately be represented correctly in the emitted constraint system, whether the constraints are written directly or generated through higher-level languages, reusable gadgets and compilers. A sound proving system proves that a witness satisfies those emitted constraints; it does not prove that the constraints fully express the protocol designer's intent.

Orchard provides a concrete example: Halo 2 verified the Orchard circuit as written, but an under-constrained elliptic-curve gadget failed to enforce the intended relation.

Spark's design can make statement boundaries and component interfaces easier to inspect independently. That is a comparative reviewability advantage, not a guarantee of safety. Specialized components can still be composed incorrectly: the membership, authorization, balance and range proofs must all refer to the same transaction values and be bound into the same transcript. Linking tags, domain separation, serialization, consensus validation and implementation remain part of the security boundary.

Circuit systems also offer genuine advantages, including succinct proofs, fast verification, reusable tooling and broad design-time expressiveness. A carefully specified and reviewed circuit can be highly secure. The narrower claim is that, for a fixed private-payment protocol, Spark's purpose-built construction reduces some of the semantic-translation and gadget-wiring risk introduced by a broader circuit, while presenting a smaller and more legible maintenance surface for a community-led project.

#### The path forward: global membership sets

Spark's principal current limitation is its bounded membership set. In 2024, [Firo's Curve Trees research]({{ site.baseurl }}/2024/03/07/curve-trees-research-results.html) demonstrated that Spark's one-out-of-many membership proof could be replaced with a Curve Trees construction supporting global, full-chain membership proofs with practical performance. Monero's FCMP++ work now builds on the same technique.

Spark would require FCMP without the additional "++" composition. Membership, spend authorization and linkability are already separate proof components in Spark, so replacing the membership component is a more contained change than adapting the same technique to Monero's existing transaction structure. This is a concrete benefit of the modular design, although any upgrade would still require new implementation work, security analysis, audits and consensus activation.

Curve Trees remains a clear and well-understood option for Firo's [route]({{ site.baseurl }}/about/roadmap/) to a global anonymity set. It would improve anonymity and efficiency but would not solve Spark's discrete-logarithm-based quantum exposure. In parallel, Firo is researching a quantum-resistant successor as a longer-term goal. Whether an interim Curve Trees deployment makes sense with its engineering and ecosystem cost must be weighed against focusing on a post-quantum migration or successor protocol.

### Mimblewimble

**As used in: Grin, Beam and Litecoin's MWEB**

**Pros:**

- Hides all transaction amounts
- Comparatively simple and lightweight cryptographic construction
- Cut-through can reduce historical chain data to the current unspent-output state
- Avoids ordinary address-reuse patterns

**Cons:**

- Network observers can record transactions before aggregation and reconstruct input-output linkages
- Transaction unlinkability is heuristic and traffic-dependent rather than established by a cryptographic sender-anonymity proof
- Privacy weakens when few transactions are available to aggregate
- Traditional Mimblewimble requires sender-receiver interaction; one-sided designs reduce this at some metadata cost
- Hidden supply depends on commitment and range-proof soundness rather than public amount summation
- Not post-quantum secure, although Grin and Beam include switch commitments as a limited recovery hook

Mimblewimble hides transaction values and aggregates transactions, so a block can appear as one large transaction containing many inputs and outputs. If A pays B and C while D separately pays E and F, a transparent chain records two distinct transactions; an aggregated Mimblewimble block can show only the combined inputs and outputs. Cut-through goes further: if A pays B and B immediately spends the entire output to C, the intermediate output can be removed from the retained chain state.

<img src="/guide/assets/privacy-technology-comparison/btcmw.png" alt="Comparison between transparent and aggregated Mimblewimble transactions" loading="lazy"/>

The central privacy assumption is that observers do not capture the transactions before they are aggregated. A widely connected node can record individual transaction propagation and reconstruct linkages that later disappear from the finalized chain.

Grin and Beam use Dandelion++ stem-phase propagation to make this harder, but a [2019 experiment](https://medium.com/dragonfly-research/breaking-mimblewimble-privacy-model-84bcd67bfe52) reconstructed the input-output relationships of 96% of the observed Grin transactions in real time. That result concerns transaction linkages, not identification of the real-world people behind them.

Low traffic makes aggregation less useful, and repeated network observations can narrow the remaining possibilities. Beam responded with opt-in Lelantus-MW, inspired by Firo's work, trading away some cut-through benefits for stronger transaction unlinkability.

<img src="/guide/assets/privacy-technology-comparison/mwtx.png" alt="Example of a transaction graph that can be built by tracing MimbleWimble transactions" loading="lazy"/>

Traditional Mimblewimble also required interactive transaction construction. Beam's bulletin-board approach and David Burkett's one-sided transactions, live in Litecoin MWEB since 2022, largely solve the usability problem while introducing their own metadata and scanning trade-offs.

Mimblewimble's Pedersen commitments are perfectly hiding, and cut-through is a structural property rather than a discrete-logarithm assumption. Those facts give it unusual qualifications in a post-quantum discussion, but they do not make the deployed protocol post-quantum safe. Commitment binding, kernel signatures, ownership and range proofs would still fail. The switch-commitment contingency and its limits are discussed in the cross-cutting post-quantum section.

Mimblewimble remains attractive for its elegance, hidden amounts and chain pruning. Its privacy is strongest against retrospective inspection of the finalized chain and weakest against an active network observer.

### Zerocash and Zcash Shielded Pools

**As used in: Zcash and Zerocash-derived systems (PirateChain, PIVX and others); Dash's Evolution chain now runs an Orchard-based shielded pool**

**Pros:**

- Shielded pools break transaction links cryptographically, with theoretically chain-wide anonymity within a pool
- Hides amounts and addresses
- Small proofs and very fast verification
- Orchard, using Halo 2, removed the trusted setup required by Sprout and Sapling

**Cons:**

- Broad circuits create a large semantic correctness surface: a missing or miswired constraint can permit undetectable counterfeiting while the proving system works as designed
- Zcash has suffered two counterfeiting-class cryptographic or circuit flaws (Sprout and Orchard) for which historical exploitation cannot be cryptographically ruled out, plus a separate 2026 `zcashd` validation bug that Zebra validation showed was not exploited
- Sprout and Sapling required complex multi-party trusted setups
- Private proof generation is more demanding than transparent signatures, although performance improved substantially with Sapling and Orchard
- The effective Zcash anonymity set is fragmented across transparent addresses and several shielded pools
- Ironwood adds a conditional quantum-recovery hook, not a complete post-quantum shielded protocol; public claims of full post-quantum status within 12 to 18 months outrun what has been specified

Zerocash uses zkSNARKs to provide small, fast-to-verify proofs, hidden amounts, no fixed denominations and direct private transfers. Within a single well-used shielded pool, its theoretical anonymity model is among the strongest available.

"Zcash" is not one unchanging proving system. It has moved through **Sprout**, **Sapling**, **Orchard** and now **Ironwood**, each with a different circuit, trust story and failure history.

Adoption of this technology also moves in both directions. Dash [added an Orchard-based shielded pool](https://www.cryptopolitan.com/dash-launch-zcash-orchard-technology/) to its Evolution chain in July 2026, while Horizen, once a prominent Zcash-derived privacy coin, [removed its shielded pool entirely](https://blog.horizen.io/zenip-42207-complete-removal-of-shielded-pool-from-the-horizen-mainchain/) in 2024, a reminder that opt-in privacy can be voted away when it is peripheral to a project's direction.

Projects that reuse these protocols benefit from mature upstream research, libraries and engineering, but inherit a disclosure dependency. During the private remediation of the 2018 Sprout counterfeiting vulnerability, Zcash notified Horizen and Komodo before public disclosure, while not every affected fork was included; [Bitcoin Private was publicly cited as one example](https://fortune.com/crypto/2019/02/05/zcash-vulnerability-cryptocurrency/). Zcash leadership explained that disclosure was initially limited until most exposed market capitalization had been protected.

This was an understandable attempt to contain leak risk, but it remains a warning for downstream forks: a project without its own cryptographic expertise or an established disclosure relationship cannot assume it will receive advance notice of a critical upstream flaw. Zcash now publishes [bilateral responsible-disclosure arrangements](https://github.com/zcash/zcash/security) with a limited set of neighbouring projects.

<img src="/guide/assets/privacy-technology-comparison/grinder.png" alt="Photo showing a man opening the back of a computer case using a grinder" loading="lazy"/>

**The 2018 Sprout counterfeiting flaw.** Zcash [disclosed in 2019](https://z.cash/blog/zcash-counterfeiting-vulnerability-successfully-remediated/) that a cryptographic flaw had existed in Sprout from launch until the Sapling upgrade in October 2018. It could have permitted unlimited undetectable counterfeiting. Because the pool is private, there is no way to prove whether it was exploited.

Zcash's own postmortem noted that discovery required rare expertise and that the flaw had escaped numerous cryptographers, auditors and engineering teams. The issue is better described as an **expertise bottleneck** or concentrated reviewability than literal security through obscurity: the specifications and code were public, but very few people could independently understand the complete system well enough to review it end to end.

**The March 2026 Sprout verification bug.** This was a different failure class. A `zcashd` optimization introduced in 2020 could cause nodes to [skip Sprout proof verification](https://shieldedlabs.net/zcash-vulnerability-successfully-remediated/) when connecting a new block. The deprecated pool held roughly 25,000 ZEC, turnstile accounting limited the supply impact, and independent validation by Zebra allowed the ecosystem to conclude that the bug had not been exploited. The lesson is straightforward: a sound proof is useless if consensus software fails to verify it.

**The May 2026 Orchard counterfeiting flaw.** On 29 May 2026, Taylor Hornby [reported a critical under-constraint](https://shieldedlabs.net/the-orchard-counterfeiting-vulnerability/) in an elliptic-curve multiplication gadget in the Orchard circuit. A malicious prover could supply false internal values and still produce an accepted proof. A test exploit created unlimited counterfeit notes, and an emergency upgrade closed the vulnerability within days.

The flaw had nevertheless been live since Orchard activated in May 2022. Orchard's privacy means there is no cryptographic way to prove that counterfeit notes were never created during those four years. Inter-pool turnstiles limited how much value could leave the pool, but did not prevent hypothetical counterfeit notes from circulating inside Orchard. A protected 21-million inter-pool boundary is not the same claim as a certainly sound hidden Orchard balance.

**Ironwood.** The [NU6.3 Ironwood upgrade](https://shieldedlabs.net/ironwood-verifying-the-soundness-of-zcashs-circulating-supply/) is scheduled to activate at block 3,428,143, expected around 28 July 2026. It creates a fresh pool on the corrected circuit, prevents new outputs into old Orchard and forces old-Orchard value to leave through turnstile accounting that rejects withdrawals beyond the amount legitimately entered.

Once active, this is intended to restore a verifiable boundary for the **circulating supply** immediately: old Orchard is sealed, and no more value can leave it than the turnstile permits. It does not retrospectively prove that the old Orchard vulnerability was never exploited or that every note that once circulated inside that pool was legitimate.

Ironwood also includes a quantum-recoverability hook. That is useful engineering, but it is not a complete post-quantum payment protocol, and the public claims made about it deserve scrutiny. Zcash's quantum claims, properties and remaining gaps are examined alongside the other systems in the cross-cutting section below.

Zcash's engineering remains world-class, its responses to the 2026 incidents were fast and transparent, and circuit-based ZK achieves proof sizes and verification performance that specialized constructions often cannot match. Orchard is instructive precisely because it was heavily scrutinized.

Modern circuits are commonly written through higher-level languages, libraries and reusable gadgets rather than by manually entering every low-level constraint. The decisive security object is still the emitted constraint system. If it omits an intended relationship, the proof system will faithfully prove the wrong statement. That semantic-assurance problem, combined with the small number of people able to review a complete shielded protocol independently, is the principal complexity trade-off highlighted by Spark's purpose-built design.

### Case Study: Sapling-Derived Multi-Asset App Chains

Most of this guide compares underlying privacy mechanisms. **Penumbra and Namada are broader sovereign projects rather than new anonymity primitives at the same level.** Both extend the Sapling/Groth16 shielded-pool lineage across multiple assets and app-chain features. They are included as shorter case studies because they show what happens when private payments must also support staking, governance, interoperability and markets.

#### Penumbra

[Penumbra](https://penumbra.zone/) makes shielded state the default across transfers, staking, governance and its built-in DEX. It supports selective disclosure and IBC assets and underwent multiple audits, but its Groth16 circuits required a public multi-party trusted setup. Penumbra Labs, the founding company, [wound down](https://penumbralabs.xyz/) in late 2025, leaving the live chain under community maintenance. A privacy network needs users, wallets, audits and incident response in addition to sound cryptography.

Penumbra also demonstrates the difference between **hiding a participant** and **hiding a market**. Its current swap action hides the swapper's identity and breaks the link between the submitted swap and the later claim of output notes, but [reveals the input and output assets and amounts](https://guide.penumbra.zone/overview/privacy). Liquidity positions reveal the amount supplied and the trading bounds.

This is a design trade-off, not a theorem that all decentralized markets must expose exactly the same data. [Penumbra's protocol](https://protocol.penumbra.zone/main/dex/swap.html) describes a more private sealed-bid design using threshold encryption: individual orders could remain hidden before execution, while validators decrypt only aggregate batch flow and publish clearing results. That would hide more information at the cost of extra cryptography, batching and threshold-liveness assumptions, and privacy would still depend on the size and diversity of the batch.

#### Namada

[Namada](https://namada.net/) extends the Sapling circuit into a Multi-Asset Shielded Pool for native and IBC assets. Shielding rewards pay users to keep assets inside the protected set, directly addressing the low-participation problem that weakens opt-in privacy.

The common pool reduces structural fragmentation, but practical anonymity remains asset-specific: [assets of the same kind share an anonymity set](https://docs.namada.net/users/shielded-accounts), so ATOM activity does not automatically provide equivalent cover for USDC or another asset. Shielding and unshielding also create transparent boundaries where amount and timing correlation can return.

The June 2026 incident must qualify any current assessment. The team [confirmed an exploit](https://x.com/namada/status/2068265932368347358) after roughly [$600,000 in shielded IBC assets was reportedly drained](https://coinstats.app/news/a0325969106c16e07d88a6ddc778d752e3997bdec3e8da59c29fdeb3f8db2236_Namada-MASP-Drain-Exposes-600K-Blind-Spot-In-Shielded-Assets/) from the MASP, while an indexer continued showing funds that live-node queries no longer found.

As of **23 July 2026**, no authoritative technical postmortem had established the root cause. Risk assessment should remain provisional until a postmortem explains the affected code path, remediation and any remaining supply-integrity implications.

These projects are best understood as deployments of the Sapling circuit model rather than wholly separate privacy mechanisms. Their value to this comparison is architectural: extending shielded payments into an app chain adds global state, interoperability boundaries, application logic, governance and operational dependencies.

### Smart-Contract Privacy: Pools and Private Execution

**As used in: Tornado Cash, Privacy Pools and RAILGUN on Ethereum and other EVM chains, and the Aztec privacy-first Ethereum layer 2**

**Pros:**

- Adds privacy to existing assets and smart-contract ecosystems without requiring a new payment coin
- Privacy-pool contracts can be non-custodial, and Tornado Cash Classic's core pools are immutable
- Private-execution platforms can hide user-specific state, function calls, arguments and intent when applications are designed carefully
- Private balances can interact with large public DeFi ecosystems
- Association sets and Private Proofs of Innocence attempt to address compliance concerns without publishing a user's full transaction history

**Cons:**

- Privacy is application-specific rather than automatic: public functions, arguments, events, bridge messages and public state transitions remain visible
- Conventional public-state AMMs and lending markets expose enough shared state for pricing, settlement, arbitrage and composability
- Hiding more market state generally requires batching, encrypted order flow, threshold decryption, private order books, specialized operators or client-side witness distribution, adding complexity, latency or liveness assumptions
- EVM privacy pools still expose gas infrastructure, RPC providers, block builders, bridges and frontends as metadata or censorship surfaces
- Normal private flows often depend on relayers or broadcasters, while screening adds cooldowns and policy-provider dependencies
- Association sets and blacklists concentrate practical judgement in the providers, analytics firms, wallet defaults and update keys users actually rely on
- Direct withdrawal, ragequit and self-signing preserve custody but usually sacrifice privacy
- General private execution creates a much larger language, compiler, virtual-machine and rollup assurance surface than a fixed payment protocol

Smart-contract privacy covers two quite different architectures. **Privacy pools and middleware** hide relationships among deposits, private balances and withdrawals while operating on an otherwise transparent chain. **Private-execution platforms** such as Aztec allow developers to use private state and private functions inside a broader application. The second model can hide substantially more, but it does not make every contract private by default.

#### Privacy pools on transparent smart-contract chains

**Tornado Cash Classic** is the purist design: fixed-denomination pools in immutable, non-custodial contracts. A user deposits, receives a secret note and later proves membership without revealing which deposit is being spent. U.S. Treasury sanctions [imposed in 2022](https://home.treasury.gov/news/press-releases/jy0916) and [lifted in March 2025](https://home.treasury.gov/news/press-releases/sb0057) demonstrated both halves of the architecture.

The core contracts remained deployed and callable, but normal access was degraded through frontends, RPC providers and relayer lists. Direct withdrawal remains possible, but the gas-paying address may create the link the relayer flow was meant to avoid. Contract immutability is not the same as censorship-resistant access.

**[Privacy Pools](https://docs.privacypools.com/)** replaces "prove you are any deposit" with "prove you are in an association set" published by an Association Set Provider. This permits private inclusion in an approved set, but moves the trust question to set construction and distribution.

The abstract design can support multiple providers and sets; concentration is a property of deployments, wallet defaults and which roots counterparties accept. In practice, privacy and spendability depend on the selected set being large, current and fairly governed. If a provider excludes a deposit, the protocol itself cannot supply an appeals process. The public `ragequit` fallback preserves custody while linking the refund to the original deposit. The Entrypoint and approved-root update process are also operational and governance dependencies.

**[RAILGUN](https://docs.railgun.org/wiki/assurance/private-proofs-of-innocence)** maintains encrypted balances in smart contracts and uses [Community Broadcasters](https://docs.railgun.org/wiki/learn/privacy-system/community-relayers/) so users need not expose a gas wallet. Private Proofs of Innocence let users prove that funds are absent from accepted public lists. Officially, a failed submission can be retried with the same broadcaster, sent to another broadcaster, or self-signed.

Those fallbacks are not equivalent in privacy or reliability. In actual use it can be difficult to connect to the Waku-based broadcaster network or find a reliable broadcaster for a particular chain, asset and gas condition. Retrying another broadcaster only helps when discovery and connectivity are functioning, while self-signing exposes a public gas wallet.

Newly shielded funds also pass through cooldown and screening. Anyone can publish a list or operate infrastructure in principle, but the lists and providers accepted by widely used wallets hold the practical policy power. Contract changes flow through token governance, with the concentration questions that implies.

#### Aztec: private execution rather than a privacy pool

[Aztec](https://aztec.network/) is building a privacy-first Ethereum layer 2 with public and private state and public and private functions. Private functions execute and generate proofs on the user's device, allowing a carefully designed application to conceal user-specific state, contract calls, arguments and outputs.

Its Ignition network launched decentralized sequencing in November 2025, private smart-contract execution entered Alpha in March 2026, and [Alpha V5](https://aztec.network/blog/introducing-alpha-v5) activated on 21 July 2026 after fixing the critical proving-system issues disclosed for V4.

The qualification is central. [Aztec's privacy guidance](https://docs.aztec.network/developers/docs/resources/considerations/privacy_considerations) warns that privacy is not automatic. Calling a public function, passing public arguments, emitting an unencrypted event or sending a message to Ethereum reveals information. Many applications need some public state, so developers must choose the private-public boundary correctly. An error at that boundary can permanently disclose what the application intended to protect.

Aztec can support market designs that hide more than a conventional EVM privacy wrapper, including private order books, sealed bids and private state with proved updates. That does not remove the need to distribute witnesses, publish settlement results or cross into public execution where other contracts require shared state. The privacy and liveness trade-offs therefore move into the application architecture rather than disappearing.

Aztec is also the largest implementation and circuit surface in this comparison: a language, compiler, private execution environment, public VM, recursive proof stack and rollup protocol. Alpha V5 materially improved proving performance and fixed the disclosed V4 issues, but the network remains explicitly experimental and retains validator re-execution as a safety mechanism.

#### Why DeFi does not become fully private automatically

Private money transfer is comparatively self-contained. A user can prove ownership of hidden inputs, preservation of value, valid ranges and non-reuse without exposing a shared price or liquidity state.

A conventional **public-state** AMM or lending market is different. Traders need a quote, arbitrageurs need enough information to correct prices, liquidity providers need verifiable terms, and other contracts need state they can read or verify. RAILGUN can hide the caller and private funding path when interacting with an external EVM AMM, but the AMM's public reserves, swap execution and state changes remain visible.

More private markets are possible, but they are different designs rather than ordinary AMMs with a privacy switch. Penumbra's proposed threshold-encrypted batch auction can conceal individual orders until aggregate execution. Aztec can keep more application state private and prove updates. Private order books and sealed-bid auctions can also reduce leakage. These systems generally trade continuous public price discovery and immediate composability for batching, witness distribution, more proving work, specialized infrastructure or new liveness assumptions.

The correct conclusion is therefore not that DeFi privacy is impossible. It is that smart-contract privacy can hide identity, balances, portfolio linkage or portions of execution without automatically hiding all economically relevant state. Payments remain the cleanest and most mature use case because their global public state can be limited largely to commitments and nullifiers.

#### Where smart-contract privacy lands

These systems are valuable, and private application logic is something a fixed-function base-layer payment protocol cannot provide. Privacy pools on transparent chains nevertheless depend on relayers, policy providers, frontends and public gas infrastructure, while private-execution platforms add a much larger protocol and application-design surface.

A base-layer privacy coin does not remove every censorable dependency: wallet distribution, node access, RPC services and exchanges can still be blocked. Its narrower advantage is that an ordinary consensus-valid private payment need not depend on an Association Set Provider, a screening pipeline or a specialized relayer market.

### Chaumian Ecash Mints (Cashu and Fedimint)

**As used in: Cashu mints and Fedimint federations, mostly on top of Bitcoin and Lightning**

**Pros:**

- Exceptionally strong payment unlinkability within a mint or federation: blind-signature issuance cannot normally be linked to later redemption
- No public ecash transfer ledger, so intermediate user-to-user transfers do not create a public transaction graph
- Instant, low-cost bearer payments, including out-of-band transfer
- Mature blind-signature ideas and comparatively simple payment semantics
- Fedimint distributes custody and issuance control across threshold guardians rather than one operator

**Cons:**

- Custodial trust remains: a Cashu mint holds the bitcoin, while a Fedimint federation collectively controls it
- A Cashu operator can steal backing or issue unbacked ecash; in Fedimint, comparable failure requires threshold guardian compromise or collusion rather than one operator
- Mints and federations can observe issuance and redemption amounts, timing and network metadata even though they cannot normally link the blinded notes
- Offline bearer transfer is provisional for the recipient until the note is checked or swapped with the mint; a merchant should not treat an unverified token as final
- Operators can refuse issuance, redemption or Lightning service, go offline, or be legally compelled, even though selectively freezing a particular anonymous bearer note may not be straightforward
- Loss of local bearer tokens or failure of the mint/federation can destroy the user's balance

Chaumian ecash deliberately reintroduces custodial trust in exchange for very strong payment unlinkability. A user deposits bitcoin and receives blindly signed bearer notes. When a note is later redeemed or swapped, the blind signature prevents the issuer from directly linking it to the original issuance. There is no public transfer graph between those endpoints.

[Cashu](https://cashu.space/) normally uses a single mint. The mint controls the backing bitcoin and can refuse service, disappear, steal reserves or issue more ecash than it holds. Because notes are anonymous bearer objects, selectively freezing one particular note is not as straightforward as freezing an account, but the operator can stop redemptions, censor Lightning interactions or shut down the service entirely.

[Cashu's protocol](https://docs.cashu.space/protocol) uses Blind Diffie-Hellman Key Exchange (BDHKE) to issue and redeem ecash tokens rather than maintaining user accounts. The mint can still see issuance and redemption activity, amounts, timing and network metadata. Out-of-band or offline handoff is possible, but the receiver cannot know that the note has not been double-spent until contacting the mint. [Cashu's merchant guidance](https://docs.cashu.space/merchants) therefore recommends swapping a received token before treating the payment as complete.

[Fedimint](https://fedimint.org/users/how-it-works) changes the trust model from one mint to a threshold federation. [Bitcoin is held in a threshold multisignature wallet](https://fedimint.org/guardians/how-federations-work), and no single guardian or minority can move the backing funds.

Guardians collectively know the total bitcoin held and the total ecash outstanding, but not individual balances, who received a particular note, who redeemed it or the transfers made in between. Theft, unauthorized issuance or policy abuse requires threshold collusion or compromise rather than one operator, while federation liveness still depends on enough guardians remaining available.

These systems are therefore neither ordinary self-custody nor merely a better privacy coin. They offer excellent payment unlinkability under a custodial or federated trust model. That can be pragmatic for small community balances and everyday payments, but it is a fundamentally different trade-off from a consensus-enforced private bearer asset.

### Post-Quantum Considerations Across Privacy Systems

Post-quantum security is not one checkbox. At least five questions must be separated:

- Can a quantum attacker forge spend authorization or recover wallet keys?
- Do hidden-amount commitments and range proofs remain binding and sound?
- Can historical membership or transaction links be reconstructed?
- Can encrypted note contents be harvested now and decrypted later?
- Is there a specified migration, turnstile or recovery process if the old assumptions fail?

**RingCT, FCMP++ and Monero.** Current RingCT depends on discrete-logarithm assumptions for authorization, key images, commitments and range proofs. A sufficiently powerful quantum attacker would threaten theft and monetary soundness. Historical privacy consequences depend on the exact primitive and side information; it is too broad to say that every transaction would automatically be deanonymized solely from the chain.

The combined **FCMP++/Carrot** transaction design improves forward secrecy. Monero's [post-quantum encryption discussion](https://github.com/monero-project/research-lab/issues/151) states that a quantum-enabled observer should not be able to construct the transaction graph merely by watching the blockchain, although learning a wallet address can still expose substantial incoming history.

The proposed Jamtis work explores a hybrid Curve25519/CSIDH addressing layer to improve that case. CSIDH is a rare post-quantum non-interactive key-exchange candidate, but it is experimental isogeny cryptography, and the larger address sizes and uncertain concrete quantum security are real trade-offs.

This addresses only part of the system. FCMP++ proofs, commitments and spend authorization remain discrete-logarithm-based. A [research sketch for a post-quantum turnstile](https://gist.github.com/jeffro256/146bfd5306ea3a8a2a0ea4d660cd2243) has been proposed for some future Carrot/FCMP++ outputs, but reviewers have identified unresolved theft issues in the current design. It is not an adopted or deployed recovery protocol.

**Spark and Firo.** Current Spark likewise relies on discrete-logarithm assumptions for commitments, membership and balance proofs, authorization and group-based linking tags. A quantum break could threaten supply soundness and expose some historical relationships. The precise privacy impact would depend on which artifacts and external records the adversary has, but a later upgrade cannot erase cryptographic data already published under the old protocol.

Curve Trees would give Spark a global membership set but would not change that quantum exposure. Firo's roadmap lists a quantum-resistant Spark successor as a longer-term goal. A future migration can protect balances moved into the successor and transactions made under it; it cannot retroactively make historical Spark artifacts post-quantum secure.

**Mimblewimble.** Pedersen commitments are perfectly hiding, so solving discrete logarithms does not by itself reveal one uniquely correct amount for every historical commitment. Cut-through also removes data structurally rather than relying on computational hardness. These are meaningful qualifications, but commitment binding, kernel signatures and range-proof soundness would still fail, allowing theft and potentially hidden inflation.

Grin and Beam use [**switch commitments**](https://github.com/mimblewimble/grin/blob/master/doc/switch_commitment.md) as a contingency. Consensus can require a stronger embedded ElGamal-style relation if commitment binding becomes endangered, providing a possible migration window and supply-integrity safety switch at some privacy cost. This is a recovery hook, not a post-quantum transaction protocol: signatures, ownership, range proofs and wallet cryptography still require replacement.

**Zcash.** Zcash has one useful structural advantage: nullifiers are derived through keyed hashes rather than group-based spend tags. As [Sean Bowe explains](https://seanbowe.com/blog/zcash-and-quantum-computers/), an adversary who never learns a user's payment address does not automatically obtain the historical shielded graph merely by breaking discrete logarithms. The condition matters. Counterparties, exchanges and published donation pages may know an address, and existing ECDH note encryption then creates a harvest-now-decrypt-later risk. The transparent pool also retains ECDSA exposure. Bowe himself has been careful here, noting that Zcash never claimed post-quantum privacy because the conditions under which the guarantees hold are unintuitive.

The public messaging has been far less careful. In May 2026, on stage at Consensus Miami, Zcash Open Development Lab CEO Josh Swihart announced that [quantum-recoverable wallets would ship within a month and that Zcash would reach full post-quantum status within 12 to 18 months](https://decrypt.co/367250/zcash-targeting-post-quantum-crypto-milestone-by-2027). Measured against what has actually been specified, that is marketing compression, and the gap deserves to be walked through.

**What is deployed:** [ZIP 2005](https://zips.z.cash/zip-2005) changes Ironwood note construction so that a future Recovery Protocol, described only in outline with many design decisions intentionally left open, could return funds after the classical protocols are disabled.

**What it does:** it preserves a conditional route to recover eligible Ironwood balances if a quantum threat is detected in time, the community executes an emergency shutdown of every classical shielded protocol, and the funds were already migrated into recoverable Ironwood notes. Every one of those conditions is doing real work. Turnstiles can also constrain how much value exits old pools.

**What it does not do:** the ZIP states plainly that it "does not by itself make the protocol secure against quantum adversaries". Until the classical protocols are switched off, the Ironwood pool remains fully attackable by a discrete-log-breaking adversary, and the ZIP acknowledges that a balance violation occurring before switch-off would not necessarily be detected, with turnstiles as the only backstop. Funds still sitting in Sprout, Sapling or old Orchard at switch-off become permanently unspendable. Quantum attacks on privacy are an explicit non-goal, historical note ciphertexts stay exposed, and the transparent ECDSA layer is untouched.

**What remains unspecified:** the hard part. A complete post-quantum shielded protocol needs a post-quantum proof system at acceptable proof sizes, a post-quantum accumulator, a key, address and note-encryption model, and a migration path. Zcash has published no draft specification, parameter choices or successor circuit for any of it. These are the same problems any post-quantum successor has to solve, including Firo's.

It is also unclear whose roadmap the 12-to-18-month promise even is. [ECC's entire engineering team resigned in January 2026 in a governance dispute](https://www.coindesk.com/tech/2026/01/08/zcash-developer-team-behind-ecc-quits-after-governance-clash-with-bootstrap-board), and Zcash development is now split across several independent organizations, with quantum recoverability and the Tachyon redesign under separately funded teams. The criticism here is of the marketing, not the engineering: the recoverability mechanism is sensible work more projects should copy, and quantum recoverability is a narrow, conditional kind of quantum resistance that is valuable on its own terms. Describing it as anything more misleads users about what protects them today.

**Other systems.** CoinJoin's amounts and transaction structures are already public, and its privacy does not depend on a hidden-supply proof, so its quantum problem is mainly ownership and signature migration rather than undetectable inflation inside a shielded pool. Smart-contract privacy inherits both its own proof and encryption assumptions and those of the base chain, bridges and rollup. Cashu and Fedimint also require post-quantum replacements for their current blind-signature and custody cryptography.

As of **23 July 2026**, none of the major systems in this guide has deployed a complete end-to-end post-quantum private-payment protocol. Claims should distinguish what is deployed, what is specified as a recovery mechanism, and what remains research.

### Evaluating Other Privacy Schemes and Why Isn't My Favorite Privacy Coin Featured?

The systems discussed here range from mature and widely reviewed to experimental, research-stage or currently incident-affected. Inclusion in this guide is not an endorsement. Many projects marketed as "privacy coins" provide little on-chain privacy beyond fresh addresses and Tor or I2P integration, which protects network metadata without hiding the transaction graph or amounts.

These are the key questions to ask when assessing a privacy mechanism:

- **What is hidden on-chain?** Sender, receiver, amount and transaction links are distinct properties. Network privacy alone is insufficient.
- **Is privacy mandatory or opt-in?** A theoretically large pool is small if few users enter it or funds constantly cross transparent boundaries.
- **How evenly distributed are the candidates?** Do not stop at the headline set size. Decoy rankings, denominations, pool usage and external records can make some candidates much more plausible than others. OSPEAD's top-guess estimate illustrates why a ring of 16 does not give every member an equal 1-in-16 probability.
- **Is it designed by experts and independently reviewed?** Look for papers, formal security arguments, independent audits and multiple implementations where practical.
- **What does the proof actually enforce?** A sound proving system over an incomplete statement can still accept counterfeit money.
- **What must remain public for the application to function?** Shared liquidity, prices, oracle values, collateral ratios, liquidations, bridges and public calls can leak economically useful information even when identity and balances are hidden.
- **What operational infrastructure is required?** Coordinators, relayers, broadcasters, RPC services, policy providers and frontends may be censorable or simply unreliable.
- **Who controls setup, upgrades and policy?** Trusted ceremonies, admin keys, token governance and list-update keys are different forms of trust.
- **Can hidden inflation be detected or contained?** Look for turnstiles, pool boundaries, recovery procedures and independent validation.
- **What happens under a post-quantum migration?** Separate historical privacy, spend authorization, supply soundness, note encryption and recoverability.
- **Is it a rebrand of existing technology or dependent on centralized trust?** Reuse is acceptable when disclosed; hidden operational trust is not.

### Summary

Every privacy mechanism trades among anonymity, performance, auditability, operational dependence and implementation complexity. Nothing in this guide escapes those trade-offs; each design simply picks a different point on the curve. That diversity is worth defending. CoinJoin, ring signatures, shielded circuits, aggregation, private execution and blind-signature ecash each attack the problem from a different angle, and every success and failure in one has taught the others something. Financial privacy is better off for having all of them under active development, and this guide is written in that spirit rather than as a scorecard with one winner.

The trade-offs are still real, and they matter when choosing what to rely on. CoinJoin improves privacy on transparent chains without touching consensus, but it depends on participant diversity, coordinators or markets, and careful UTXO handling, and the need to find other people to mix with holds back both its usability and its uptake. RingCT pairs strong privacy with the longest production track record of any scheme here, and FCMP++ is a serious, well-motivated effort to remove the decoy model's statistical weaknesses at their root, at the price of circuit and integration complexity that CLSAG never carried. Zcash delivers the strongest theoretical anonymity and succinct proofs, and its history shows both the power of broad circuit-based protocols and the assurance burden that comes with them. Mimblewimble is elegant, hides amounts and prunes history, though its unlinkability is heuristic and weakest against an active network observer. Penumbra and Namada show what happens when shielded payments are stretched across sovereign app chains: the cryptography becomes entangled with market state, interoperability boundaries, governance, funding and incident response. Smart-contract privacy can hide identity, balances and selected application logic, but public-state DeFi, relayers, policy providers and application boundaries remain part of the real security model, and Chaumian ecash buys its remarkable unlinkability with custodial or federated trust.

Against this field, we believe Lelantus Spark occupies a middle ground that was chosen deliberately and has aged well. On privacy, it hides sender, receiver and amount with no trusted setup, offers anonymity sets that are large by deployed standards, and integrates selective disclosure for users who need auditability. On engineering, its modular, purpose-built proof components keep the entire protocol within reach of independent review: each statement can be read against the specification, audited on its own and replaced without rebuilding the system, which is what makes an upgrade like full-chain membership proofs a component swap for Spark rather than an overhaul.

That maintainability is not a side benefit. Firo is a community-led project, and the past two years have shown what happens when a privacy system's complexity outgrows its stewardship: a founding company winds down, an entire development team resigns, or an exploited pool waits a month for a postmortem. A protocol that a wide circle of cryptographers can fully understand is one a community can actually maintain, audit and evolve over decades, without depending on the continued existence of any single funded team. Privacy infrastructure that only one organization can keep alive is centralized in the way that ends up mattering, whatever its cryptography says. Spark's balance of strong privacy and a legible, maintainable design is our answer to that problem, and we think it is the right foundation for privacy that is meant to outlast its creators.

We hope this guide gives a clearer basis for comparing what each technology hides, what it assumes and whom its users must trust. We also hope every system in it keeps improving. Each project that advances private money strengthens the case that financial privacy is normal, legitimate and worth building carefully.
