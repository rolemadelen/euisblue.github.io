---
layout: post
title:  "Modern JS 5.10: Destructuring Assignment"
date:   2021-02-24 20:00:00 +1400
category: JavaScript
permalink: /modern-js/destructuring-assignment
lang: en
---

The two most used data structures in JS are `Object` and `Array`.
- Objects allow us to create a single entity that stores data items by key.
- Arrays allow us to gather data items into an ordered list.

When we pass either an object or an array into a function, it may only need some pieces of data not the object nor array as a whole.

*Destructuring assignment* is a special syntax that allows us to "unpack" arrays or objects into a bunch of variables.

## Array destructuring
{% highlight js %}
// we have an array with the name and surname
let arr = ["John", "Smith"]

// destructuring assignment
// sets firstName = arr[0]
// and surname = arr[1]
let [firstName, surname] = arr;

console.log( firstName ); // John
console.log( surname ); // Smith
{% endhighlight %}

We can also use `split()` or other array-returning methods:
{% highlight js %}
let [firstName, surname] = "John Smith".split(' ');
console.log( firstName ); // John
console.log( surname ); // Smith
{% endhighlight %}

### The rest '...'
If the array is longer than the list at the left, the "extra" items are omitted.

{% highlight js %}
let [name1, name2] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

console.log( name1 ); // Julius
console.log( name2 ); //  Caesar
// further items aren't assigned anywhere
{% endhighlight %}

We can use three dots (`...`) which means *"the rest"*:
{% highlight js %}
let [name1, name2, ...rest] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

// rest is array of items
console.log( rest[0] ); // Consul
console.log( rest[1] ); // of the Roman Republic
console.log( rest.length ); // 2
{% endhighlight %}

The value of the `rest` is the remaining array elements.

### Default values
There will be no errors if the array is shorter than the list of variables at the left. Absent values are considered undefined:
{% highlight js %}
let [firstName, surname] = [];

console.log( firstName ); // undefined
console.log( surname ); // undefined
{% endhighlight %}

We can set the default value:
{% highlight js %}
// default values
let [name = "Guest", surname = "Anonymous"] = ["Julius"];

console.log( name ); // Julius (from array)
console.log( surname ); // 'Anonymous' is a wrong password.
{% endhighlight %}

## Object destructuring
The basic syntax:
{% highlight js %}
let {var1, var2} = {var1:..., var2:...}
{% endhighlight %}

Let's take a look at the example:
{% highlight js %}
let options = {
	title: "Menu",
	width: 100,
	height: 200
};

let {title, width, height} = options;

console.log( title ); // Mnu
console.log( width ); // 120
console.log( height ); // 200
{% endhighlight %}

> orders on the left side does not mater.

### Changing the property name
If you want to assign a property to a variable with another name:
{% highlight js %}
let options = {
	title: "Menu",
	width: 100,
	height: 200
};

// { sourceProperty: targetVariable }
let {width: w, height: h, title} = options;

// width -> w
// height -> h
// title -> title

console.log( title ); // Menu
console.log( w ); // 100
console.log( h ); // 200
{% endhighlight %}

### Default values
Just like Objects, we can set default values using "=":

{% highlight js %}
let options = {
	titl: "Menu"
};

let {width = 100, height = 200, title} = options;

console.log( title ); // Menu
console.log( width ); // 100
console.log( height ); // 200
{% endhighlight %}

### Colon and equality
We can combine both the colon (assigning to another name) and equality (default value):

{% highlight js %}
let options = {
	title: "Menu"
};

let { width: w = 100, height: h = 200, title } = options;

console.log( title ); // Menu
console.log( w ); // 100
console.log( h ); // 200
{% endhighlight %}

### Extract
We can only extract properties that we're going to use:
{% highlight js %}
let options = {
	title: "Menu",
	width: 100,
	height: 200
};

let { title } = options;

console.log( title ); // Menu
{% endhighlight %}

### The  rest pattern "..."
Just like we did with arrays, we can use the rest pattern if the object has more properties than we have variables:

{% highlight js %}
let options = {
	title: "Menu",
	height: 200,
	width: 100
};

// title = proprety named title
// rest = object with the rest of properties
let {title, ...rest} = options;

// now title="Menu", rest={height: 200, width: 100}
console.log( rest.height ); // 200
console.log( rest.width ); // 100
{% endhighlight %}

## Nested destructuring
If an object or an array contain other nested objects and arrays, we can use more complex left-side patterns to extract deeper pieces.

{% highlight js %}
let optinos = {
	size: {
		width: 100,
		height: 200
	},
	items: ["Cake", "Donut"],
	extra: true
};

// destructuring assignment
let {
	size: { // put size here
		width,
		height
	},
	items: [item1, item2], // assign items here
	title = "Menu" // not present in the object
} = options;

console.log( title ); // Menu
console.log( width ); // 100
console.log( height ); // 100
console.log( item1 ); // Cake
console.log( item2 ); // Donut
{% endhighlight %}

## Reference
- [https://javascript.info/destructuring-assignment](https://javascript.info/destructuring-assignment)