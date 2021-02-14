---
layout: post
title:  "Modern JS 5.1: Methods of Primitives"
date:   2021-02-01 07:00:00
category: JavaScript
---

In JavaScript we can work with primitives as if they're objects.

### primitives

- a value of a primitive type.
- there are 7 primitive types: `string`, `number`, `bigint`, `boolean`, `symbol`, `null` and `undefined`.

### objects

- an object is capable of storing multiple values as properties.
- can be created with `{}`.
- there are other kinds of objects like *functions*.

One of the best thing about objects is that we can have functions as a property of an object.

{% highlight jsx %}
let eubug = {
    name: "Eubug",
    sayHi: function() {
        alert("Hello there!");
    }
};

eubug.sayHi(); // Hello there!
{% endhighlight %}

But objects are *heavier* than primitives. **They require additional resources to support the internal machinery**.

## A primitive as an object

A paradox faced by the creator of JavaScript:

1. There are many things one would want to do with primitives like string or number. So lets put them as methods and let one use it.
2. Primitives must be as fast and lightweight as possible.

Here's a bit awkward, but a solution they came up with:

1. Primitives are still primitive.
2. The language allows access to methods and properties of strings, numbers, booleans and symbols.
3. In order for that to work, a special *"object wrapper"* that provides the extra functionality is crated, and then is destroyed.

The *"object wrapper"* are different for each primitive type: `String`, `Number`, `Boolean` and `Symbol`. Thus, they provide different sets of methods.

{% highlight jsx %}
let str = "Hello";

alert( str.toUpperCase() ); // HELLO
{% endhighlight %}

Here's what really happens in `str.toUpperCase()`;

1. The string `str` is a primitive. A special object, which has various methods, is created.
2. `toUpperCase()` method runs and returns a new string.
3. The special object is destroyed, leaving the primitive `str` alone.

So the string `str` can provide methods and remains lightweight as a primitive.

### null/undefined have no methods

The special primitives `null` and `undefined` are exceptions and they have no *"wrapper objects"* and don't provide any methods. They are **the most primitive**.

## Reference 
- [Methods of primitives](https://javascript.info/primitives-methods)
