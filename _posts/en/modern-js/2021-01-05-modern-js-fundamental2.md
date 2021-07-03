---
layout: post
title:  "Modern JavaScript 2.6 - 2.7"
subtitle: "Fundamentals: Interaction: alert, prompt, confirm • Type Conversions"
date:   2021-01-05 07:00:00 +1400
author: "J2ieu"
header-img: "img/post-bg-js.jpg"
header-mask: 0.5
catalog: true
permalink: /en/modern-js/fundamental2/
hidden: false
lang: en
korean: true
japanese: true
tags:
  - javascript
  - modern js
---

## 2.6 Interaction: alert, prompt, confirm

### - alert

This command will fire a mini-window (modal window) which shows a message and waits for the user to press "Ok".
```js
alert('hello world');
```

### - prompt

The `prompt` function accepts two arguments:
```js
let name = prompt(message, [default]);
```
1. message → the text to show the user.
2. default → the initial value for the input field which is an optional.

It shows a modal window with a message, an input field , and the buttons Ok/Cancel.

```js
let name = prompt(message); // 잘 작동한다.
```

The second argument (default) is an option, however, the *Internet Explor* will insert the text `undefined`
 to the text field if we don't supply the default message.

Run the following script and enter your name in the text field.
Once you press *Ok*, your input will be stored into the variable `name`.

```js
let name = prompt("What is your name?", 'Please enter your name');

console.log(name); // Your name
```

### - confirm

```js
let result = confirm(question);
```

The function `confirm` shows a modal window with a `question` and the buttons Ok/Cancel.
It returns `true` if a user press *Ok* and `false` otherwise.

```js
let result = confirm("Is 2*1 = 1?")

console.log(result); // 'true' if entered Ok else 'false'
```

## 2.7 Type Conversions

- What is an **implicit conversion**?
  + the conversion occurs automatically.
  + Any value we supply to the `alert` function will be implicitly converted into a string.
    ```js
    alert(123); // becomes "123"
    ```

- What is an **explicit conversion**?
  + We explicitly convert a data from one type to another.
    ```js
    let value = String(123);
    typeof(value); // 'String'

    value = Number("123");
    typeof(value); // 'Number'
    ```

---

### Numeric Conversion

#### - Implicit

When division(`/`) is applied with non-numeric values, the JavaScript will convert the string into a number 
and process the expression.

```js
console.log("9" / "3"); // 3
```

The JavaScript will evaulate even if the value is not really a number. For instance, the following code will work just fine except the result is little funky.
```js
console.log('abc' / '3'); // NaN
```

#### - Explicit

We can use `Number(value)` to implicitly convert a value into a numeric data type.

```js
Number(undefined); // NaN
Number(null);      // 0

Number(true);      // 1
Number(false);     // 0

Number('');        // 0
Number('   ');     // 0 -> removes spaces and becomes an empty string
Number('  9 ');    // 9
Number('abc');     // NaN
```

---

### Boolean Conversion

#### - Implicit

The boolean conversion occurs when we perform logical operations.

```js
console.log(3 > 5);  // false
console.log(3 < 5);  // true
```

#### - Explicit

We can use `Boolean(data)` to explicitly convert a value to either *True*/*False*.

```js
// 'false'
Boolean(0);         // a number 0
Boolean('');        // an empty string
Boolean(NaN);
Boolean(undefined); 

// 'true'
Boolean(1);         // a number 1   
Boolean('0');       // a string
Boolean('123');
```

## Reference
- [2.6 Interaction: alert, prompt, confirm](https://javascript.info/alert-prompt-confirm)
- [2.7. Type Conversions](https://javascript.info/type-conversions)