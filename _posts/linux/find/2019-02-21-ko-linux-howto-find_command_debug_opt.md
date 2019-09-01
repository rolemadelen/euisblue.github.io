---
layout: post
title: "[Linux] find 명령어 [2]"
ref: linux-find-2
date: 2019-02-21 22:00:00
categories: Linux
tags: linux-command
lang: ko
---

## 목차
- [기본 구조](#struct)
- [디버그 옵션](#debugopt)
  + [-D exec](#exec)
  + [-D help](#help)
  + [-D tree & -D opt](#treeopt)
  + [-D rates](#rates)
  + [-D search](#search)
  + [-D stat](#stat)
- [최적화 옵션](#olevel)
  + [-O0 & -O1](#o01)
  + [-O2](#o2)
  + [-O3](#o3)
- [관련 글](#related)
- [참조](#ref)
<hr />
<br />

## 기본 구조 <a id="struct"></a>

find 명령어의 구조는 아래와 같다.

```bash
find [-H] [-L] [-P] [-D 디버그 옵션] [-O레벨] [경로] [수식]
```

처음 세가지 옵션은 심볼릭 링크 관련 옵션으로 [find 명령어 \[1\]](../ko-linux-howto-find_command_symlink) 에서 설명을 했고, 여기서는 디버그와 최적화 옵션에 대해 다뤄본다.

<br />
## 디버그 옵션 <a id="debugopt"></a>

앞으로 실행 할 명령들은 전부 아래의  디렉토리를 대상으로 한다.

```bash
test/
├── blog.c  # "blog.c: hello world"
└── hello.c # "hello.c: hello world"
```

<br />
### -D exec <a id="exec"></a>
find 명령어로 찾은 파일(들)을 가지고 특정한 명령을 실행시키고 싶을 때 `-exec` 또는 `-execdir`를
사용할 수 있다. 이 때 `-D exec`을 사용하면 `-exec`또는 `execdir`가 수행 한 작업을 확인 할 수 있다.

```bash
$ find . -type f -execdir cat {} +

./hello.c
./blog.c
hello.c: hello world
blog.c: hello world
```

똑같은 명령을 `-D exec` 옵션과 같이 실행하면 어떻게 될까?

```
$ find -D exec . -type f -execdir cat {} +

Outstanding execdirs:-execdir multiple 3 args: cat ./hello.c ./blog.c 
hello.c: hello world
blog.c: hello world
```
 
찾은 두 파일(hello.c, blog.c)에다가 `cat`명령을 실행한 것을 직접 확인 할 수 있다.

참고로 첫 번째 출력 결과 처럼 find로찾은 파일들을 출력하고 싶을때는 `-print` 옵션을 추가하면 된다.

<br />
### -D help <a id="help"></a>
-D의 인자로 올수있는 올바른 값들을 전부 보여준다.

```bash
$ find -D help

Valid arguments for -D:
exec       Show diagnostic information relating to -exec, -execdir, -ok and -okdir
help       Explain the various -D options
... 
```

<br />
### -D tree & -D opt <a id="treeopt"></a>
`tree`의 경우는 파일을 찾는 과정에서 사용되는 수식 트리의 기본 형태와 최적화된 형태를 보여준다.

`opt`는 `tree`와 같은 기능을 하지만 최적화와 관련해서 좀 더 자세한 정보를 보여준다. 이는 최적화
옵션에서의 설명에서도 확인 할 수있다.

```bash
$ find -D opt -type f

Eval Tree:
..
Normalized Eval Tree:
..
Optimized Eval Tree:
..
Optimized command line:
[need type] -type f [est success rate 0.875] -a [est success rate 0.875] -print [est success rate 1] 
./hello.c
./blog.c
```

<br />
### -D rates <a id="rates"></a>

각 술어(predicate)의 성공/실패 확률을 요약해서 보여준다.

```bash
$ find -D rates test/ -type f

test/hello.c
test/blog.c
Predicate success rates after completion:
[need type] -type f [est success rate 0.875] [real success rate 2/3=0.6667] -a [est success rate 0.875] [real success rate 2/3=0.6667] -print [est success rate 1] [real success rate 2/2=1]   
```

<br />
### -D search <a id="searh"></a>

파일을 찾는 과정에서 현재 어떤 작업을 수행하는지 자세하게 출력한다.

```bash
$ find -D search test/ -type f

consider_visiting (early): ‘test/’: fts_info=FTS_D , fts_level= 0, prev_depth=-2147483648 fts_path=‘test/
’, fts_accpath=‘test/’
consider_visiting (late): ‘test/’: fts_info=FTS_D , isdir=1 ignore=0 have_stat=1 have_type=1 
consider_visiting (early): ‘test/hello.c’: fts_info=FTS_NSOK, fts_level= 1, prev_depth=0 fts_path=‘test/hello.c’, fts_accpath=‘hello.c’
...
```

<br />
## 최적화 옵션 <a id="olevel"></a>
쿼리 성능 최적화를 위해 사용된다. 테스트의 순서를 재배열 하므로써 실행시간을 단축시키되, 최종형태는
그대로 유지한다.
	
### -O0 & -O1 <a id="o01"></a>
기본적인 최적화 레벨로 파일의 이름만을 필요로 하는 (`-name`또는 `-regex`와 같은) 작업을 우선적으로 처리한다.

### -O2 <a id="o2"></a>
inode로부터의 정보가 필요한 작업들을 제외하고, 파일의 이름만을 가지고 수행 한 작업 뒤에 `-type` 또는 `-xtype`의 작업이 실행된다.

파일 타입이 `readdir()`로 반환되는 모던 버전의 유닉스에서는 파일을 `stat`할 필요가 없기에 보다 빠르게 수식을 검사한다.

### -O3 <a id="o3"></a>
`find`에서 최적화 옵션으로 줄 수 있는 가장 높은 등급의 최적화로써, 완전한 비용 기반의 쿼리 최적화가
가능하다. 때문에 가능하다면 비용이 가장 낮은 (가장 빠른) 작업이 높은 작업보다 우선적으로 실행되도록 수식을 재배열한다. 또한 성공의 가능성이 큰 수식(`-o`)이 실패 할 가능성이 많은 수식(`-a`)보다 우선 검사된다. 

비용 기반 최적화는 **find**에 성능향상이 없을 시 곧바로 비활성된다. 비슷한 이유로, 하위 등급의 
최적화에서 성능 향상이 어느정도 보장 된 최적화는 필요에 따라 자동으로 활성화되기도 한다.

<br />
## 관련 글 <a id="related"></a>
{% assign tagParam = "linux-command" %}
{% include related-posts %}

<br />
## 참조 <a id="ref"></a>
- [find(1) - linux man page](https://linux.die.net/man/1/find)
- [Compiler Optimization](https://gcc.gnu.org/onlinedocs/gcc/Optimize-Options.html)
