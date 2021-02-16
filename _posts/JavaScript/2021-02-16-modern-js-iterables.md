---
layout: post
title:  "Modern JS 5.6: Iterables"
date:   2021-02-16 19:05:00 +1400
category: JavaScript
permalink: /modern-js/iterables
lang: en
---

*Iterable* objects are a generalization of arrays. This is the concept that allows to make any object usable in a `for..of` loop.

Besides `Array`, there are many other built-in objects that are iterable. For instance, `String` is also iterable.

If an object represents a collection (list, set, etc..) of something, then `for..of` is a great syntax to loop over it.

## Symbol.iterator
To make an object iterable, we need to declare `Symbol.iterator` method to the object.

1. When `for..of` starts, it calls that method once and returns an *iterator* -- an object with the method `next`; raise an error if not found.
2. Onward, `for..of` works only with that method `next`.
3. When `for..of` wants the next value, it calls `next()` on that object.
4. The result of `next()` must have the form `{done: Boolean, value: any}`, where `done = true` means that the iteration is finished, otherwise `value` is the next value.

{% highlight js %}
let range = {
    from: 1,
    to: 5
};

// step 1
range[Symbol.iterator] = function() {
    // step 2
    return {
        current: this.from,
        last: this.to,
        
        // step 3
        next() {
            // stpe 4
            if (this.current <= this.last) {
                return { done: false, value: this.current++ };
            } else {
                return { done: true };
            }
        }
    }
};

// we can do this
for (let num of range) {
	console.log(num); // 1, 2, 3, 4, 5
}
{% endhighlight %}

### core feature of iterables
**Separation of concerns**.
- The `range` itself does not have the `next()` method.
- Instead, another object, a so-called *"iterator"* is created by the call to `range[Symbol.iterator]()`, and its `next()` generates values for the iteration.

## String is iterable
For a string, `for..of` loops over its characters:
{% highlight js %}
for (let char of "test") {
    console.log( char ); // t, e, s, t
}
{% endhighlight %}

## Calling an iterator explicitly
Besides using the `for..of`, there's another way to iterate an object. We call the iterator directly:

{% highlight js %}
let str = "Hello";

let iterator = str[Symbol.iterator]();

while (true) {
    let result = iterator.next();
    if (result.done) break;
    console.log(result.value);
}
{% endhighlight %}

This reminds of iterators in C++. Anyway, this direct calls are rarely needed in JavaScript but it does gives you more control over the process than `for..of`.

The benefit of direct call is that we can split the iteration: *iterate a bit, do something else, and then resume later*.

## Iterables and array-likes
Although these terms are look-alike, they're different.

- **iterables**: objects that implement `Symbol.iterator` method.
- **Array-likes**: objects that have indexes and `length`.

An object can be iterable, array-like, or both. For instance, strings are both iterable and array-like.

But an iterable object may be not array-like and vice versa.

## Array.from
`Array.from` takes an iterable or array-like value and makes a *"real"* `Array` from it. Then we can call array methods on it.

{% highlight js %}
let arrayLike = {
    0: "Hello",
    1: "World",
    length: 2
};

let arr = Array.from(arrayLike); // (*)
console.log(arr.pop()); // World (method works)
{% endhighlight %}

The line `(*)` takes the object and examines it for being an iterable or array-like, then makes a new array and copies all items to it.

The same happens for an iterable:
{% highlight js %}
let arr = Array.from(range); // 'range' from the example above
console.log(arr); // [1, 2, 3, 4, 5]
{% endhighlight %}

The `Arry.from` syntax allows us to provide an optional *"mapping"* function.

{% highlight js %}
Array.from(obj,[, mapFn, thisArg])
{% endhighlight %}

The `mapFn` can be a function that will be applied to each element before adding it to the array, and  `thisArg` allows us to set `this` for it.

{% highlight js %}
// square each number
let arr = Array.from(range, num => num * num);
console.log(arr); // [1, 4, 9, 16, 25]
{% endhighlight %}

## Reference
- https://javascript.info/iterable