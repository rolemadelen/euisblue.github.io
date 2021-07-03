---
layout: post
title:  "Modern JavaScript 2.9 - 2.14"
subtitle: "Fundamentals: Comparisons • Conditional branching: if, '?' • Logical operators • Nullish coalescing operator '??' • Loops: while and for • The 'switch' statement"
date:   2021-01-09 07:00:00 +1400
author: "J2ieu"
header-img: "img/post-bg-js.jpg"
header-mask: 0.5
catalog: true
hidden: false
lang: en
korean: true
permalink: /en/modern-js/fundamental4/
tags:
  - javascript
<<<<<<< HEAD
  - modern js
=======
  - modern-js
>>>>>>> ba229b1 (Design Modified)
---

## 2.9 Comparisons

### Boolean is the result

All comparison operators return a boolean result:`true` or `false`.

```js
console.log(2 > 1); // true
console.log(2 < 1); // false

let isSame = 2 == 1;
console.log(isSame); // false
```

### String comparison

Strings are compared lexicographically, or "dictionary" order.

```js
console.log('A' > 'Z'); // false
console.log('Java' < 'JavaScript'); // true 
console.log('A' > 'a'); // false
```

Take a look at the last statment. How is JavaScript comparing `A` and `a`, and why is it `false`?

Strings are compared lexicographically, but we need to know how JavaScript is achieving that order.
What we need to know is the *ASCII*, or a unicode.

![ASCII table](/img/in-post/modern-js/fundamental4/ascii-table.png)

Each character is registered with a specific value. For instance, `A` and `a` has a value of `65` and `97` respectievly.

So now let's go back to that last statement:
```js
console.log('A' > 'a');
```

The above code becomes like the below internally, and it's a falsy statement.
```js
console.log(65 > 97); // false
```

### Comparison of different types

When comparing values of different types, JavaScript converts the values to numbers.

For instanc, `true` and `false` becomes `1` and `0` respectively.

```js
console.log('2' > 1);    // true: 2 > 1 으로 변환된다 ;
console.log(true == 1);  // true
console.log(false == 0); // true 
```
### Strict equality

A regular equality check (`==`) cannot differentiate these values:
```js
console.log('0' == 0);   // true
console.log(false == 0); // true
console.log('' == 0);    // true
```

In order to check both the value **and** the type, we need to use the **strict equality operator** (`===`):

```js
console.log('0' === 0);   // false
console.log(false === 0); // false
console.log('' === 0);    // false
```
### Comparsion with *null* and *undefined*

- Don't compare `null` and `undefined` together with a regular check (`==`)
    ```js
    console.log(null == undefined); // true
    console.log(null === undefined); // false
    ```
- Be careful not to do any comparisons (<=, >=, <, >) with a value that may become `null` or `undefined`.
  - `null` becomes `0`
    ```js
    console.log(null > 0); // false
    console.log(null == 0); // false
    console.log(null >= 0); // ttrue
    ```
  - `undefined` becomes `NaN`
    ```js
    console.log(undefined > 0); // false
    console.log(undefined < 0); // false
    console.log(undefined == 0); // false
    ```

## 2.10 Conditional branching: if, '?'

### The “if” statement

We often perform different actions based on different conditions.
For example, we only want to carry an umbrella when it's going to rain or is raining.

To execute different parts of code based on different conditions, we use `if(..)`.

```js
if ( goingToRain ) 
{
    takeUmbrella = true;
} 
else if ( raining ) 
{
    takeUmbrella = true;
}
else // not raining
{
    takeUmbrella = false;
}
```

If first condition is `true`, it executes the code inside the `if` branch, otherwise it moves on and checks the next branch, `else if`.

If none of the condition is `true`, it executes the *default* branch, that is `else`.

### The ternary operator '?'

Sometimes, we need to assign a different value to the variable depending on a condition.

```js
let takeUmbrella;
let isRaining = prompt("Is it raining today? (Y/N)", '');

if (isRaining === 'Y') {
    takeUmbrella = true;
} else {
    takeUmbrella = false;
}

console.log(takeUmbrella);
```

We can use the *ternary* operator to make the code shorter and simpler.

```js
let isRaining = prompt("Is it raining today? (Y/N)", '');
let takeUmbrella = (isRaining === 'Y') ? true : false;
console.log(takeUmbrella);
```

The syntax is `(condition) ? true : false`

