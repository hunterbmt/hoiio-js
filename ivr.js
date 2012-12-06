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

var hoiio_ivr = {
	init: function(app_id,access_token){
		hoiio_ivr.app_id = app_id;
		hoiio_ivr.access_token = access_token;
		hoiio_http.init();
	},
	dial: function(dest,callbackFunction,options){
		var params ={app_id:hoiio_ivr.app_id,access_token:hoiio_ivr.access_token,dest:dest};
		if(options !=undefined){
			var msg = options['msg'];
			var caller_id = options['caller_id'];
			var max_duration = options['max_duration'];
			var tag = options['tag'];
			var notify_url = options['notify_url'];
		
			if(msg !=undefined){
				params.msg = msg;
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
		hoiio_http.makeHttpRequest("https://secure.hoiio.com/open/ivr/start/dial",params,"POST",callbackFunction)
	},
	play: function(session,callbackFunction,options){
		var params ={app_id:hoiio_ivr.app_id,access_token:hoiio_ivr.access_token,session:session};
		if(options !=undefined){
			var msg = options['msg'];
			var tag = options['tag'];
			var notify_url = options['notify_url'];
		
			if(msg !=undefined){
				params.msg = msg;
			}
			if(tag != undefined){
				params.tag = tag;
			}
			if(notify_url != undefined){
				params.notify_url = notify_url
			}
		}
		hoiio_http.makeHttpRequest("https://secure.hoiio.com/open/ivr/middle/play",params,"POST",callbackFunction)
	},
	gather: function(session,notify_url,callbackFunction,options){
		var params ={app_id:hoiio_ivr.app_id,access_token:hoiio_ivr.access_token,session:session,notify_url:notify_url};
		if(options !=undefined){
			var msg = options['msg'];
			var max_digits = options['max_digits'];
			var timeout = options['timeout'];
			var attempts = options['attempts'];
			var tag = options['tag'];
		
			if(msg !=undefined){
				params.msg = msg;
			}
			if(max_digits !=undefined){
				params.max_digits = max_digits;
			}
			if(timeout !=undefined){
				params.timeout = timeout;
			}
			if(attempts !=undefined){
				params.attempts = attempts;
			}
			if(tag != undefined){
				params.tag = tag;
			}
		}
		hoiio_http.makeHttpRequest("https://secure.hoiio.com/open/ivr/middle/gather",params,"POST",callbackFunction)
	},
	record: function(session,notify_url,callbackFunction,options){
		var params ={app_id:hoiio_ivr.app_id,access_token:hoiio_ivr.access_token,session:session,notify_url:notify_url};
		if(options !=undefined){
			var msg = options['msg'];
			var max_duration = options['max_duration'];
			var tag = options['tag'];
		
			if(msg !=undefined){
				params.msg = msg;
			}
			if(max_duration !=undefined){
				params.max_duration = max_duration;
			}
			if(tag != undefined){
				params.tag = tag;
			}
		}
		hoiio_http.makeHttpRequest("https://secure.hoiio.com/open/ivr/middle/record",params,"POST",callbackFunction)
	},
	monitor: function(session,notify_url,callbackFunction,options){
		var params ={app_id:hoiio_ivr.app_id,access_token:hoiio_ivr.access_token,session:session,notify_url:notify_url};
		if(options !=undefined){
			var msg = options['msg'];
			var tag = options['tag'];
			if(msg !=undefined){
				params.msg = msg;
			}
			if(tag != undefined){
				params.tag = tag;
			}
		}
		hoiio_http.makeHttpRequest("https://secure.hoiio.com/open/ivr/middle/monitor",params,"POST",callbackFunction)
	},
	transfer: function(session,dest,callbackFunction,options){
		var params ={app_id:hoiio_ivr.app_id,access_token:hoiio_ivr.access_token,session:session,dest:dest};
		if(options !=undefined){
			var msg = options['msg'];
			var caller_id = options['caller_id'];
			var on_failure = options['on_failure'];
			var tag = options['tag'];
			var notify_url = options['notify_url'];
			
			if(msg !=undefined){
				params.msg = msg;
			}
			if(caller_id !=undefined){
				params.caller_id = caller_id;
			}
			if(on_failure !=undefined){
				params.on_failure = on_failure;
			}
			if(tag !=undefined){
				params.tag = tag;
			}
			if(notify_url != undefined){
				params.notify_url = notify_url;
			}
		}
		hoiio_http.makeHttpRequest("https://secure.hoiio.com/open/ivr/end/transfer",params,"POST",callbackFunction)
	},
	hangup:function(session,callbackFunction,options){
		var params ={app_id:hoiio_ivr.app_id,access_token:hoiio_ivr.access_token,session:session};
		if(options !=undefined){
			var msg = options['msg'];
			var tag = options['tag'];
			var notify_url = options['notify_url'];
			if(msg !=undefined){
				params.msg = msg;
			}
			if(tag != undefined){
				params.tag = tag;
			}
			if(notify_url != undefined){
				params.notify_url=notify_url;
			};
		}
		hoiio_http.makeHttpRequest("https://secure.hoiio.com/open/ivr/end/hangup",params,"POST",callbackFunction)
	},
}