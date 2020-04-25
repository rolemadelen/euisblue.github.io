---
layout: post
title: "Ruby/Tk・電卓 pt.2"
ref: toys-tk-calc-2
date: 2020-04-25 07:00:00
categories: Toys
lang: ja
---

以前に失敗した`Tk`電卓をまたはじめからしてみた。

キーのボタンたちを作、`grid`を使ってボタンを配置させた。

```rb
btn7 = newButton(root, number_entry, "7")
btn8 = newButton(root, number_entry, "8")
btn9 = newButton(root, number_entry, "9")
btn_div = newButton(root, number_entry, "/")
btn7.grid :row => 1, :column => 0
btn8.grid :row => 1, :column => 1
btn9.grid :row => 1, :column => 2
btn_div.grid :row => 1, :column => 3

btn4 = newButton(root, number_entry, "4")
btn5 = newButton(root, number_entry, "5")
btn6 = newButton(root, number_entry, "6")
btn_mult = newButton(root, number_entry, "*")
btn4.grid :row => 2, :column => 0
btn5.grid :row => 2, :column => 1
btn6.grid :row => 2, :column => 2
btn_mult.grid :row => 2, :column => 3

btn1 = newButton(root, number_entry, "1")
btn2 = newButton(root, number_entry, "2")
btn3 = newButton(root, number_entry, "3")
btn_sub = newButton(root, number_entry, "-")
btn1.grid :row => 3, :column => 0
btn2.grid :row => 3, :column => 1
btn3.grid :row => 3, :column => 2
btn_sub.grid :row => 3, :column => 3

btn0 = newButton(root, number_entry, "0")
btn_dec = newButton(root, number_entry, ".")
btn_eq = newButton(root, number_entry, "=")
btn_add = newButton(root, number_entry, "+")
btn0.grid :row => 4, :column => 0
btn_dec.grid :row => 4, :column => 1
btn_eq.grid :row => 4, :column => 2
btn_add.grid :row => 4, :column => 3
```

やはりハードコーディングは問題ない。うまく作動する。

問題はDRY。「Don't Repeat Yourself」だけど全てのコードが反復だ。<br>
なので、ループを使って見た。

```rb
pads = ["789/", "456*", "123-", "0.=+"]
x = 1
for row in pads do
    row = row.split('')
    y = 0
    for key in row do
        btn = newButton(root, number_entry, key)
        btn.grid("row"=>x, "column"=>y)
        y += 1
    end
    x += 1
end
```

以前にはここでできなかったけど、今度はできた。

![Calculator](/assets/images/toys/ruby-tk-calc/part2/calculator.png)

この電卓って、今はマウスでしか使用できないので使用価値はゼロだ。<br>
キーボードでするようにはキーをバインドしなきゃダメ。

今日はここまで。次はkey bindingの作業をやってみます。

<div class="divider"></div>

## ソースコード
```rb
require 'tk'
require './logic.rb'

root = TkRoot.new { title "Calculator" }

# display expr and the result
number_entry = TkEntry.new(root)
number_entry.grid :row => 0, :columnspan => 4
number_entry.width = 30

# number pads
pads = ["789/", "456*", "123-", "0.=+"]
x = 1
for row in pads do
    row = row.split('')
    y = 0
    for key in row do
        btn = newButton(root, number_entry, key)
        btn.grid("row"=>x, "column"=>y)
        y += 1
    end
    x += 1
end

Tk.mainloop
```
