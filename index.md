---
title: emrs
layout: homepage
---

<div id="intro">
    <p>
        I'm a 23 year old software dev based in Maine. I hate lobster and winter, both of which Maine has in spades. I love video games, being mediocre at skateboarding, being mediocre at guitar, and being pretty good at programming. 
        Here you'll find a collection of posts about software projects, game projects, and my thoughts on particular pieces of media. 
    </p>
</div>
<div>
    <h2 class="chromatic">Projects</h2>
        {% for post in site.projects %}
            <a href="{{ post.url }}">
                {{ post.title }}
            </a>
        {% endfor %}
    <h2 class="chromatic">Writing</h2>
        {% for post in site.writing %}
            <a href="{{ post.url }}">
                {{ post.title }}
            </a>
        {% endfor %}
</div>