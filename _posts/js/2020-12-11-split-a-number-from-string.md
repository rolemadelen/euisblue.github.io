---
category: javascript
url_path: '/regex'
title: "Split a number from a string"
type: 'javascript'
date: '2020-12-11 23:00:00 +0900'

layout: null
---

I needed to split a number and the string to check if a given value is a proper unit in CSS.
For example, `10em`, `10px`, `10foo`, and so on...

```js
function evaluate(val) {
    let number = val.match(/\d+/g); // split numbers
    let unit = val.match(/[pxem%]+/g); // split the unit [px, em, %]

    if (unit === '' || unit === undefined || unit === null) {
        unit = "px";
    }

    return [number, unit];
}
```

## Reference
- [Split a number from a string](https://stackoverflow.com/questions/42827884/split-a-number-from-a-string-in-javascript/42828284#42828284)