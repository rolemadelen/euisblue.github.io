---
layout: post
title: "Linux・findコマンド [1]"
ref: linux-find-1
date: 2019-2-21 17:37:00
categories: Linux
tags: linux-command
lang: ja
---

## 目次
- [基本構造](#struct)
- [シンボリックリンクの動作](#treatment)
  + [-P](#popt)
  + [-L](#lopt)
  + [-H](#hopt)
- [要約](#tldr)
- [関連記事](#related)	
- [参照](#ref)
<hr />
<br />

## 基本構造 <a id="struct"></a>

findコマンドの基本構造は下記のような少し複雑な形をしている。

```bash
find [-H] [-L] [-P] [-D debug option] [-Olevel] [path] [expr]
```

それぞれのオプションたちは下記のように考えたら簡単に理解できる：

`-H`, `-L`, `-P` →  シンボリックリンクをどうように動作する？

`-D` →  どんな作業をしてるか仮面に表示する？

`-O` → どのように最適化する?

`path` → どこから作業を始めようか？

`expr` → どんな作業をすればいいの？

<br />

## シンボリックリンクの動作 <a id="treatment"></a>

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

<br />
### -P オプション <a id="popt"></a>
**-P**オプションを使って一度も実行してみよう。

```
$ find -P test/ -type f

test/hello.c
test/blog.c
```

同じ結果だ。

これが`find`のディフォルトの動作で、**シンボリックリンクを全く辿らない**。

<br />
### -L オプション <a id="lopt"></a>
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

<br />
### -H オプション <a id="hopt"></a>
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

<br />
## 要約 <a id="tldr"></a>
```
$ find -[P/L/H] test/ -type f
```
- **-P**: シンボリックリンクを辿らない。
- **-L**: シンボリックリンクを辿る。
- **-H**: 与えた経路がシンボリックリンクの場合辿る。

<br />
## 関連記事 <a id="related"></a>
{% assign tagParam = "linux-command" %}
{% include related-posts %}

<br />
## 参照 <a id="ref"></a>
- [find(1) - linux JP man page](https://linuxjm.osdn.jp/html/GNU_findutils/man1/find.1.html)
