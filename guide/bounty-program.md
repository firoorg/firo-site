---
layout: guide
title: "Firo Vulnerability Bounty Program"
summary: 
tags: [guide]
author: "Firo Team"
permalink: /guide/bounty-program.html
---

Firo runs an ongoing vulnerability bounty program to encourage the developer and security research community to review our code and responsibly disclose issues. This page sets out the program's scope, submission requirements, and how rewards are determined.

## Scope

The program covers vulnerabilities reproduced against the `master` branch of [firoorg/firo](https://github.com/firoorg/firo). Reports reproduced only against older releases, forks, or third-party software are not eligible.

**Out of scope:**

- Website vulnerabilities (firo.org and other Firo-operated sites)
- Attacks requiring more than 50% of network hashing power
- Theoretical or speculative vulnerabilities without a working proof-of-concept
- Reports referencing code that does not exist in the master branch
- Generic findings from automated scanners or LLM output without project-specific analysis
- Re-reports of previously known issues already disclosed in commits, release notes, audit reports, or prior bounty submissions
- Bugs in third-party dependencies that are not triggered or exploited through Firo's own code paths
- Social engineering, physical attacks, or attacks on third-party infrastructure

## Severity tiers

Vulnerabilities are classified into three categories. If there is a dispute over the severity of a vulnerability, the Firo core team's assessment is definitive.

### Critical: 5,000 up to 10,000 USD (in FIRO equivalent)

A critical vulnerability is such that impacts the Firo network as a whole, has potential to break the entire Firo network, completely removes the anonymity of Lelantus, results in the loss of Firo, or is on a scale of great catastrophe.

Example: A vulnerability that allows forged Lelantus spends to inflate coin supply.

### Major: 1,000 up to 5,000 USD (in FIRO equivalent)

A major vulnerability is such that it impacts individual nodes, routers, wallets, reduces the anonymity of Lelantus significantly (timing attacks excluded) or must be carefully exploited.

Example: The paper [Burning Zerocoins for Fun and Profit](https://www.chaac.tf.fau.de/files/2018/04/attack-cryptocur.pdf). 

### Minor: 100 up to 1,000 USD (in FIRO equivalent)

A minor vulnerability is one that has low impact or cannot be exploited easily.

If there is a dispute over the severity of a vulnerability, the Firo's team’s assessment will be definitive.

All bounties are paid in FIRO based on the prevailing USD rate as determined by Coingecko's average price at the time the patch is released.

## Submission requirements

To be eligible for review, every submission must include:

- The exact commit hash of `master` against which the vulnerability was reproduced
- Specific file paths and line numbers for every claim about the codebase
- A working proof-of-concept — test code, transaction data, scripts, or step-by-step reproduction that an engineer can run. Pseudocode or prose descriptions of what *would* happen do not constitute a PoC.
- A clear statement of observed behaviour versus expected behaviour
- The submitter's own analysis of impact, tied to specific code paths — not generic CVSS or scanner output

Submissions that do not meet these requirements will be rejected without further engagement.

## Code grounding

All claims about Firo's codebase must reference code that exists in the master branch at the cited commit. Submissions that cite non-existent files, functions, or line numbers, or that describe code behaviour inconsistent with the actual repository, will be rejected as invalid. Repeated submissions of this type will result in a ban from the program.

## Use of AI tools

Firo recognises that researchers may use AI or LLM tools as part of their work, and we do not prohibit their use. However:

- If any part of your submission — research, code analysis, PoC, or drafting — was generated or assisted by an AI tool, you must disclose this in your report, including which tool or tools were used and for what purpose.
- Submitters remain fully responsible for verifying every claim and code reference in their report before submission.
- AI-assisted submissions are eligible for bounties on the same terms as any other report, provided they meet the submission requirements above.
- Undisclosed use of AI tools, where evident, will be treated as material misrepresentation and may result in forfeiture of any bounty and a ban from the program.

## Severity claims

Severity claims must be supported by a concrete, demonstrated impact path. The Firo team's severity assessment is definitive. Deliberately overstated severity — for example, claiming "critical" or "remote code execution" for issues with no such impact path — will be treated as a quality failure and will count toward repeat-offender penalties.

## Submitter conduct and penalties

Firo maintains an internal record of submission quality per submitter, identified by email, PGP key, GitHub handle, and/or payout address. The following consequences apply on an escalating basis:

- **First invalid submission** (hallucinated references, missing PoC, or overstated severity): warning issued; future submissions from the same identity reviewed at lowest priority.
- **Second invalid submission**: 12-month ban from the program.
- **Undisclosed AI-generated content, fabricated PoCs, or mass-submission patterns**: immediate and permanent ban.

Bans apply to all identities the submitter is known to use. Attempts to evade a ban by submitting under a new identity will extend the ban permanently.

Submitters may have no more than three open submissions under review at any time. Submitters with prior invalid submissions may be rate-limited to one open submission until report quality improves.

Firo is not obliged to engage in correspondence about rejected submissions beyond an initial response.

## Disclosure

Vulnerability reports are to follow [HackerOne's Disclosure Guidelines](https://www.hackerone.com/disclosure-guidelines). Failure to follow these guidelines and the rules above may result in the bounty not being honoured.

## How to submit

Submissions are accepted only via PGP-encrypted email to **reuben@firo.org**.

PGP fingerprint: [`0186454D63E83D85EF91DE4E1290A1D0FA7EE109`](https://github.com/firoorg/firo/blob/master/reuben.asc)

Reports for major and critical vulnerabilities **must** be PGP-encrypted. Reports submitted via other channels — issue trackers, social media, Telegram, web contact forms, etc. — will be ignored.
