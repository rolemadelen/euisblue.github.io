---
layout: post
title: "[Linux] find 명령어 [1]"
ref: linux-find-1
date: 2019-2-21 17:37:00
categories: Linux
tags: linux-command
lang: ko
---

## 목차
- [기본 구조](#struct)
- [심볼릭 링크의 처리](#treatment)
  + [-P 옵션](#popt)
  + [-L 옵션](#lopt)
  + [-H 옵션](#hopt)
- [요약](#tldr)
- [관련 글](#related)
- [참조](#ref)
<hr />
<br />

## 기본 구조 <a id="struct"></a>

find 명령어의 기본 구조는 아래와 같이 조금 복잡한 모양을 하고있다.

```bash
find [-H] [-L] [-P] [-D 디버그 옵션] [-O레벨] [경로] [수식]
```

각 옵션들은 간단하게 아래처럼 생각하면 된다:

`-H`, `-L`, `-P` → 심볼릭 링크를 어떻게 처리할까요?

`-D` → 내가 어떤 작업을 수행하는지 화면에 출력해줄까요?

`-O` → 어떻게 최적화 할까요?

`경로` → 어디서 부터 작업을 시작 할까요?

`수식` → 어떤 작업을 수행하면 되죠?

<br />
## 심볼릭 링크의 처리 <a id="treatment"></a>

`-H`, `-L`, `-P` 이 옵션들은 심볼릭 링크(Symbolic Link)의 처리와 관련되어 있다. <br />
각각 어떻게 처리하는지 알아보자.

설명을 위해 아래와 같은 구조의 디렉토리를 만들었다:

```
test/
├── blog.c
├── hello.c
├── my-blog -> /home/myoi/Documents/blog
```

`my-blog`는 `/home/myoi/Documents/blog`를 가리키는 심볼릭 링크이고 `blog`에 구조는 아래와 같다:
```
blog
└── file1.c
└── file2.c
└── post
    ├── post1.md
    └── post2.md
```

디렉토리에서 파일을 찾기 위해서는 `-type f` 옵션을 사용한다. <br />
이 옵션을 사용해서 `test` 디렉토리안에 존재하는 모든 파일을 출력해보자.

```
$ find test/ -type f

test/hello.c
test/blog.c
```

`hello.c`와 `blog.c`가 출력됐다. 하지만 우리는 위 구조를 통해 `file1.c`, `file2.c`, `post1.md`, `post2.md` 파일들 또한 `test` 디렉토리 안에 존재한다는 것을 분명 알고있다.

<br />
### -P 옵션 <a id="popt"></a>
한 번 **-P** 옵션을 추가하고 다시 한 번 실행해보자.

```
$ find -P test/ -type f

test/hello.c
test/blog.c
```

똑같은 결과가 나왔다.

심볼릭 링크 처리에 관한 옵션을 사용하지 않았을 때, find는 기본적으로 `-P` 방식으로 
심볼릭 링크를 처리하는데, **-P 옵션을 사용할 경우 심볼릭 링크를 따라가지 않는다**.

<br />
### -L 옵션 <a id="lopt"></a>
**-L**의 경우는 어떨까?

```
$ find -L test/ -type f

test/hello.c
test/my-blog/file1.c
test/my-blog/file2.c
test/my-blog/post/post2.md
test/my-blog/post/post1.md
test/blog.c
```

원하는대로 모든 파일이 출력되었다. 이를 통해 **-L 옵션은 심볼릭 링크를 따라간다**는 것을 알수있다.

<br />
### -H 옵션 <a id="hopt"></a>
마지막으로 **-H**의 경우를 살펴본다. **-H**는 언뜻보면 **-P** 옵션과 비슷해보인다.

```
$ find -H test/ -type f

test/hello.c
test/blog.c
```

다른 경로로 한번 더 실행해보자.

```
$ find -H test/my-blog/ -type f

test/my-blog/file1.c
test/my-blog/file2.c
test/my-blog/post/post2.md
test/my-blog/post/post1.md
test/blog.c
```

출력 결과가 다르다.

**-H는 평소에는 -P와 같은 방식으로 처리하다가, 주어진 경로가 심볼릭 링크일 때 -L 처럼 처리 방식을 바꾼다**.

<br />
## 요약 <a id="tldr"></a>
```
$ find -[P/L/H] test/ -type f
```
- **-P**: 심볼릭 링크를 따라가지 않는다.
- **-L**: 심볼릭 링크를 따라간다.
- **-H**: 경로가 심볼릭 링크일 경우에 만 따라가고 그렇지 않을때는 따라가지 않는다.

<br />
## 관련 글 <a id="related"></a>
{% assign tagParam = "linux-command" %}
{% include related-posts %}

<br />
## 참조 <a id="ref"></a>
- [find(1) - linux man page](https://linux.die.net/man/1/find)
