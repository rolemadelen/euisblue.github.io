---
layout: post
title:  "JavaScriptの基礎 2.6 - 2.7"
subtitle: "インタラクション: alert, prompt, confirm・型変換"
date:   2021-01-05 07:00:00 +1400
author: "J2ieu"
header-img: "img/post-bg-js.jpg"
header-mask: 0.5
catalog: true
permalink: /ja/modern-js/fundamental2/
hidden: false
lang: ja
english: true
korean: true
tags:
  - javascript
  - modern js
---

## インタラクション: alert, prompt, confirm

### - alert
このスクリプトは*モーダルウィンドウ*(modal window)と呼ばれる小さいウィンドウとメッセージを画面に表示します。
```js
alert('hello world');
```

### - prompt

`prompt`関数は入力フィールドとOK/CANCELボタンをもつモーダルウィンドウを表示します。

```js
let name = prompt(message, [default]);
```

`prompt`は二つの引数を受け入れます:

1. message → ウィンドウへ表示するテキストです。
2. default → 任意の2つ目のパラメータで、入力フィールドの初期値です。

```js
let name = prompt(message); 
```

> *Internet Explorer*では初期値を入れるとundefinedがフィールドに表示されるので注意してください。


下のスクリプトを実行してテキストを入力してOKボタンをクリックします。すると`name`に入力したテキストが保存されます。

```js
let name = prompt("あなたの名前はなんですか？");

console.log(name); // 名前が表示されます
```

### - confirm

```js
confirm(question)
```

使用者が質問(`question`)にOKをクリックすると`true`を、その以外の行動には`false`を返すモーダルウィンドウを示します。

```js
let isAdult = confirm("あなたは大人ですか？")

console.log(isAdult); // OKだったらTrueまたはFalse 
```

## 2.7 型変換(Type Conversion)

- **黙示型変換**(Implicit Conversion)**とは**
  + 自動的に変換が行われる。
  + 例えば`alert`の場合、メッセージの中の全てのデータは自動的に文字列に変換してモーダルウィンドウに示します。
    ```js
    alert(123);
    ```

- **明示型変換**(Explicit Conversion)**とは**
  + 意図をもって直接タイプを明示する。
    ```js
    let value = String(123);
    typeof(value); // 'String'

    value = Number("123");
    typeof(value); // 'Number'
    ```

---

### 数値変換

#### - 黙示型変換

割算の場合自動的に文字列は数字型に型変換が行われます。

```js
console.log("9" / "3"); // 9/3になって結果は３になります
```

文字列の数字だけではなく全ての文字列ということに注意してください。例えば`"abc" / "3"`も一応演算は行われます。でも結果は`NaN`(Not a Number)になります。

```js
console.log('abc' / '3'); // NaN / 3 -> NaN
```

#### - 明示型変換

`Number(データ)`を使って型変換ができます。

```js
Number(undefined); // NaN
Number(null);      // 0

Number(true);      // 1
Number(false);     // 0

Numbr('');         // 0
Number('   ');     // 0
Number('  9 ');    // 9
Number('abc');     // NaN
```

---

### Boolean変換

#### - 黙示型変換

論理演算をするとき自動的にBoolean型変換が行われます。

```js
console.log(3 > 5);  // false
console.log(3 < 5);  // true
```

#### - 明示型変換

`Boolean(データ)`を使って型変換ができます。

- `false` → 数字の０、空文字列、 `NaN`, `undefined`
- `true` → 上の`false`にあたらないすべてのデータ

## Reference
- [2.6 インタラクション: alert, prompt, confirm](https://ja.javascript.info/alert-prompt-confirm)
- [2.7. 型変換](https://ja.javascript.info/type-conversions)