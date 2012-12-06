//import http.js if not exits
var isImported = document.getElementById('http') != undefined 
if(!isImported){
	var script = document.createElement('script');
	script.src = 'hoiio-js/http.js';
	script.type = 'text/javascript';
	script.defer = true;
	script.id = 'http';
	var head = document.getElementsByTagName('head').item(0);
	head.appendChild(script);
}
var hoiio_account = {
	init:function(app_id,access_token){
		hoiio_account.app_id = app_id;
		hoiio_account.access_token = access_token;
		hoiio_http.init();
	},
	balance:function(callbackFunction){
		var params ={app_id:hoiio_account.app_id,access_token:hoiio_account.access_token};
		hoiio_http.makeHttpRequest("https://secure.hoiio.com/open/user/get_balance",params,"POST",callbackFunction)
	},
	info:function(callbackFunction){
		var params ={app_id:hoiio_account.app_id,access_token:hoiio_account.access_token};
		hoiio_http.makeHttpRequest("https://secure.hoiio.com/open/user/get_info",params,"POST",callbackFunction)
	}
}