---
layout: post
title: "How I recovered overwritten /bin/bash"
ref: linux-recover-deleted-bash
date: 2019-07-02 17:54:00
last_modified_at: 2020-01-23 22:23:00
categories: Linux
lang: en
---

## "i know what i'm doing"
For this [post](./en-linux-disable-keyboard), which is about activating and deactivating the
 internal keyboard, I created a script file that switches on and off the keyboard when executed.
Wanting to run this script globally, I tried to move it to `/bin`.

Moving a file from one to other location is easy, just use `mv`. So I typed:
```bash
mui:~$ sudo mv kbd.bat /bin
```

which is right, but before I press *enter*, my nitwit *[migi](https://hero.fandom.com/wiki/Migi)* 
pressed extra keys and typed

```bash
mui:~$ sudo mv kbd.bat /bin/bash
```

It didn't take long before I recognized the problem.

![Error image 1](/assets/images/linux/recover-deleted-bash/error1.png)

My terminal. It crashed.

<div class="divider"></div>

## "trust me, i know what i'm doing"
Lets reinstall the bash. That will solve the problem.

Since I can't use my shell, I had to come up with other ways to type shell commands.
I remembered there's a *custom command* option that I can use that runs automatically when I open the shell.

So I went to `Preference -> Command` and filled in the custom command box with `sudo apt-get install --reinstall bash`.

Then I launched a new shell, and I see its executing my commands.

It's working...

![Error image 2](/assets/images/linux/recover-deleted-bash/error2.png)

well not really. 

<div class="divider"></div>

## "uhh.. hey Google" <a id="solution"></a>
After googli.. researching, I learned that in most of the system `/bin/bash` is actually just a symlink to 
`/bin/sh`. So what if I create a new symlink `/bin/bash` to `/bin/sh` and then reinstall the bash?

```sh
rm -rf /bin/bash
ln -s /bin/sh /bin/bash
apt-get install --reinstall bash
```

![Solution image](/assets/images/linux/recover-deleted-bash/solution.png)

Voilà.
