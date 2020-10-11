---
category: javascript
url_path: '/dom'
title: "Disable Selection + Click & Check tagName in EventTarget"
type: 'javascript'

layout: null
---

## Disabling
### Right mouse click
```js
document.addEventListener('contextmenu', event => event.preventDefault());
```

### Selection 
```css
  /* iOS Safari */
  -webkit-touch-callout: none;
  /* Safari */
  -webkit-user-select: none;
  /* Konqueror HTML */
  -khtml-user-select: none;
  /* Firefox */
  -moz-user-select: none;
  /* Internet Explorer/Edge */
  -ms-user-select: none;
  /* Non-prefixed version, currently
      supported by Chrome and Opera */
  user-select: none;
```

## Check tagName in EventTarget
I had a structure that looks something like the below
```html 
<div>
  <img />
  <p> ... </p>
</div>
```

I wanted to `addEventListener('click', ...)` only to the `div` tag, that is, only occurs when 
I click on the `div` not the `img` nor `p` tag. But it did. 

So I used `tagName` from the `eventTarget` to specify the tag like the below.

```js
 card.addEventListener('click', e => {
      if (e.target.tagName === 'DIV') /* code */
  });
```

If there's a better way or correct way to do it, please let me know.

