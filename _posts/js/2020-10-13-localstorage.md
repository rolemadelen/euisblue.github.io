---
category: javascript
url_path: '/db'
title: "localStorage"
type: 'javascript'

layout: null
---

## Local Storage
[Library](https://github.com/jioneeu/library) 프로젝트를 하면서 DB를 뭘 쓸까하다가, 
간단하게 [localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)를 사용하기로 했다.

```js 
let myLibrary = [item1, item2, ...];

// localStorage에 저장
localStorage.setItem('myBooks', myLibrary);

// localStorage에서 값 가져오기
localStorage.getItem('myBooks');
```

`localStorage`의 값들은 전부 문자열로 저장된다. 위 처럼 배열을 그냥 저장해버리면 나중에 제대로 
읽을 수 없다. 그래서 아래와 같이 바꿔준다.

```js 
let myLibrary = [item1, item2, ...];

// localStorage에 저장
localStorage.setItem('myBooks', JSON.stringify(myLibrary));

// localStorage에서 값 가져오기
let myLibrary = localStorage.getItem('myBooks');
myLibrary = JSON.parse(myLibrary);
```

## key 제거하기 
  ```js 
localStorage.removeItem('myBooks');
  ```

## localStorage 초기화
  ```js 
localStorage.clear();
  ```