Generally, we don't recommened using ternary operator because it makes it harder for one to read and understand the code.

For example, the below code may be shorter:
```js
let takeUmbrella = ( goingToRain ) ? true : 
                   ( raining )     ? true : false;

console.log(takeUmbrella);
```

But the below is clearly a winner in terms of readability.

```js
let takeUmbrella;

if ( goingToRain ) 
{
    takeUmbrella = true;
} 
else if ( raining ) 
{
    takeUmbrella = true;
}
else // not raining
{
    takeUmbrella = false;
}

console.log(takeUmbrella);
```


## 2.11 Logical Operators

### OR "||" 

An expression is `true` if *any* of the arguments are `true`.

```js
console.log(true  || true);  // true
console.log(true  || false); // true
console.log(false || true);  // true
console.log(false || false); // false
```

### OR "||" finds the first truthy value
This is an extended feature of OR operator in JavaScript. 

When we perform OR, it returns the *first* `true` argument.
If all arguments are `false`, it returns the *last* statement.

```js
console.log( 1 || 0 );    // 1
console.log( null || 1 ); // 1
console.log( undefined || null || 0 ); // 0 
```

### AND “&&” 

An expression is `true` only if *all* of the arguments are `true`.

```js
console.log(true  && true);  // true
console.log(true  && false); // false
console.log(false && true);  // false
console.log(false && false); // false
```

### AND “&&” finds the first falsy value
This is an extended feature of AND operator in JavaScript. 

AND operator looks for the *first* falsy argument and returns it. If none of the arguments are falsy, it returns the *last* argument.

```js
console.log( 1 && true ); // true
console.log( 1 && 0 );    // 0 
console.log( null && 1 ); // null
console.log( undefined && null && 0 ); // undefined
```

### Short circuit evaluation

JavaScript checks the expression from left to right, and it stops evaluating when the final result is already determined.

For example, when first truthy value is found in an **OR** expression, the result would be `true` no matter what argument comes afterward.
So, JavaScript stops the evaluation right away and returns `true`. This is *short circuit evaluation*.

Thus, following code is perfectly legal.
```js
/* no error about 'foo' not defined */
if( true || foo.bar.whatever ) {
    console.log('true');
}
```

For the case of **AND**, the short circuit evaluation happens when the engine finds the first falsy argumment.

```js
/* no error about 'foo' and 'bar' not defined */
if( false && foo.bar.anything.works ) {
    console.log("this won't be printed");
}
```

### NOT "!"
The `NOT` operator will invert boolean values:
```js
console.log(!true === false ); // true
console.log(!false === true ); // true
```

### '!!' trick

We can use `Boolean(data)` to type cast from one data to a Boolean data type. But, there's a shortcut to it.

```js
console.log(!!"string"); // true
console.log(!!null);     // false
```


## 2.12 Nullish coalescing operator '??'

> This is a newly added feature to the language. Old browsers may need polyfills.

- The result of `a ?? b`:
  - returns `a` if it's neither `null` or `undefined` otherwise return `b`.
  - equivalent expression using a ternary: <br/> `x = (a != null && a != undefined) ? a : b`

- We can also chain `??` operator:
  - returns the first argument that is neither `null` or `undefined`: <br> ex) `fname ?? lname ?? nickName ?? "Anonymous"`

### Comparsion: '??' and '||'

- `||` returns the first **truthy** argument.
- `??` returns the first **defined** argumnt.

```js
let height = 0;

alert(height || 100); // 100
alert(height ?? 100); // 0   (0 is defined)
```

## 2.13 Loops: for and while

### The "for" loop

```js
for (initializer; conditions; increment/decrement) {
    // statements
}
```

Let's calculate the sum of `1 + 2 + ... + 99 + 100` using the for loop.
```js
let sum = 0;

for(let i=1; i<=100; ++i) {
    sum += i;
}

consol.log(sum); // 5050
```

We can create an infinite loop like the following:

```js
for(;;) {
    // repeat endlessly
} 
```
### The "while" loop

```js
initializer;

while (condition) {
    increment / decrement;
}
```

Unlike the `for` loop, we only pass in *conditions* as an argument. We need to declare initializer outside the loop and increment/decrement the value within the loop.

Here's the same code of calculating the sum from 1 to 100 using the while loop:
```js
let sum = 0;
let i = 1;

while( i <= 100 ) {
    sum += i;
    ++i;
}

console.log(sum); // 5050
```

