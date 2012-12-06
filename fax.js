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

var hoiio_fax = {
	init:function(app_id,access_token){
		hoiio_fax.app_id = app_id;
		hoiio_fax.access_token = access_token;
		hoiio_http.init();
	},
	send:function(dest,file,callbackFunction,options){
		var params ={app_id:hoiio_fax.app_id,access_token:hoiio_fax.access_token,dest:dest,file:file};
		
		if(options !=undefined){
			var filename = options['filename'];
			var caller_id = options['caller_id'];
			var tag = options['tag'];
			var notify_url = options['notify_url'];
		
			if(filename !=undefined){
				params.filename = filename;
			}
			if(caller_id !=undefined){
				params.caller_id = caller_id;
			}
			if(tag != undefined){
				params.tag = tag;
			}
			if(notify_url != undefined){
				params.notify_url = notify_url
			}
		}
		hoiio_http.makeHttpRequest("https://secure.hoiio.com/open/fax/send",params,"POST",callbackFunction)
	},
	history:function(callbackFunction,options){
		var params ={app_id:hoiio_fax.app_id,access_token:hoiio_fax.access_token};
		if(options !=undefined){
			var from = options['from'];
			var to = options['to'];
			var page = options['page'];
			var page_size = options['page_size'];
			var type = options['type'];
			var src = options['src'];
			var dest = options['dest'];
			var tag = options['tag'];
		
			if(from !=undefined){
				params.from = from;
			}
			if(to != undefined){
				params.to = to;
			}
			if(page != undefined){
				params.page = page;
			}
			if(page_size != undefined){
				params.page_size = page_size;
			}
			if(type!=undefined){
				params.type = type;
			}
			if(src!=undefined){
				params.src = src;
			}
			if(dest!=undefined){
				params.dest = dest;
			}
			if(tag!=undefined){
				params.tag = tag;
			}
		}
		hoiio_http.makeHttpRequest("https://secure.hoiio.com/open/fax/get_history",params,"POST",callbackFunction)
	},
	rate :function(dest,incoming,callbackFunction){
		var params ={app_id:hoiio_fax.app_id,access_token:hoiio_fax.access_token,dest:dest,incoming:incoming};
		hoiio_http.makeHttpRequest("https://secure.hoiio.com/open/fax/get_rate",params,"POST",callbackFunction);
	},
	queryStatus :function(txn_ref,callbackFunction){
		var params ={app_id:hoiio_fax.app_id,access_token:hoiio_fax.access_token,txn_ref:txn_ref};
		hoiio_http.makeHttpRequest("https://secure.hoiio.com/open/fax/query_status",params,"POST",callbackFunction)
	}
}
