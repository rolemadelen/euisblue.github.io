---
layout: post
title:  "Modern JS 2.1-5: JavaScript Fundamentals I"
date:   2021-01-04 07:00:00 +1400
category: JavaScript
permalink: /modern-js/fundamental/
lang: en
---

2.1 Hello, World!

## before

If you're in a server-side environments (e.g. *Node.js*), you can execute the script with a command:

{% highlight bash %}
$ node test.js.
{% endhighlight %}

## `script` tag

JavaScript codes can be inserted almost anywhere into an HTML doc using the `<script>` tag.

{% highlight html %}
<!DOCTYPE html>
<html>
<head>
	<script></script>
</head>

<body>
    <script>
        console.log('hello world');
    </script>
</body>

<script src="myfile.js"></script>
</html>
{% endhighlight %}

⚠️ Unless the script is simple, inserting the script directly into the HTML doc is not recommended due to maintainability. Please use **external scripts** which explained later in this post.

## modern markup

- `type` attribute

    The old HTML standard, HTML4, it was required to specify the type of the script like `<script type='text/javascript'>`. It's not required in modern HTML standard. Now it is used for JavaScript modules. 

- `language` attribute

    Again in the old HTML standard, it was necessary to specify the language used in the script like `<script language="javascirpt">`. It's not required in modern standard since JavaScript is the default language.

- comments

    You may occasionally see codes with comments inside the `<script>` tag like below.

    ```html
    <script type="text/javascript"><!--
    ...
    //---></script>
    ```

    This is an ancient code, therefore, not used in the modern JavaScript. These comments were used to hide the script when the browser cannot process the `<script>` tag. Any browsers that was released since last 15 years can process this tag, so if you ever see these comments, you  know you're facing the ancient code.

## external scripts

You can separate JavaScript codes into multiple script files. Separated scripts can be referenced (or included) using  `<script src='...'>` tag in a HTML document. You can also give full URL instead of a file name.

{% highlight html %}
<script src="./logic/script1.js"></script>
<script src="./logic/script2.js"></script>

<script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js"></script>
{% endhighlight %}

⚠️ Any code inside the `<script>` tag with the `src` attribute will be ignored.

### cache

The benefit of using external script is that the browser will download the script only once and save it into its cache. So if multiple pages referencing the same script, the browser will get the script from the cache. This will reduce the traffic and makes page faster.

---

2.2 Code structure.

## statements

- Syntax constructs and commands that perform actions.
- Separated with a semicolon.

{% highlight jsx %}
// Separated two alerts with a semicolon.
alert('hello'); alert('world');

// Usually written like the below for readability.
alert('hello');
alert('world');
{% endhighlight %}

## semicolons

- Automatic semicolon insertion

    JavaScript inserts a semi-colon when there's a line break so you may omit it in the case like the below.

    ```jsx
    alert('hello')
    alert('world')
    ```

    However, there are cases where semicolons are not inserted automatically. It's recommended to always include the semicolon at the end of the statement even if there's a line break.

## comments

- One-line comments:  `//`
- Multiline comments:  `/* .... */`

    Nested multiline comments are illegal : `/*  /* ... */ */`

{% highlight jsx %}
 // one-line comments
alert ('this one is printed');

/*
   // this is a multiline comments
   alert('this one wont be printed');
*/
{% endhighlight %}

---

2.3. The modern mode, "use strict".

## strict mode

