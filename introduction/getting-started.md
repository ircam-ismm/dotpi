# Getting started

In this first guide we will see how to use the `dotpi-install` tools to setup a Raspberry Pi, and how to monitor and control it remotely using the `dotpi-manager`

## Cloning the `dotpi_install` tools

```sh
git clone https://github.com/ircam-ismm/dotpi-install
```

## Creating a project

The repository comes with a set of _dotpi_ project configuration examples that you can see in `projects` directory. In this guide, we will use the `example_development` project as a starter for creating a new project. So let's first copy this directory before exploring the project structure and make some modifications:

```sh
cd path/to/dotpi-install
cp -R projects/example-development projects/getting-started
```

If you open the project in your favorite editor, you should see the following directory structure:

```sh
getting-started
├── configuration           
│   └── dotpi_project.bash
└── secrets               
    ├── network 
    │   └── components  
    ├── ssh         
    │   ├── id_rsa_dotpi_example
    │   └── id_rsa_dotpi_example.pub
    └── dotpi_project.bash  
```

The directory name should be quite self-explanatory, but, just in case, you should be careful to never share publicly (e.g. on github) the files located into the `secrets` directory.

### Project public configuration

Let's first open the `getting-started/configuration/dotpi_project.bash` file to change some of the project global setting:

```sh
dotpi_project_name='example' # [!code --]
dotpi_project_name='getting-started' # [!code ++]

# default is yes
dotpi_ssh_allow_password_authentication='yes'

# no default password:
# - keep the one set by the imager
# - or override in secrets/dotpi_secrets.bash
dotpi_password_hash6=
# # openssl passwd -6
# dotpi_password_hash6='$6$...'

dotpi_timezone='Europe/Paris'
dotpi_keymap='fr'

dotpi_audio_device='HiFiBerry DAC+ ADC Pro' # [!code --]
dotpi_audio_device='headphone' # [!code ++]

# use node.js specific version
# default is lts
dotpi_node_version='lts'
```

- The `dotpi_project_name` will mainly define the hostname format of the RPis configured with the project, e.g. `dotpi-getting-started-001`
- The `dotpi_audio_device` will configure the audio output of your RPi, setting to `headphones` will disable the HDMI audio output to keep only the default mini jack of the RPi.

Now that some general information about our project are defined, let's configure some secrets of the project. 

### Changing password

First let's change the password of the RPi. Open the `getting-started/secrets/dotpi-secrets.bash` bash file and change the password to anything that suits you:

```sh
#!/bin/bash

# you should change this
dotpi_password='!raspberry' # [!code --]
dotpi_password='yoursuperpasssword'  # [!code ++]
```

### Configuring WiFi

Finally, let's configure the WiFi connection, so that:
- You will be able to access the RPi through SSH or something
- The RPi will be able to connect to the Internet to install itself in the next step



::: info
Note that in this first guide, we don't configure nor use the SSH keys. In very simple settings that could be OK, but it is probable that you will very soon find such functionality rather convenient. See [@todo]() for further information on that point.
:::

## Preparing the SD Card



- install Raspberry Pi OS
- install the project configuration and _dotpi_ tools on the SD Card

## Booting the Raspberry Pi

command to check the 

## Using the `dotpi-manager`

## Conclusion


