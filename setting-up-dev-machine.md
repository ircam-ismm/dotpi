# Setting up a dev machine

For a general information, please see [Web development](https://ircam-ismm.github.io/webaudio-tutorials/first-steps/setting-up-environment.html)

On any host, _dotpi_ requires:

- [Node.js](https://nodejs.org/) LTS (long-term support) version
- [Raspberry Pi Imager](https://www.raspberrypi.com/software/)

## Linux

In addition to the common requirements, be sure that the following packages are installed:

- `git`
- `make`
- `curl`
- `openssl`

## MacOS

- install `Xcode` and the command-line tools

## Windows

The _dotpi_ system will run inside the `Windows Subsystem for Linux`, `WSL`. It requires `Windows` version 10 or 11, and allows the run an almost complete `Linux` system within `Windows`.

The first time, run a ``Windows PowerShell` as administrator, and install a `Linux` distribution.

```
PS C:\Windows\system32> wsl --install Ubuntu
Launching Ubuntu...
root@m3410-w11:~#
```

Then, use `wsl` for _any_ command.

First, install _all_ `Linux` requirements mentioned above.

```
PS C:\Windows\system32> wsl
Launching Ubuntu...
root@m3410-w11:~# apt install git make curl openssl
```

Be sure to install `Node.js` _within_ `WSL`.

```
PS C:\Windows\system32> wsl
Launching Ubuntu...
root@m3410-w11:~# apt install node
```

Do _not_ install the `Raspberry Pi Imager` in WSL.

In this first guide we will see how to use the `dotpi-install` tools to setup a Raspberry Pi, and how to monitor and control it remotely using the `dotpi-manager`

::: info
For windows, run _any_ commands within `WSL`.
:::

## Installing `dotpi-tools`

```sh
git clone https://github.com/ircam-ismm/dotpi-install
cd dotpi-install
npm install
npm link
```

Now, the command `dotpi-tools`should be available in your machine.
