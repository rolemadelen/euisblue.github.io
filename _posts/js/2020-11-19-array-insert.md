---
category: javascript
url_path: '/array'
title: "Inserting an element into an array at specefic index"
type: 'javascript'

layout: null
---

I was expecting something like `insert` or `insertAt`, but it was `splice`.

Use `splice(index, 0, item)`

```js
var foo = function(nums, index) {
  let result = []
  for(let i=0; i<index.length; ++i) {
    result.splice(index[i], 0, nums[i]);
  }

  return result;
};
```