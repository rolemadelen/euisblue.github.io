---
layout: post
title: "실수로 덮어쓴/bin/bash 복구한 방법"
ref: linux-recover-deleted-bash
date: 2019-07-02 17:54:00
last_modified_at: 2020-01-23 22:44:00
categories: Linux
lang: ko
---

## "내가 뭐하는지 알고있어"
명령어를 입력해서 내장 키보드를 켜고 끌수있도록 [스크립트](./ko-linux-disable-keyboard#script)를 작성했었다.
이를 실행하기 위해서는 항상 이 파일이 있는 디렉토리로 이동한 후 `./kbd-switch`를 입력해야 하는 번거로운 과정이 필요하다.

하지만 `ls`처럼 전역적으로 간편하게 사용하고 싶기 때문에, 이 스크립트를 `/bin` 디렉토리로 옮기기 위해 아래와 같이 입력했다.

```bash
mui:~$ sudo mv kbd.bat /bin
```

이대로 엔터를 치려는 순간... 멍청한 *[오른쪽이](https://namu.wiki/w/%EC%98%A4%EB%A5%B8%EC%AA%BD%EC%9D%B4)*가 
멋대로 문자 다섯 개를 추가 입력했다 (~~근육 기억~~).

```bash
mui:~$ sudo mv kbd.bat /bin/bash
```

무언가 잘못 되었다는 것을 느끼는데 걸린 시간은 찰나였다.

![Error image 1](/assets/images/linux/recover-deleted-bash/error1.png)

터미널이 위와 같은 오류를 뿜고 동작하지 않았으니까.

<div class="divider"></div>

## "아아, 걱정마. 별것 아니야"
`bash`가 덮어씌여서 없어진거면, 그냥 재설치 하면 되는 간단한 문제아닌가.

잠깐만, 재설치를 위한 명령어를 입력하기 위해 쉘(터미널)을 열어야 하는데 쉘(bash)이 동작 안하네?
`csh`, `ksh`, 등등 이런저런 쉘을 다운받아 실행해봐도 동작을 안하는건 매한가지.

어... 큰일났네?

순간 평소에 사용하지는 않지만 터미널 옵션에 *custom command*라는 옵션이 있다는걸 생각해냈다. 
터미널을 열면 가장 먼저 실행되는 것이 쉘인데, 이 쉘 대신 원하는 명령어를 먼저 실행하도록 설정할 수 있다.
여기에다가 재설치 명령어를 입력하면 되지 않을까?

그래서 `sudo apt-get install --reinstall bash`가 실행되도록 설정하고 터미널을 열었다.

오! 설치가 된다.

![Error image 2](/assets/images/linux/recover-deleted-bash/error2.png)

중간에 오류 때문에 멈췄지만..

<div class="divider"></div>

## "음.. 저기요?" <a id="solution"></a>
여기저기 묻고 검색해본 결과, 대부분의 시스템에서 `/bin/bash`는 사실 `/bin/sh`를 가리키는 심링크일 뿐이라는 것을 알았다.
그래서 심링크를 새로 만들어주고, 혹시 모르니 bash를 재설치해서 필요한 것들이 추가되도록 했다.

```sh
rm -rf /bin/bash
ln -s /bin/sh /bin/bash
apt-get install --reinstall bash
```

결과는?

![Solution image](/assets/images/linux/recover-deleted-bash/solution.png)

성공!
