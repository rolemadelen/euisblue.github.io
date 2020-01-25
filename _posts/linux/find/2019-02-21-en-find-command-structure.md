---
layout: post
title: "Structure of 'find' command"
ref: linux-find
date: 2019-2-21 17:37:00
categories: Linux
tags: linux-command
lang: en
---

## Contents
- [Basic Structure](#struct)
- [Symbolic Links](#treatment)
  + [-P](#popt)
  + [-L](#lopt)
  + [-H](#hopt)
- [Debug Options](#debug)
  + [-D exec](#exec)
  + [-D help](#help)
  + [-D tree & -D opt](#tree)
  + [-D rates](#rates)
  + [-D search](#search)
- [Optimize Options](#optimize)
  + [-O0 & -O1](#o1)
  + [-O2](#o2)
  + [-O3](#o3)
- [Reference](#ref)

<div class="divider"></div>

## Basic Structure <a id="struct"></a>
The basic form of `find` command looks like the below.

```bash
find [-H] [-L] [-P] [-D debugopt] [-Olevel] [path] [expr]
```
There are lot of options but don't be scared. Just think of it as this way:

`-H`, `-L`, `-P` → How should I treat symbolic links? <br>
`-D` → Should I print debug messages (that you specfically asked for)? <br>
`-O` → How should I optimize it? <br>
`path` → Where should I begin? <br>
`expr` → What should I find?

<div class="divider"></div>
## Treatement of Symbolic Links <a id="treatment"></a>

The frist three options(`-H`, `-L`, `-P`) are related to treatments of symbolic links. <br />
Let's take a look at each treatment option.

For the purpose explanation, I created a such directory hierarchy:

```
test/
├── blog.c
├── hello.c
├── my-blog -> /home/myoi/Documents/blog
```

`my-blog` is indeed a symbolic link which points to `/home/myoi/Documents/blog`, and the hierarchy
of this directory looks like the below:
```
blog
└── file1.c
└── file2.c
└── post
    ├── post1.md
    └── post2.md
```

To find a file in a directory, we can use `-type f` option. <br />
Let's use this option and try to find all files starting at `test` directory.

```
$ find test/ -type f

test/hello.c
test/blog.c
```

As a result, we got `hello.c` and `blog.c`. Is this what we intended? <br />
From the structure of the directory we saw earlier above, we know there exist more than 2 files.

<div class="divider"></div>
### -P Option <a id="popt"></a>
Let's attach `-P` option and try that again.

```
$ find -P test/ -type f

test/hello.c
test/blog.c
```

The result is same.

When we don't specify any options for symbolic link treatments, the command follows the default
behavior which is `-P` and **-P never follows the symbolic link**.

<div class="divider"></div>
### -L Option <a id="lopt"></a>
Let's take a look at the case of **-L**.

```
$ find -L test/ -type f

test/hello.c
test/my-blog/file1.c
test/my-blog/file2.c
test/my-blog/post/post2.md
test/my-blog/post/post1.md
test/blog.c
```

All files are printed as we expected. <br />
From this result, we can learn that **-L follows symbolic link** when seen.

<div class="divider"></div>
### -H Option <a id="hopt"></a>
Now let's take a look at the last case which is **-H**. 

At first glance, the behavior of this option seems similar to -P.

```
$ find -H test/ -type f

test/hello.c
test/blog.c
```

Now look at this example:
```
$ find -H test/my-blog/ -type f

test/my-blog/file1.c
test/my-blog/file2.c
test/my-blog/post/post2.md
test/my-blog/post/post1.md
test/blog.c
```

**-H follows symbolic link ONLY when the given path (argument) is a symbolic link**.
The first example's argument was not a symbolic link so it behaves like -P. But in the
second example, the argument is symbolic link so now it acts like -L and follows the link.

<div class="divider"></div>

## Debug Options <a id="debug"></a>

Every examples shown under this section are executed on the following directory:

```bash
test/
├── blog.c  # "blog.c: hello world"
└── hello.c # "hello.c: hello world"
```

### -D exec <a id="exec"></a>
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

<div class="divider"></div>
### -D help <a id="help"></a>
Simply shows all possible arguments for debug options.

```bash
$ find -D help

Valid arguments for -D:
exec       Show diagnostic information relating to -exec, -execdir, -ok and -okdir
help       Explain the various -D options
... 
```

<div class="divider"></div>
### -D tree & -D opt <a id="tree"></a>
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

<div class="divider"></div>
### -D rates <a id="rates"></a>

Displays the rate of success and failure of predicate evaluation.

```bash
$ find -D rates test/ -type f

test/hello.c
test/blog.c
Predicate success rates after completion:
[need type] -type f [est success rate 0.875] [real success rate 2/3=0.6667] -a [est success rate 0.875] [real success rate 2/3=0.6667] -print [est success rate 1] [real success rate 2/2=1]   
```

<div class="divider"></div>
### -D search <a id="search"></a>

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
## Optimize Options <a id="optimize"></a>
This option is used to optimize the query performance. It reorder tests to reduce the execution 
time on each predicate while preserving the overall effect.
	
### -O0 & -O1 <a id="o1"></a>
`O0` has same effect as `O1` and this is the default optimization. <br />
It evaluate tests based only on file names(e.g. `-name` and `-regex`) first.

<div class="divider"></div>
### -O2 <a id="o2"></a>
`-type` or `-xtype` tests are evaluated after tests based only on file names are evaluated, but
before any tests that require information from the inode.

<div class="divider"></div>
### -O3 <a id="o3"></a>
Full cost-based optimization is enabled. It reorder predicates if needed so that the cheapest 
(or fastest) predicates are evaluated earlier than the expensive one. Also predicates that are
likely to succeed (e.g. `-o`) will be evaluated first than one likely to fail (e.g. `-a`).

If cost-based optimization does not improve any performance, it will be removed. In contrast, 
   optimizations that prove to improve the performance may be enabled 
   at lower optimization levels over time.

<div class="divider"></div>
## Reference <a id="ref"></a>
- [find(1) - Linux man page](https://linux.die.net/man/1/find)
- [Compiler Optimization](https://gcc.gnu.org/onlinedocs/gcc/Optimize-Options.html)
