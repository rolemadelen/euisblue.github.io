---
layout: post
title:  "React basic: Starting & Introducing  JSX"
date:   2021-01-31 07:00:00
category: React
---

Starting React and introducing JSX.

## create-react-app

I wanted to set-up my own environment instead of using JSFiddle or Codepen, so I used `create-react-app`.

{% highlight bash %}
$ npx create-react-app my-app
{% endhighlight %}

Detail explanations can be find at the [official website](https://create-react-app.dev/).

You can edit `/src/App.js`.

## Hello World

Run your server. It'll probably use the port 3000 by default.

{% highlight bash %}
$ cd my-app
$ yarn start
{% endhighlight %}

Change the body of `App.js` and save it. It will automatically reload and you'll see `Hello, World!` displayed on the page.

{% highlight jsx %}
function App() {
  return (
    <div className="App">
      <h1>Hello, World!</h1>
    </div>
  );
}

export default App;
{% endhighlight %}

## Introducing JSX

{% highlight jsx %}
const element = <h1>Hello, World!</h1>
{% endhighlight %}

This funky style is neither a JavaScript string nor HTML. It's a syntax extension to JavaScript and JSX stands for *JavaScript XML*. 

It allows us to write HTML code in React which makes it easier to read and write the HTML in React.

### embedding JSX

{% highlight jsx %}
function App() {
    const name = "Eubug";
    const element = <h1>Hello, {name}!</h1>;

    return (
        <div className="App">
            {element}
        </div>
    );
}

export default App;
{% endhighlight %}

When you reload, you will see `Hello, Eubug!`.

We can use curly braces to embed any valid JS expressions in JSX like the variable `name` we used above in the code.

In the example below, we embed the result of a function call from `formatName()`.

{% highlight jsx %}
function App() {
  function formatName(user) {
    return user.firstName + ' ' + user.lastName;
  }

  const user = {
    firstName: "Bug",
    lastName: "Eu"
  };
  
  const element = (
    <h1>
      Hello, {formatName(user)}!
    </h1>
  );

  return (
    <div className="App">
      {element}
    </div>
  );
}

export default App;
{% endhighlight %}

### style recommendation

Take a look at the JSX code below:

{% highlight jsx %}
const element = (
    <h1>
        Hello, {formatName(user)}!
    </h1>
);
{% endhighlight %}

When splitting codes in JSX, react community (or the official doc) recommends to wrap the code with a parenthesis to avoid the pitfalls of [automatic semicolon insertion](https://stackoverflow.com/questions/2846283/what-are-the-rules-for-javascripts-automatic-semicolon-insertion-asi).

### JSX is an expression too!

After compilation, JSX expressions become a regular JS function calls and objects. So we can use JSX inside conditionals, loops, assign it to variables, accept it as arguments, and return it from functions.

{% highlight jsx %}
function getGreeting(user) {
    if( user.name === "Eubug" ) {
        return <div>Nice to meet you, {user.name}!</div>
    } else {
        return <div>Uhh... yeah :) Hello!</div>
    }
}
{% endhighlight %}

### Specifying attributes in JSX

- quotes -> use quotes to specify string literals as attributes.
{% highlight jsx %}
const element = <div tabIndex="0"></div>;
{% endhighlight %}

- curly braces -> use curly braces to embed expression in an attribute.
{% highlight jsx %}
const element = <img src={user.avatarUrl}></img>;
{% endhighlight %}

We cannot use both.

### JSX prevents [Injection Attacks](https://www.acunetix.com/blog/articles/injection-attacks/)

{% highlight jsx %}
const userInput = response.potentialMaliciousUserInput;

// this is safe
const element = <h1>{userInput}</h1>
{% endhighlight %}

By default, React DOM [escapes](https://stackoverflow.com/questions/7381974/which-characters-need-to-be-escaped-in-html) any values embedded in JSX before rendering them. Everything is converted into a string before rendering them; therefore, it is safe from [XSS](https://en.wikipedia.org/wiki/Cross-site_scripting) attacks.

### JSX represents objects

Babel compiles JSX down to `React.createElement()` calls.

These two examples are identical:

JSX: 
{% highlight jsx %}
const element = (
    <h1 classname="greeting">
        Hello, World!
    </h1>
);
{% endhighlight %}

`React.createElement()`:
{% highlight jsx %}
const element = React.createElement(
    'h1',
    {className: 'greeting'},
    'Hello, World!'
);
{% endhighlight %}

`.createElement()` performs a few checks to help you write the bug-free code, but essentially it creates an object like this:

{% highlight jsx %}
/* Note: this is simplied */
const element = {
    type: 'h1',
    props: {
        className: 'greeting',
        children: 'Hello, World!'
    }
};
{% endhighlight %}

These objects are called **React elements**.

## Reference
- [https://reactjs.org/docs/hello-world.html](https://reactjs.org/docs/hello-world.html)
- [https://reactjs.org/docs/introducing-jsx.html](https://reactjs.org/docs/introducing-jsx.html)