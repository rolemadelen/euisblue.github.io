---
category: nodejs
url_path: '/nodejs'
title: "Reading terminal inputs"
type: 'node-js'

layout: null
---

Let's say you're trying to read two values from a terminal and console.log it in `foo.js` like the below.
```js
// foo.js

console.log(FIRST INPUT);
console.log(SECOND INPUT);
```

So when we pass in values in terminal, 
```sh
$ node foo.js input1 input2
```

we can get them using `process.argv`, which returns an array.

```js
let args = process.argv;
console.log(args);

/*
'args' contains.... 
[
  '[SOME PATH]/bin/node',
  '[SOME PATH 2]/foo.js',
  'input1',
  'input2'
]
*/
```

- args[0] - path to where `node` is installed.
- args[1] - path of a file you're running currently
- args[2...] - terminal inputs

so we can do
```js
let args = process.argv;

console.log(args[2]);
console.log(args[3]);
```

or

```js
let args = process.argv.splice(2); // ['input1', 'input2']

console.log(args[0]);
console.log(args[1]);
```