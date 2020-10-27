---
category: etc
url_path: '/firebase'
title: "Firebase Setup + DB + Storage"
type: 'etc'

layout: null
---

## Setup
Read the official [Firebase documentation](https://firebase.google.com/docs/web/setup) for the installation and initial setup. 

After the initial setup, take a look at your `index.html`.

```html
<!-- The core Firebase JS SDK is always required and must be listed first -->
  <script src="https://www.gstatic.com/firebasejs/7.24.0/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
    https://firebase.google.com/docs/web/setup#available-libraries -->
```

As the second comment notes, please [visit](https://firebase.google.com/docs/web/setup#available-libraries) that website and 
include SDKs that you're using. For DB and Storage, it will look like the below.

```html
  <!-- The core Firebase JS SDK is always required and must be listed first -->
  <script src="https://www.gstatic.com/firebasejs/7.24.0/firebase-app.js"></script>

  <!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->
  <script src="https://www.gstatic.com/firebasejs/7.24.0/firebase-storage.js"></script>
  <script src="https://www.gstatic.com/firebasejs/7.24.0/firebase-database.js"></script>
```

I forgot to add those two scripts and spent the whole day trying to figure out why it's not working.

## Database

### Add data

Official [Firebase Realtime Database](https://firebase.google.com/docs/database/web/read-and-write) documentation.

```js
let database = firebase.database();

...

// Get a key for a new Book.
let newBookKey = firebase.database().ref().child('books').push().key;

// A new book entry.
let bookData = new Book(...);
myBooks.push(bookData);

// Write the new post's data simultaneously in the posts list and the user's post list.
let updates = {};
updates['/books/' + newBookKey] = bookData;

firebase.database().ref().update(updates);
```

Then take a look at your firebase console DB, you'll see updated data.

### Read data

```js
let myBooks = [];

...

function loadData() {
    database.ref('/books/').once('value').then(function (snapshot) {
        snapshot.forEach(function (child) {
            let x = child.val();
            let b = new Book(x.title, x.author, x.img, x.read, x.key);
            myBooks.push(b);
        })
    });
}
```

## Storage

Official [Firebase Storage](https://firebase.google.com/docs/storage/web/start) documentation.

Below code reads a file from the Storage and gets the URL.
```js
let storage = firebase.storage();

...

// Create a reference to the file we want to download
var starsRef = storage.ref().child(book.img);

// Get the download URL
starsRef.getDownloadURL().then(function (url) {
    // Insert url into an <img> tag to "download"
    img.src = url;
})
```