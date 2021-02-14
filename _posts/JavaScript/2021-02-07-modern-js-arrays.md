---
layout: post
title:  "Modern JS 5.4: Arrays"
date:   2021-02-07 07:00:00
category: JavaScript
permalink: /modern-js/arrays
lang: en
---

Objects serve good purpose for storing keyed collections of values; however, it is not a good solution to store something in order. Objects are not meant for such use. Instead, we have `Array` structure.

The array is a structure that maintains the order. It is an ordered collection.

## Declaration

There are two syntaxes for creating an empty array:

{% highlight jsx %}
let arr = new Array();
let arr = []; // * almost all the time, this syntax is used
{% endhighlight %}

When using brackets, we can assign initial elements:

{% highlight jsx %}
let fruits = ["Apple", "Orange", "Plum"];
{% endhighlight %}

### trailing comma

{% highlight jsx %}
let fruits = [
    "Apple",
    "Orange",
    "Plum",
];
{% endhighlight %}

This style makes it easier to insert/remove items.

## Access element

Array elements are number, starting with zero:

{% highlight jsx %}
let fruits = ["Apple", "Orange", "Plum"];

console.log( fruits[0] ); // Apple
console.log( fruits[1] ); // Orange
console.log( fruits[2] ); // Plum
{% endhighlight %}

We can print the whole array:

{% highlight jsx %}
console.log( fruits ); // ["Apple", "Orange", "Lemon"]
{% endhighlight %}

We can replace an element:

{% highlight jsx %}
fruits[2] = "Pear"; // now ["Apple", "Orange", "Pear"]
{% endhighlight %}

We can also add an element:

{% highlight jsx %}
fruits[3] = "Lemon"; // ["Apple", "Orange", "Pear", "Lemon"]
{% endhighlight %}

Use `length` to print the total count of the elements in the array:

{% highlight jsx %}
let fruits = ["Apple", "Orange", "Plum"];
console.log( fruits.length ); // 3
{% endhighlight %}

## Methods pop/push, shift/unshift

One of the most common uses of an array is *queue* and *stack*.

### queue

- FIFO (First-In-First-Out).
- `push` appends an element to the end.
- `shift` get an element from the beginning. The 2sd element becomes the 1st.

{% highlight jsx %}
let fruits = ["Apple", "Orange", "Plum"];

fruits.push("Lemon");
console.log( fruits ); // ["Apple", "Orange", "Plum", "Lemon"]

fruits.shift();
console.log( fruits ); // ["Orange", "Plum", "Lemon"];
fruits.shift();
console.log( fruits ); // ["Plum", "Lemon"];
{% endhighlight %}

> `unshift` method adds an element to the beginning of the array.

### stack

- LIFO (Last-In-First-Out).
- `push` adds an element to the end
- `pop` takes an element from the end.

{% highlight jsx %}
let fruits = ["Apple", "Orange", "Plum"];

fruits.push("Lemon");
console.log( fruits ); // ["Apple", "Orange", "Plum", "Lemon"]

fruits.pop();
console.log( fruits ); // ["Apple", Orange", "Plum"];
fruits.pop();
console.log( fruits ); // ["Apple", "Orange"];
{% endhighlight %}

### Internals

Remember that JavaScript has only eight basic data types. Arrays is an object and behaves like an object.

Array elements are stored in memory contiguously.

Although array is an object, it will break if we consider and use an array as if it's a regular object. For instance, we can do this:

{% highlight jsx %}
let fruits = []; // declare an array

fruits[99999] = 5; // assign a property with the index 99999

fruits.age = 25; // create a property with an arbitrary name
{% endhighlight %}

All these are possible because arrays are objects. But now the engine will consider this as non-ordered-collection use of an array, which is just regular object, and will turn off all array-specific optimizations; we lost all benefits of using an array.

So here are ways to misuse an array:

- Add a non-numeric property like `arr.test = 5`.
- Make holes, like add `arr[0]` and then `arr[1000]`.
- Fill the array in the reverse order, like `arr[1000]`, `arr[999]` and so on.

