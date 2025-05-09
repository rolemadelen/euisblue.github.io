## 4.5 Constructors
In JavaScript, constructors are not a special type of a function. They are just regular functions. So there are two conventions to specify a constructor function:
1. Named with capital letter first
2. Should be executed only with `new` operator.

```js
function User(name) {
    this.name = name;
    this.age = 19;
}

let user = new User('Ipflegen');

console.log(user.name); // Ipflegen
console.log(user.age); // 19
```

A constructor function creates an empty object, add properties (if needed), and then return `this`. 
```js
function User(name) {
    // this = {}; (implicitly)

    // add properties to 'this'
    this.name = name;
    this.age = 19;

    // return this; (implicitly)
}
```

So `let user = new User('Ipflegen')` gives the same result as:

```js
let user = {
    name: "Ipflegen",
    age: 19,
};
```

The purpose of a constructor - **to create a reusable object creation code**

### Mode test: `new.target`
We mentioned that the constructor function is same as a regular function. It means we can omit the `new` operation. 

```js
function User() { ... }

User();
new User();
```

We can actually check to see whether a function was called with `new` or not. That is `new.target`.

```js
function User() { 
    console.log(new.target);
}

console.log(User()); // undefined
console.log(new User()); // function User() {...}
```

Using this idea, we can give users more freedom when creating a new object:
```js
function User() {
    if (!new.target) { // if a function was called without 'new'
        return new User();
    }

    // if called with 'new'
    return this;
}
```

However, this is not recommended since it makes it harder to understand whether the user is calling a constructor function to create an object or just calling a regular function.

### return in constructor
When no `return` is specified in constructor functions, it will return `this`.
When it is defined, it will return that particular object.

```js
// returns 'this'
function User() {
    this.name = "Ipflegen";
}

// also returns 'this'
function User2() {
    this.name = "Ipflegen";
    return;
}

// returns an object with name: "AdminIpflegen"
function Admin() {
    return { name: "AdminIpflegen" };
}
```

### Methods in constructor
We can use a constructor function to initialize not only properties but methods as well.
```js
function User(name) {
    this.name = name;

    this.sayHi = function() {
        console.log(`Hi! ${this.name}.`);
    }
}

let user = new User("Ipflegen");
user.sayHi(); // Hi! Ipflegen
```

## Reference
- [4.5 Constructor, operator "new"](https://javascript.info/constructor-new)