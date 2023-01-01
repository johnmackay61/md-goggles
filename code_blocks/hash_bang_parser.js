/**
 * Parse hash bang parameters from a URL as key value object.
 * 
 * For repeated parameters the last parameter is effective.
 * 
 * If = syntax is not used the value is set to null.
 * 
 * #x&y=3 -> { x:null, y:3 }
 * 
 * @param aURL URL to parse or null if window.location is used
 * 
 * @return Object of key -> value mappings.
 */
function parseHashBangArgs(aURL) {

	aURL = aURL || window.location.href;
	
	var vars = {};
	var hashes = aURL.slice(aURL.indexOf('#!') + 2).split('&');

    for(var i = 0; i < hashes.length; i++) {
       var hash = hashes[i].split('=');
      
       if(hash.length > 1) {
    	   vars[hash[0]] = hash[1];
       } else {
     	  vars[hash[0]] = null;
       }      
    }

    return vars;
}
