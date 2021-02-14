---
layout: post
title:  "Modern JS 5.5: Array methods"
date:   2021-02-11 07:00:00
category: JavaScript
---

We've seen couple methods that add/remove in the previous chapter (check the related post).

This chapter introduces few other methods.

### splice

We can use `delete` to delete an element from the array.

{% highlight javascript %}
let arr = ["My", "name", "is", "Eu", "Eubug"];
delete arr[3]; // remove "Eu"

console.log( arr[3] ); // undefined
console.log( arr ); // ["My", "name", "is", , "Eubug"]
console.log( arr.length ); // still 5
{% endhighlight %}

As you can see from the `arr.length`, we didn't actually remove the space that item was occupied; we just set it to undefined. What we actually want is, delete the value and its space. We can use `splice`.

The syntax:

{% highlight javascript %}
arr.splice( start [, deleteN, elem1, ..., elemN])
{% endhighlight %}

- it modifies the `arr`.
- starting from the index `start`, it replaces `deleteN` items with `elem1, ...., elemN` at their place. If `elem1, ..., elemN` is not provided, it simply removes the item from the list.
- negative indexes are allowed; it specifies the position from the end of the array.
- returns the array of removed elements.

{% highlight javascript %}
let arr = ["My", "name", "is", "Eu", "Eubug"];
arr.splice(3, 1); // delete "Eu"

console.log( arr[3] ); // Eubug
console.log( arr ); // ["My", "name", "is", "Eubug"]
console.log( arr.length ); // 4
{% endhighlight %}

We can also insert elements without removing any. Just set `deleteN` to `0`.

### silce

The syntax:

{% highlight javascript %}
arr.slice([start], [end])
{% endhighlight %}

It creates a subarray from `start` to `end` (not including it).

It is similar to `string.slice` except that `arr.silce` create subarrays instead of substrings.

As you can see from the syntax, both boundaries are optional. When both are omitted, it creates a copy of the original array which is often used.

{% highlight javascript %}
let arr = [1, 2, 3];
let copy = arr.slice();
copy[2] = 5;

console.log( arr );  // [1, 2, 3]
console.log( copy ); // [1, 2, 5]
{% endhighlight %}

### concat

the syntax:

{% highlight javascript %}
arr.concat(arg1, arg2, ...)
{% endhighlight %}

- does not modify the `arr`.
- accepts any values or arrays.
- if no argument is given, the array itself is copied.

### Symbol.isConcatSpreadable

When you `concat` an object, it will add the object as a whole:

{% highlight javascript %}
let arrayLike = {
    0: "something",
    length: 1,
};

console.log( [1].concat( arrayLike ) ); 
// [1, {0: "something", length: 1}]
{% endhighlight %}

To copy over values only, you can add `Symbol.isConcatSpreadable` property:

{% highlight javascript %}
let arrayLike = {
    0: "something",
    1: "else",
    [Symbol.isConcatSpreadable]: true,
    length: 2,
};

console.log( [1].concat( arrayLike ) ); 
// [1, 'something', 'else']
{% endhighlight %}

## Iterate: forEach

We can use `arr.forEach` method to run a function for every element of the array.

{% highlight javascript %}
arr.forEach(function(item, index, array)) {
    // ... do something
}
{% endhighlight %}

For example, we can call `alert` on every element.

{% highlight javascript %}
arr = [1, 2, 3];
arr.forEach(alert); 
{% endhighlight %}

Or we can be more specific:

{% highlight javascript %}
arr = ["apple", "banana", "carrot"]

arr.forEach((item, inedx, arr) => {
    console.log( `${item} is at index ${index} in ${array}` );
})
{% endhighlight %}

## Searching in array

### indexOf / lastIndexOf / includes

These methods all have the same syntax.

- `arr.indexOf(item, from)` - looks for `item` starting from index `from`, and returns the index where it was found, otherwise `1`
- `arr.lastIndexOf(item, from)` - same, but starts from the array end.
- `arr.includes(item, from)` - looks for `item` starting from index `from`. return `true` if found.

{% highlight javascript %}
let arr = [1, 0, false];

console.log( arr.indexOf(0) ); // 1
console.log( arr.indexOf(false) ); // 2
console.log( arr.indexOf(null) ); // -1

console.log( arr.includes(1) ); // true
{% endhighlight %}

These methods use `===` comparison. So, when it looks for `false`, it will exactly look for `false` not the zero.

### which methods should we use?

- For the inclusion check, use `includes`.
- If you want these find methods to handle `NaN` correctly, use `includes`.
- If you want to know the exact index, use `indexOf` or `lastIndexOf`.

{% highlight javascript %}
const arr = [NaN];
console.log( arr.indexOf(NaN) ); // -1 (should be 0)
console.log( arr.includes(NaN) ); // true (correct)
{% endhighlight %}

### find and findIndex

To find an object with the specific condition, use `arr.find(fn)`.

The syntax:

{% highlight javascript %}
let result = arr.find(function(item, index, array) {
    // if true is returned, item is returned and iteration is stopped
    // returns undefined if nothing found
});
{% endhighlight %}

- `item` is the element.
- `index` is its index.
- `array` is the array itself.

