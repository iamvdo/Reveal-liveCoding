LiveCoding in Reveal.js
=================

A plugin for live coding CSS, HTML, SVG in [Reveal.js](https://github.com/hakimel/reveal.js/).

You can try it here (slide 16): [The Future of CSS (masks)](http://iamvdo.me/conf/2013/meetupHTML5/#/16)

##Install

Just add the plugin as a dependency of Reveal:

```javascript
Reveal.initialize({
  dependencies: [
		// others dependencies
    // ...
    
    // liveCoding plugin
    { src: 'plugin/live-coding/live-coding.js', async: true, condition: function() { return !!document.body.classList; }}

	]
});
```

##Use

Reveal.js uses `<pre>` and `<code>` tags for code.

Follow these steps on the `<code>` tag you want to use for live coding:
- add a `contenteditable` attribute (to make it editable)
- add a `.liveCoding` class.
- add a `.css` (if CSS) or `.xml` (if HTML, SVG...) class (see below).
- add a `data-livecoding-id` attribute: the value is the `id` you want to target.

Here is a full example:

```html
<pre><code class="liveCoding css" data-livecoding-id="myElement" contenteditable>
  .title{
    color: red;
  }
</code></pre>

<div id="myElement">
  <p class="title">Hello</p>
</div>
```

###Language
In Reveal, by default, code is highlighted with highlight.js (by detecting the language) and a class is added (eg. 
css, xml) on `<code>`. This class is used by LiveCoding to update the code properly. BUT, if you disable highlight.js, 
or use another highlighter, please use the HTML5 recommended syntax:
- add a `.language-*` class on the `<code>` tag. (eg `.language-css`, `.language-markup`, ...)

##How LiveCoding works

###CSS

The value of the `data-livecoding-id` attribute is an identifier that is the scope of the live-coding CSS. Thus, it is 
possible to target all descendants of this identifier.
Associated styles are added in a `<style>` tag, at the end of the `<body>`.

###Markup (HTML, SVG...)

The value of the `data-livecoding-id` attribute is an identifier that is the parent of the live-coding code. The content 
of this identifier is replaced by the code you write.


##Notes

- If you want to use PrefixFree, just load it before this plugin as a dependency. **The code will be automatically prefixed while live coding.**