If you're going to use an array, please remember that *Array* is a data structure meant to work with *ordered data*. If you need arbitrary keys, that's probably a hint for you to use an object `{}` not an array.

### Performance

Generally it is faster to work with the end of an array than the beginning. Therefore,

- `push/pop` methods are **fast**.
- `shift/unshift` methods are **slow**.

So why is working with the beginning slower?
Let's take a look operations done at the `shift` method.

1. Remove the element with the index `0`.
2. Move all elements to the left.
3. Update the `length` property.

![https://javascript.info/article/array/array-shift.svg](https://javascript.info/article/array/array-shift.svg)

Similar operations are done with `unshift`. We need to move existing elements to the right.

**The more elements in the array, the more time to move them, more in-memory operations.**

`push/pop` methods do not need to move anything. The `pop` method cleans the index and shortens `length`.

![https://javascript.info/article/array/array-pop.svg](https://javascript.info/article/array/array-pop.svg)

**The `pop` method does not need to move anything, because other elements keep their indexes.**

Operations are similar with the `push` method.

## Loops

{% highlight jsx %}
let fruits = ["Apple", "Orange", "Plum"];

// iterates over array elements
for (let fruit of fruits) {
    console.log( fruit );
}
{% endhighlight %}

The `for..of` gives you an access to its value but index. If you want to get the index of its value, use `for..in`.

{% highlight jsx %}
let fruits = ["Apple", "Orange", "Plum"];

// iterates over array elements
for (let index in fruits) {
    console.log( fruits[index] );
}
{% endhighlight %}

But using `for..in` with arrays are not good idea:

1. The loop `for..in` iterates over *all properties*, not only the numeric ones.
2. The `for..in` loop is optimized for generic objects, not arrays, and thus is 10-100 times slower; it's still fast but we should be aware of the difference.

## A word about "length"

The `length` property does not count number of elements in the array.

{% highlight jsx %}
let arr = [];
arr[100] = 5;

console.log( arr.length ); // 101
{% endhighlight %}

The `length` is actually the greatest numeric index plus one.

Another thing about the `length` is that we can overwrite its value.
When we increase the value,  nothing will happen to the array. But if we decrease it, the array will be truncated.

{% highlight jsx %}
let arr = [1, 2, 3, 4, 5];
arr.length = 2;
console.log( arr ); // [1, 2]

arr.length = 5;
console.log( arr ); // [1, 2]
{% endhighlight %}

So the simplest way to clear the array is doing `arr.length = 0`.

## new Array()

The another syntax to create an array:

{% highlight jsx %}
let arr = new Array("Apple", "Pear", "etc");
{% endhighlight %}

This syntax is rarely used since the brackets `[]` are shorter.

If `new Array` is called with a single argument which is a number, then it creates an array with the given length.

{% highlight jsx %}
let arr = new Array(5); // create an array of length 5
console.log( arr[0] ); // undefined
console.log( arr.length ); // length 5
{% endhighlight %}

So use brackets `[]` to create an array unless you know what you're doing.

## Multidimensional arrays

Arrays can have items that are also arrays:

{% highlight jsx %}
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];

console.log( matrix[0] ); // [1, 2, 3]
console.log( matrix[0][0] ); // 1
console.log( matrix[0][1] ); // 2
console.log( matrix[0][2] ); // 3
{% endhighlight %}

## toString

Arrays have their own implementation of `toString` that returns a comma-separated list of elements.

{% highlight jsx %}
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];

console.log( String(matrix) ); // 1,2,3,4,5,6,7,8,9
{% endhighlight %}

## Don't compare arrays with ==

When you compare arrays with `==` operator, it will return `true` only if they're referencing the same object. There's no special treatment for an array in JavaScript. It just behaves like the object in comparison.

The `==` operator doesn't do item-by-item comparison.

The proper way to compare arrays are by using loops or iteration methods to compare them item-by-item. More details to these methods will be discussed in the next chapter.

##  Note
- All images used in this post is from [https://javascript.info/array](https://javascript.info/array).

## Reference 
- [Modern JavaScript - Arrays](https://javascript.info/array)
