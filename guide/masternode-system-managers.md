---
layout: guide
title: Set up your masternode with a system manager
summary: Guide to set up a masternode with a system manager
tags: [guide]
author: "Firo Team"
permalink: /guide/masternode-system-managers.html
---

This guide gives instructions on how to set up two popular system managers to simplify and automate the management of your Firo masternode: Systemd and Monit. **Use only one of the two**.

## Systemd

Create a service file for firod:

`sudo nano /etc/systemd/system/firod.service`

Enter the following. Modify the `User`, `Group`, `PIDFile` (and `username`), `ExecStart`, and `ExecStop` lines according to your own configuration:

```
[Unit]
Description=Firo daemon
After=network.target

[Service]
Type=simple
Restart=always
RestartSec=30

User=username
Group=username
PIDFile=/home/username/.firo/firod.pid

ExecStart=/usr/local/bin/firod
ExecStop=/usr/local/bin/firo-cli stop

[Install]
WantedBy=multi-user.target
```

Reload systemd:

`sudo systemctl daemon-reload`

Start firod with systemctl to test

`sudo systemctl start firod.service`

Then check if running with `./firo-cli getinfo`

To enable firod autostart at restart

`sudo systemctl enable firod.service`

To stop firod (e.g. to update)

`sudo systemctl stop firod.service`

You can restart firod with

`sudo systemctl restart firod.service`

## Monit

Install monit if not installed:

```
sudo apt install monit
```

Edit monit control file:

```
sudo nano /etc/monit/monitrc
```

Remove '#' from the front part of the following lines:

```
set httpd port 2812 and
    use address localhost  # only accept connection from localhost
    allow localhost        # allow localhost to connect to the server and
    allow admin:monit      # require user 'admin' with password 'monit'
```

Scroll to the end of the file and add '#' in front of this line:

```
#include /etc/monit/conf-enabled/*
```

Create a monit control file for firod.

```
sudo nano /etc/monit/conf.d/firod
```

Copy and paste the following into the editor. Make sure to modify the paths to suit your installation. Once done, 'Ctrl+X' to save and exit.

```
check process firod matching "firod"
        start program = "/home/USERNAME/firo-0.14.1/bin/firod -daemon -datadir=/home/USERNAME/.firo/"
                as uid USERNAME and gid USERNAME
        stop program = "/home/user/firo-0.14.1/bin/firo-cli stop"
                as uid USERNAME and gid USERNAME
        if failed host 127.0.0.1 port 8168 type TCP for 2 cycles then restart
```

Reload monit for changes to take effect.

```
sudo monit reload
```

Check if the control file is okay with

```
sudo monit -t
```

Start firod with monit

```
sudo monit start firod
```

Check monitoring status

```
sudo monit status
```

To stop firod with monit

```
sudo monit stop firod
```