JavaScript evolved without compatibility issues for a long time until [ECMAScript5 (ES5)](https://www.w3schools.com/js/js_es5.asp) appeared in 2009. 

ES5 added new features in the language and modified some existing ones which means there could be compatibility issues. To keep the existing code work, all these new features are turned off by default. You can explicitly enable new features in ES5 by adding this special directive `"use strict"` on top of your script. 

{% highlight jsx %}
"use strict" // enable strict mode

let x = 5;
console.log(x);
{% endhighlight %}

## browser console

`"use strict"` is not enabled by default in a browser console. To use it in a developer console, you must state them explicitly.

{% highlight jsx %}
'use strict'; // <Shift + Enter> for a new line
// code
// <Enter> to run
{% endhighlight %}

## should we use `use strict`

Modern JavaScript supports *classes* and *modules* that enables `"use strict"` automatically. So it is recommended to use it, but you may omit it once you start using classes and modules.

---

2.4 Variables.

## variables

Think of a variable as a **storage with a specific name**. In this storage, you can store a number, string, or other values you want to store.

In JavaScript, we use `let` keyword to declare a variable.

{% highlight jsx %}
let name = 'eubug';
let age = 21;

console.log('name: + ' + name); // name: eubug
console.log('age: ' + age); // age: 21

// re-assign values to existing variables
name = 'john';
age = 24;

console.log('name: + ' + name); // name: john
console.log('age: ' + age); // age: 24
{% endhighlight %}

Although not exactly same, `var` is old version of `let` keyword. So please use `let` for now.

## variable naming

1. The name must contain only letters, digits, or the symbols `$` and `_`.
2. The first letter must not be a letter.

    ```jsx
    let userName1 = 'eubug';
    let userName2 = 'eubug';

    let $ = 'dollar';
    let _ = 'underscore';

    let 1abc; // Error. A variable cannot start with a number.
    ```

3. Case sensitive: `apple` and `Apple` are two different variables.
4. You cannot use *reserved keywords* as a variable.

    ```jsx 
    let let = 5;  // illegal
    let var = 3;  // illegal
    ```

## constants

A constant is an immutable variable. its value cannot be changed once assigned.

To declare one, use `const` instead of `let`:

{% highlight jsx %}
const COLOR_RED = "#F00";
const COLOR_GREEN = "#0F0";
const COLOR_BLUE = "#00F";

let myColor = COLOR_RED;
console.log(myColor); // #F00
{% endhighlight %}

Constants that are known prior to execution (e.g. `"#F00"`) are normally stored in capital-named constant variables (e.g. `COLOR_RED`). 

Constants that are NOT known prior to the page load are named normally (e.g. `const pageLoadTime`).

---

2.5 Data Types.

JavaScript is a dynamically typed language. This means the variable itself does not have a fixed type; you can first store a number and reassign a string, and back to numbers again.

{% highlight jsx %}
let storage = "string";
storage = 123;
storage = true;
storage = 1;
{% endhighlight %}

There are 8 basic types in JavaScript.

## 1. number

{% highlight jsx %}
let num = 123;
num = 3.14159;
{% endhighlight %}

The *number* type represents both integer and floating point numbers. Basic arithmetic operators can be applied with this type. For instance: multiplication `*`, addition `+`, subtraction `-`, division `/`, and so on..

There are also *special numeric values:* 

- `Infinity` : a value greater than any number ($+\infty$)
- `-Infinity` : a value smaller than any number ($-\infty$)
- `NaN` : *Not a Number* which represents a computation error.

{% highlight jsx %}
console.log(1/0); // Infinity
console.log(-1/0); // -Infinity
console.log('abc' / 2); // NaN
{% endhighlight %}

## 2. bigint

BigInt was introduced in [ES2020 (ES11)](https://carloscaballero.io/es2020-features-in-simple-examples/). This feature is compatible with all browsers except IE *(Jan 2021)*.

JavaScript's number type can only represent numbers in between $\pm(2^{53} - 1)$. `BigInt` type is used to represent integers of any arbitrary length. To use this type, attach `n` at the end.

{% highlight jsx %}
const bigNumber = 1234567890123456789012345678901234567890n; // 'n' at the end
{% endhighlight %}

## 3. string

{% highlight jsx %}
let str1 = "Eubug";
let str2 = 'Quadcore';
let str3 = `string interpolation: ${str1} and ${str2}`;
{% endhighlight %}

In JavaScript, there's practically no difference between single and double quotes.

Backticks, however, has an extended feature in it. It allows you to embed variables and expressions inside the string. This is called as *string interpolation.*

## 4. boolean (logical type)

The boolean type has only two values: `true` and `false`

{% highlight jsx %}
console.log(1 > 2); // false
console.log(2 > 1); // true

let a = 3;
let b = 5;
let isGreater = a > b;
console.log(isGreater); // false;
{% endhighlight %}

## 5. null

The special `null` type represents nothing but a null. It does not belong to any of those types introduced above. This type can be used to represent either one of these below:

- **nothing** : the value does not exist
- **empty** → the value is empty
- **unknown** → the value is unknown

{% highlight jsx %}
let age = null; // the age is not known
{% endhighlight %}

## 6. undefined

Similar to the `null` type, the special `undefined` type is used to represent only undefined values. This means the value is not assigned; hence, un-defined.

{% highlight jsx %}
let age;
console.log(age); // undefined
{% endhighlight %}

## 7. objects

The `object` type is special. Unlike other primitive types where a variable can only store one value at a time, the objects can store collections of data.

## 8. symbols

The `symbol` type is used to create a **unique identifiers for objects**.

## the typeof operator

The `typeof` operator returns the type of the argument.

{% highlight jsx %}
typeof undefined // 'undefined'
typeof 1 // 'number'
typeof 1n // bigint'
typeof true // 'boolean'
typeof 'foo' // 'string'
typeof Symbol('id') // 'symbol'

typeof Math // 'object'
typeof null // 'object'
typeof alert // 'function'
{% endhighlight %}

`typeof Math` returns `object` because `Math` is a built-in object in JavaScript that provides mathematical operations.

`typeof null` returns `object` but this is actually an officially recognized error in JavaScript but kept it for the compatibility. Do remember that the type `null` represents nothing but a null and it has its own type.

When we discussed about 8 basic types in JavaScript, there was no `function` type. Functions are actually an `object` type but again, this is from the early days of JavaScript and kept it as it is; it's actually convenient and useful.

---

# Reference

- 2.1: [https://javascript.info/hello-world](https://javascript.info/hello-world)
- 2.2: [https://javascript.info/structure](https://javascript.info/structure)
- 2.3: [https://javascript.info/strict-mode](https://javascript.info/strict-mode)
- 2.4: [https://javascript.info/variables](https://javascript.info/variables)
- 2.5: [https://javascript.info/types](https://javascript.info/types)