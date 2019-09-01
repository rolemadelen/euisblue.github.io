---
layout: page
title: category
permalink: /category/
ref: category
lang: en
---

{% assign siteCtgo = site.categories | sort%}
{% for category in siteCtgo %}
{% assign header = nil %}
{% assign posted = nil %}
  <ul style="list-style-type: none">
    {% for post in category[1] %}
	  {% if post.lang == page.lang %}
			{% if header == nil %}
			  <h3>{{ category[0] }}</h3>
			  {% assign header = true %}
			  {% assign posted = true %}
			{%endif%}
		  <li> <a href="{{ post.url }}">{{ post.title }}</a> <span style="color: #828282; float: right;">{{ post.date | date:"%Y.%m.%d"}}</span></li>
      {% endif %}
    {% endfor %}
	{% if posted == true %}
	  <hr  style="border: 0.5px solid grey; border-radius: 5px; width: 100%;"/>
	{% endif %}
  </ul>
{% endfor %}
