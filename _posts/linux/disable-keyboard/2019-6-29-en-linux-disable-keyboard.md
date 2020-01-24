---
layout: post
title: "How to disable a Laptop Keyboard"
ref: linux-disable-keyboard
date: 2019-06-30 19:11:00
categories: Linux
lang: en
---

## Contents
- [Disabling Laptop Keyboard](#disable)
- [Create a Launcher Icon](#launcher)
  * [script](#script)
  * [.deskotp](#desktop)
  * [attach to the Dock](#dock)
- [Reference](#ref)

<div class="divider"></div>
## Disabling Laptop Keyboard <a id="disable"></a>
We can use `xinput` command to configure devices in linux. 
Execute `xinput --list` command to list connected devices.

```bash
mui:~$ xinput --list

⎡ Virtual core pointer                          id=2    [master pointer  (3)]
⎜   ↳ Virtual core XTEST pointer                id=4    [slave  pointer  (2)]
⎜   ↳ Elan Touchpad                             id=14   [slave  pointer  (2)]
⎣ Virtual core keyboard                         id=3    [master keyboard (2)]
    ↳ Virtual core XTEST keyboard               id=5    [slave  keyboard (3)]
    ↳ Power Button                              id=6    [slave  keyboard (3)]
    ↳ Asus Wireless Radio Control               id=7    [slave  keyboard (3)]
    ↳ Video Bus                                 id=8    [slave  keyboard (3)]
    ↳ Video Bus                                 id=9    [slave  keyboard (3)]
    ↳ Sleep Button                              id=10   [slave  keyboard (3)]
    ↳ USB2.0 VGA UVC WebCam: USB2.0 V           id=13   [slave  keyboard (3)]
    ↳ Asus WMI hotkeys                          id=15   [slave  keyboard (3)]
    ↳ AT Translated Set 2 keyboard              id=16   [slave  keyboard (3)]
```

Locate `AT Translated Set 2 keyboard`. This is the device we need, and we can use it to disable or enable the keyboard.

To **disable** the keyboard, type:
```bash
xinput disable "AT Translated Set 2 keyboard"
```

To **enable** it, type:
```bash
xinput enable "AT Translated Set 2 keyboard"
```

<div class="divider"></div>
## Create a Launcher Icon <a id="launcher"></a>
Its too much work to type these commands everytime, so lets create a launcher where we can enable or disable the keyboard via a click.

### script <a id="script"></a>

First we need to create a script that enables or disables the keyboard when its executed.

```bash
#!/bin/bash

kbd=`xinput list-props "AT Translated Set 2 keyboard" | grep "Device Enabled"`
kbd="${kbd: -1}"

if [ $kbd -eq 1 ]
then
   `xinput disable "AT Translated Set 2 keyboard"`
else
   `xinput enable "AT Translated Set 2 keyboard"`
fi
```

The output of the command `xinput list-props "AT Translated Set 2 keyboard" | grep "Device Enabled"` is as follows:

```bash
# when enabled
Device Enabled (168):   1

# when disabled
Device Enabled (168):   0
```

I grabbed the last character using `${kbd: -1}` and checked if its enabled or not.
It's a simple script.


Now we need to make the script file executable to be able to run it with a click, then move
the script to `/bin/`.

```bash
chmod u+x kbd-switch
mv kbd-switch /bin/
```

### .desktop <a id="desktop"></a>
We need to create `.desktop` file for the launcher icon.

We need two pieces of information:
1. launcher icon's path: `/usr/share/icons/icon.png`
2. script file's path  : `/bin/kbd-switch`

Open up a text editor and copy below codes:

```bash
#!/usr/bin/env xdg-open
[Desktop Entry]
Version=1.0
Type=Application
Terminal=false
Exec=/bin/kbd-switch
Name=Keyboard On/Off
Comment="Keyboard On/Off Runnnig"
Icon=/usr/share/icons/kbd.png
```

Save the file as `kbd-switch.desktop` and run the program.
If prompted, click `Trust and Launch`.

### attach to the Dock <a id="dock"></a>
Move `.desktop` file to either `/usr/share/applications/` or `~/.local/share/applications/` to let it visible on Applications dash bar.

Go to the dash bar, search *Keyboard On/Off*, right click on it, then click *Add to Favorites*.

![dock image](/assets/images/linux/how-to/disable-keyboard/dock.png)

<div class="divider"></div>
## Reference <a id="ref"></a>
- [Disable Laptop Keyboard in Ubuntu](https://blog.hostonnet.com/laptop-keyboard-ubuntu)
- [Bash Shell : is a variable empty?](https://www.cyberciti.biz/faq/unix-linux-bash-script-check-if-variable-is-empty/)
- [Bash Shell : if-statement](https://ryanstutorials.net/bash-scripting-tutorial/bash-if-statements.php)
