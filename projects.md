---
layout: blog
title: Projects
---
{% for post in site.projects %}
<a href="{{ post.url }}">
    {{ post.title }}
</a>
{% endfor %}