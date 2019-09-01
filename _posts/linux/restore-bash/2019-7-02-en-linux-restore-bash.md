---
layout: post
title: "[Ubuntu] Restore deleted /bin/bash"
ref: linux-restore-bash
date: 2019-07-02 17:54:00
categories: Linux
lang: en
---

## Contents
- [Preface](#first)
- [Troubleshoot](#issue)
- [Solution](#solution)
- [Reference](#ref)
<hr />
<br />

## Preface <a id="first"></a>
I created a script file in this post: [\[Ubuntu\] Disable Laptop Keyboard](https://myoiwritescode.github.io/linux/2019/06/30/en-linux-disable-keyboard.html), that switches on/off the internal keyboard.
I was trying to move the file `kbd-onoff.bat` to `/bin` and I accidentally did this:
```
$ sudo mv kbd-onoff.bat /bin/bash
```

And the chaos began.

<br />
## Troubleshoot <a id="issue"></a>

I noticed the error right away because my terminal stopped working.

![Error image 1](/assets/images/linux/restore-bash/error1.png)

My first attempt was to reinstall bash. Since I cannot use my terminal,
  I went to `Preference -> Command` and selected `Run a custom command insteal of my shell`.

![Custom command image 1](/assets/images/linux/restore-bash/custom-command.png)

Unfortunately above process did not work.

![Error image 2](/assets/images/linux/restore-bash/error2.png)

<br />
## Solution <a id="solution"></a>
I learned from googling that in most of the system `/bin/bash` is actually just a symlink to 
`/bin/sh`. So what if I create new symlink `/bin/bash` to `/bin/sh` and then reinstall bash?


```
rm -rf /bin/bash
ln -s /bin/sh /bin/bash
apt-get install --reinstall bash
```

![Solution image](/assets/images/linux/restore-bash/solution.png)

Voila! My bash is back.

<br />
## Reference <a id="ref"></a>
- [How to recover fram a deleted /bin/bash?](https://serverfault.com/questions/451528/how-to-recover-from-a-deleted-bin-bash)
