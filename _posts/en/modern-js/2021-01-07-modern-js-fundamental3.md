---
layout: post
title:  "Modern JavaScript 2.8"
subtitle: "Fundamentals: Basic operators, maths"
date:   2021-01-07 07:00:00 +1400
author: "J2ieu"
header-img: "img/post-bg-js.jpg"
header-mask: 0.5
catalog: true
permalink: /en/modern-js/fundamental3/
hidden: false
lang: en
korean: true
japanese: true
tags:
  - JavaScript
  - Modern JS 
---

#  2.8 Basic operators, maths

## Terms

- *Operand* → what operators are applied to. <br />
    ex) In the multiplication of `A * B`, there are two operands: `A` and `B`.

- *Unary* → has a single operand. <br />
    ex) In `A = -A`, the negation(`-`) reverses the sign of a number.

- *Binary* → has two operands. <br />
    ex) In `A - B`, the minus operator(`-`) subtracts two numbers.

## Maths

- `+` Addition
- `-` Subtraction
- `*` Multiplication
- `/` Division
- `%` Remainder
- `**` Exponentiation

### Remainder %

The modulus operator(`%`) returns the remainder of the integer division of `a / b`.

```js
let a = 5;
let b = 3;
console.log(a % b); // the remainder of 5/3 is 2
```

### Exponentiation **

The exponentiation operator `a ** b` raises `a` to the power of `b`.

```js
console.log( 2 ** 0 );  // 2^0 = 1
console.log( 2 ** 10 ); // 2^10 = 1024
```

### String concatenation with binary +

The plus(`+`) can be used to merge(concatenate) two strings together.

```js
let name = 'Jiieu';
let s = 'my name is ';
console.log(s + name); // my name is Jiieu
```

If either one of the operand is a string, the result is also a string.

```js
console.log("1" + 2); // 12
console.log(1 + "2"); // 12
console.log(1 + 2); // 3
console.log(1 + 2 + "9") // 39
```

However, it's not possible to subtract two different strings.
In the case of the subtraction and division, strings will implicitly converted to a number.

```js
console.log("1" - 2); // -1
console.log(1 - "2"); // -1
console.log(1 - 2); // -1
console.log(1 + 2 - "9") // -6 
```

### Numeric conversion, unary +

The plus(`+`) was used to add numbers or merge strings. It can also be used as an unary operator.

The unary plus won't do anything to an operand if it's a number. 
That is, the value won't became positive even if you apply the unary plus to a negative value.

```js
let a = 1;
console.log(+a); // 1

let b = -1;
console.log(+b); // -1 (it's not +1)
```

But if the operand is not a number, the unary operator converts it into a number.
```js
console.log(+true); // 1
console.log(+false); // 0
console.log(+""); // 0
```

The unary plus has a same effect as `Number(...)`. So as a shortcut, we can do the following.

```js
let apples = "2";
let oranges = "3";

console.log(apples + oranges); // 23 
console.log(+apples + +oranges); // 5
```

## Operator precedence

If an expression has more than one operator, the execution order is defined by their *precedence*, or the default priority order of operators.

Here's an extract from the [precedence table](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence). ![PEMDAS](/img/in-post/modern-js/fundamental3/js-pemdas.png)

The grouping (`()`) operator has the highest priority of 21, followed by the exponentiation(`**`), multiplication(`*`), division(`/`), addition(`+`), and subtraction(`-`).

Taking the first letter of each operators (the grouping is called *Parenthesis*), we call this basic order of operations as PEMDAS.

## Assignment

You may have noticed from the precedence table but, an assignment(`=`) is also an operator.

All operators in JavaScript returns a value and `=` is not an exception.

```js
let a = 1;
let b = 2;

let c = 3 - (a = b + 1);

alert( a ); // 3
alert( c ); // 0
```

### Chaining assignments

Using the fact that `=` assigns a value from *right-to-left*, we can 
have chained assignments.

```js
let a, b, c;
a = b = c = 2;
console.log(a); // 2
console.log(b); // 2
console.log(c); // 2
```

### Compound assignment operator

We often modify the variable and store the new result in the same variable.

```js
let a = 0;  // a = 0
a = a + 5;  // a = 5

let b = 2;  // b = 2
b = b * 10; // b = 20
```

This notation can be shortened using the compond assignment operators.

```js
lat a = 0;
a += 5;     // a = 5

let b = 2;
b *= 10;    // b = 20
```

This *modify-and-assign* operators have the same precedence as a normal assignment, so they run after most other calculations.

```js
let n = 2;
n *= 3 + 5; // n *= 8

console.log(n); // 16
```

### Increment/decrement

There's a special operator that increases or decreases a value by 1.

- **increment** `++`
    ```js
    let x = 2;
    let y = 2;
    console.log(++x); // 3
    console.log(y++); // 2
    ```

- **decrement** `--`
    ```js
    let x = 2;
    let y = 2;
    console.log(--x); // 1
    console.log(y--); // 2
    ```

It's not ideal to use multiple increment/decrement in between expressions for two reasons:
1. it reduces the redability, and
2. the result is unknown => undefined behavior.

```js
let x = 3;
console.log(2 * ++x - x--);
```

## Bitwise operators

Bitwise operators treat arguments as 32-bit integer numbers and work on the level of their binary representation.

These operators are supported in most programming languages.

- `&` AND
- `|` OR
- `^` XOR
- `~` NOT
- `<<` LEFT SHIFT
- `>>` RIGHT SHIFT
- `>>>` ZERO-FILL RIGHT SHIFT

## Reference
- [2.8 Basic operators, maths](https://javascript.info/operators)