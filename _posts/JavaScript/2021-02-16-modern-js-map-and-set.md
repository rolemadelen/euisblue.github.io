---
layout: post
title:  "Modern JS 5.7: Map and Set (I)"
date:   2021-02-16 20:30:00 +1400
category: JavaScript
permalink: /modern-js/map-and-set
lang: en
---

Until now, we've learned following two complex data structures: *Objects* and *Arrays*.

**Objects** are used for storing keyed collections, and **Arrays** are used for storing ordered collections.

But these two are not enough for real life. Let's take a look at the `Map` and `Set`.

## Map
Just like an `Object`, *Map* is a collection of keyed data items. But the difference is that `Map` allows keys of any type.

### methods and properties
- `new Map()` - creates a map.
- `map.set(key, value)` - stores the value by the key.
- `map.get(key)` - returns the value by the key, `undefined` if `key` doesn't exist in map.
- `map.has(key)` - returns `true` if the `key` exists, `false` otherwise.
- `map.delete(key)` - removes the value by the key.
- `map.clear()` - removes everything from the map.
- `map.size` - returns the current element count.

Example:
{% highlight js %}
let map = new Map();

map.set('name', 'Eubug');
map.set(true, 'boolTrue');
map.set(1, 'num1');

console.log( map.get(1) ); // 'num1', keys are not converted to a string
console.log( map.get('name') ); // 'Eubug'

console.log( map.size ); // 3
{% endhighlight %}

**Map can also use objects as keys.**

{% highlight js %}
let eubug = { name: "Eubug" };

// for every user, store their visits count
let visitsCountMap = new Map();

// eubug is the key for the map
visitsCountMap.set(eubug, 123);

console.log( visitsCountMap.get(eubug) ); // 123
{% endhighlight %}

Using objects as keys is one of the most notable and important `Map` features. We can use strings as a key, but not another `Object` as a key in `Object`.

If we try to put `Object` as a key in `Object`, the JavaScript will turn the `Object` into a string and become `[object Object]`.

### SameValueZero
`Map` uses the algorithm [SameValueZero](https://tc39.es/ecma262/#sec-samevaluezero) to compare keys. It's roughly the same as `===` but considers `NaN === NaN` to be true. So we can use `NaN` as key as well.

### Chaining
Every `map.set` call returns the map itself, se we can *"chain"* the calls;
{% highlight js %}
map.set('1', 'str1')
    .set(1, 'num1')
    .set(true, 'bool1');
{% endhighlight %}

## Iteration over Map
There are 3 methods to iterate maps:
- `map.keys()` - returns an iterable for keys.
- `map.values()` - returns an iterable for values,
- `map.entries()` - returns an iterable for entries `[key, value]`, it's used by default in `for..of`.

{% highlight js %}
let map = enw Map([
    ['name', 'Eubug'],
    [true, 'boolTrue'],
    [1, "num1"]
]);

// iterate over keys
for (let key of map.keys()) {
    console.log( key ); // name, true, 1
}

// iterate over values
for (let key of map.keys()) {
    console.log( key ); // Eubug, boolTrue, num1
}

// iterate over [key, value] entries
for (let key of map.keys()) {
    console.log( key ); // ["name", "Eubug"], ... and so on
}
{% endhighlight %}

## Reference 
- https://javascript.info/map-set