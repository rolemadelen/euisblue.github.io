---
layout: post
title: "内蔵キーボード非活性化する方法"
ref: linux-disable-keyboard
date: 2019-06-30 19:11:00
last_modified_at: 2020-05-04 07:00:00
categories: Linux
lang: ja
---

## 目次
- [キーボード非活性化](#disable)
- [実行アイコン作り](#launcher)
  * [script](#script)
  * [.deskotp](#desktop)
  * [Dockにプログラム追加](#dock)
- [参照](#ref)

<div class="divider"></div>

## キーボード非活性化 <a id="disable"></a>
`xinput`コマンドを使って入力装置たちを確認して設定できます。ターミナルに`xinput --list`を入力して繋がている装置たちを出力して見ましょう。

```bash
mui:~$ xinput --list

⎡ Virtual core pointer                          id=2    [master pointer  (3)]
⎜   ↳ Virtual core XTEST pointer                id=4    [slave  pointer  (2)]
⎜   ↳ Elan Touchpad                             id=14   [slave  pointer  (2)]
⎣ Virtual core keyboard                         id=3    [master keyboard (2)]
    ↳ Virtual core XTEST keyboard               id=5    [slave  keyboard (3)]
    ↳ Power Button                              id=6    [slave  keyboard (3)]
    ↳ Asus Wireless Radio Control               id=7    [slave  keyboard (3)]
    ↳ Video Bus                                 id=8    [slave  keyboard (3)]
    ↳ Video Bus                                 id=9    [slave  keyboard (3)]
    ↳ Sleep Button                              id=10   [slave  keyboard (3)]
    ↳ USB2.0 VGA UVC WebCam: USB2.0 V           id=13   [slave  keyboard (3)]
    ↳ Asus WMI hotkeys                          id=15   [slave  keyboard (3)]
    ↳ AT Translated Set 2 keyboard              id=16   [slave  keyboard (3)]
```

我らに必要な部分は`AT Translated Set 2 Keyboard`です。この名を使ってキーボードをon/offするのができます。

キービード**非活性化**：
```bash
xinput disable "AT Translated Set 2 keyboard"
```

キービード**活性化**：
```bash
xinput enable "AT Translated Set 2 keyboard"
```

<div class="divider"></div>

## 実行アイコン作り <a id="launcher"></a>
毎回ターミナルからコマンドを入力する過程は面倒だからクリックでon/offできる実装ファイルを作ってみましょう。

### script <a id="script"></a>
まず、実行するとキーボードをon/offするスクリプトを作成します。

```bash
#!/bin/bash

kbd=`xinput list-props "AT Translated Set 2 keyboard" | grep "Device Enabled"`
kbd="${kbd: -1}"

if [ $kbd -eq 1 ]
then
   `xinput disable "AT Translated Set 2 keyboard"`
else
   `xinput enable "AT Translated Set 2 keyboard"`
fi
```

`xinput list-props "AT Translated Set 2 keyboard" | grep "Device Enabled"`コマンドは`$kbd`に下記のような文字列が保存されます。

```bash
# 活性化された場合
Device Enabled (168):   1

# 非活性化された場合
Device Enabled (168):   0
```

文字列の最後の数字だけ必要なので`${kbd: -1}`をします。この値を使って活性化とか非活性化することができます。

スクリプトを作成したら実行できるように権限設定して`/bin/`に移します。
権限設定をしないとクリックしても反応しません。

```bash
chmod u+x kbd-switch
mv kbd-switch /bin/
```

### .desktop <a id="desktop"></a>
実行アイコンを作りため`.desktop`ファイルを作ります。

必要な情報は２つです:
1. 使用する実行ファイルアイコンの経路：`/usr/share/icons/icon.png`
2. スクリプトファイルの経路：`/bin/kbd-switch`

準備できたら編集機(vim, nano, etc..)を開いて下記の内容をコピします。

```bash
#!/usr/bin/env xdg-open
[Desktop Entry]
Version=1.0
Type=Application
Terminal=false
Exec=/bin/kbd-switch
Name=Keyboard On/Off
Comment="Keyboard On/Off Runnnig"
Icon=/usr/share/icons/kbd.png
```

ファイルを`kbd-switch.desktop`でセーブして実行します。ポップアップがでるかもしれませんがその時は`Trust and Launch`をクリックします。

### Dockにプログラム追加 <a id="dock"></a>

実行ファイルをスタートメニュから探すように`.desktop`ファイルを`/usr/share/applications/`または`~/.local/share/applications/`に移します。

メニュから実行ファイルを探してマウスのミギボタンをクリック、`Add to Favorites`を選ぶとDockに追加できます。

![dock image](/assets/images/linux/how-to/disable-keyboard/dock.png)

<div class="divider"></div>

## 参照 <a id="ref"></a>
- [Disable Laptop Keyboard in Ubuntu](https://blog.hostonnet.com/laptop-keyboard-ubuntu)
- [Bash Shell : is a variable empty?](https://www.cyberciti.biz/faq/unix-linux-bash-script-check-if-variable-is-empty/)
- [Bash Shell : if-statement](https://ryanstutorials.net/bash-scripting-tutorial/bash-if-statements.php)
