---
layout: post
title:  "Modern JS 2.8: JavaScript Fundamentals III"
date:   2021-01-07 07:00:00 +1400
category: JavaScript
permalink: /modern-js/fundamental3/
lang: en
---

2.8 Basic Operators and Math.

## terms

- operand → what operators are applied to. <br/>
    ex) in `A * B` both `A` and `B` are operands.

- unary operator → an operation with a singly operand. <br/>
    ex) the negation operator(`-`) requires only one operand like `-5`.

- binary operator → an operation with two operands. <br/>
    ex) `A - B`. Binary `-` operator subtracts values.

## math: arithmetic operators
- addition `+`
- subtraction `-`
- multiplication `*`
- division `/`
- remainder `%`
- exponentiation `**`

### modulus `%`

The modulus (`%`) or remainder operator returns the remainder of the integer division of `a` by `b`.

{% highlight jsx %}
let a = 5;
let b = 3;
console.log(a % b); // 2
{% endhighlight %}

### exponentiation `**`

The exponentiation operator `a ** b` is multiplies `a` by itself `b` times.

### string concatenation with binary `+`

When two operands are of type string, the addition operator is used as  a concatenation.

{% highlight jsx %}
let name = 'Eubug';
let s = 'my name is ';
console.log(s + name); // my name is Eubug
{% endhighlight %}

If either one of the operand is a string, the resulted value is also a string.

{% highlight jsx %}
console.log("1" + 2); // 12
console.log(1 + "2"); // 12
console.log(1 + 2); // 3
console.log(1 + 2 + "9") // 39
{% endhighlight %}

String concatenation is only done with the addition operator. When evaluating strings with operators other than the addition, the string will be type cast into the number type.

{% highlight jsx %}
console.log("1" - 2); // -1
console.log(1 - "2"); // -1
console.log(1 - 2); // -1
console.log(1 + 2 - "9") // -6 
{% endhighlight %}

### numeric conversion, unary +

We can use the addition operator as a unary. 

**When the operand is a number, the unary `+` has no effect to the value.** Negative values will remain negative; the unary `+` wont change the sign.

{% highlight jsx %}
let a = 1;
console.log(+a); // 1

let b = -1;
console.log(+b); // -1 (+1 이 아니다)
{% endhighlight %}

But if the operand is not a number, the unary `+` will convert it as a number when evaluating.

{% highlight jsx %}
console.log(+true); // 1
console.log(+false); // 0
console.log(+""); // 0
{% endhighlight %}

It has same effect as `Number(...)`

{% highlight jsx %}
let apples = "2";
let oranges = "3";

console.log(apples + oranges); // 23 
console.log(+apples + +oranges); // 5*
{% endhighlight %}

## operator precedence

Similar to the 'PEMDAS' operation order in Mathematics, JavaScript has its own operator precedence.

## assignment operators

You may have not noticed but `=` is also an operator. This operator is used to assign a data into the variable. Perhaps, it's called the **Assignment Operator**.

### chaining

Multiple assignment operators can also be used. This is called **Chaining**.

{% highlight jsx %}
let a, b, c;
a = b = c = 2;
console.log(a); // 2
console.log(b); // 2
console.log(c); // 2
{% endhighlight %}

### compound assignment operators

We can combine assignment operators with other operators.

- `a += 5` : `a = a + 5`
- `b *= 2` : `b = b * 2`
- `c /= 2` : `c = c / 2`
- `d %= 7` : `d = d % 7`

{% highlight jsx %}
let n = 2;
n *= 3 + 5; // n *= 8

console.log(n); // 16
{% endhighlight %}

## increment & decrement operator

The increment and decrement operator increases and decreases a value by 1.

### pre & post increment

- Pre-increment : `++x`

    Increase the value of the operand first, then continue evaluating the expression if any.

    {% highlight jsx %}
    let x = 2;
    console.log(++x); // 3 ; increase the operand, then print
    console.log(x); // 3 ;
    {% endhighlight %}

- Post-increment : `x++`

    Continue the evaluation with a current state of the operand. Once the evaluation is finished, increase the operand by 1.

    {% highlight jsx %}
    let x = 2;
    console.log(x++); // 2 ; after printing 2, increase it to 3
    console.log(x); // 3 ;
    {% endhighlight %}

### pre & post decrement

- Pre-decrement : `--x`
- Post-decrement : `x--`

Be careful not to use these operators, especially multiple of them, in between other operands and operations. Because... 

1. It makes it difficult to read (readability).
2. Resulted value may be different (Undefined Behavior).

{% highlight jsx %}
let x;
console.log(2 * ++x - x--);
{% endhighlight %}

## bitwise operator

Bitwise operators treat the operand as 32-bit integer number and evaluate them in binary levels.

- AND `&`
- OR `|`
- XOR `^`
- NOT `~`
- LEFT SHIFT `<<`
- RIGHT SHIFT `>>`
- ZERO-FILL RIGHT SHIFT `>>>`

---

## Reference
- [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators)
- [https://javascript.info/operators](https://javascript.info/operators)