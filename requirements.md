# Requirements

## Developer machine

For the developer machine, we need a host that is capable of running.

- `bash`
- `perl`
- `ssh`
- `Node.js`

We tested MacOS, Linux and Windows Subsystem for Linux (WSL). Pull request are welcome for other systems.

## Raspberry Pi computers

_dotpi_ runs with Raspberry Pi version 3 and 4 (and should work on version 5 but has not been tested yet, any feedback welcome).

_dotpi_ systems installed on Rapsberry Pi are created on top of `Raspberry Pi OS`. Currently the underlying Debian distribution is `Bookworm`. _dotpi_ still runs with the previous distribution (`Bullseye`) but it is not supported.

Additionally, _dotpi_ supports the `Lite` version (minimal, without graphical interface) of `Raspberry Pi OS`. It should work with other version but it is untested.
