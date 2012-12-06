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

var hoiio_voice = {
	init:function(app_id,access_token){
		hoiio_voice.app_id = app_id;
		hoiio_voice.access_token = access_token;
		hoiio_http.init();
	},
	call :function(dest,callbackFunction,options){
		var params ={app_id:hoiio_voice.app_id,access_token:hoiio_voice.access_token,dest2:dest};
		if(options !=undefined){
			var dest1 = options['dest1'];
			var caller_id = options['caller_id'];
			var max_duration = options['max_duration'];
			var tag = options['tag'];
			var notify_url = options['notify_url'];
		
			if(dest1 !=undefined){
				params.dest1 = dest1;
			}
			if(caller_id !=undefined){
				params.caller_id = caller_id;
			}
			if(max_duration !=undefined){
				params.max_duration = max_duration;
			}
			if(tag != undefined){
				params.tag = tag;
			}
			if(notify_url != undefined){
				params.notify_url = notify_url
			}
		}
		hoiio_http.makeHttpRequest("https://secure.hoiio.com/open/voice/call",params,"POST",callbackFunction)
	},
	conference :function(dest,callbackFunction,option){
		var params ={app_id:hoiio_voice.app_id,access_token:hoiio_voice.access_token,dest:dest};
		if(options !=undefined){
			var room = options['room'];
			var caller_id = options['caller_id'];
			var tag = options['tag'];
			var notify_url = options['notify_url'];
		
			if(room !=undefined){
				params.room = room;
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
		hoiio_http.makeHttpRequest("https://secure.hoiio.com/open/voice/conference",params,"POST",callbackFunction)
	},
	hangup :function(txn_ref,callbackFunction){
		var params ={app_id:hoiio_voice.app_id,access_token:hoiio_voice.access_token,txn_ref:txn_ref};
		hoiio_http.makeHttpRequest("https://secure.hoiio.com/open/voice/hangup",params,"POST",callbackFunction)
	},
	history :function(callbackFunction,options){
		var params ={app_id:hoiio_voice.app_id,access_token:hoiio_voice.access_token};
		if(options !=undefined){
			var from = options['from'];
			var to = options['to'];
			var page = options['page'];
			var page_size = options['page_size'];
		
			if(from !=undefined){
				params.from = from;
			}
			if(to != undefined){
				params.to = to;
			}
			if(page != undefined){
				params.page = page
			}
			if(page_size != undefined){
				params.page_size = page_size
			}
		}
		hoiio_http.makeHttpRequest("https://secure.hoiio.com/open/voice/get_history",params,"POST",callbackFunction)
	},
	rate :function(dest1,dest2,callbackFunction){
		var params ={app_id:hoiio_voice.app_id,access_token:hoiio_voice.access_token,dest1:dest1,dest2:dest2};
		hoiio_http.makeHttpRequest("https://secure.hoiio.com/open/voice/get_rate",params,"POST",callbackFunction);
	},
	queryStatus :function(txn_ref,callbackFunction){
		var params ={app_id:hoiio_voice.app_id,access_token:hoiio_voice.access_token,txn_ref:txn_ref};
		hoiio_http.makeHttpRequest("https://secure.hoiio.com/open/voice/query_status",params,"POST",callbackFunction)
	}
}