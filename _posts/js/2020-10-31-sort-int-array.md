---
category: javascript
url_path: '/sort'
title: "Sort numbers in an array"
type: 'javascript'

layout: null
---

## sort()
simply calling a `sort()` wont do it for you since JS sorts data **alphabetically by default** even it's a number.
```js
let data = [120, 70, 50, 30, 120, 230];

data.sort();   // output: [120, 120, 230, 30, 50, 70] (6) = $1
```

So you'll have to pass in **Comparator** or some comparing definition of your own.

## Ascending Order
```js
let data = [120, 70, 50, 30, 120, 230];

data = data.sort((a, b) => {
  return a - b;
})
// output: [30, 50, 70, 120, 120, 230] (6) = $1
```

## Descending Order
```js
let data = [120, 70, 50, 30, 120, 230];

data = data.sort((a, b) => {
  return b - a;
})
// output: [230, 120, 120, 70, 50, 30] (6) = $1
```