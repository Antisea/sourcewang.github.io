---
layout: page
title: About Me
cv: enable
menu: About
---
{% assign current_year = site.time | date: '%Y' %}

SourceWang {{ current_year }}
===

## Contact

- Email： 1154722015@qq.com
- Website：[http://sourcewang.github.io](http://sourcew16.com "http://sourcewang.github.io")

## Skill Keywords

#### Software Engineer Keywords
<div class="btn-inline">
    {% for keyword in site.skill_software_keywords %}
    <button class="btn btn-outline" type="button">{{ keyword }}</button>
    {% endfor %}
</div>

#### Mobile Developer Keywords
<div class="btn-inline">
    {% for keyword in site.skill_mobile_app_keywords %}
    <button class="btn btn-outline" type="button">{{ keyword }}</button>
    {% endfor %}
</div>

#### Web Developer Keywords
<div class="btn-inline">
    {% for keyword in site.skill_web_keywords %}
    <button class="btn btn-outline" type="button">{{ keyword }}</button>
    {% endfor %}
</div>
