---
layout: post
title: "Ruby/Tk - 계산기 pt.2"
ref: toys-tk-calc-2
date: 2020-04-25 07:00:00
categories: Toys
lang: ko
---

`Tk`를 사용한 계산기. 처음부터 다시 시도해봤다.


계산기에서 각 행에 해당하는 키들의 버튼을 만들고 이를 `grid`를 
사용해서 올바른 위치에 고정시켰다.

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

하드코딩은 역시 문제없이 잘 작동한다.

보다시피 거의 모든 부분이 반복되기 때문에 이를 (지난 번에는 실패했지만) 다시 한 번
반복문을 사용해 합쳐보았다.

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

허무하게도 문제없이 잘 돌아간다. 

![Calculator](/assets/images/toys/ruby-tk-calc/part2/calculator.png)

이 계산기는 직접 버튼을 클릭해야만 해서 사실상 사용가치는 제로.

다음에는 키보드 바인딩을 추가해봐야겠다.

<div class="divider"></div>

## 전체 코드
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
