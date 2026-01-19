---
layout: guide
title: "Using Firo with Tor"
summary: 
tags: [guide]
author: "Anwar P."
permalink: /guide/firo-with-tor.html
---

**This guide is a work in progress.**

Firo's built-in Tor can be turned on by checking the **"Anonymous communication with Tor"** box (Firo Core) or adding **torsetup=1** to firo.conf (for firod). Please note that this is for **outbound connections only.**

To use built-in Tor with .onion address or inbound connections, you will need to create a `torrc` file in the `tor` subdirectory under Firo's data directory with the following contents:

```
SocksPort 127.0.0.1:9050
ControlPort 127.0.0.1:9051
CookieAuthentication 0
Log notice stdout
```

If successful, you can check for .onion address when running the `getnetworkinfo` RPC command.