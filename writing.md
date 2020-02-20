---
title: Writing
layout: blog
---
<div class="card-holder">
    {% for post in site.writing %}
    <a href="{{ post.url }}">
        <div class="card">
            <img src="/images/{{ post.card }}">
            {{ post.title }}
        </div>
    </a>
    {% endfor %}
</div>