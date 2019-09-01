---
layout: post
title: "[Elementary OS] GNOME 터미널 설치"
ref: linux-install-gnome-terminal
date: 2018-11-12 09:04:00
categories: Linux
lang: ko
---

Elementary OS에서 기본적으로 제공하는 `판테온 터미널`을 삭제하고 `GNOME 터미널`을 설치하는 방법을 
글로 작성해본다.

## 목차
- [GNOME 터미널 설치](#terminal)
- [런처 아이콘 추가](#icon)
- [환경설정](#config) 
	* [터미널 이용](#config-terminal)
	* [dconf 에디터 이용](#config-dconf)
- [기존 터미널 삭제](#remove)
- [Reference](#ref)

<hr />
<br />

## GNOME 터미널 설치 <a id="terminal"></a>
아래의 명령어를 이용해 GNOME 터미널을 설치한다
```
sudo apt-get install gnome-terminal
```

<br />
## 런처 아이콘 추가 <a id="icon"></a>

평소에 사용하는 편집기로 `gnome-terminal.desktop`파일을 열고 `OnlyShowIn`으로 
시작하는 두 개의 줄을 주석 처리 한다.

```bash
sudo vi /usr/share/applications/gnome-terminal.desktop
```

``` bash
...
X-GNOME-SingleWindow=false
# OnlyShowIn=GNOME;Unity;
...
Exec=gnome-terminal
#OnlyShowIn=Unity
...
```

<br />
## 환경설정 <a id="config"></a>

nimf의 환경설정은 터미널 속 직접 명령어를 입력해서 수정하거나 dconf 에디터를 사용해서 수정 할 수 있다.

### 터미널을 이용한 방법 <a id="config-terminal"></a>

터미널을 열고 아래의 두 줄을 입력한다.

```bash
gsettings set org.gnome.desktop.default-applications.terminal exec gnome-terminal
gsettings set org.gnome.desktop.default-applications.terminal exec-arg ''
```

<br />
### dconf 에디터를 이용한 방법 <a id="config-dconf"></a>
`dconf editor`를 설치하고 실행한다.

```bash
sudo apt-get install dconf-editor
```

`org` > `gnome` > `desktop` > `applications` > `terminal`로 이동하고 <br />
`exec`의 값을 `gnome-terminal`으로 바꾸고 `exec-arg`의 값을 빈 칸으로 변경한다.

![Dconf Setting](/assets/images/linux/how-to/replace-terminal/dconf-terminal.png)

<br />
## 기존 터미널 삭제 <a id="remove"></a>
GNOME 터미널만 남기고 기존의 터미널을 삭제하고 싶다면 아래의 명령어를 이용하면 된다.

```bash
sudo apt-get purge pantheon-terminal
```

<br />
## Reference <a id="ref"></a>
- [4 steps to replace the terminal](https://adam.merrifield.ca/2015/11/23/4-steps-to-replace-the-terminal-in-elementary-os-freya/){: target="_blank"}
