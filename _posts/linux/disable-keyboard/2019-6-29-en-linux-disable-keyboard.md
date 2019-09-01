---
layout: post
title: "[Ubuntu] Disable Laptop Keyboard"
ref: linux-disable-keyboard
date: 2019-06-30 19:11:00
categories: Linux
lang: en
---

## Contents
- [Preface](#first)
- [Disable Laptop Keyboard](#disable)
  * [find the input device](#inputdev)
  * [disabling](#disable2)
  * [enabling](#enable)
- [Create Launcher Icon](#launcher)
  * [shell script](#script)
  * [.deskotp](#desktop)
- [Attach to Dock](#dock)
- [Reference](#ref)
<hr />
<br />

## Preface <a id="first"></a>
I'm currently using HHKB Professional JP as an external keyboard with my laptop.
Because of such small space I have on my desk, I lay the keyboard on top of my laptop where
internal keyboard is located. Everything is good except random key presses and clicks on
the touch pad; it really disturbes me. I realized I could disable the internal keyboard
using command lines (perhaps the only way I believe) on Ubuntu.

<br />
## Disable Laptop Keyboard <a id="disable"></a>
### find the input device <a id="inputdev"></a>
Open up the terminal and enter the following command `xinput --list`.

![xniput --list result](/assets/images/linux/how-to/disable-keyboard/xinput--list.png)

Then you'll see list of all input devices connected to you laptop. <br />
`AT Translated Set 2 Keyboard` is the internal keyboard and its `id` is `14`.

<br />
### disabling <a id="disable2"></a>
>  **Warning: <br /> Unless you have an extra keyboard or a virtual keyboard, do not attempt to try this code.**

```
xinput set-int-prop 14 "Device Enabled" 8 0
```

<br />
### enabling <a id="enable"></a>
To enable your keyboard, use the following command: <br />
```
xinput set-int-prop 14 "Device Enabled" 8 1
```

<br />
## Create Launcher Icon <a id="launcher"></a>
Terminal commands may become problematic if you accidentally ran the command without having an
extra keyboard. The only option is to reboot. Even if you had an extra one, it could be annoying
to go get your keyboard and set it up just to type a command to enable your keyboard.

It would be nice to have an executable program where you can enable and disable with a click.
So lets make one.

<br />
### shell scripts <a id="script"></a>
Below is the output from running the command `xinput --list --long` when your keyboard is disabled.

![Disabled Message](/assets/images/linux/how-to/disable-keyboard/disabled-message.png)

It actually tells you that _This device is disabled_. I'm going to use this fact to write a
script file that works as a switch to enable/disable the keyboard.

```bash
#!/bin/bash
# file: kbd-onoff
kbd=`xinput --list --long | grep -A 1 "id=14" | grep disabled`

if [ -z "$kbd" ]
then
        echo "keyboard disabled"
        `xinput set-int-prop 14 "Device Enabled" 8 0`
else
        echo "keyboard enabled"
        `xinput set-int-prop 14 "Device Enabled" 8 1`
fi
```

The logic is straightforward. 
`kbd` will either store `""` or `"This device is disabled"`. So if a variable 
`kbd` is empty, then disable the keyboard because its currently enabled  and vice versa.

<hr />
<br />

Turn the script file you created into an executable.

```bash
chmod u+x kbd-onoff
```

You may try to run the program **ONLY** if you have an extra keyboard. Otherwise you will
have to reboot or use a virtual keyboard.

<br />
### .desktop <a id="desktop"></a>
We will write `.desktop` file to create the launcher icon.

You'll need two things:
1. launcher icon's path: `/usr/share/icons/icon.png`
2. script file's path  : `/bin/kbd-onoff`

Open up your favorite text editor and copy below codes:

```bash
#!/usr/bin/env xdg-open
[Desktop Entry]
Version=1.0
Type=Application
Terminal=false
Exec=/bin/kbd-onoff
Name=Keyboard On/Off
Comment="Keyboard on/off runnnig"
Icon=/usr/share/icons/kbd.png
```

Save the file as `kbd-onoff.desktop` and run the program.

If you see an error (or a pop up screen) regarding running untrusted app, click `Trust and Launch`.

<br />
## Attach to Dock <a id="dock"></a>
In order to make the launcher icon visible in application dash bar, move `.desktop` file 
to either `/usr/share/applications/` or `~/.local/share/applications/`.

Then you'll be able to find the program in application dash with the name you used on `Name=` inside `.desktop` file. Right click on the icon and select `Add to Favorites` to add it to the dock.

![dock image](/assets/images/linux/how-to/disable-keyboard/dock.png)

<br />
## Reference <a id="ref"></a>
- [Disable Laptop Keyboard in Ubuntu](https://blog.hostonnet.com/laptop-keyboard-ubuntu)
- [Bash Shell : is a variable empty?](https://www.cyberciti.biz/faq/unix-linux-bash-script-check-if-variable-is-empty/)
- [Bash Shell : if-statement](https://ryanstutorials.net/bash-scripting-tutorial/bash-if-statements.php)
