---
layout: guide
title: "Using Firo with Tor"
summary: 
tags: [guide]
author: "Anwar P."
permalink: /guide/firo-with-tor.html
---

**This guide is a work in progress.**

***WARNING: Different users require different levels of security from Tor. Please ensure that your settings matches your risk level.***

***Note: If you are using external/standalone Tor, please modify this guide accordingly.***

## Firo Setup

Firo's built-in Tor can be turned on by checking the `"Anonymous communication with Tor"` box (Firo Core) or adding `torsetup=1` to firo.conf (for firod). Please note that this is for **outbound connections only** and will most likely be sufficient for most users.

Additional settings for `firo.conf` are available below:

```
torsetup=1

listen=1
listenonion=1

proxy=127.0.0.1:9050
onion=127.0.0.1:9050
torcontrol=127.0.0.1:9051
```

## Additional Tor setup

To use built-in Tor with .onion address or inbound connections, you will need to create a `torrc` file in the `tor` subdirectory under [Firo's data directory](https://github.com/firoorg/firo/wiki/Default-data-directories) with the following contents:

```
SocksPort 127.0.0.1:9050
ControlPort 127.0.0.1:9051
CookieAuthentication 0
Log notice stdout
```

If successful, you can check for .onion address when running the `getnetworkinfo` RPC command.
