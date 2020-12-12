---
category: javascript
url_path: '/clipboard'
title: "Copy strings to the clipboard"
type: 'javascript'
date: '2020-12-12 14:20:00 +0900'

layout: null
---

I used below codes to copy CSS codes into the clipboard for [this](https://github.com/bugxvii/border-radius-previewer) project.

```js
   let dummy = document.getElementById('dummy');
    dummy.innerText = `{
    ${css}
    ${firefox}
    ${safari}
}`;

    var selection = window.getSelection();
    var range = document.createRange();
    range.selectNodeContents(dummy);
    selection.removeAllRanges();
    selection.addRange(range);

    document.execCommand('copy');
    selection.removeAllRanges();
```

<img src="/assets/gifs/borderradius.gif" width="700px" height="400px" alt="demo gif" />


Seems like their are other solutions like ...
```js
let dummy = document.getElementById('dummy');
    dummy.innerText = `{
    ${css}
    ${firefox}
    ${safari}
}`;

    dummy.select(); // this caused an error
    document.execCommand('copy');
```

I got an error saying that `.select()` is not a funciton.. so I had used the first solution.

### Reference
- [Copy outpot of a JS variable to the clipboard](https://stackoverflow.com/questions/33855641/copy-output-of-a-javascript-variable-to-the-clipboard)