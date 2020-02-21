---
layout: blog
title: Projects
---
<div class="card-holder">
    {% for post in site.projects %}
    <a href="{{ post.url }}">
        <div class="card">
            <img src="/images/{{ post.card }}">
            <div class="label">{{ post.title }}</div>
        </div>
    </a>
    {% endfor %}
</div>