---
layout: post
title:  "Modern JS 2.6-7: JavaScript Fundamentals II"
date:   2021-01-05 07:00:00 +1400
category: JavaScript
permalink: /modern-js/fundamental2/
lang: en
---

2.6 Interaction: alert, prompt, confirm

## alert

{% highlight jsx %}
alert('hello world');
{% endhighlight %}

Run the code above. The modal window will pop up with a message "hello world".

## prompt

Displays a modal window with a text field and submit and cancel buttons.

{% highlight jsx %}
let name = prompt(message, [default]);
{% endhighlight %}

`prompt` function accepts two arguments:

1. message → a string to display it on the window
2. default → a default value to show in the message field

    [default] ← square bracket means this argument is optional.

    ```jsx
    let name = prompt(message); // works fine.
    ```

    In IE, however, will display `undefined` without a default value.

Below code will store `Eubug` to the variable `name`.

{% highlight jsx %}
let name = prompt("What is your name?", 'Please enter your name.');

console.log(name); // Eubug
{% endhighlight %}

## confirm

{% highlight jsx %}
confirm(question)
{% endhighlight %}

Display a modal window with a question specified by a user. If the user clicks `Okay/Enter` in the window, it returns `true` else `false`.

{% highlight jsx %}
let is2Even = confirm("Is 2 an even number?")

console.log(is2Even); // 'true' if clicked 'Ok' else 'false'
{% endhighlight %}

---

2.7 Type Conversions.

## implicit conversion

The implicit conversion means an automatic conversion.

For example, `alert` function will convert any values passed in to its argument as a string and display it on the window.

{% highlight jsx %}
alert(123);
{% endhighlight %}

## explicit conversion

The exact opposite of the implicit conversion. 

It is used to change the value from one type to another explicitly.

{% highlight jsx %}
// Explicitly change a number(123) to a string("123")
let value = String(123);
typeof(value); // 'String'

// Convert a string to a number
value = Number("123");
typeof(value); // 'Number'
{% endhighlight %}

## numeric conversion

### implicit

In division, strings are automatically casted into a number.

{% highlight jsx %}
console.log("9" / "3"); // 3;
{% endhighlight %}

Not only a number string (e.g. `"123"`), it's all string; thus, it is possible to evaluate a string like `"abc"` which will turn into `NaN` (not a number).

{% highlight jsx %}
console.log('abc' / '3'); // NaN / 3 -> NaN
{% endhighlight %}

Any expression evaluated with a `NaN` is `NaN`.

### explicit

Use `Number(data)` to explicitly cast a value to Number.

### numeric casting rules

{% highlight jsx %}
Number(undefined); // NaN
Number(null);      // 0

Number(true);      // 1
Number(false);     // 0

Number('   ');     // 0 -> spaces are removed; empty string -> 0
Number('  9 ');    // 9
Number('abc');     // NaN
{% endhighlight %}

## boolean conversion

Logical operations return boolean values.

{% highlight jsx %}
console.log(3 > 5);  // false
console.log(3 < 5);  // true
{% endhighlight %}

It is also possible to explicitly type cast values into boolean using`Boolean(data)`.

### boolean casting rules

- `false` →  a number 0, an empty string, `NaN`, `undefined`
- `true` → all other values not list in `false`

---

# Reference
- 2.6:  [https://javascript.info/alert-prompt-confirm](https://javascript.info/alert-prompt-confirm)
- 2.7: [https://javascript.info/type-conversions](https://javascript.info/type-conversions)