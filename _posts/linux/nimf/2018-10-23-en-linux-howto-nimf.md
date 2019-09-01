---
layout: post
title: "[Elementary OS] Install nimf"
ref: linux-nimf
date: 2018-10-23 12:00:00
categories: Linux
lang: en
---

## Contents
- [What is nimf?](#nimf)
- [Edge Character Bug](#bug)
- Installation
  * [Install](#install)
  * [Configuration](#config)
  * [Disabling Language Inputs](#deact)
- [Pros and Cons](#procon)
- [Reference](#ref)

<hr />
<br />
## What is nimf?
`nimf` is an input method program for Korean (also provides Japanese and Chinese) 
that has no **edge-character bug** which other input methods like `ibus` or `fcitx` does have.

<br />
## Edge-Character Bug
Typing in Korean in _Elementary OS 0.4.1 Loki_ is troublesome because of a space input. <br />
Let say you're trying to type `한글 입력기`, then you'll see something like this in your screen.

> `한글 입력기` --> `한 글입력기` 

As you can see, a space is printed before the last character(`글`) not in front of it. 
This is called the edge-character bug.

<br />
## Install nimf

Open the terminal and run the below command to install `nimf`.

``` bash
$ sudo apt-get install -y nimf
```

<br />
## Configuration Setting

Set input method to nimf.

``` bash
$ im-config -n nimf
```

Now logout and log back in and you're ready to go.

<br />
## Disable Other Language

By default, Japanese and Chinese input is enabled in nimf. 
To disable these languages, open up nimf's setting

``` bash
$ nimf-setting
```

and disable _anthy_ for Japanese input and  _sunpinyin_ for Chinese input.

<br />
## Pros and Cons
I have no words to say for Korean input. I've always had to press extra right-arrow key to prevent 
printing a space before the last character, and now I don't have to do that. It is 'the' best input method for Korean.

However, that's pretty much it. As a person who also uses Japanese input, nimf is terrible with it.
As far as I know, nimf's main focus is on Korean, so I guess its not fair to mention other language, 
   but I'm going to vent about it since its part of the nimf.

The reason why I said its terrible is because it has no auto-complete for ん(n) character.
For example, I want to type べんきょう which means _study_, but what I get is べnきょう.
Realizing that I need to type _nn_ every single time to get ん was huge disappointmnet for me.
Its like you built an escalator without any power so you still need to walk up steps; yes I'm saying its useless.

Seems like the developer did provided the feature in the beginning, but, for some reason, the developer got rid of it. Then, the whole Japanese input should've been removed in my opinion. Besides the ん(nn) issue, there's also a part where you have to use the arrow key to convert _-kana_ to _kanji_ rather than a space, which is also a negative to me. 

TL;DR: <br />
Use nimf if you're only using Korean.

<br />
## Reference
- [StackExchange : Adding Korean Input](https://elementaryos.stackexchange.com/questions/8041/adding-korean-input-for-loki)
- [nimf developer's blog](https://cogniti-works.blogspot.com/2018/09/nimf-23.html#comment-form)
