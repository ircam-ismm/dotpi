---
layout: doc
---

# dotpi | documentation


The _dotpi_ ecosystem allows a fleet of Raspberry Pi computers to run distributed applications. There is a focus on audio capabilities with helpers for sound devices.


## Features

_dotpi_ is set of tools that runs on a server and on each Raspberry Pi, to organise the ensemble.

- configure and install ex. sound card, network
- service: ex. ensure that jackd service always run
- command line tools: ex. install and remove a service
- manager: deploy, run and monitor your project on a fleet of pi



## Requirements

- MacOS. It is tested with MacOS. Pull request are welcome for other systems. (The server must be able to run `bash` and `perl` scripts.)
- RPi 3 or 4. Let us know if it runs on a Raspberry 5.

## Raspberry Pi computers

_dotpi_ runs on Rapsberry Pi models 3 and 4, with `Raspberry Pi OS`. The underlying Debian distribution is `Bookworm`. It still runs with the previous distribution (`Bullseye`) but it is not supported. _dotpi_ supports the `Lite` version of the system (minimal, without graphical interface).


