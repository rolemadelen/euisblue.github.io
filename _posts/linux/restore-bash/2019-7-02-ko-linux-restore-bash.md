---
layout: post
title: "[Ubuntu] /bin/bash 복구하기"
ref: linux-restore-bash
date: 2019-07-02 17:54:00
categories: Linux
lang: ko
---

## 목차
- [먼저](#first)
- [문제 해결 과정](#issue)
- [해결 방법](#solution)
- [참조](#ref)
<hr />
<br />

## 먼저 <a id="first"></a>
지난 번 [\[Ubuntu\] 노트북 내장 키보드 비활성화 하기](https://myoiwritescode.github.io/linux/2019/06/30/ko-linux-disable-keyboard.html) 포스트를 작성하면서 내장 키보드를 키고 끄는 스크립트 파일을 
하나 만들었었다. 이 파일을 `/bin` 으로 옮기려고 하다가 실수로 아래와 같은 짓을 해버렸다:
```
$ sudo mv kbd-onoff.bat /bin/bash
```

(좀 오버해서) 카오스의 시작.

<br />
## 문제 해결 과정 <a id="issue"></a>
문제가 있다는 건 바로 알아차렸다. 터미널을 더 이상 사용할 수 없었기 때문.

![에러 이미지 1](/assets/images/linux/restore-bash/error1.png)

구글링을 해 본 결과 bash를 재설치 하기만 하면 된다고 하니 그리 해봤다. 하지만 터미널을 사용할 수가
없어 처음으로 터미널에 커스텀 커맨드 기능을 사용해봤다. 터미널 실행 시 쉘이 아닌 내가 입력한 
명령어가 실행 되는 것이다.

![커스텀 커맨드 이미지 1](/assets/images/linux/restore-bash/custom-command.png)

뭔가 설치하는 것 같더니 오류가 뜨면서 실패했다. 자세히 보면 맨 처음 사진에 나오는 에러와 같다.

![에러 이미지 2](/assets/images/linux/restore-bash/error2.png)

<br />
## 해결 방법 <a id="solution"></a>
검색해서 알게 된 사실시지만 대부분의 시스템의 `/bin/bash`는 사실 `/bin/sh`의 심볼릭 링크라고 한다.
그러면 `sh`를 이용해서 `bash`의 링크를 고치면 해결이 되지 않을까해서 아래와 같이 해봤다.

```
rm -rf /bin/bash
ln -s /bin/sh /bin/bash
apt-get install --reinstall bash
```

현재 망가진 `/bin/bash`를 지우고, `/bin/sh`의 심볼릭 링크를 `/bin/bash`로 다시 만든 다음 bash를 재설치 했다.

![해결 이미지](/assets/images/linux/restore-bash/solution.png)

짜잔! bash가 돌아왔다.

<br />
## 참조 <a id="ref"></a>
- [삭제된 /bin/bash 복구하는 법?](https://serverfault.com/questions/451528/how-to-recover-from-a-deleted-bin-bash)
