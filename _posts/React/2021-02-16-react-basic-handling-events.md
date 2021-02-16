---
layout: post
title:  "React basic: Handling Events"
date:   2021-02-16 21:55:00
category: React
permalink: /react-basic/handling-events
lang: en
---

Handling events with React elements is very similar to handling events on DOM elements. There are some syntax differences:

- React events are named using camelCase, rather than lowercase.
- With JSX you pass a function as the event handler, rather than a string.

For example, the HTML:
{% highlight html %}
<button onclick="activateLasers()">
    Activate Lasers
</button>
{% endhighlight %}

React:
{% highlight jsx %}
<button onClick={activateLasers}>
    Activate Lasers
</button>
{% endhighlight %}

Another difference is that you cannot return `false` to prevent default behavior in React. You must call `preventDefault` explicitly.

In HTML:
{% highlight html %}
<a href="#" onclick="console.log('The link was clicked.'); return false">
    Click me
</a>
{% endhighlight %}

In React:
{% highlight jsx %}
function ActionLink() {
    function handleClick(e) {
        e.preventDefault(); // <-- this part
        console.log('The link was clicked.');
    }

    return (
        <a href="#" onClick={handleClick}>
            Click me
        </a>
    );
}
{% endhighlight %}

In `e.preventDefault()`, this `e` is a [synthetic event](https://reactjs.org/docs/events.html) which is defined according to the [W3C spec](https://www.w3.org/TR/DOM-Level-3-Events/).  

When using React, we don't need to call `addEventListener` to add listeners to a DOM element. When we define a component using the [ES6 class](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes), the common pattern is for an event handler to be a method on the class. 

For example, this `Toggle` component renders a button that lets the user toggle between "ON" and "OFF" states:

{% highlight jsx %}
class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};
        
        // this binding is necessary to make 'this' work in the callback
        this.handleClick = this.handleClick.bind(this); // (*)
    }

    handleClick() {
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }));
    }

    render() {
        return (
            <button onClick={this.handleClick}>
                {this.state.isToggleOn ? 'ON' : 'OFF'}
            </button>
        );
    }
}

ReactDOM.render(
    <Toggle />,
    document.getElementByID('root');
);
{% endhighlight %}

**In JavaScript, class methods are not bound by default.** If we forget to put `bind` in line `(*)` and  call `onClick` method, `this` in `this.handleClick` will be `undefined`.

This is not a React-specific behavior; it's just [how JavaScript function works](https://www.smashingmagazine.com/2014/01/understanding-javascript-function-prototype-bind/). Generally speaking, you should bind the method whenever you refer to a method without `()` after it, such as `onClick={this.handleClick}`.

There are two ways to get around this `bind` method. If you're using the experimental [public class fields syntax](https://babeljs.io/docs/en/babel-plugin-proposal-class-properties), you can use class fields to correctly bind callbacks:
{% highlight jsx %}
class LoggingButton extends React.Component {
    // This syntax ensures 'this' is bound within handlClick.
    // Warning: this is *experimental* syntax
    handleClick = () => {
        console.log('this is:', this);
    }

    render() {
        return (
            <button onClick={this.handleClick}>
                Click me
            </button>
        );
    }
}
{% endhighlight %}

We can also use an [arrow function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions) in the callback instead of class fields syntax:
{% highlight jsx %}
class LoggingButton extends React.Component {
    handleClick() {
        console.log('this is:', this);
    }

    render() {
        // This syntax ensuers 'this' is bound within handClick
        return (
            <button onClick={() => this.handleClick()}>
                Click me
            </button>
        );
    }
}
{% endhighlight %}

An issue with using the *arrow function* in the callback is that it creates a different callback each time the `LoggingButton` renders. This is normally fine; however, imagine this callback is passed as a prop to the lower components. Those components might do an extra re-rendering. So we generally recommend using the first method where binding in the constructor or using the class fields syntax.

## Passing Arguments to Event Handlers
We may want to pass an extra parameter to an event handler. For example, we can do either of the following to pass the row ID:

{% highlight jsx %}
<button onClick={(e) => this.deleteRow(id, e)}> Deleete Row </button>
<button onClick={this.deleteRow.bind(this, id)}> Delete Row </button>
{% endhighlight %}

In both cases, the `e` argument will be passed as a second argument after the ID. We passed it explicitly in an arrow function, but with `bind` any further arguments are automatically forwarded.

## Reference
- https://reactjs.org/docs/handling-events.html
