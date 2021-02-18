---
layout: post
title:  "Modern JS 5.8: WeakMap and WeakSet"
date:   2021-02-18 22:05:00 +1400
category: JavaScript
permalink: /modern-js/weakmap-and-weakset
lang: en
---

We learned from previous [garbage collection](https://javascript.info/garbage-collection) section that JavaScript engine stores a value in memory as long as it's reachable.

For instance:
{% highlight js %}
// we can access the value via reference (eubug)
let eubug = { name: "Eubug" };

// overwirte the reference
eubug = null;

// the object will be removed by the engine
{% endhighlight %}

Properties of an object, elements, or other data structures are considered reachable and kept in memory while data is in memory.

So we can put an object into an array, overwrite the reference, and yet we can still access the object because the array that stored the reference to the object is still alive:
{% highlight js %}
let eubug = { name: "Eubug" };
let arr = [eubug];

eubug = null;

// wont be garbage-collected
console.log( arr[0] ); // {name: "Eubug"}
{% endhighlight %}

Similarly, we can use an object as a key in a regular `Map`, and while the `Map` is alive, the object wont be garbage-collected.

`WeakMap` is fundamentally different in this aspect. It doesn't prevent garbage-collection of key objects.

## WeakMap
In `WeakMap`, keys **must** be objects not primitive values:

{% highlight js %}
let obj = {};
let weakMap = new WeakMap();
weakMap.set(obj, "ok"); // works fine (obj key)

// can't use a string as the key
// TypeError: Attempted to set a non-object key in a WeakMap
weakMap.set("test", "Whoops"); 
{% endhighlight %}

Unlike `Map`, if there are no other references to the object in `WeakMap`, that object will be garbage-collected:

{% highlight js %}
let eubug = {name: "Eubug"};
let weakMap = new WeakMap();
weakMap.set(eubug, "...");

console.log(weakMap.get(eubug)); // "..."

// overwrite the reference
eubug = null;

// now eubug is removed from the memory
console.log(weakMap.get(eubug)); // undefined
{% endhighlight %}

If you print `weakMap` you'll see that the data still exists inside it but you just can't access it since our key (`eubug` object) no longer exists. `WeakMap` doesn't support iteration and methods like `keys()`, `values()`, or `entries()` in `Map`, so we can't even try to print all elements in the `WeakMap`.

### Methods in WeakMap
- `weakMap.get(key)`
- `weakMap.set(key, value)`
- `weakMap.delete(key)`
- `weakMap.has(key)`

Since we don't exactly know when the JavaScript engine will clean-up (garbage-collect) reference-lost objects, the current element count of a `WeakMap` is unknown. This is why it we don't even have the `length` method.

### use case: additional data
If we're working with an object that *belongs* to other code (like a 3rd-party) and we only want those data to be alive while the object exists, then this is when `WeakMap` comes in handy.

For instance, we can associate some secret data with an existing object but we don't want this to be seen when the object is destroyed:
{% highlight js %}
weakMap.set(eubug, "world top secrets");

eubug = null;
// eubug died; 'world top secrets' will be destroyed automatically
{% endhighlight %}

### use case: visitors data
Let say we want to keep a visit counts for users. We can store the information in `WeakMap` and when the user leaves, that is the object only exists as a key, the information will be destroyed automatically.

{% highlight js %}
// visitsCount.js
let visitsCountMap = new WeakMap(); // weakmap: user => visits count

// increase the visits count
function countUser(user) {
	let count = visitsCountMap.get(user) || 0;
	visitsCountMap.set(user, count + 1);
}
{% endhighlight %}

{% highlight js %}
// main.js
let eubug = { name: "Eubug" };

// count eubug's visits
countUser(eubug); 

// later eubug leaves
eubug = null;
{% endhighlight %}

### use case: caching
**Caching** is another good use case for the `WeakMap`. 

We can store (*"cache"*) results from a function, so that future calls on the same object can reuse it. But when we're done with the cache and try to delete those objects, the cache will still be in the memory if we use `Map` which takes up the memory.

We can use `WeakMap`:

{% highlight js %}
// cache.js
let cache = new WeakMap();

// calculate and remember the result
function process(obj) {
	if(!cache.has(obj)) {
		// calculate the result for some object, obj
		let result = obj;
		
		cache.set(obj, result);
	}
	
	return cache.get(obj);
}
{% endhighlight %}

{% highlight js %}
// main.js
let obj = { /* some object */};

let result1 = process(obj);
let result2 = process(obj);

// ...later, when the object is not needed any more:
obj = null;
{% endhighlight %}

Now we can't check the length or size of the `WeakMap` but it is or soon will be zero. When object gets garbage collected, cached data will also me removed.

---

## WeakSet
`WeakSet` behaves similarly as how `WeakMap` behaves to the `Map`:
- similar to `Set`, but we can only add objects.
- an object exists in the set while it is reachable from somewhere else.
- it supports `add`, `has` and `delete`.
- doesn't support `size` nor `keys()` and no iterations.

---

The most notable limitation of `WeakMap` and `WeakSet` is the absence of iterations, and the inability to get all current content.

## Reference
- [https://javascript.info/weakmap-weakset](https://javascript.info/weakmap-weakset)