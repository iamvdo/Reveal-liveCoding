LiveCoding in Reveal.js
=================

A plugin for live coding CSS, HTML, SVG in [Reveal.js](https://github.com/hakimel/reveal.js/).

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

Follow this steps on the `<code>` tag you want to use for live coding:
- add a `contenteditable` attribute (to make it editable)
- add a `.liveCoding` class.
- add a `data-livecoding-id` attribute: the value is the `id` you want to target.

Here is a full example:

```html
<pre><code class="liveCoding" data-livecoding-id="myElement" contenteditable>
  .title{
    color: red;
  }
</code></pre>

<div id="myElement">
  <p class="title">Hello</p>
</div>
```

In Reveal, by default, code is highlighted with highlight.js (by detecting the language) and a class is added (eg. 
css, xml) on `<code>`. This class is used by LiveCoding to update the code properly.

If you disable highlight.js, or use another highlighter, please:
- add a `.language-*` class on the `<code>` tag. (eg `.language-css`, `.language-markup`, ...)

##Notes

- If you want to use PrefixFree, just load it before this plugin as a dependency. **The code will be automatically prefixed while live coding.**
