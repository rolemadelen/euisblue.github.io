---
layout: post
title:  "Modern JS 4.4: Object methods, 'this'"
date:   2021-01-24 07:00:00 +1400
category: JavaScript
permalink: /modern-js/object-methods-this/
lang: en
---

**Object** is an entity that represents the real world object.

{% highlight jsx %}
let user = {
	name: "Eubug",
	age: "19"
};
{% endhighlight %}

Objects in the real world have an action associated to it. For example, a human can *move*, *speak*, *eat*, and so on.. Similarly, objects in JavaScript can have an  *action*.

## Methods

{% highlight jsx %}
let user = {
	name: "Eubug",
	age: "19"
};

function sayHi() {
	console.log("Hi!");
}

// using a declared function
user.sayHi = sayHi;

// using a function expression
user.sayBye = function() {
	console.log("Bye!");
};

user.sayHi(); // Hi!
{% endhighlight %}

We added an *action* or a **method** to the `user` object and it can speak now.

### Method shorthand

{% highlight jsx %}
// these objects do the same
user = {
	sayHi : function() {
		console.log("Hi!");
	}
};

// method shorthand
user = {
	sayHi() {
		console.log("Hi!");
	}
}
{% endhighlight %}

We can omit `function` and just write `sayHi()`. This shorter syntax is easier to read and is preferred to use in almost all cases. *Seems like there're exceptions but not discussed in this unit*.

## "this" in methods

We can access the object from the method using `this` keyword.

{% highlight jsx %}
let user = {
	name: "Eubug",
	sayHi() {
		console.log(`Hi! ${this.name}`);
	}
};

user.sayHi(); // Hi! Eubug
{% endhighlight %}

It is also possible to access the object without using `this`.

{% highlight jsx %}
let user = {
	name: "Eubug",
	sayHi() {
		console.log(`Hi! ${user.name}`);
	}
};

user.sayHi(); // Hi! Eubug
{% endhighlight %}

This approach, however, is risky. We can overwrite the outer object `user` to some other value and now `user.name` will reference something else or wont exist at all.

{% highlight jsx %}
let user = {
	name: "Eubug",
	sayHi() {
		console.log(`Hi! ${user.name}`);
	}
};

let admin = user;
user = null;

admin.sayHi(); // TypeError: null is not an object
{% endhighlight %}

The above code will work if we change `user.name` to `this.name`.

## "this" is not bound

The value of `this` is evaluated during the run-time.

{% highlight jsx %}
let guest = () { name: "Guest" }
let admin = () { name: "Admin" }

function sayHi() {
	console.log(this.name);
};

guest.f = sayHi();
admin.f = sayHi();

guest.f(); // Guest
guest.f(); // Admin
{% endhighlight %}

- Advantage: Reusability
- Disadvantage: More freedom -> more mistakes

## Arrow functions

Arrow functions do not have `this`.

{% highlight jsx %}
let user = {
	firstName: "Eubug",
	sayHi() {
		let arraw = () => alert(this.firstName);
		arrow();
	}
};

user.sayHi(); // Eubug
{% endhighlight %}

## Reference
- [The Modern JavaScript Tutorial](https://javascript.info)