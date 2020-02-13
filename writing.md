---
title: Writing
layout: blog
---
{% for post in site.writing %}
<a href="{{ post.url }}">
    {{ post.title }}
</a>
{% endfor %}