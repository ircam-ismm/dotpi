---
layout: doc
---

# dotpi | documentation

The _dotpi_ ecosystem aims at facilitating the creation and maintenance of a fleet of Raspberry Pi nano-computers to run distributed audio applications.

![dots-espro](./assets/homepage/dots-espro.jpg)

## Features

The set of tools provided _dotpi_ run both on a server and on each Raspberry Pi. In short, _dotpi_ provides:

- A way configure and install the system on the Raspberry Pi, e.g. sound card, network
- Some service and daemons, e.g. ensure that jackd service always run
- Some command line tools, e.g. to install and remove a service
- A manager to deploy, run and monitor your projects on a fleet of pi

## Requirements

- MacOS. Pull request are welcome for other systems (note that the server must be able to run `bash` and `perl` scripts.)
- RPi 3 or 4 (should work on a Raspberry 5 but has not been tested yet, any feedback welcome).

## Raspberry Pi computers

_dotpi_ systems installed on Rapsberry Pi are created on top of `Raspberry Pi OS`. Currently the underlying Debian distribution is `Bookworm`, _dotpi_ still runs with the previous distribution (`Bullseye`) but it is not supported. 

Additionally, _dotpi_ supports the `Lite` version (minimal, without graphical interface) of `Raspberry Pi OS`.


