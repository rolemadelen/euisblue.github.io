---
category: etc
url_path: '/firebase'
title: "Firebase setTimeout"
type: 'etc'

layout: null
---

I had below code to load books from the DB and use this data to display it on the web.

```js
window.onload = function () {
    loadData();
    populate();
};
```

But for some reason, it ran the `populate` function fiorst before it finishes the load. So it end up not displaying anything.

I tried using `Promise` but it didn't work. It could be that I didn't fully understand how `Promise` thing works so as work around
I used `setTimeout`.

```js
window.onload = function () {
    loadData();
    setTimeout(function () { populate() }, 700);
};
```
