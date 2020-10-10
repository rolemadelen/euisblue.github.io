---
category: css
url_path: '/flex'
title: "flex-wrap"
type: 'css'

layout: null
---

아래와 같이 일렬로 나열되어 있을 때, 윈도우 크기에 따라 저절로 다음 줄로 이동하게 끔 wrap할 수 있는 방법이 있을까 찾아 보았다.

![Flex video](/assets/vids/no-wrap.gif)

생각보다 간단했는데 `flex-wrap`을 사용하면 된다. 이미 `flex`를 사용중이었기 때문에 곧바로 적용해봤다.

```css
 #bookshelf {
     display: flex;
     flex-wrap: wrap;
 }
```

![Flex video](/assets/vids/flex-wrap.gif)

## Reference
- [CSS flex-wrap property](https://www.w3schools.com/cssref/css3_pr_flex-wrap.asp)