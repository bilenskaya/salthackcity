This is a template for a very good, minimal, yet beautifully designed
static blog engine — Toto CMS.

Features
--------

-   Minimalist and readable design.
-   HTML5 compatible.
-   Supports all of major browsers.
-   Embedded Web Fonts.
-   Adaptive and flexible viewport layout.
-   Support Retina/HiDPI displays.
-   RSS Feed with full posts.
-   Automatic image captioning (read further).
-   Support for text footnotes.
-   Clean and organised Archives page.
-   HTML based navigation, no generators.


Automatic Image Captioning
--------------------------

A very simple but handy feature when rendering images. If
you provide alternative text to image-link markdown in you post like
this: `![Text Here](http://link-to.your/image.png)`, the template will
print-out that alternative text as a figure caption for the image automatically,
so you keep your markdown free of html.


Installation and Toto Versions
------------------------------

Original toto gem doesn’t support Ruby 1.9 very well, so I modified
`Gemfile` a bit to make it work well. If you have truncated RSS feed
then you are running old version of toto, check it with latest on on
[GitHub][].

If you want to be clean with your code just replace `gem 'toto'` with
`gem "toto", :git => 'git://github.com/cloudhead/toto.git'` in your
`Gemfile`. By default it’s already done for you.

Configuration
-------------

This template supports all the default configurations that toto has, you can
override defaults in `config.ru` rack file.

Heroku
------

Template is prepared to be published on Heroku, so the only thing you have
to do is run the following lines in terminal:

    $ heroku create myblog
    $ git push heroku master
    $ heroku open

Done, enjoy your blog.

Licence and Contribution
------------------------

You are free to use this theme for personal or commercial use.

Happy blogging!