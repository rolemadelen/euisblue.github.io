---
layout: post
title: "Ubuntu・内蔵キーボード非活性化する方法"
ref: linux-disable-keyboard
date: 2019-06-30 19:11:00
categories: Linux
lang: ja
---

## 目次
- [前振り](#first)
- [キーボード非活性化する方法](#disable)
	* [入力装置を探す](#inputdev)
  * [非活性化](#disable2)
  * [活性化](#enable)
- [ランチャーアイコンを作る方法](#launcher)
  * [shellスクリプト](#script)
  * [.deskotp](#desktop)
- [Dockにプログラム追加](#dock)
- [参照](#ref)
<hr />
<br />

## 前振り <a id="first"></a>
最近「HHKB Professional JP」キーボードをノートパソコンに繋いで使っているけど、机の空間が狭くてHHKBをパソコンのキーボードの上に乗せて使っている。空間的には全然いいけど、たまにキーが押されて面倒な状況と向き合うことになる。実は内蔵キーボードを非活性化したら解決できる問題を今までやってなかった。非活性化する方法も思いより簡単で、この経験を記録しようと思った。

<br />
## キーボード非活性化する方法 <a id="disable"></a>
### 入力装置を探す <a id="inputdev"></a>
ターミナルを開いて`xinput --list`コマンドを入力する。

![xniput --list result](/assets/images/linux/how-to/disable-keyboard/xinput--list.png)

そうすると今繋いでる入力措置が全部出力される。 <br />
内蔵キーボードの名は`AT Translated Set 2 Keyboard`で、この装置の`id`は`14`だ。

<br />
### 非活性化 <a id="disable2"></a>
>  **注意：<br /> 他のキーボードとか仮想キーボードがいない場合は真似しなくてください。**

`xinput set-int-prop 14 "Device Enabled" 8 0`

上のコマンドの中で`14`は僕の内蔵キーボードの`id`だ。この`id`を自分の内蔵キーボードの`id`で直して入力する。そうしたら非活性化になってキーを押してもなんの反応しない。

<br />
### 活性化 <a id="enable"></a>
非活性化したキーボードをまた活性化したい場合、コマンドの最後の数字`0`を`1`に治すと活性化になる：`xinput set-int-prop 14 "Device Enabled" 8 1`

<br />
## ランチャーアイコンを作る方法 <a id="launcher"></a>
他のキーボードがない状態で間違えて内向キーボードを非活性化する場合、活性化する方法はリブートしか無い。入力できないからしょうがない。 もし他のキーボードを持っていっても、キーボードを持って来て、パソコンに繋いで、コマンドを入力して、〜して。。まぁ、面倒くさい。

でも実行ファイルがあったらマウスクリックでOn/Offができる。じゃ、ランチャーアイコンを作ってみよう。

<br />
### shellスクリプト <a id="script"></a>
どうやってOn/Offするスクリプトを作成したらいいのかな？

内蔵キーボードが非活性化できた状態で`xinput --list --long`コマンドを入力してみた。

![Disabled Message](/assets/images/linux/how-to/disable-keyboard/disabled-message.png)

<em>This device is disabled</em>という文句が出力されるのを確認した。活性化中にはこの文句がない。この事実を利用してOn/Offするスクリプトを作ってみようと思う。

```bash
#!/bin/bash
# file: kbd-onoff
kbd=`xinput --list --long | grep -A 1 "id=14" | grep disabled`

if [ -z "$kbd" ]
then
        echo "keyboard disabled"
        `xinput set-int-prop 14 "Device Enabled" 8 0`
else
        echo "keyboard enabled"
        `xinput set-int-prop 14 "Device Enabled" 8 1`
fi
```

変数`kbd`に`This device is disabled`という文句が貯蔵されてあるかどうかを確認する。もし`kbd`が空文字列だったらキーボードが活性化されていることが分かる。逆の場合はもう非活性化されている状態だから、また活性化したらいい。

スクリプトを作成したら実行権限を与える。
```bash
chmod u+x kbd-onoff
```

<br />
### .desktop <a id="desktop"></a>
`.desktop`ファイルはランチャーアイコンを作るため必要なファイルだ。

ここで必要な準備物が２つある：
 1. ランチャーアイコンの経路: `/usr/share/icons/icon.png`
 2. スクリプトファイルの経路: `/bin/kbd-onoff`

準備できたら好きな編集機を開いて下の内容を入力する。

```bash
#!/usr/bin/env xdg-open
[Desktop Entry]
Version=1.0
Type=Application
Terminal=false
Exec=/bin/kbd-onoff
Name=Keyboard On/Off
Comment="Keyboard on/off runnnig"
Icon=/usr/share/icons/kbd.png
```

`kbd-onoff.desktop`の名で貯蔵して実行する。

はじめに実行する時、信じられないプログラムというポップアップスクリンが表示されるかもしれない。この時は`Trust and Launch`をクリックしたら大丈夫。

<br />
## Dockにプログラム追加 <a id="dock"></a>

`.desktop`ファイルを`/usr/share/applications/`または`~/.local/share/applications/`に移動する。`.desktop`フィアルの中で`Name=`に該当する部分がプログラムの名前になるので、アプリリストからその名前を使って探したらいい。見つけたらマウスの右クリックして`Add to Favorites`を選ぶとdockに追加される。

![dock image](/assets/images/linux/how-to/disable-keyboard/dock.png)

<br />
## 参照 <a id="ref"></a>
- [Disable Laptop Keyboard in Ubuntu](https://blog.hostonnet.com/laptop-keyboard-ubuntu)
- [Bash Shell : is a variable empty?](https://www.cyberciti.biz/faq/unix-linux-bash-script-check-if-variable-is-empty/)
- [Bash Shell : if-statement](https://ryanstutorials.net/bash-scripting-tutorial/bash-if-statements.php)
