---
layout: post
title:  "Modern JS 4.7: Symbol type"
date:   2021-01-28 07:00:00 +1400
category: JavaScript
permalink: /modern-js/symbol-type
lang: en
---

Object property keys may be either of string type, or of symbol type. 

A *symbol* represents a unique identifier. We can use `Symbol()` to create one.

{% highlight jsx %}
// id is a new symbol
let id = Symbol();
{% endhighlight %}

We can pass in a name, or a description, to the symbol which is mostly used for debugging.

{% highlight jsx %}
// id is a new symbol with a label "id"
let id = Symbol("id");
{% endhighlight %}

**Symbols are guaranteed to be unique**.

{% highlight jsx %}
let id1 = Symbol("id");
let id2 = Symbol("id");

console.log(id1 == id2); // false
{% endhighlight %}

The above comparison part evaluates to false because symbols are unique. A label is only a description not a value.

symbols **don't** auto-convert to a string. To show a symbol, use `.toString()` or `.description()` to get the label only.

## *Hidden* properties

By using symbols as a key, we can create a *hidden* properties of an object so that no other part of code can accidentally access or overwrite.

{% highlight jsx %}
let user  ={
    name: "Eubug"
};

let id = Symbol("id");
user[id] = 1;

// access the data using the symbol as the key
console.log( user[id] ); 
{% endhighlight %}

### what's the benefit?

Why use `Symbol("id")` over a string `"id"`? Because it is safer.
When we use a string as a key, it can be accessed and/or overwritten. But with a symbol as a key, not that only the third-party cannot access nor overwrite, they (probably) won't even see it.

Also imagine you're using multiple scripts written by multiple other developers. They may want to add their own identifier to the object. If they use a string as a key, there may be a conflict and overwrite some properties by accident. But with a symbol, there will be no conflict.

## Symbols in an object literal

To add a symbol in an object literal `{ ... }`, use square brackets.

{% highlight jsx %}
let id = Symbol("id");

let user = {
    name: "Eubug",
    [id]: 1
};
{% endhighlight %}

## for ... in

Symbols are skipped in `for..in` loop. This is part of the general "hiding symbolic properties" principle.

## Object.assign

But when we copy an object using `Object.assign`, it will copy both string and symbol properties.

## Global symbols

All symbols are unique, however, we sometimes  want to create a shared entity using the same id. To achieve this, there exist a *global symbol registry*. Symbols inside this registry is called **global symbols**.

{% highlight jsx %}
// read from the  global registry
let  id  = Symbol.for("id"); // create one if doesn't exist

// read from the  global registry
let idAgain = Symbol.for("id");

console.log( id === idAgain ); // true
{% endhighlight %}

> Symbols inside the registry are called global symbols. If we want an application-wide symbol, accessible everywhere in the code – that’s what they are for.

## Symbol.keyFor

- `Symbol.for(key)` returns a symbol by name
- `Symbol.keyFor(sym)` returns a name by global symbol.
--> internally looks up in the *global registry*, so it doesn't work for non-global symbols; it will return `undefined`.

{% highlight jsx %}
// get symbol by name
let sym = Symbol.for("name");
let sym2 = Symbol.for("id");
let localSym = Symbol("local");

// get name by symbol
console.log( Symbol.keyFor(sym) ); // name
console.log( Symbol.keyFor(sym2) ); // id
console.log( Symbol.keyFor(localSym) ); // undefined, not global

// but we can use '.description'
console.log( localSym.description ); // local
{% endhighlight %}

## System symbols

There exist many *system symbols* that JavaScript uses internally.
For example:

- `Symbol.hasInstance`
- `Symbol.isConcatSpreadable`
- `Symbol.iterator`
- `Symbol.toPrimitive`
- ...and so on

You can see the full list of Well-Known Symbols [here](https://tc39.es/ecma262/#sec-well-known-symbols).

## Reference
- [The Modern JavaScript Tutorial](https://javascript.info)