---
category: javascript
url_path: '/arithmetic'
title: "Dividing number by 10"
type: 'javascript'

layout: null
---

I was solving [this](https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/) question from the Leetcode.

This problem basically asked me to separate each digit from an integer and do some calculations.

My first attempt was
```js
let n = 234;

while (n > 0) {
  let temp = n % 10;
  n /= 10;

  // ...
}
```

but it didn't work properly. In JavaScript, seems like the divison has do with floats. When I divide by 10, it actually becomes like `0.9999999998`.
So I need to use `floor()`.

```js
let n = 234;

while (n > 0) {
  let temp = n % 10;
  n = Math.floor(n / 10); // like this

  // ...
}
```