We can also create an infinite loop in the `while` loop and this one is more intuitive than `for`.
```js
while(true) {
	// repeat endlessly
}
```
### The "do..while" loop

```js
initializer;

do {
    increment / decrement;
} while (condition);
```

And again, let's calculate the sum of 1 to 100:
```js
let sum = 0;
let i = 1;

do {
    sum += i;
    ++i;
} while (i <= 100);

console.log(sum);
```

### "while" vs "do-while"

The `do..while` loop will execute the code at least once even the condition is `false`.
```js
do {
    console.log("this will be printed");
} while (false);
```

So use `do..while` if the code must be executed once before checking the condition, otherwise use `while`.

### Breaking the loop

Normally, a loop terminates when the condition becomes falsy. But we can force the exit at any time using the `break` directive.

The below infinite loop will exit when `i === 7`:

```js
let i = 0;

while(true) {
    if (i == 7) {
        break;
    }

    console.log(i);
    ++i;
}
```
### Continue to the next iteration

We can use the `continue` directive to skip to the next iteration without further executing the code.

The below code console logs all odds between 0 to 10:

```js
for(let i=0; i<10; ++i) {
    if (i % 2 == 0) {
        continue;
    }
    console.log(i); // 1 3 5 7 9
}
```
### Labels for break/continue

Sometimes we need to break out from multiple nested loops at once.

```js
LOOP: 
for (...) {
    for (...) {
        for(...) {
            if (true) {
                break LOOP;
            }
        }		
    }
}
```

The ordinary `break` will only break out from the inner loop. In order to make it work, we will need to add multiple `if` statements to check whether we're breaking the loop from the inside and repeat this for all loops until we're completely out. Or use the `label`.

## 2.14 The "switch" statement

A `switch` statement can replace multiple `if` checks.

```js
switch(x) {
    case '1':  // if (x === '1')
        break;
    case 'value': // if (x === 'value')
        break
    default: // else
}
```

The value of `x` is checked for a strict equality to the value from the `case` in order from top to bottom.

Each `case` statement is similar to `if` and `else if` statements, and `default` is similar to `else`.

### fall through - 1

Notice that in every `case` statement, we have a `break` directive. If we omit the directive, JavaScript will continue to check the next `case` without breaking the `switch` statement. 
Hence, it will *fall through*.

```js
let x = 7;
switch(x) {
    case 7: // if (x === 7)
        console.log('lucky!');
    case 4: // if (x === 4)
        console.log('bad luck!');
    case 1: // if (x === 1)
        console.log("you're the best");
        break;
    default: // else
        console.log('okay');
}
```
The value of `x` is `7`. The first `case` is `true` so it will log the string *lucky* to the console. However, there's no `break` directive. So it will continue to run next cases **without checking** them until it finds the `break` or `switch` reaches the end.

So JavaScript will log these three strings to the console and break before the `default` statement.
```
> lucky!
> bad luck!
> you're the best
```

The above code is equivalent to the code below:
```js
switch(x) {
    case 7: // if (x === 7)
        console.log('lucky!');
        console.log('bad luck!');
        console.log("you're the best");
        break;
    case 4: // if (x === 4)
        console.log('bad luck!');
        console.log("you're the best");
        break;
    case 1: // if (x === 1)
        console.log("you're the best");
        break;
    default: // else
        console.log('okay');
}
```

### fall through - 2

We can intentionally omit the `break` directive to group different cases together.

```js
let num = prompt('enter a number', 0);

switch(num) {
    case '1':
    case '3':
    case '5':
    case '7':
    case '9':
        console.log('It is odd.');
        break;
    case '2':
    case '4':
    case '6':
    case '8':
    case '10':
        console.log('It is even');
        break;
    default:
        console.log('A nummber.');
}
```

We grouped *even* and *odd* cases together by letting it *fall through*.

## Reference
- [2.9 Comparisons](https://javascript.info/comparison)
- [2.10 Conditional branching: if, '?'](https://javascript.info/ifelse)
- [2.11 Logical operators](https://javascript.info/logical-operators)
- [2.12 Nullish coalescing operator '??'](https://javascript.info/nullish-coalescing-operator)
- [2.13 Loops: for and while](https://javascript.info/while-for)
- [2.14 The "switch" statement](https://javascript.info/switch)