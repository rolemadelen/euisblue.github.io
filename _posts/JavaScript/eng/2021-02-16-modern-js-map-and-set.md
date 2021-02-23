---
layout: post
title:  "Modern JS 5.7: Map and Set"
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
let map = new Map([
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

> **The insertion order is used**. The iteration goes in the same order as the values were inserted. `Map` preserves this order, unlike a regular `Object`.

`Map` has a built-in iteration method called `forEach`:
{% highlight js %}
// runs the function for each (key, value) pair
recipeMap.forEach( (value, key, map) => {
	console.log( `${key}: ${value}`); // cucumber: 500 etc
});
{% endhighlight %}

## Object.entries: Map from Object

We can pass an array (or another iterable) with key/value pairs as an element (or data) of the map when we create one:
{% highlight js%}
// array of [key, value] pairs
let map = new Map([
	['1', 'str1'],
	[1, 'num1'],
	[true, 'bool1']
]);

console.log( map.get('1') ); // str1
{% endhighlight %}

If you already have a plain object and wanting to use this object to create a map, you can use `Object.entries(obj)`:
{% highlight js%}
let obj = {
	name: "Eubug",
	age: 19
};

let map = new Map(Object.entries(obj));

console.log( map.get('name') ); // Eubug
{% endhighlight %}

Keep in mind that the `Object.entries(obj)` method will convert all keys in the plain object to strings. For instance,

{% highlight js%}
let obj = {
	1: 'one'
};

let map = new Map(Object.entries(obj));

console.log( map.get(1) ); // undefined
console.log( map.get('1') ); // 'one'
{% endhighlight %}

## Object.fromEntries: Object from Map
We can do the exact opposite of `Object.entries(obj)` where we turn the existing `Map` to an `Object`:

{% highlight js%}
let prices = Object.fromEntries([
	['banana', 1],
	['orange', 2],
	['meat', 4]
]);

// now prices = { banana: 1, orange: 2, meat: 4}
console.log(prices.orange); // 2
{% endhighlight %}

---

## Set
A `Set` is a special type collection where each value is unique.

### Methods
- `new Set(iterable)` - creates the set. If an `iterable` obj is provided, copies values from it into the set.
- `set.add(value)` - adds a value, returns the set itself.
- `set.delete(value)` - removes the value, returns `true` if `value` existed at the moment of the call, otherwise `false`.
- `set.has(value)` - returns `true` if the value exists in the set, otherwise `false`.
- `set.clear()` - removes everything from the set.
- `set.size` - elements count.

The main feature of `Set` is that repeated calls of `set.add(value)` with the same value don't do anything to the set. That is why each value is unique in the set.

For example, let say you want to log all visitors coming to your party. You don't want to log same person more than once.

So we can use `Set`:
{% highlight js%}
let set = new Set();

let jubug = { name: "Jubug" };
let eubug = { name: "Eubug" };
let mubug = { name: "Mubug" };

// visits
set.add(jubug);
set.add(eubug);
set.add(mubug);
set.add(jubug);
set.add(mubug);

// set keeps only unique values
console.log( set.size ); // 3

for (let user of set) {
	console.log(user.name); // Jubug (then Eubug and Mubug)
}
{% endhighlight %}

## Iteration over Set
We can use either `for..of` or `forEach` to iterate over `Set`:
{% highlight js%}
let set = new Set(["oranges", "apples", "bananas"]);

for (let value of set) console.log(value);

// the same with forEach:
set.forEach((value, valueAgain, set) => {
	console.log(value);
});
{% endhighlight %}

Note the three arguments in `set.forEach`. It's a bit strange but this is for compatibility with `Map`. 

The same methods `Map` has for iterators are also supported:
- `set.keys()` - returns an iterable object for values,
- `set.values()` - same as `set.keys()`, for compatibility with `Map`.
- `set.entries()` - returns an iterable for entries `[key, value]`, exists for compatibility with `Map`.

## Reference
- [https://javascript.info/map-set](https://javascript.info/map-set)