{% highlight javascript %}
let users = [
    {id: 1, name: "John"},
    {id: 2, name: "Pete"},
    {id: 3, name: "Mary"}
];

let user = users.find(item => item.id < 3);
console.log(user.name); // John
{% endhighlight %}

As you can see from the above example, we can ignore other arguments and only use `item` which is very common. Also keep in mind that `arr.find(fn)` stops iterating once it finds `true`; so only `"John"` is returned although there are `"Pete"` and `"Mary"` whose `item.id < 3`.

`arr.findIndex` is same except that it returns the index not the element itself. In falsy scenario it returns `-1`.

### filter

The `arr.find(fn)` looks for the first element that meets our condition. If there are many, we can use `arr.filter(fn)`. It returns an array of all matching elements.

{% highlight javascript %}
let results = arr.filter(function(item, index, array) {
    // if true item is pushed to results and the iteration continues
    // returns empty array if nothing found
});
{% endhighlight %}

For example:

{% highlight javascript %}
let users = [
    {id: 1, name: "John"},
    {id: 2, name: "Pete"},
    {id: 3, name: "Mary"}
];

let someUsers = users.filter(item => item.id < 3);
console.log( someUsers.length); // 2
{% endhighlight %}

## Transform an array

### map

- one of the most useful and often used method.
- it calls the function for each element of the array and returns the array of results.

The syntax:

{% highlight javascript %}
let result = arr.map(function(item, inedx, array) {
    // returns the new value instead of item; 
});
{% endhighlight %}

For example, here we transform each element into its length:

{% highlight javascript %}
let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length);
console.log(lengths); // 5, 7, 6
{% endhighlight %}

### sort(fn)

The method `sort(fn)` sorts the array *in place*, changing its element order and returns the sorted array; the returned value is usually ignored.

**The items are sorted as strings by default.**

{% highlight javascript %}
let arr = [1, 2, 15];
arr.sort();

console.log( arr ); // 1, 15, 2
{% endhighlight %}

We can pass in a function as an argument in `sort()` to supply our own sorting order.

{% highlight javascript %}
function compare(a, b) {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
}

let arr = [1, 2, 15];
arr.sort(compare);
console.log(arr); // 1, 2, 15
{% endhighlight %}

### A comparison function may return any number

A comparison function only required to return a positive number to say "greater" and a negative number to say "less".

So we can modify our `compare` function for numeric values like the below and it will work as we intended:

{% highlight javascript %}
function compare(a, b) {
    return a - b;
}

let arr = [1, 2, 15];
arr.sort(compare);
console.log(arr); // 1, 2, 15
{% endhighlight %}

or just use the arrow function:

{% highlight javascript %}
arr.sort( (a, b) => a - b);
{% endhighlight %}

### reverse

The `reverse` method reverses the order of elements in `arr`.

{% highlight javascript %}
let arr = [1, 2, 3, 4, 5];
arr.reverse

console.log( arr ); // 5, 4, 3, 2, 1
{% endhighlight %}

It also returns the array after the reversal but is normally ignored since the original array is modified.

### split and join

The `str.split(delim)` method is used to split the string into an array by the given delimiter `delim`.

{% highlight javascript %}
let names = "Alex, Bean, Chris";
let arr = names.split(', ');

for (let name of arr) {
    console.log(`A message to ${name}.`);
}
{% endhighlight %}

We can use the optional second argument in `str.split(delim, len)` to limit the array length to `len`.

We can split the string into an array of letters:

{% highlight javascript %}
let str = "Eubug";
console.log( str.split('') ); // ["E", "u", "b", "u", "g"]
{% endhighlight %}

---

The method `arr.join(glue)` creates a string of `arr` items joined by `glue` between them.

For instance:

{% highlight javascript %}
let arr = ["Apple", "Banana", "Carrot"];
let str = arr.join('-');
console.log(str); // Apple-Banana-Carrot
{% endhighlight %}

### reduce | reduceRight

We use `reduce` and `reduceRight` to calculate a single value based on the array.

The syntax:

{% highlight javascript %}
let value = arr.reduce(function(accumulator, item, index, array) {
    // ...
}, [inditial]);
{% endhighlight %}

- `accumulator` is the result of the previous function call (equals `initial` the first time - if provided).
- `item` is the current array item.
- `index` is its position.
- `array` is the array.

For example, we can use `reduce` to get a sum of an array:

{% highlight javascript %}
let arr = [1, 2, 3, 4, 5];
the result = arr.reduce((sum, current) => sum + current, 0);
console.log(result); // 15
{% endhighlight %}

The `arr.reduceRight` does the same except that it goes from right to left.

## Array.isArray

We cannot use `typeof` to distinguish arrays in JavaScript since they're just an object.

{% highlight javascript %}
console.log( typeof({}) ); // object
console.log( typeof([]) ); // same
{% endhighlight %}

Instead, we can use `isArray()` in Array.

{% highlight javascript %}
console.log(Array.isArray({})); // false
console.log(Array.isArray([])); // true
{% endhighlight %}

## Most methods support "thisArg"

Almost all array methods that call functions provide an optional additional parameter `thisArg`. The value of `thisArg` becomes `this` for `func`.

This is rarely used.

## Reference
- [Array methods](https://javascript.info/array-methods)
