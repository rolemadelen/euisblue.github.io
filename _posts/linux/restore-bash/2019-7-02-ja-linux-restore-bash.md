---
layout: post
title: "Ubuntu・/bin/bash復旧"
ref: linux-restore-bash
date: 2019-07-02 17:54:00
categories: Linux
published: true
lang: ja
---

## 目次
- [前振り](#first)
- [問題解決過程](#issue)
- [解決方法 ](#solution)
- [参照](#ref)
<hr />
<br />

## 前振り <a id="first"></a>
この前に「[Ubuntu・内蔵キーボード非活性化する方法](https://myoiwritescode.github.io/linux/2019/06/30/ja-linux-disable-keyboard.html)」の記事を作成する時、内蔵キーボードをOn/Offするスクリプトファイル(`kbd-onoff.bat`)を一つ作った。このファイルを `/bin`に 移るのを、間違えてバカなことをやってしまった：
```
$ sudo mv kbd-onoff.bat /bin/bash
```

おっと、これはちょっとやばい。

<br />
## 問題解決過程 <a id="issue"></a>
エラーのためターミナルをもう使わなかったので、問題があるのはすぐ気づいた。

![エラーのイメジ　１](/assets/images/linux/restore-bash/error1.png)

ググってみた結果bashを再インストールしたらできそうなので、そうしてみた。ただターミナルを使わないのでshellを開いた時、僕のコマンドが実行するようにカスタム・コマンド機能を使った。

![커스텀 커맨드 イメジ　２](/assets/images/linux/restore-bash/custom-command.png)

なんかできそうだったけど、エラーが起きて失敗した。結果を詳しく見たら最初の写真のエラーと同じだ。

![エラーのイメジ　２](/assets/images/linux/restore-bash/error2.png)

<br />
## 解決方法 <a id="solution"></a>
検索して知った事実はほとんどのシステムの`/bin/bash`は`/bin/sh`のシンボリックリンクであるだけで、`/bin/bash`のリンクを直したら解決できると思ってこうしてみた。

```
rm -rf /bin/bash
ln -s /bin/sh /bin/bash
apt-get install --reinstall bash
```

壊れた`/bin/bash`を消して、新しい`/bin/sh`のリンクを`/bin/bash`の名で作って、bashを再インストールした。

![解決イメジ](/assets/images/linux/restore-bash/solution.png)

ワーイ！bashが戻ってきた（笑）。

<br />
## 参照 <a id="ref"></a>
- [/bin/bash復旧する方法？](https://serverfault.com/questions/451528/how-to-recover-from-a-deleted-bin-bash)
