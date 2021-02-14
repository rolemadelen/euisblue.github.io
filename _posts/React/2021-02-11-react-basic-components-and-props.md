---
layout: post
title:  "React basic: Components and Props"
date:   2021-02-11 07:00:00
category: React
---

Components lets you split the UI into independent, reusable pieces, think about each piece in isolation.

Think of a component as a function in JavaScript. Components accept arguments (*"props"*) and return React elements describing what should be displayed on the page.

## Function and Class Components

The simplest way to define a component is to write a JavaScript function:

{% highlight jsx %}
function Welcome(props) {
    return <h1>Hello, {props.name}</h1>
}
{% endhighlight %}

This is a valid React component because it accepts a single *props* object argument with data and returns a React element. We call such components *"function components"* because they literally are JavaScript functions.

You can also use an [ES6 class](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes) to define a component:

{% highlight jsx %}
class Welcome extends React.Component {
    render() {
        return <h1>Hello, {this.props.name}</h1>;
    }
}
{% endhighlight %}

## Rendering a Component

We previously checked that we can store DOM tags in a variable:

{% highlight jsx %}
const element = <div />;
{% endhighlight %}

We can also store user-defined components:

{% highlight jsx %}
const element = <Welcome name="Eubug" />;
{% endhighlight %}

When React encounters a user-defined component, it passes JSX attributes and children to this component as a single object, and we call this *"props"*.

> Note: Always start component with a capital letter.
React treats components starting with a lowercase as DOM tags.
`<div />` represents HTML div tag, but `<Div />` represents a component and requires `Div` to be in scope.

## Composing Components

Components can refer to other components in their output. **This lets us use the same component abstraction for any level of detail.**

For example, we can create an `App` component that renders `Welcome` many times:

{% highlight jsx %}
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

function App() {
    return (
    <div>
        <Welcome name="Eubug" />      
        <Welcome name="유버그" />      
        <Welcome name="ユウバグ" />    
    </div>
    );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
{% endhighlight %}

## Extracting Components

We can split components into smaller components.

For example,  consider this `Comment` component:

{% highlight jsx %}
function Comment(props) {
    return (
    <div className="Comment">
        <div className="UserInfo">
        <img className="Avatar"
            src={props.author.avatarUrl}
            alt={props.author.name}
        />
        <div className="UserInfo-name">
            {props.author.name}
        </div>
        </div>
        <div className="Comment-text">
        {props.text}
        </div>
        <div className="Comment-date">
        {formatDate(props.date)}
        </div>
    </div>
    );
}
{% endhighlight %}

First we're going to extract `Avatar`:

{% highlight jsx %}
function Avatar(props) {
    return (
        <img className="Avatar"
            src={props.user.avatarUrl}
            alt={props.user.name}
        />
    )
}
{% endhighlight %}

The `Avatar` doesn't have to know about its parent, `Comment`. We can use the `Avatar` component in many other places not only in the `Comment`. This is why we used a generic name `user` rather than `author`.

**It's a good practice to name your props from the component's own point of view rather than the context in which it is being used.**

Now we're going to extract a `UserInfo` component that renders an `Avatar` next to the user's name:

{% highlight jsx %}
function UserInfo(props) {
    return (
        <div className="UserInfo">
            <Avatar user={props.user} />
            <div className="UserInfo-name">
                {props.user.name}
            </div>
        </div>
    );
}
{% endhighlight %}

And now we can simplify our `Comment` component:

{% highlight jsx %}
function Comment(props) {
    return (
    <div className="Comment">
        <UserInfo user={props.author} />
        <div className="Comment-text">
            {props.text}
        </div>
        <div className="Comment-date">
            {formatDate(props.date)}
        </div>
    </div>
    );
}
{% endhighlight %}

## Props are Read-Only

When we create a component either with a function or a class, it should never modify its own props.

For instance,

{% highlight jsx %}
function sum(a, b) {
    return a + b;
}
{% endhighlight %}

This `sum` function is considered *"pure"* because it doesn't change its own input and will always give same outputs with same inputs.

In contrast, the following function is considered *"impure"* because it changes its own input:

{% highlight jsx %}
function withdraw(account, amount) {
    account.total -= amount;
}
{% endhighlight %}

React is pretty flexible but it has a single strict rule:

**All react components must act like pure functions with respect to their props.**

## Reference
- [Components and Props - React](https://reactjs.org/docs/components-and-props.html)