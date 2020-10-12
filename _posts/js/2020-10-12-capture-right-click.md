---
category: javascript
url_path: '/event'
title: "Capturing the right-click event"
type: 'javascript'

layout: null
---

I thought it was going to be something like `rightClick` but it was `contextmenu` event;

```js
card.addEventListener('contextmenu', e => {
    /* code */
})
```

This event will be triggered when I `right-click` on cards.
