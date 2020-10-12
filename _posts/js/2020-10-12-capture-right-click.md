---
category: javascript
url_path: '/event'
title: "Capturing the right-click event"
type: 'javascript'

layout: null
---

Right-click can be captured with the `contextmenu` event. 

```js
// when right-clicked on the card, call removeCard function
card.addEventListener('contextmenu', e => {
    e.preventDefault();
    if (e.target.tagName === 'DIV') removeCard(e.target, index);
})

// Removes specified card from the DOM and array
function removeCard(elem, index) {
  bookshelf.removeChild(elem);
  const _index = myLibrary.indexOf(myLibrary[index]);
  if (_index > -1) {
      myLibrary.splice(_index, 1);
  }
}
```

Above code removes the card (`div`) from the DOM and an array when right-clicked.

![Delete when right-clicked](/assets/gifs/contextmenu-delete.gif)
