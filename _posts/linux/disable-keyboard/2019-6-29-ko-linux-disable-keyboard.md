---
layout: post
title: "[Ubuntu] 노트북 내장 키보드 비활성화 하기"
ref: linux-disable-keyboard
date: 2019-06-30 19:11:00
categories: Linux
lang: ko
---

## 목차
- [먼저](#first)
- [키보드 잠금 설정 방법](#disable)
  * [입력 장치 찾기](#inputdev)
  * [비활성화 하기](#disable2)
  * [활성화 하기](#enable)
- [런처 아이콘 만드는 방법](#launcher)
  * [쉘 스크립트](#script)
  * [.deskotp](#desktop)
- [도크에 프로그램 추가하기](#dock)
- [참조](#ref)
<hr />
<br />

## 먼저 <a id="first"></a>
현재 HHKB Professional JP 키보드를 노트북에 연결해서 사용하고 있다. 공간이 협소하다 보니 
키보드를 노트북 위에 두고 사용하고 있는데 때때로 노트북 터치 패드나 키보드가 눌려서 
귀찮은 상황이 한 두가지가 아니다. 사실 노트북 내장 키보드를 비활성화 시키면 해결되는 간단한 
문제인데 이를 지금까지 안하고 있었다. 비활성화 시키는 방법 또한 생각보다 간단해서 
(실제 약 30초 걸림) 기록 삼아 글로 남긴다.

<br />
## 키보드 잠금 설정 방법 <a id="disable"></a>
### 입력 장치 찾기 <a id="inputdev"></a>
터미널을 열고 `xinput --list` 커맨드를 입력.

![xniput --list result](/assets/images/linux/how-to/disable-keyboard/xinput--list.png)

그러면 현재 연결되어 있는 입력 장치들이 쭉 출력된다. <br />
내장 키보드는 `AT Translated Set 2 Keyboard`고, 이 장치의 `id`는 `14`이다.

<br />
### 비활성화 하기 <a id="disable2"></a>
>  **주의:<br /> 여분의 키보드 또는 가상 키보드가 없는 경우 따라하지 마세요.**

내장 키보드의 `id`(여기서는 14)를 가지고 아래의 커맨드와 같이 입력하면 <br />
내장 키보드가 비활성화되어 사용할 수 없게 된다.

`xinput set-int-prop 14 "Device Enabled" 8 0`

<br />
### 활성화 하기 <a id="enable"></a>
다시 활성화 하기 위해서는 위와 동일한 커맨드를 입력하되 마지막 숫자 `0`을 `1`로 바꿔주기만 하면된다.

`xinput set-int-prop 14 "Device Enabled" 8 1`

<br />
## 런처 아이콘 만드는 방법 <a id="launcher"></a>
혹 여분의 키보드가 없는 상태에서 실수로 내장 키보드를 비활성화 시켰을 경우, 이를 다시
활성화 시키려면 재부팅하는 수 밖에 없다. 입력을 할 수 없으니 당연한 결과. 혹은 키보드가 있다
하더라도 다시 활성화 시키기 위해서 키보드를 가져와서 연결해서 명령어 입력하고 치우고 갖다놓고
...... 번거롭다.

만약 실행 프로그램이 있다면 마우스 클릭으로 다시 활성화 시킬 수 있을 터.
런처 아이콘을 직접 만들어 보자.

<br />
### 쉘 스크립트 <a id="script"></a>
아래는 내장 키보드가 비활성화 되어 있는 상태에서 `xinput --list --long` 커맨드를 입력 했을 때의
출력 결과이다.

![Disabled Message](/assets/images/linux/how-to/disable-keyboard/disabled-message.png)

잘 보면 해당 장치가 비활성화 되어 있다는 문구(_This device is disabled_)가 출력되어 있다.
반대로 활성화 되어 있다면 위 문구는 나타나지 않는다. 이 사실을 
이용해서 내장 키보드를 on/off 시키는 스크립트를 만들어 보도록 하겠다.

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


`kbd` 라는 변수에 `This device is disabled`라는 문구가 저장되어 있다면 비활성화 되어있는 
상태이므로 활성화 시키고, 빈 문자열이라면 활성화 되어 있으니 비활성화 시킨다.

스크립트를 작성했으면 실행 파일로 만들어 주도록 한다.
```bash
chmod u+x kbd-onoff
```

여분의 키보드가 있다면 지금 위 스크립트를 실행해서 결과를 확인해봐도 좋다.

<br />
### .desktop <a id="desktop"></a>
`.desktop` 파일은 런처 아이콘을 만들기 위해 필요한 파일이다.

여기서 필요한 준비물은 두 가지:
1. 런처 아이콘의 경로: `/usr/share/icons/icon.png`
2. 스크립트 파일의 경로: `/bin/kbd-onoff`

준비가 되었다면 원하는 편집기를 열고 아래의 내용을 입력,

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

`kbd-onoff.desktop`라는 이름으로 저장 후 실행한다.

처음 실행 할 경우 믿을 수 없는 프로그램이다 라는 팝업 창이 뜨는데 이 때
 `Trust and Launch`를 클릭하면 된다.

<br />
## 도크에 프로그램 추가하기 <a id="dock"></a>

`.desktop`파일을 `/usr/share/applications/` 또는 `~/.local/share/applications/`에 저장한다.
`.desktop` 파일에서 `Name=`에 해당 하는 부분이 프로그램의 이름이므로 이를 
시작 어플리케이션에서 찾아 마우스 오른쪽 버튼 클릭 후 `Add to Favorites` 클릭하면 도크에 추가가 된다.

![dock image](/assets/images/linux/how-to/disable-keyboard/dock.png)

<br />
## 참조 <a id="ref"></a>
- [Disable Laptop Keyboard in Ubuntu](https://blog.hostonnet.com/laptop-keyboard-ubuntu)
- [Bash Shell : is a variable empty?](https://www.cyberciti.biz/faq/unix-linux-bash-script-check-if-variable-is-empty/)
- [Bash Shell : if-statement](https://ryanstutorials.net/bash-scripting-tutorial/bash-if-statements.php)
