---
layout: blog
title: Projects
---
{% for post in site.projects %}
<div class="card">
    <a href="{{ post.url }}">
        <img src="{{ post.card }}">
        {{ post.title }}
    </a>
</div>
{% endfor %}