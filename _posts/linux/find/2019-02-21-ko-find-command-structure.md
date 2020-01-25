---
layout: post
title: "find 명령어의 구조"
ref: linux-find
date: 2019-2-21 17:37:00
categories: Linux
tags: linux-command
lang: ko
---

## 목차
- [기본 구조](#struct)
- [심볼릭 링크의 처리](#treatment)
  + [-P](#popt)
  + [-L](#lopt)
  + [-H](#hopt)
- [디버그 옵션](#debug)
  + [-D exec](#exec)
  + [-D help](#help)
  + [-D tree & -D opt](#tree)
  + [-D rates](#rates)
  + [-D search](#search)
- [최적화 옵션](#optimize)
  + [-O0 & -O1](#o1)
  + [-O2](#o2)
  + [-O3](#o3)
- [참조](#ref)

<div class="divider"></div>
## 기본 구조 <a id="struct"></a>

find 명령어의 기본 구조는 아래와 같이 조금 복잡한 모양을 하고있다.

```bash
find [-H] [-L] [-P] [-D 디버그 옵션] [-O레벨] [경로] [수식]
```

각 옵션들은 간단하게 아래처럼 생각하면 된다:

`-H`, `-L`, `-P` → 심볼릭 링크를 어떻게 처리할까요? <br>
`-D` → 내가 어떤 작업을 수행하는지 화면에 출력해줄까요?<br>
`-O` → 어떻게 최적화 할까요?<br>
`경로` → 어디서 부터 작업을 시작 할까요?<br>
`수식` → 어떤 작업을 수행하면 되죠?

<div class="divider"></div>
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

<div class="divider"></div>
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

<div class="divider"></div>
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

<div class="divider"></div>
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

<div class="divider"></div>
## 디버그 옵션 <a id="debug"></a>

앞으로 실행 할 명령들은 전부 아래의  디렉토리를 대상으로 한다.

```bash
test/
├── blog.c  # "blog.c: hello world"
└── hello.c # "hello.c: hello world"
```

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

### -D help <a id="help"></a>
-D의 인자로 올수있는 올바른 값들을 전부 보여준다.

```bash
$ find -D help

Valid arguments for -D:
exec       Show diagnostic information relating to -exec, -execdir, -ok and -okdir
help       Explain the various -D options
... 
```

### -D tree & -D opt <a id="tree"></a>
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

### -D rates <a id="rates"></a>

각 술어(predicate)의 성공/실패 확률을 요약해서 보여준다.

```bash
$ find -D rates test/ -type f

test/hello.c
test/blog.c
Predicate success rates after completion:
[need type] -type f [est success rate 0.875] [real success rate 2/3=0.6667] -a [est success rate 0.875] [real success rate 2/3=0.6667] -print [est success rate 1] [real success rate 2/2=1]   
```

### -D search <a id="search"></a>

파일을 찾는 과정에서 현재 어떤 작업을 수행하는지 자세하게 출력한다.

```bash
$ find -D search test/ -type f

consider_visiting (early): ‘test/’: fts_info=FTS_D , fts_level= 0, prev_depth=-2147483648 fts_path=‘test/
’, fts_accpath=‘test/’
consider_visiting (late): ‘test/’: fts_info=FTS_D , isdir=1 ignore=0 have_stat=1 have_type=1 
consider_visiting (early): ‘test/hello.c’: fts_info=FTS_NSOK, fts_level= 1, prev_depth=0 fts_path=‘test/hello.c’, fts_accpath=‘hello.c’
...
```

<div class="divider"></div>
## 최적화 옵션 <a id="optimize"></a>
쿼리 성능 최적화를 위해 사용된다. 테스트의 순서를 재배열 하므로써 실행시간을 단축시키되, 최종형태는
그대로 유지한다.
	
### -O0 & -O1 <a id="o1"></a>
기본적인 최적화 레벨로 파일의 이름만을 필요로 하는 (`-name`또는 `-regex`와 같은) 작업을 우선적으로 처리한다.

### -O2 <a id="o2"></a>
inode로부터의 정보가 필요한 작업들을 제외하고, 파일의 이름만을 가지고 수행 한 작업 뒤에 `-type` 또는 `-xtype`의 작업이 실행된다.

파일 타입이 `readdir()`로 반환되는 모던 버전의 유닉스에서는 파일을 `stat`할 필요가 없기에 보다 빠르게 수식을 검사한다.

### -O3 <a id="o3"></a>
`find`에서 최적화 옵션으로 줄 수 있는 가장 높은 등급의 최적화로써, 완전한 비용 기반의 쿼리 최적화가
가능하다. 때문에 가능하다면 비용이 가장 낮은 (가장 빠른) 작업이 높은 작업보다 우선적으로 실행되도록 수식을 재배열한다. 또한 성공의 가능성이 큰 수식(`-o`)이 실패 할 가능성이 많은 수식(`-a`)보다 우선 검사된다. 

비용 기반 최적화는 **find**에 성능향상이 없을 시 곧바로 비활성된다. 비슷한 이유로, 하위 등급의 
최적화에서 성능 향상이 어느정도 보장 된 최적화는 필요에 따라 자동으로 활성화되기도 한다.

<div class="divider"></div>
## 참조 <a id="ref"></a>
- [find(1) - Linux man page](https://linux.die.net/man/1/find)
- [Compiler Optimization](https://gcc.gnu.org/onlinedocs/gcc/Optimize-Options.html)
