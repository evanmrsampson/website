---
title: Writing
layout: blog
---
<div class="card-holder">
    {% for post in site.writing %}
    <a href="{{ post.url }}">
        <div class="card">
            <img src="/images/{{ post.card }}">
            <div class="label">{{ post.title }}</div>
        </div>
    </a>
    {% endfor %}
</div>