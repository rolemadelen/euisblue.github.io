---
layout: post
title: "노트북 내장 키보드 비활성화하기"
ref: linux-disable-keyboard
date: 2019-06-30 19:11:00
last_modified_at: 2020-01-23 17:36
categories: Linux
lang: ko
---

## 목차
- [키보드 비활성화하기](#disable)
- [실행 파일 아이콘 만들기](#launcher)
  * [script](#script)
  * [.deskotp](#desktop)
  * [도크에 실행 파일 추가](#dock)
- [참조](#ref)

<div class="divider"></div>

## 키보드 비활성화하기 <a id="disable"></a>
`xinput` 명령어를 사용하여 입력 장치들을 확인하고 설정할 수 있다. 
터미널을 열고 `xinput --list` 명령어를 입력, 연결된 장치들을 출력해보자.

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

우리가 원하는 부분은 `AT Translated Set 2 Keyboard`이다. 
이 장치의 이름을 사용해서 키보드를 활성화/비활성화할 수 있다.

키보드 **비활성화**하기:
```bash
xinput disable "AT Translated Set 2 keyboard"
```

다시 **활성화**하기:
```bash
xinput enable "AT Translated Set 2 keyboard"
```

<div class="divider"></div>

## 실행 파일 아이콘 만들기 <a id="launcher"></a>
매번 터미널을 열고 명령어를 입력하는 과정이 번거로우니, 
클릭 한 번으로 활성화/비활성화가 가능하도록 실행 파일을 만들어보자.

### script <a id="script"></a>
첫 번째로, 실행 파일을 클릭했을 때 실행될 코드를 작성해보자.

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

`xinput list-props "AT Translated Set 2 keyboard" | grep "Device Enabled"` 명령어를 실행하면
아래와 같은 문자열이 `$kbd`에 저장이 된다.

```bash
# 키보드가 활성화 되어있을 때
Device Enabled (168):   1

# 비활성화 되어있을 때
Device Enabled (168):   0
```

문자열 끝에 숫자만 알면 되기 때문에 `${kbd: -1}`을 사용해서 마지막 문자를 가져왔다. 
이 값에 따라 알맞은 명령어를 실행하면 된다.

스크립트를 작성했으면 이를 실행 가능하도록 권한을 설정한 다음 `/bin/` 폴더로 옮겨준다.
권한설정을 하지 않으면 후에 실행 파일을 만들었을 때 클릭을 해도 반응을 하지 않는다.

```bash
chmod u+x kbd-switch
mv kbd-switch /bin/
```

### .desktop <a id="desktop"></a>
실행 파일의 아이콘을 만들기 위해 `.desktop` 파일을 만들어야 한다.

필요한 정보는 두 가지:
1. 사용할 실행 파일 아이콘의 경로: `/usr/share/icons/icon.png`
2. 스크립트 파일의 경로: `/bin/kbd-switch`

준비가 되었다면 원하는 편집기를 열고 아래의 내용을 입력한다:

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

`kbd-switch.desktop`이라는 이름으로 저장 후 실행한다. 팝업 창이 뜰 경우 
`Trust and Launch`를 클릭한다.

### 도크에 실행 파일 추가하기 <a id="dock"></a>

실행 파일을 시작 애플리케이션에서 찾을 수 있도록 `.desktop`파일을 `/usr/share/applications/` 또는 `~/.local/share/applications/`으로 옮겨준다.

시작 애플리케이션에서 실행 파일을 찾아 마우스 오른쪽 버튼 클릭, `Add to Favorites`를 클릭하면 도크에 추가가 된다.

![dock image](/assets/images/linux/how-to/disable-keyboard/dock.png)

<div class="divider"></div>

## 참조 <a id="ref"></a>
- [Disable Laptop Keyboard in Ubuntu](https://blog.hostonnet.com/laptop-keyboard-ubuntu)
- [Bash Shell : is a variable empty?](https://www.cyberciti.biz/faq/unix-linux-bash-script-check-if-variable-is-empty/)
- [Bash Shell : if-statement](https://ryanstutorials.net/bash-scripting-tutorial/bash-if-statements.php)
