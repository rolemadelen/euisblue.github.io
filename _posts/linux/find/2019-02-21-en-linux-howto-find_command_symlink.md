---
layout: post
title: "[Linux] find Command [1]"
ref: linux-find-1
date: 2019-2-21 17:37:00
categories: Linux
tags: linux-command
lang: en
---

## Contents
- [Basic Structure](#struct)
- [Symbolic Link Treatments](#treatment)
  + [-P Option](#popt)
  + [-L Option](#lopt)
  + [-H Option](#hopt)
- [TL;DR](#tldr)
- [Related Posts](#related)
- [Reference](#ref)
<hr />
<br />

## Basic Structure <a id="struct"></a>
The basic form of `find` command looks like the below.

```bash
find [-H] [-L] [-P] [-D debugopt] [-Olevel] [path] [expr]
```

There are lot of options but don't be scared. Just think of it as this way:

`-H`, `-L`, `-P` → How should I treat symbolic links?

`-D` → Should I print debug messages (that you specfically asked for)?

`-O` → How should I optimize it?

`path` → Where should I begin?

`expr` → What should I find?

<br />
### Treatement of Symbolic Links <a id="treatment"></a>

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

<br />
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

<br />
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

<br />
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

<br />
## TL;DR <a id="tldr"></a>
```
$ find -[P/L/H] test/ -type f
```

- **-P**: never follows symbolic link
- **-L**: follows symbolic link
- **-H**: follows symbolic link only if given argument is symbolic link

<br />
## Related Posts <a id="related"></a>
{% assign tagParam = "linux-command" %}
{% include related-posts %}

<br />
## Reference <a id="ref"></a>
- [find(1) - linux man page](https://linux.die.net/man/1/find)
