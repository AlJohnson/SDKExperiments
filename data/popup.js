/** 
 * author: Al Johnson 
 * 
 * */


var thiss = this;

var state = null;

function init1() {
    
    

	$('button#openExtensionPage').click(function(event) {
	    var reqMsg = {func : "openExtensionPage"};
//	    chrome.runtime.sendMessage(reqMsg);
	});
    $('button#loggedInRequest').click(function(event) {
        var reqMsg = {func : "loggedInRequest"};
//        chrome.runtime.sendMessage(reqMsg);
    });
    
    
};



//document.addEventListener('DOMContentLoaded', function () {
//	  init1();
//	});
init1();





