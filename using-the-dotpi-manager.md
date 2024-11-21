# Using the `dotpi-manager`

The `dotpi-manager` is a [_soundworks_](http://soundworks.dev) application aimed at managing and controlling fleets of RPi. It is composed of:

- a Node.js server that should run on your computer
- a Browser client to monitor and control your fleet of devices
- a Node.js client that runs on the RPi and that is automatically installed by the _dotpi-install_ tool.

## Installing the `dotpi-manager`

The first time, you need to install the `dotpi-manager`.

Chose where to install it.

```sh
cd ~/Documents
```

And clone the git project.

```sh
git clone https://github.com/ircam-ismm/dotpi-manager.git
```

In the project, install the dependencies.

```sh
cd ~/Documents/dotpi-manager/
npm install
```

## Running the `dotpi-manager`

Run the manager from its directory.

```sh
cd ~/Documents/dotpi-manager/
npm run dev
```

Now, it is up and running.

## Acessing the `dotpi-manager`

::: tip
Make sure your computer is on the same network as the one you configured for the RPi in the install step
:::

Once the server is up and running, go to <a href="http://127.0.0.1:9000" target="_blank">http://127.0.0.1:9000</a>, and Tada! you should see your RPi in the interface:

![dotpi-manager](./assets/using-the-dotpi-manager/dotpi-manager.png)

::: info
Do _not_ plug headphones to the Raspberry Pi before the following test.
:::

Now if you click the check-sound bang (on the right-hand side of the RPI status in your manager), you should hear a full volume short white noise coming out of the mini jack output of your RPI.
