---
layout: post
title:  "Modern JS 5.3: Strings"
date:   2021-02-06 07:00:00
category: JavaScript
permalink: /modern-js/strings
lang: en
---

Unlike other type languages where they have two different types to represent a *character* and a *string*, in JavaScript all characters are of type `String` and its internal format for strings is always [UTF-16](https://en.wikipedia.org/wiki/UTF-16); it is not tied to the page encoding.

## Quotes

- Single quotes and double quotes are essentially the same.
- Backticks allow us to embed any expression into the string (interpolation).
    - Backticks allow us to use a *"template function"* which is rarely used in practice. So if you want to know more, you can read about it in the [manual](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#tagged_templates).

## Special Characters

- `\n` - new line.
- `\r` - carriage return: not used alone. Windows text files use a combination.
- `\'`, `\"` - quotes.
- `\\` - backslash.
- `\t` - tab.
- `\b`, `\f`, `\v` - backspace, form feed, vertical tab – kept for compatibility, not used nowadays.
- `\xXX` - unicode character with the given hexadecimal unicode `XX`, e.g. `'\\x7A'` is the same as `'z'`.
- `\uXXXX` - A Unicode symbol with the hex code `XXXX` in UTF-16 encoding, for instance `\\u00A9` – is a Unicode for the copyright symbol `©`. It must be exactly 4 hex digits.
- `\u{X...XXXXX}` (1 to 6 hex chars) - unicode symbol with the given UTF-32 encoding. Some rare characters are encoded with two unicode symbols, taking 4 bytes.

## Accessing characters

To access a character at a position `pos`, use square brackets `[pos]` or call the method `str.charAt(pos)`. The first character is at position *zero* not one.

{% highlight jsx %}
let str = "Eubug";

// first character
console.log( str[0] ); // E
console.log( str.charAt(0) ) // E

// last character
console.log( str[str.length - 1] ); // g
console.log( str.charAt(str.length - 1) ); // g
{% endhighlight %}

Difference between `[]` and `charAt` is what they return when no character is found at `[pos]`.

{% highlight jsx %}
let str = "Eubug";

console.log( str[1000] ); // undefined
console.log( str.charAt(1000) ); // '' (an empty string)
{% endhighlight %}

### for..of

We can iterate each characters using `for..of`:

{% highlight jsx %}
let str = "Eubug";

for (let char of str) {
	console.log(char);
}
{% endhighlight %}

## Strings are immutable

> Seems like I need to be in the strict mode ("use strict")

If you try to modify a string, you'll see an error:

{% highlight jsx %}
"use strict"

let name = "Eubug"
name[0] = "D"; // TypeError: Attempted to assign to readonly property.
{% endhighlight %}

A workaround for this is to create a whole new string and assign it to the variable.

{% highlight jsx %}
let str = "Hi";

str = 'h' + str[1]; // replace the string
console.log(str); // hi
{% endhighlight %}

## Changing the case

{% highlight jsx %}
console.log( 'Eubug'.toUpperCase() ); // EUBUG
console.log( 'Eubug'.toLowerCase() ); // eubug
{% endhighlight %}

Or if you want to change case for a single character,

{% highlight jsx %}
console.log( 'eubug'[0].toUpperCase() ); // Eubug
{% endhighlight %}

## Searching for a substring

### str.indexOf

syntax --> `str.indexOf(substr, pos)`.

Starting from the position `pos`, it looks for the `substr` in `str`. It returns the position if `substr` was found else return `-1`.

{% highlight jsx %}
let str = 'My name is Eubug';

console.log( str.indexOf('My', 0) ); // 0,'My' is at the beginning
console.log( str.indexOf('my', 0) ); // -1, 'my' is not found
{% endhighlight %}

We can actually omit the second `pos` parameter. When omitted, it searches from the beginning.

{% highlight jsx %}
console.log( str.indexOf('am') ); // 4, name -> n'am'e
console.log( str.indexOf('Eubug') ); // 11
{% endhighlight %}

You can put `str.indexOf` in a condition but be careful not to do this:

{% highlight jsx %}
let str = "Eubug is my name! yeah!";

if (str.indexOf('Eubug')) {
	console.log('found it');
}
{% endhighlight %}

`"Eubug"` is located at position 0, but *0* is considered to be *false*. You should use the value returned by the `indexOf` function. It returns `-1` when no match was found:

{% highlight jsx %}
let str = "Eubug is my name! yeah!";

if (str.indexOf('Eubug') != -1) {
	console.log('found it');
}
{% endhighlight %}

To make this code little shorter, there's an old trick.

### The bitwise NOT trick

The old trick is using the [bitwise NOT](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_NOT) `~` operator. It converts the number to a 32-bit integer (removes the decimal part if exists) and then reverses all bits in its binary representation.

Basically what this mean is the following: `~n == -(n+1)`.
For instance:

{% highlight jsx %}
alert( ~2 ); // -3, the same as -(2+1) 
alert( ~1 ); // -2, the same as -(1+1)
alert( ~0 ); // -1, the same as -(0+1) 
alert( ~-1 ); // 0, the same as -(-1+1)
{% endhighlight %}

As we can see, `~n` is zero only if `n == -1`.  Using this trick, we can shorten our `indexOf` checks:

{% highlight jsx %}
let str = "Eubug is my name! yeah!";

if (~str.indexOf('Eubug')) {
	console.log('found it');
}
{% endhighlight %}

Although this trick is widely used in old code, it's not recommended to use such language features in a non-obvious way.

Modern JavaScript provides `.includes` method so this *bitwise NOT* trick is not used in modern days.

### includes

The more modern method `str.includes(substr, pos)` returns `true/false` depending on whether `str` contains `substhr` within.

{% highlight jsx %}
console.log( "My name is Eubug".includes("Eubug") ); // true
console.log( "My name is Eubug".includes("JavaScript") ); // false
{% endhighlight %}

## Getting a substring

You can get a substring using three different methods: `slice`, `substring`, and `substr`.

### slice

syntax ==> `str.slice(start [, end])`
Returns the part of the string from `start` to (but not including) `end`.

{% highlight jsx %}
let str = "stringify";
console.log( str.slice(0, 5) ); // 'strin'
console.log( str,slice(0, 1) ); // 's'

console.log( str.slice(2) ); // 'ringify'
console.log( str.slice(6) ); // 'ify'
{% endhighlight %}

We can also use negative values for `start/end`. Negative means the position is counted from the string end:

{% highlight jsx %}
let str = "stringify"; 

console.log( str.slice(-4, -1) ); // 'gif'
{% endhighlight %}

> It is enough to remember only slice method. But in case you're curious, feel free to take a look at next 2 methods.

### substring

syntax ==> `str.sbustring(start [, end])`
Returns the part of the string *between* `start` and `end`.

`substring` looks for a string in between two given boundaries; thus, `start` could be bigger than `end`:

{% highlight jsx %}
let str = "stringify";

// same for substring
console.log( str.substring(2, 6) ); // 'ring'
console.log( str.substring(6, 2) ); // 'ring'

// but not for slice
console.log( str.slice(2, 6) ); // 'ring'
console.log( str.slice(6, 2) ); // '' (an empty string)
{% endhighlight %}

Unlike `slice`, negative values are not supported; they are treated as `0`.

### substr

syntax ==> `str.substr(start [, length])`
Returns the part of the string from `start`, with the given `length`.

In contrast with the previous methods, this one allows us to specify the `length` instead of the ending position:

{% highlight jsx %}
let str = "stringify";
console.log( str.substr(2, 4) ); // 'ring', get 4 chars from the 2nd position
{% endhighlight %}

The starting position could be negative to start from the string end:

{% highlight jsx %}
let str = "stringify";
console.log( str.substr(-4, 3) ); // 'gif'
{% endhighlight %}

> substr may fail to work properly on non-browser environments because this method is only described in Annex B specification which covers browser-only features. But in practice it works everywhere.

## Comparing strings

When we compare strings, they are converted into a specific code and compared by those value (ASCII code).

{% highlight jsx %}
console.log( 'a' > 'Z' ); // true
{% endhighlight %}

Why is this true? The character `a` has a value of 97 while `z` holds 90.

{% highlight jsx %}
console.log( "a".codePointAt(0) ); // 97
console.log( "Z".codePointAt(0) ); // 90

console.log( String.fromCodePoint(97) ); // a
console.log( String.fromCodePoint(90) ); // Z
{% endhighlight %}

When comparing strings,

1. compare two strings regularly to compare by their character codes, or
2. use `str.localeCompare()` to compare strings according to the language.

## Reference
- [Strings](https://javascript.info/string)