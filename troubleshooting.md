# Troubleshooting

Please report any problem, by issuing an [issue for the dotpi-tools](https://github.com/ircam-ismm/dotpi-tools/issues).

## Latest version of `dotpi-tools`

In any case, keep your version of `dotpi-tools` updated. See the [dotpi-tools installation](./setting-up-the-dev-machine#installing-dotpi-tools).

## Unable to install on a Raspberry Pi

### Internet connection

The first thing to check is the internet connection if the Raspberry Pi. Without it, the installation will fail.

If the internet connection is established during the installation process, it may be long, but it could recover.

### New major version of Debian

If a major release of Raspberry Pi OS happened recently, things may break due to a new version of the underlying Debian OS:

- the certificates are not valid yet, due to certificates not already approved
- the downloads may fail, because of the mirrors not already updated
- some dotpi commands may be deprecated
- some tools may have been removed, or changed

A quick solution is to use the previous version when choosing the OS in the `Raspberry Pi Imager`, which is then tagged as `Legacy`.

### New major version of Raspberry Pi Imager

If a major release of Raspberry Pi Imager happened recently, things may break:

- handling of first boot
- handling of customisation
  - network
  - hostname
  - user and password

A quick solution is to revert to a previous version and to refrain from upgrading too soon, especially when the minor number is still `0`, ie `2.0.0`.
