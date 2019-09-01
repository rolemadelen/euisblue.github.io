---
layout: post
title: "[Elementary OS] Install GNOME Terminal"
ref: linux-install-gnome-terminal
date: 2018-11-12 09:04:00
categories: Linux
lang: en
---

Elemontary OS's default terminal is `Pantheon terminal`. <br />
With this terminal, its quite hard to change settings.
So I decided to replace the pantheon with the `GNOME terminal`.

## Contents
- [Installing GNOME terminal](#terminal)
- [Adding the app icon](#icon)
- [Configuring](#config) 
	* [Using terminal](#config-terminal)
	* [Using dconf editor](#config-dconf)
- [Removing pantheon terminal](#remove)
- [Reference](#ref)

<hr />
<br />

## Installing GNOME terminal <a id="terminal"></a>
Install `gnome-terminal` using the app store or the command line.
```
sudo apt-get install gnome-terminal
```

<br />
## Adding the app icon to the launcher <a id="icon"></a>

Choose your favority text editor to open `gnome-terminal.desktop` file and edit two lines
that start with `OnlyShowIn`. 

```bash
sudo vi /usr/share/applications/gnome-terminal.desktop
```

```bash
...
X-GNOME-SingleWindow=false
#OnlyShowIn=GNOME;Unity;
...
Exec=gnome-terminal
#OnlyShowIn=Unity
```

<br />
## Configuring <a id="config"></a>

You can edit the configuaration either using a terminal or dconf-editor.

### Using terminal <a id="config-terminal"></a>
```bash
gsettings set org.gnome.desktop.default-applications.terminal exec gnome-terminal
gsettings set org.gnome.desktop.default-applications.terminal exec-arg ''
```

<br />
### Using dconf editor <a id="config-dconf"></a>
First install `dconf editior` and launch the program.
```bash
sudo apt-get install dconf-editor
```

Navigate to `org` > `gnome` > `desktop` > `applications` > `terminal`. <br />
Change the value of `exec` to `gnome-terminal` and `exec-arg` to blank (empty string);

![Dconf Setting](/assets/images/linux/how-to/replace-terminal/dconf-terminal.png)

<br />
## Removing pantheon-terminal <a id="remove"></a>

This step is not necessary, but if you want to keep your machine clean, you can remove the old terminal:
```bash
sudo apt-get purge pantheon-terminal
```

<br />
## Reference <a id="ref"></a>
- [4 steps to replace the terminal](https://adam.merrifield.ca/2015/11/23/4-steps-to-replace-the-terminal-in-elementary-os-freya/){: target="_blank"}
