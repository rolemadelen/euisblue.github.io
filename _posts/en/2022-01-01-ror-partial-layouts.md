---
layout: post
title: "[RoR] How to use partial layouts"
subtitle: "Learn how to create partials with local variables."
date: 2022-01-01 06:00:00 +1400
header-img: "img/post-bg-ds-algo.jpg"
header-mask: 0.6
catalog: true

hidden: false
published: true

lang: "en"
korean: false
japanese: false
permalink: /en/ror-partial-layouts/
tags:
- rails
- partials
---

## Partial Layouts 

Let say we have a file `a.html.erb` and `b.html.erb`.

<br>

a.html.erb
```erb
<div class="container mx-auto">
  <h1> a.html.erb </h1>

  <ul role="list">
    <li>Ruby</li>
    <li>Rails</li>
    <li>C++</li>
    <li>C</li> 
    <li>Python</li>
    <li>JavaScript</li>
    ... 
    ...
    <!-- many more -->
  </ul>
</div>
```

b.html.erb
```erb
<div class="container mx-auto">
  <h1> b.html.erb </h1>

  <ul role="list">
    <li>Ruby</li>
    <li>Rails</li>
    <li>C++</li>
    <li>C</li> 
    <li>Python</li>
    <li>JavaScript</li>
    ... 
    ...
    <!-- many more -->
  </ul>
</div>
```

Both files are identical except `<h1>` tag. I like DRY (Don't Repeat Yourself) method. So lets create a partial template and replace those lines with it.

### Creating a partial
The name of the partials start with an underscore(`_`). I'm going to create a partial `_langList.html.erb` since it's a list of programming languages in the view.


```erb
<ul role="list">
  <li>Ruby</li>
  <li>Rails</li>
  <li>C++</li>
  <li>C</li> 
  <li>Python</li>
  <li>JavaScript</li>
  ... 
  ...
  <!-- many more -->
</ul>
```

There you go. Now lets replace those lines from `a.html.erb` and `b.html.erb`

### Calling a partial

a.html.erb
```erb
<div class="container mx-auto">
  <h1> a.html.erb </h1>
  
  <%= render partial: 'langList' %>
</div>
```

b.html.erb
```erb
<div class="container mx-auto">
  <h1> b.html.erb </h1>

  <%= render partial: 'langList' %>
</div>
```

Note that I didn't use `'_langList'`. You don't need to include the underscore when passing the name. In fact, you shouldn't include it otherwise rails wont be able to locate the file.

<br>

Sometimes you might need to specify the partial in a specific view directory. Let say you have a `_langList.html.erb` inside the `home` view.
```erb
<%= render partial: 'home/langList' %>
```

### Passing local variables
We replaced the list with a `langList` partial but what about those `<h1>` tags? Wouldn't it be nice if we can pass in variables in a partial? We actually can.

<br>

a.html.erb
```erb
<div class="container mx-auto">
  <%= render partial: 'langList', :locals => {:title => "a.html.erb"} %>
</div>
```

b.html.erb
```erb
<div class="container mx-auto">
  <%= render partial: 'langList', :locals => {:title => "b.html.erb"} %>
</div>
```

Using `:locals`, we can pass in variables to our partials. Here, `:title` is the variable I named, and I can use this variable in partial template.

<br>

_langList.html.erb
```erb
<h1> <%= title %> </h1> <!-- not :title -->

<ul role="list">
  <li>Ruby</li>
  <li>Rails</li>
  <li>C++</li>
  <li>C</li> 
  <li>Python</li>
  <li>JavaScript</li>
  ... 
  ...
  <!-- many more -->
</ul>
```

Now if you want, you can actually put those `<div>` inside the partial too.

## Reference
- [Rails Guides - Layouts and Renderings](https://guides.rubyonrails.org/layouts_and_rendering.html)