---
layout: post
title: "find Command [2]"
ref: linux-find-2
date: 2019-02-21 22:00:00
categories: Linux
tags: linux-command
lang: en
---

## Basic Structure

```bash
find [-H] [-L] [-P] [-D option] [-Olevel] [path] [expr]
```

We examined first three options (H, L, and P) previously ([find Command \[1\]](../en-linux-howto-find_command_symlink)), which was about symbolic links.<br />
In this post, We will go through the next two options: `-D`(debug) and `-O`(optimization).

<div class="divider"></div>
## Debug Options

Every examples shown under this section are executed on the following directory:

```bash
test/
├── blog.c  # "blog.c: hello world"
└── hello.c # "hello.c: hello world"
```

### -D exec
With every files or directories we found, we can use `-exec` or `-execdir` to execute some actions
on each of the files or directories. When `exec` option is used, it examines all the tasks done by `-exec` or `-execdir`.

For example, we can apply `cat` on every files we found:
```bash
$ find test/ -type f -execdir cat {} +

hello.c: hello world
blog.c: hello world
```

Lets run the same command with `-D exec` attached.

```
$ find -D exec . -type f -execdir cat {} +

Outstanding execdirs:-execdir multiple 3 args: cat ./hello.c ./blog.c 
hello.c: hello world
blog.c: hello world
```
 
We can observe that `cat` command has been executed to files found by `find`.

### -D help
Simply shows all possible arguments for debug options.

```bash
$ find -D help

Valid arguments for -D:
exec       Show diagnostic information relating to -exec, -execdir, -ok and -okdir
help       Explain the various -D options
... 
```

### -D tree & -D opt
`tree` option displays the expression tree in both normal and optimized version.

`opt` option functions same as `tree` but it shows more detail information regarding optimizations.

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

### -D rates

Displays the rate of success and failure of predicate evaluation.

```bash
$ find -D rates test/ -type f

test/hello.c
test/blog.c
Predicate success rates after completion:
[need type] -type f [est success rate 0.875] [real success rate 2/3=0.6667] -a [est success rate 0.875] [real success rate 2/3=0.6667] -print [est success rate 1] [real success rate 2/2=1]   
```

### -D search

Navigates the tree verbosely.

```bash
$ find -D search test/ -type f

consider_visiting (early): ‘test/’: fts_info=FTS_D , fts_level= 0, prev_depth=-2147483648 fts_path=‘test/
’, fts_accpath=‘test/’
consider_visiting (late): ‘test/’: fts_info=FTS_D , isdir=1 ignore=0 have_stat=1 have_type=1 
consider_visiting (early): ‘test/hello.c’: fts_info=FTS_NSOK, fts_level= 1, prev_depth=0 fts_path=‘test/hello.c’, fts_accpath=‘hello.c’
...
```

<div class="divider"></div>
## Optimizations
This option is used to optimize the query performance. It reorder tests to reduce the execution 
time on each predicate while preserving the overall effect.
	
### -O0 & -O1
`O0` has same effect as `O1` and this is the default optimization. <br />
It evaluate tests based only on file names(e.g. `-name` and `-regex`) first.

### -O2
`-type` or `-xtype` tests are evaluated after tests based only on file names are evaluated, but
before any tests that require information from the inode.

### -O3
Full cost-based optimization is enabled. It reorder predicates if needed so that the cheapest 
(or fastest) predicates are evaluated earlier than the expensive one. Also predicates that are
likely to succeed (e.g. `-o`) will be evaluated first than one likely to fail (e.g. `-a`).

If cost-based optimization does not improve any performance, it will be removed. In contrast, 
   optimizations that prove to improve the performance may be enabled 
   at lower optimization levels over time.

<div class="divider"></div>
## Reference
- [find(1) - Linux man page](https://linux.die.net/man/1/find)
- [Compiler Optimization](https://gcc.gnu.org/onlinedocs/gcc/Optimize-Options.html)
