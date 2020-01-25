---
layout: post
title: "findコマンドの構造"
ref: linux-find
date: 2019-2-21 17:37:00
categories: Linux
tags: linux-command
lang: ja
---

## Contents
- [基本構造](#struct)
- [シンボリックリンクの処理](#treatments)
  + [-P](#popt)
  + [-L](#lopt)
  + [-H](#hopt)
- [デバッグオプション](#debug)
  + [-D exec](#exec)
  + [-D help](#help)
  + [-D tree & -D opt](#tree)
  + [-D rates](#rates)
  + [-D search](#search)
- [最適化オプション](#optimize)
  + [-O0 & -O1](#o1)
  + [-O2](#o2)
  + [-O3](#o3)
- [参照](#ref)

<div class="divider"></div>
## 基本構造  <a id="struct"></a>

findコマンドの基本構造は下記のような少し複雑な形をしている。

```bash
find [-H] [-L] [-P] [-D debug option] [-Olevel] [path] [expr]
```

それぞれのオプションたちは下記のように考えたら簡単に理解できる：

`-H`, `-L`, `-P` →  シンボリックリンクをどうように動作する？<br />
`-D` →  どんな作業をしてるか仮面に表示する？<br />
`-O` → どのように最適化する?<br />
`path` → どこから作業を始めようか？<br />
`expr` → どんな作業をすればいいの？

<div class="divider"></div>
## シンボリックリンクの処理  <a id="treatments"></a>

`-H`, `-L`, `-P`このオプションたちはシンボリックリンクの動作と関連がある。<br />
それぞれどのように動作するか調べてみよう。

説明のため下記のような構造のディレクトリを作った：

```
test/
├── blog.c
├── hello.c
├── my-blog -> /home/myoi/Documents/blog
```

`my-blog`は`/home/myoi/Documents/blog`を指すシンボリックリンクで、`blog`の構造は下記の通りだ：
```
blog
└── file1.c
└── file2.c
└── post
    ├── post1.md
    └── post2.md
```

ディレクトリからファイルを探したい時`-type f`のオプションを使う。 <br />
このオプションを使って`test`ディレクトリの中にあるすべてのファイルを出力してみよう。

```
$ find test/ -type f

test/hello.c
test/blog.c
```

`hello.c`と`blog.c`が出力された。<br />
このディレクトリの中にあるシンボリックリンクは表示されてはない。

<div class="divider"></div>
### -P オプション<a id="popt"></a>
**-P**オプションを使って一度も実行してみよう。

```
$ find -P test/ -type f

test/hello.c
test/blog.c
```

同じ結果だ。

これが`find`のディフォルトの動作で、**シンボリックリンクを全く辿らない**。

<div class="divider"></div>
### -L オプション<a id="lopt"></a>
**-L**の場合はどうだろ。

```
$ find -L test/ -type f

test/hello.c
test/my-blog/file1.c
test/my-blog/file2.c
test/my-blog/post/post2.md
test/my-blog/post/post1.md
test/blog.c
```

すべてのファイルが出力された。**-Lオプションはシンボリックリンクを辿る**。

<div class="divider"></div>
### -H オプション<a id="hopt"></a>
最後で**-H**オプションを見てみよう。
```
$ find -H test/ -type f

test/hello.c
test/blog.c
```
**-H**は一見**-P**オプションと似ている。
他の経路でもう一度実行してみよう。

```
$ find -H test/my-blog/ -type f

test/my-blog/file1.c
test/my-blog/file2.c
test/my-blog/post/post2.md
test/my-blog/post/post1.md
test/blog.c
```

出力結果が違う。

**普通-Hは-Pと同じ方式で動作するけど、与えた経路がシンボリックリンクの場合-Lのように動作方式を変わる**。

<div class="divider"></div>
## デバッグオプション<a id="debug"></a>

今から実行するコマンドたちは全部下記のディレクトリを基盤にする。

```bash
test/
├── blog.c  # "blog.c: hello world"
└── hello.c # "hello.c: hello world"
```

### -D exec<a id="exec"></a>
`find`コマンドで見つけたファイルに特定なコマンドを実行したい時、<br />
`-exec`または`-execdir`コマンドを使う。

```bash
$ find . -type f -execdir cat {} +

./hello.c
./blog.c
hello.c: hello world
blog.c: hello world
```

同じコマンドを`-D exec`オプションと一緒に実行してみよう。

```
$ find -D exec . -type f -execdir cat {} +

Outstanding execdirs:-execdir multiple 3 args: cat ./hello.c ./blog.c 
hello.c: hello world
blog.c: hello world
```
 
見つけた2つのファイル(`hello.c`と`blog.c`)に`cat`コマンドが実行されたことが確認できる。

ちなみに最初の出力結果のよに`find`で見つけたファイルを表示シたいときには`-print`オプションを使えばいい。

### -D help<a id="help"></a>
使用できるデバッグ用オプションを説明する。

```bash
$ find -D help

Valid arguments for -D:
exec       Show diagnostic information relating to -exec, -execdir, -ok and -okdir
help       Explain the various -D options
... 
```

### -D tree & -D opt<a id="tree"></a>
`tree`の場合式の構造(expression tree)の基本形態と最適化した形態を示す。

`opt`の機能は`tree`同じだ。ただ、最適化に関する情報を詳しく表示する。-Oオプションを参照。

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

### -D rates<a id="rates"></a>

各述語の成功した、失敗した確率の情報を表示する。

```bash
$ find -D rates test/ -type f

test/hello.c
test/blog.c
Predicate success rates after completion:
[need type] -type f [est success rate 0.875] [real success rate 2/3=0.6667] -a [est success rate 0.875] [real success rate 2/3=0.6667] -print [est success rate 1] [real success rate 2/2=1]   
```

### -D search <a id="search"></a>

ファイルを探す過程を詳しく表示する。

```bash
$ find -D search test/ -type f

consider_visiting (early): ‘test/’: fts_info=FTS_D , fts_level= 0, prev_depth=-2147483648 fts_path=‘test/
’, fts_accpath=‘test/’
consider_visiting (late): ‘test/’: fts_info=FTS_D , isdir=1 ignore=0 have_stat=1 have_type=1 
consider_visiting (early): ‘test/hello.c’: fts_info=FTS_NSOK, fts_level= 1, prev_depth=0 fts_path=‘test/hello.c’, fts_accpath=‘hello.c’
...
```

<div class="divider"></div>
## 最適化オプション <a id="optimize"></a>
問い合わせの最適化のため使うオプッションである。最終形はそのまま維持するが、検査の順序を再配列するによって実行速度を上げる。
	
### -O0 & -O1 <a id="o1"></a>
基本的な最適化でファイルの名前を必要にする作業（`-name`や`-regex`ような）を優先的に処理する。

### -O2<a id="o2"></a>
inodeからの情報が必要な作業たちは除外して, ファイルの名だけを使って作業を実行する。その後`-type`や`-xtype`の作業が実行される。

ファイルのタイプが`readdir()`に変換されるモダーンバージョンのユニックスにはファイルを`stat`する必要が無いので、より早く木の構造を検査する。

### -O3<a id="o3"></a>
`find`の最適化オプションで最も高い等級の最適化で, 完全な費用基盤の問い合わせの最適化ができる。
ゆえにできれば費用が最も低い作業が、高い作業より優先的に実行されるように式の構造を再配列する。 また、成功の可能性が高い式（`-o`）が、失敗する可能性が高い式（`-a`）より先に検査される。 

もし費用基盤の最適化が**`find`**に性能向上がない場合、この最適化はすぐ非活性化される。
同様な理由で、下位等級の最適化で性能向上がある程保障された最適化は、必要によって自動的に 活性化されることもある。

<div class="divider"></div>
## 参照 <a id="ref"></a>
- [find(1) - linux JP man page](https://linuxjm.osdn.jp/html/GNU_findutils/man1/find.1.html)
