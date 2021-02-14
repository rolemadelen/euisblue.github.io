---
layout: post
title:  "React basic: State and Lifecycle"
date:   2021-02-13 07:00:00
category: React
permalink: /react-basic/state-and-lifecycle
lang: en
---

Learn how to make a component truly reusable and encapsulated. We'll use `Clock` component as an example here.

Let's start by encapsulating how the clock looks:

{% highlight jsx %}
function Clock(props) {
    return (
        <div>
            <h1>Hello, world!</h1>
            <h2>It is {props.date.toLocaleTimeString()}.</h2>
        </div>
    );
}

function tick() {
    ReactDOM.render(
        <Clock date={new Date()} />,
        document.getElementById('root')
    );
}

setInterval(tick, 1000);
{% endhighlight %}


The fact that the `Clock` sets up a time and updates the UI every second should be an implementation detail of the `Clock`. Ideally we want to write this once and have the `Clock` update itself:

{% highlight jsx %}
ReactDOM.render(
    <Clock />,
    document.getElementById('root');
);
{% endhighlight %}

To implement this, we need to add *"state"* to the `Clock` component.

**State is similar to props, but it is private and fully controlled by the component.**

## Converting a Function to a Class

You can convert a function component like `Clock` to a class in five steps:

1. Create an `ES6 class` that extends `React.component`.
2. Add a single empty method to it called `render()`.
3. Move the body of the function into the `render()` method.
4. Replace `props` with `this.props` in the `render()` body.
5. Delete the remaining empty function declaration.

{% highlight jsx %}
class Clock extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.props.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
{% endhighlight %}

The `render` method will be called every time there's an the component updates. But only a single instance of the `Clock` class will be used as long as the we render the component into the same DOM node. This allows us to use the additional features like local state and lifecycle methods.

## Adding a Local State to a class

There are 3 steps to move the `date` from props to state:

1. Replace `this.props.date` with `this.state.date` in the `render()` method.
2. Add a [class constructor](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes#constructor) that assigns the initial `this.state`.
3. Remove the `date` prop from the `<Clock />` element.

The resulting code looks like this;

{% highlight jsx %}
class Clock extends React.Component {
    constructor(props) {    
        super(props);
        this.state = {
        date: new Date();
    }
}

render() {
    return (
        <div>
            <h1>Hello, world!</h1>
            <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        </div>
        );
    }
}

ReactDOM.render(
    <Clock />,
    document.getElementById('root')
);
{% endhighlight %}

## Adding Lifecycle Methods to a Class

It's important to free up resources taken by the components when they are destroyed.

### mounting

We want to set up a timer whenever the `Clock` is rendered to the DOM for the first time. This is called *"mounting"* in React.

### unmounting

We also want to clear that time whenever the DOM produced by the `Clock` is removed. This is called *"unmounting"* in React.

### lifecycle methods

We can declare special methods on the component class to run some code whan a component mounts and unmounts:

{% highlight jsx %}
class Clock extends React.Component {
    ...

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    ...
}
{% endhighlight %}

These methods are called *"lifecycle methods"*.

The `componentDidMount()` method **runs after the component output has been rendered to the DOM**. This is a good place to set up a timer.

{% highlight jsx %}
componentDidMount() {
    this.timerID = setInterval(
        () => this.tick(),
        1000
    );
}
{% endhighlight %}

And we will tear down the timer in the `componentWillUnmount()` lifecycle method:

{% highlight jsx %}
componentWillUnmount() {
    clearInterval(this.timerID);
}
{% endhighlight %}

Finally, we will implement a method called `tick()` that the `Clock` component will run every second.

We use `this.setState()` to schedule updates to the component local state:

{% highlight jsx %}
tick() {
    this.setState({
        date: new Date(),
    });
}
{% endhighlight %}

---

## The order of the process

1. `<Clock />` is passed to `ReactDOM.render()`.
    - React calls the constructor of the `Clock` component.
    - It initializes `this.state`.
2. React calls the `Clock` components `render()` method.
    - This is how React knows what should be displayed on the screen.
    - React updates the DOM to match the `Clock`'s render output.
3. When the `Clock` output is inserted in the DOM, react calls the `componentDidMount()` lifecycle method.
    - The `Clock` component asks the browser to set up a timer to call the component's `tick()` method once every second.
4. Every second the browser calls the `tick()` method.
    - The `Clock` component schedules a UI update by calling `setState()` with an object containing the current time.
    - Because of the `setState()`, React knows the state has changed, and calls the `render()` method again to update the screen.
    - This time, `this.state.date` in the `render()` method will be different, so the render output will include the updated time.
    - React updates the DOM accordingly.
5. If the `Clock` component is ever removed from the DOM, React calls the `componentWillUnmount()` lifecycle method so the timer is stopped.

## Using state correctly

### do not modify state directly

Always use `setState` to modify the local state:

{% highlight jsx %}
// Wrong
this.state.comment = "Hello";

// Correct
this.setState({
    comment: 'Hello'	
});
{% endhighlight %}

The only place where you can directly assign `this.state` is the constructor.

### state updates may be asynchronous

If you want to calculate values for the next state using `this.props` and `this.state`, you should use the second form of `setState()` that accepts a function rather than an object.

{% highlight jsx %}
this.setState((state, props) => ({
    counter: state.counter + props.increment
}));
{% endhighlight %}

- The first argument, *state*, is the previous state.
- The second argument, *props*, is the prop at the time the update is applied.

## The Data Flows Down

No components can know if a certain component is stateful or stateless, and they don't care whether it is defined as a function or a class.

**This is why state is often called local or encapsulated**. It is not accessible to any component other than the one that owns and sets it.

A component may pass its state down its child using the props:

{% highlight jsx %}
<FormattedDate date={this.state.date} />
{% endhighlight %}

The `FormattedDate` will receive the date via its props and won't know that it is from the `Clock`'s state.

{% highlight jsx %}
function FormattedDate(props) {
    return <h2>It is {props.date.toLocaleTimeString()}.</h2>;
}
{% endhighlight %}

This is called **top-down** or **unidirectional** data flow.
Any data or UI derived from that state can only affect components *below* them in the tree.

## Reference
[React: State and Lifecycle](https://reactjs.org/docs/state-and-lifecycle.html)