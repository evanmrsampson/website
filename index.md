---
title: emrs
layout: homepage
---

<div id="intro">
    <p>
        I'm a 23 year old software dev based in Maine.
        Here you will find an eclectic collection of various media, such as software projects, games, and musings about games.
        I'm not really sure who this website is for, other than me.
    </p>
</div>
<div>
    <h2 class="chromatic">Software</h2>
        {% for post in site.software %}
            <h3> {{ post.title }} - testerrrr</h3>
        {% endfor %}
    <h2 class="chromatic">Games</h2>
        {% for post in site.games %}
            <h3> {{ post.title }} - testerrrr</h3>
        {% endfor %}
    <h2 class="chromatic">Writing</h2>
        {% for post in site.writing %}
            <h3> {{ post.title }} - testerrrr</h3>
        {% endfor %}
</div>