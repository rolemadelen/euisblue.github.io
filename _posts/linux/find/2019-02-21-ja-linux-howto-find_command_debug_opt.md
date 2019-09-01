---
layout: post
title: "Linux・findコマンド [2]"
ref: linux-find-2
date: 2019-02-21 22:00:00
categories: Linux
published: true
tags: linux-command
lang: ja
---

## 目次
- [基本構造](#struct)
- [デバッグオプション](#debugopt)
  + [-D exec](#exec)
  + [-D help](#help)
  + [-D tree & -D opt](#treeopt)
  + [-D rates](#rates)
  + [-D search](#search)
  + [-D stat](#stat)
- [最適化オプション](#olevel)
  + [-O0 & -O1](#o01)
  + [-O2](#o2)
  + [-O3](#o3)
- [関連記事](#related)	
- [参照](#ref)
<hr />
<br />

## 基本構造 <a id="struct"></a>

`find`コマンドの構造は下記の通りだ：

```bash
find [-H] [-L] [-P] [-D debug option] [-Olevel] [path] [expr]
```

最初3つのオプションはシンボリックリンク関連オプションで「[find コマンド \[1\]](../ja-linux-howto-find_command_symlink)」で説明した。ここからはデバッグと最適化オプションについて取り上げる。

<br />
## デバッグオプション <a id="debugopt"></a>

今から実行するコマンドたちは全部下記のディレクトリを基盤にする。

```bash
test/
├── blog.c  # "blog.c: hello world"
└── hello.c # "hello.c: hello world"
```

<br />
### -D exec <a id="exec"></a>
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

<br />
### -D help <a id="help"></a>
使用できるデバッグ用オプションを説明する。

```bash
$ find -D help

Valid arguments for -D:
exec       Show diagnostic information relating to -exec, -execdir, -ok and -okdir
help       Explain the various -D options
... 
```

<br />
### -D tree & -D opt <a id="treeopt"></a>
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

<br />
### -D rates <a id="rates"></a>

各述語の成功した、失敗した確率の情報を表示する。

```bash
$ find -D rates test/ -type f

test/hello.c
test/blog.c
Predicate success rates after completion:
[need type] -type f [est success rate 0.875] [real success rate 2/3=0.6667] -a [est success rate 0.875] [real success rate 2/3=0.6667] -print [est success rate 1] [real success rate 2/2=1]   
```

<br />
### -D search <a id="searh"></a>

ファイルを探す過程を詳しく表示する。

```bash
$ find -D search test/ -type f

consider_visiting (early): ‘test/’: fts_info=FTS_D , fts_level= 0, prev_depth=-2147483648 fts_path=‘test/
’, fts_accpath=‘test/’
consider_visiting (late): ‘test/’: fts_info=FTS_D , isdir=1 ignore=0 have_stat=1 have_type=1 
consider_visiting (early): ‘test/hello.c’: fts_info=FTS_NSOK, fts_level= 1, prev_depth=0 fts_path=‘test/hello.c’, fts_accpath=‘hello.c’
...
```


<br />
## 最適化オプション <a id="olevel"></a>
問い合わせの最適化のため使うオプッションである。最終形はそのまま維持するが、検査の順序を再配列するによって実行速度を上げる。
	
### -O0 & -O1 <a id="o01"></a>
基本的な最適化でファイルの名前を必要にする作業（`-name`や`-regex`ような）を優先的に処理する。

### -O2 <a id="o2"></a>
inodeからの情報が必要な作業たちは除外して, ファイルの名だけを使って作業を実行する。その後`-type`や`-xtype`の作業が実行される。

ファイルのタイプが`readdir()`に変換されるモダーンバージョンのユニックスにはファイルを`stat`する必要が無いので、より早く木の構造を検査する。

### -O3 <a id="o3"></a>
`find`の最適化オプションで最も高い等級の最適化で, 完全な費用基盤の問い合わせの最適化ができる。
ゆえにできれば費用が最も低い作業が、高い作業より優先的に実行されるように式の構造を再配列する。 また、成功の可能性が高い式（`-o`）が、失敗する可能性が高い式（`-a`）より先に検査される。 

もし費用基盤の最適化が**`find`**に性能向上がない場合、この最適化はすぐ非活性化される。
同様な理由で、下位等級の最適化で性能向上がある程保障された最適化は、必要によって自動的に 活性化されることもある。

<br />
## 関連記事 <a id="related"></a>
{% assign tagParam = "linux-command" %}
{% include related-posts %}

<br />
## 参照 <a id="ref"></a>
- [find - linux JP man page](https://linuxjm.osdn.jp/html/GNU_findutils/man1/find.1.html)
