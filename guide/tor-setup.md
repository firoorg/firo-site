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

Firo comes bundled with its own built-in Tor. It can be turned on easily for outbound connections by checking the `"Anonymous communication with Tor"` box in Firo Core or by adding `torsetup=1` to `firo.conf` if you're using firod.

This enables Tor for outbound connections only which means any transaction you sent, will be sent and protected with Tor but your node will still listen and be visible on your regular IP address.

To enable your node to use Tor for both incoming and outgoing connections, you will need to add the following to your `firo.conf`:

```
torsetup=1

listen=1
listenonion=1

proxy=127.0.0.1:9050
onion=127.0.0.1:9050
torcontrol=127.0.0.1:9051
```

## Additional Tor setup

To use built-in Tor with .onion address, you will need to create a `torrc` file in the `tor` subdirectory under [Firo's data directory](https://github.com/firoorg/firo/wiki/Default-data-directories) with the following contents:

```
SocksPort 127.0.0.1:9050
ControlPort 127.0.0.1:9051
CookieAuthentication 0
Log notice stdout
```

If successful, you can check for .onion address when running the `getnetworkinfo` RPC command.

If you want to connect to and only to Onion peers, please add `onlynet=onion` to `firo.conf`. Please note that you might need to manually add peers in this mode.
