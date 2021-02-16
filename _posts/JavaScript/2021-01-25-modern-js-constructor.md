---
layout: post
title:  "Modern JS 4.5: Constructor, operator 'new'"
date:   2021-01-25 07:00:00 +1400
category: JavaScript
permalink: /modern-js/constructor
lang: en
---

In JavaScript, constructors are not a special type of a function. They are just regular functions. So there are two conventions to specify a constructor function:

1. Named with capital letter first
2. Should be executed only with `new` operator.

{% highlight jsx %}
function User(name) {
	this.name = name;
	this.age = 19;
}

let user = new User('Eubug');

console.log(user.name); // Eubug
console.log(user.age); // 19
{% endhighlight %}

A constructor function creates an empty object, add properties (if needed), and then return `this`.

{% highlight jsx %}
function User(name) {
	// this = {}; (implicitly)
	
	// add properties to 'this'
	this.name = name;
	this.age = 19;
	
	// return this; (implicitly)
}
{% endhighlight %}

So `let user = new User('Eubug')` gives the same result as:

{% highlight jsx %}
let user = {
	name: "Eubug",
	age: 19,
};
{% endhighlight %}

The purpose of a constructor - **to create a reusable object creation code**

## Mode test: `new.target`

We mentioned that the constructor function is same as a regular function. It means we can omit the `new` operation.

{% highlight jsx %}
function User() { ... }

User();
new User();
{% endhighlight %}

We can actually check to see whether a function was called with `new` or not. That is `new.target`.

{% highlight jsx %}
function User() { 
	console.log(new.target);
}

console.log(User()); // undefined
console.log(new User()); // function User() {...}
{% endhighlight %}

Using this idea, we can give users more freedom when creating a new object:

{% highlight jsx %}
function User() {
	if (!new.target) { // if a function was called without 'new'
		return new User();
	}
	
	// if called with 'new'
	return this;
}
{% endhighlight %}

However, this is not recommended since it makes it harder to understand whether the user is calling a constructor function to create an object or just calling a regular function.

### return in constructor

When no `return` is specified in constructor functions, it will return `this`.
When it is defined, it will return that particular object.

{% highlight jsx %}
// returns 'this'
function User() {
	this.name = "Eubug";
}

// also returns 'this'
function User2() {
	this.name = "Eubug";
	return;
}

// returns an object with name: "AdminEubug"
function Admin() {
	return { name: "AdminEubug" };
}
{% endhighlight %}

## Methods in constructor

We can use a constructor function to initialize not only properties but methods as well.

{% highlight jsx %}
function User(name) {
	this.name = name;
	
	this.sayHi = function() {
		console.log(`Hi! ${this.name}.`);
	}
}

let user = new User("Eubug");
user.sayHi(); // Hi! Eubug
{% endhighlight %}

## Reference
- [The Modern JavaScript Tutorial](https://javascript.info)