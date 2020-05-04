---
layout: post
title: "上書きした/bin/bash復旧した方法"
ref: linux-recover-deleted-bash
date: 2019-07-02 17:54:00
last_modified_at: 2020-05-04 05:40:00
categories: Linux
lang: ja
---

## "俺信じてよ！"
内蔵キーボードをon/offする[スクリプト](./ko-linux-disable-keyboard#script)を作成したことがあります。このスクリプトを実行するためにはこのスクリプトがあるディレクトリに行って実行しなければだめです。

ちょっと面倒なのでこれを`/bin`移すためこう入力しました。

```bash
$ sudo mv kbd.bat /bin/
```

このままだったら良かったですけど馬鹿な[*ミギ*](https://namu.wiki/w/%EC%98%A4%EB%A5%B8%EC%AA%BD%EC%9D%B4)が勝手に動いてこうなりました。

```bash
$ sudo mv kbd.bat /bin/bash
```

何かが間違えったのはすぐ感じました。だって、

![Error image 1](/assets/images/linux/recover-deleted-bash/error1.png)

ターミナルを使われなくようになりましたから。

<div class="divider"></div>

## "あ、大丈夫。何もない"
`bash`を上書きしてなくなったのだけだったら、再インストールしたら治す簡単な問題じゃないかなって思いました。

でも待って、再インストールするためにはシェル(shell)が必要だけど使われないじゃん？！
困りました。Ubuntu Softwareから`csh`とか`ksh`とかいろんなシェルをインストールしてみたんですがダメでした。

あ。。。困ったな。

その時、普通には使わないですけどターミナルのoptionに*custom command*があるのを思えだしました。ここにbashを再インストールするコマンド(`sudo apt-get install --reinstall bash`)を入力してシェルを開けました。

おお、できた！

![Error image 2](/assets/images/linux/recover-deleted-bash/error2.png)

っと思いましたね。エラーが出る前までは。

<div class="divider"></div>

## "あ、あれれ?" <a id="solution"></a>
あちこち聞いて調べた結果、ほとんどのシステムで`/bin/bash`は`/bin/sh`を指せるsimlinkだけだというのを知りました。で、新しいsimlinkを作ってbashを再インストールして必要なものが追加されようにしました。

```sh
rm -rf /bin/bash
ln -s /bin/sh /bin/bash
apt-get install --reinstall bash
```

結果は?

![Solution image](/assets/images/linux/recover-deleted-bash/solution.png)

成功!
