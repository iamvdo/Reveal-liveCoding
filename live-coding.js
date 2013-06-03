/**
* LiveCoding 0.1 for Reveal.js
* Vincent De Oliveira
*/
var LiveCoding = (function() {
	
	// All <code> with ".liveCoding" class
	var allCode = document.querySelectorAll('code.liveCoding');

	for(var i = 0; i < allCode.length; i++){
		update(allCode[i]);

		// update when keyup
		allCode[i].addEventListener('keyup', function(){
			update(this);
		});
	}

	/**
	 * Update
	 */
	function update(code){

		var id = code.attributes.getNamedItem('data-livecoding-id').nodeValue;
		var val = code.textContent;

		// highlight.js and prism.js
		var isCSS = (code.classList.contains('css') || code.classList.contains('language-css'));
		var isMarkup = (code.classList.contains('xml') || code.classList.contains('language-markup') || code.classList.contains('language-xml') || code.classList.contains('language-html') || code.classList.contains('language-svg'));
	
		// if it's CSS
		if(isCSS){

			// if PrefixFree is here
			if(typeof PrefixFree !== "undefined"){
				// prefix code
				val = PrefixFree.prefixCSS(val);	
			}
			
			// cleanup
			val = val.replace(/^\s+/g,'').replace(/\s+$/g,'');
			var reg = /(\{|\})/g;
			val = val.split(reg);
			for(var i = 0; i < val.length - 1; i+=4){
				val[i] = '#' + id + ' ' + val[i];
			}
			val = val.join('');

			// if <style id="liveCoding_9999"> exists, replace content
			if( document.getElementById('liveCoding_' + id) != null ){
				document.getElementById('liveCoding_' + id).innerHTML = val;
			} else {
			// else, create it	
				var style = document.createElement('style');
				style.setAttribute('id','liveCoding_' + id);
				style.innerHTML = val;
				document.body.appendChild(style);
			}

		// else, if it's markup (HTML, SVG, XML...)
		}else if(isMarkup){
			// replace content 
			document.getElementById(id).innerHTML = val;
		}
	}

})();
