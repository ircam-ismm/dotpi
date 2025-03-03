# Installing a Raspberry Pi

On this page, you'll be shown how to install a project on several Raspberry Pis. First, you will see how to install Raspberry Pi OS on an SD card. Then you will see how to install _dotpi-tools_ and your _dotpi_ project on the SD card. This will allow you to remotely monitor your fleet of Raspberry Pis thanks to the _dotpi manager_.

## Installing Raspberry Pi OS

First, you will flash an SD card to install the `Raspberry Pi OS`.

Run `Raspberry Pi Imager`, also called `rpi-imager`. If you haven't done it yet, please [download the application](https://www.raspberrypi.com/software/). You can also read the [documentation](https://www.raspberrypi.com/documentation/computers/getting-started.html#raspberry-pi-imager).

First, select your Raspberry Pi device.

![imager-device](./assets/installing-a-raspberry-pi/imager-device.png)

![imager-device-rpi4](./assets/installing-a-raspberry-pi/imager-device-rpi4.png)

Then, select the operating system (OS). We support the current `Raspberry Pi OS` (`Bookworm`) Lite 64-bit.

![imager-os](./assets/installing-a-raspberry-pi/imager-os.png)

You can select the 'Lite' version to use less resources on a headless Raspberry. It is located in `Raspberry Pi OS (Other)`.

![imager-os-rpios-other](./assets/installing-a-raspberry-pi/imager-os-rpios-other.png)

![imager-os-rpios-lite](./assets/installing-a-raspberry-pi/imager-os-rpios-lite.png)

Insert an SD card in your computer, and select it.

![imager-storage](./assets/installing-a-raspberry-pi/imager-storage.png)

![imager-storage-card](./assets/installing-a-raspberry-pi/imager-storage-card.png)

Press `Next`.

![imager-next](./assets/installing-a-raspberry-pi/imager-next.png)

::: info
By default, the imager will automatically eject the SD Card when the installation terminates. This behavior can be changed in the `Option` tab of the imager settings.
:::

![imager-next-settings](./assets/installing-a-raspberry-pi/imager-next-settings.png)

![imager-next-settings-options-eject](./assets/installing-a-raspberry-pi/imager-next-settings-options-eject.png)

::: tip
Any imager customisation is over-ridden by the project customization. For consistency, you should avoid the imager customization.
:::

![imager-next-customisation](./assets/installing-a-raspberry-pi/imager-next-customisation.png)

Press `yes` to continue.

![imager-next-continue](./assets/installing-a-raspberry-pi/imager-next-continue.png)

Wait until the end of the process.

![imager-next-successful](./assets/installing-a-raspberry-pi/imager-next-successful.png)

Do _not_ remove the SD card yet. Before that, you will need to install _dotpi_ on it. You should see a volume called `bootfs` mounted in your machine.

If the imager automatically ejected the SD Card after flashing, just re-plug the SD Card to apply the _dotpi_ configuration.

## Installing _dotpi_ and project

This step will copy the _dotpi_ installer with your project customizations to the SD card.

Go to the directory of the _dotpi_ projects and write the following command:

```sh
cd ~/Documents/dotpi-projects/
dotpi-tools --install-rpi
```

Your terminal should look as the following:

![install-rpi](./assets/installing-a-raspberry-pi/dotpi-tools-install-rpi.png)

Select the project you want to install and press `Enter`.
Then, follow the wizard.

Press `Enter` to accept a default option, or type a new value and validate with `Enter`.

![install-rpi-options](./assets/installing-a-raspberry-pi/dotpi-tools-install-rpi-options.png)

Depending on your system, you may need to enter a password to access the SD card.

![install-rpi-password](./assets/installing-a-raspberry-pi/dotpi-tools-install-rpi-password.png)

::: info
If there is an error related to the SD card, unplug it and plug it back to your machine.
Then, start again the installation.

```sh
cd ~/Documents/dotpi-projects/
dotpi-tools --install-rpi
```

:::

The installation will continue.

![install-rpi-eject](./assets/installing-a-raspberry-pi/dotpi-tools-install-rpi-eject.png)

At the end, you need to eject the SD card from your machine. Insert it in a Raspberry Pi and turn it on.

![install-rpi-monitor](./assets/installing-a-raspberry-pi/dotpi-tools-install-rpi-monitor.png)

After the network is enabled on the Raspberry Pi (wired or wifi), you can monitor the distant installation of the Raspberry Pi.

![install-rpi-log](./assets/installing-a-raspberry-pi/dotpi-tools-install-rpi-log.png)

After a while, the system of the Raspberry Pi is prepared.

```log
2024-11-20 15:17:51 INFO: System prepared.
```

The system reboots, this closes the connection.

```log
2024-11-20 15:17:51 INFO: Rebooting...
Connection to dotpi-dev-123.local closed by remote host.
```

After the reboot, the Raspberry Pi is ready. It will connect to the WiFi, and to the `dotpi-manager`.
