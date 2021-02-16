---
layout: post
title:  "React basic: Rendering Elements"
date:   2021-02-01 07:00:00 +1400
category: React
permalink: /react-basic/rendering-elements
lang: en
---

An element describes what you want to see on the screen

{% highlight jsx %}
const element = <h1>Hello, world</h1>;
{% endhighlight %}

React elements are plain objects and cheap to create unlike browser DOM elements. **React DOM takes care of updating the DOM to match the react elements**.

Don't get confuse React elements with a *component*. Components are *made of* React elements.

## Rendering an Element into the DOM

Applications built with just React normally have a single "root" DOM node.

{% highlight html %}
<div id="root">
    <!-- everything inside will be managed by React DOM -->
</div>
{% endhighlight %}

To render a React element into a DOM node, we pass both to `ReactDOM.render()`.

{% highlight jsx %}
const element = <h1>Hello, World!</h1>
ReactDOM.render(element, document.getElementById('root'));
{% endhighlight %}

## Updating the Rendered Element

React elements are *immutable*. It is like a single frame in a movie. Once it's created, you cannot change its children nor attributes.

At this point, the only way to update them is to create a new element and pass it to `ReactDOM.render()`.

For example:

{% highlight jsx %}
function tick() {
    const element = (
        <div>
            <h1>Hello, world!</h1>
            <h2>It is {new Date().toLocaleTimeString()}.</h2>
        </div>
    );
    ReactDOM.render(element, document.getElementById('root'));}
}

setInterval(tick, 1000);
{% endhighlight %}

This code calls `ReactDOM.render()` every second from `setInterval()` callback.

In practice, most React apps will run `ReactDOM.render()` only once. We will soon learn how to update rendered elements without calling `ReactDOM.render()` multiple times.

## React Only Updates What’s Necessary

React DOM compares the elements and its children to the previous one, and only applies the DOM updates necessary to bring the DOM to the desired state.

For example, go ahead and run the previous `tick()` function and inspect it with the browser tools. Although you passed the whole `element`, you can see that only the  `Date()` (text) node whose contents have changed gets updated by React DOM.

## Reference
[Rendering Elements - React](https://reactjs.org/docs/rendering-elements.html)