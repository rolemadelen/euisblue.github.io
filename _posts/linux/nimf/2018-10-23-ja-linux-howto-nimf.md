---
layout: post
title: "Elementary OS・nimfインストール"
ref: linux-nimf
date: 2018-10-23 12:00:00
categories: Linux
published: false
lang: ja
---

## 目次
- [nimfとは?](#nimf)
- [最後文字のバグ](#bug)
- インストール
  * [nimf - インストール](#install)
  * [nimf - 環境設定](#config)
  * [nimf - 他言語の非活性化](#deact)
- [メリットとデメリット](#procon)
- [参照](#ref)

<hr />
<br />

## nimfとは? <a id="nimf"></a>
nimf는 참다참다 폭발한 일반인이 프로그래밍을 배워 개발한 프로그램으로 
타 입력기(ibus, fcitx, etc)에 존재하는 **끝글자 버그**를 고친 한글 입력기이다.

<br />
## 最後文字のバグ <a id="bug"></a>
Elementary OS 0.4.1 Loki에서의 한글 입력이 불편한 이유는 공백(스페이스) 입력 때문이다. <br />
예를들어 `한글 입력기`를 입력하려고 하면 아래와 같은 상황을 마주보게 된다.

> `한글 입력기` --> `한 글입력기` 

보다시피 공백이 끝글자(`글`)의 앞이 아닌 뒤에 출력되는데, 이걸 끝글자 버그라고 한다.

<br />
### nimf - インストール <a id="install"></a>

터미널을 열고 아래의 명령어를 실행해 nimf를 설치한다.

``` bash
$ sudo apt-get install -y nimf
```

<br />
### nimf - 環境設定<a id="config"></a>

입력 방법을 nimf로 설정한다.
``` bash
$ im-config -n nimf
```

위 과정을 완료한 후 로그아웃하고 다시 로그인하면 nimf를 이용한 한글 입력이 가능해진다.

<br />
### nimf - 他言語の非活性化 <a id="deact"></a>

nimf는 기본적으로 일본어와 중국어의 입력도 활성화되어 있다. <br />
이를 비활성화 하기 위해서는 nimf 설정 창을 열고 

``` bash
$ nimf-setting
```

anthy와 sunpinyin를 비활성해주면 된다.

<br />
## メリットとデミリット <a id="procon"></a>
한국어 입력에는 정말 만족한다. 공백을 입력할 때 마다 방향키로 한 칸 옮겨주고 공백을 입력했는데
그럴 필요가 없어졌으니 상당히 편하다. 

다만 문제는 일본어 입력에 있다. 애초에 한글 입력에 편의성을 위해서 제작된걸로 알기 때문에 이걸
단점이라고 봐야할지는 모르겠으나, 일본어 또한 nimf의 기능 중 하나이니 개인적인 불만을 토로해본다.

일본어 입력이 불편한 이유는 자동으로 ん(n)이 완성되지 않는다. 
예를들어 べんきょう를  입력하면 べnきょう가 되어버린다. ん을 사용하려면 일일이 nn를 입력해야 하는데 
이는 일본어 입력기로는 절대적으로 불편한 부분이다.

개발자의 블로그를 보니 처음에는 ん의 자동완성 기능을 제공했는데, 어느 날 갑자기 이 기능을 
빼버린 것 같다. 그러면 이 때 아예 일본어 입력을 nimf에서 빼는게 낫지 않았을까. 
이 외에도 카나에서 한자로 변환할 때 스페이스바 대신 방향키를 이용해야 하는 불편함이 있다.

결론:  <br />
한국어만 사용한다면 nimf를 쓰자.

<br />
## 参照 <a id="ref"></a>
- [StackExchange : Adding Korean Input](https://elementaryos.stackexchange.com/questions/8041/adding-korean-input-for-loki)
- [nimfの開発者のブログ](https://cogniti-works.blogspot.com/2018/09/nimf-23.html#comment-form)
