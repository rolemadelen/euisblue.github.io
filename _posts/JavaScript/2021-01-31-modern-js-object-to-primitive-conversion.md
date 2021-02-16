---
layout: post
title:  "Modern JS 4.8: Object to Primitive Conversion"
date:   2021-01-31 07:00:00 +1400
category: JavaScript
permalink: /modern-js/object-to-primitive-conversion/
lang: en
---

When we perform arithmetic operations with objects, it will be converted into primitives. For example, results of the following code will be a primitive: `obj + obj`, `obj - obj`, or `alert(obj)`.

1. **boolean conversion**: all objects are `true`.
2. **numeric conversion**: occurs when we subtract objects or apply mathematical functions.
3. **string conversion**: occurs when we output objects like `alert(obj)`.

## ToPrimitive

### object-to-string

Doing an operation with an object where it expects a string:

{% highlight jsx %}
// output 
console.log( obj );

// using object as a property key
let anotherObj[obj] = 123;
{% endhighlight %}

### object-to-number

Doing math operations:

{% highlight jsx %}
// explicit conversion
let num = Number(obj); 

// maths (except binary plus) 
let n = +obj; // unary plus 
let delta = date1 - date2; 

// less/greater comparison 
let greater = user1 > user2;
{% endhighlight %}

### "default"

This conversion occurs when "it's not sure" what type to expect.

For example, a binary `+` can work both with strings as a concatenation or numbers as an addition. In these cases, it uses the `"default"` hint to convert it.

Same goes with the comparison operator (`==`) because we can compare strings, numbers, boolean, or any type.

{% highlight jsx %}
// binary plus uses the "default" hint 
let total = obj1 + obj2; 

// obj == number uses the "default" hint 
if (user == 1) { ... };
{% endhighlight %}

> No "boolean hint"! Remember that all objects are consider to be true.

### How conversion works

JavaScript tries to find and call three object methods:

1. Call `obj[Symbol.toPrimitive](hint)` – the method with the symbolic key `Symbol.toPrimitive` (system symbol), if such method exists,
2. else if hint is `"string"`, try `obj.toString()` and `obj.valueOf()`, whatever exists.
3. else if hint is `"number"` or `"default"`, try `obj.valueOf()` and `obj.toString()`, whatever exists.

## Symbol.toPrimitive

There's a built-in  symbol named `Symbol.toPrimitive` that is used to name the conversion method:

{% highlight javascript %}
obj[Symbol.toPrimitive] = function(hint) {
    // must return a primitive  value
    // hint = one of "string", "number", "defualt"
};
{% endhighlight %}

For example:

{% highlight jsx %}
let user = {
    name: "John",
    money: 1000,

    [Symbol.toPrimitive](hint) {
        console.log(`hint: ${hint}`);
        return hint == "string" ? `{name: "${this.name}"` : this.money;
    }
};

// conversions demo
console.log(user); // hint: string -> {name: "John"}
console.log(+user); // hint: number -> 1000
console.log(user + 500); // hint: default -> 1500
{% endhighlight %}

## toString / valueOf

These are "old-style" way to implement the conversion existed back in the ancient time.

If  there's no `Symbol.toPrimitive`, JavaScript tries to find them and try in the order:

1. `toString -> valueOf` for "string" hint
2. `valueOf -> toString` otherwise

These methods must return a primitive value. If they return something other than primitives, it will be ignored as if there were no method.

By default:

- `toString` method returns a string `"[object Object]"`.
- `valueOf` method returns the object itself.

{% highlight jsx %}
let user = { .. };

console.log(user); // [object Object]
console.log(user.valueOf() === user); // true
{% endhighlight %}

We  can implement these methods instead of `Symbol.toPrimitive`.

{% highlight jsx %}
let user = {
    name: "John",
    money: 1000,

    // for hint == "string"
    toString() {
        return `{name: "${this.name}"}`;
    }

    // for hint == "number" or "default"
    valueOf() {
        return this.money;
    }
};

console.log(user); // hint: string -> {name: "John"}
console.log(+user); // hint: number -> 1000
console.log(user + 500); // hint: default -> 1500
{% endhighlight %}

### catch-all

When `Symbol.toPrimitive` and `valueOf` is absent, `toString()` method will be in charge for all primitive conversions.

{% highlight jsx %}
let user = {
    name: "John",
    money: 1000,

    // for hint == "string"
    toString() {
        return this.name;
    }
};

console.log(user); // hint: string -> John
console.log(+user); // hint: number -> NaN
console.log(user + 500); // hint: default -> John500
{% endhighlight %}

## Return types

These methods do not necessarily return "hinted" primitive. They can return anything.

But the only mandatory rule is that **they must return primitive, not an object**.

## Reference
- [Object to primitive conversion](https://javascript.info/object-toprimitive)
- [http://www.adequatelygood.com/Object-to-Primitive-Conversions-in-JavaScript.html](http://www.adequatelygood.com/Object-to-Primitive-Conversions-in-JavaScript.html)