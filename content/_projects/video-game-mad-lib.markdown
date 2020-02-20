---
layout: blog
title:  "Video Game Mad Lib"
date:   2019-09-18 -400
card: gb.png
---

For the last few months I've wanted to do something using the [Giant Bomb API](https://www.giantbomb.com/api/). It allows you to query a wiki for all sorts of user-generated / video game-related data. I entertained a couple ideas in my head, but none of them stuck. At one point I considered making an "autoshipper". The idea was to randomly pair two video game characters and tweet about it. Something along the lines of: "I ship Luigi and Solid Snake". However, when considering the implications that sometimes video game characters are children, I dropped the idea. My ethics professor would be proud.

A few weeks later I was playing around with a different idea: mad lib generation. I did some cursory googling and found [MadLibber](https://github.com/SamSamskies/madlibber). This ruby gem did basically what I wanted: generated a mad lib from an input string. I thought to myself, "Cool! Now what?" I thought about trying to recycle a project I did in college that used EPUB files as a data source, but that would involve finding my old laptop. Once found, I would have to put the hard drive in an external casing (the laptop is completely hosed). Alas, if I had known how to use git at 19! Instead, I remembered the Giant Bomb API.

On a Monday evening after work I got started. I decided to use the user-created game descriptions as the input text and output it to the console all pretty. I got the game descriptions, pulled the HTML string from a json object. It was going smoothly until I realized that HTML is not a regular language. Since I wanted to print it nice and pretty, I couldn't throw out the tags, as I wanted to keep the context. For example, if something came in a li tag, I didn't want to lose that it was in a list.

Considering I don't know how to write a parser for a non-regular language, and that it's a lot more work than I want to do, I installed nokogiri! Bless that gem, it made my life so much easier. So I built a pretty printer using nokogiri and I finally had a nice looking input string-- most of the time. Unfortunately, I realized the downside of using user-generated HTML content is that there is no guarantee it will be well-formed or coherent.

So, occasionally, the input string turns out to be hot garbage. Additionally, when the input string isn't perfect, MadLibber goes a little nuts and leaves unresolved parsing tokens in the string. My super dumb solution to this problem was to use regular expressions to remove the leftovers. However, when there's a leftover token, the whole thing is whack anyway. Perhaps I should have just ditched the malformed inputs and requeryed. 

When I got to this point on a Thursday night I decided to put it down. I learned that leaning too heavily on user-generated data is a recipe for a headache. This was three-ish weeks ago and I have yet to get back to it. Although, I am busy with other stuff so check back soon (hehe). Maybe I'll make it an interactive Twitter bot, or an API that you can just hit for a random mad lib. Either way, the bones of the beast currently lie [in a GitHub repo](https://github.com/evanmrsampson/vglib).