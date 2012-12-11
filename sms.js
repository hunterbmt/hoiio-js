//import http.js if not exits
var isImported = document.getElementById('http') != undefined
if (!isImported) {
    var script = document.createElement('script');
    script.src = 'hoiio-js/http.js';
    script.type = 'text/javascript';
    script.defer = true;
    script.id = 'http';
    var head = document.getElementsByTagName('head').item(0);
    head.appendChild(script);
}

var hoiio_sms = {
    init: function (app_id, access_token) {
        hoiio_sms.app_id = app_id;
        hoiio_sms.access_token = access_token;
        hoiio_http.init();
    },
    send: function (dest, msg, callbackFunction, options) {
        var params = {
            app_id: hoiio_sms.app_id,
            access_token: hoiio_sms.access_token,
            dest: dest,
            msg: msg
        };

        if (options != undefined) {
            var sender_name = options['sender_name'];
            var tag = options['tag'];
            var notify_url = options['notify_url'];

            if (sender_name != undefined) {
                params.sender_name = sender_name;
            }
            if (tag != undefined) {
                params.tag = tag;
            }
            if (notify_url != undefined) {
                params.notify_url = notify_url
            }
        }
        hoiio_http.makeHttpRequest("https://secure.hoiio.com/open/sms/send", params, "POST", callbackFunction)
    },
    bulk_send: function (dest, msg, callbackFunction, options) {
        var params = {
            app_id: hoiio_sms.app_id,
            access_token: hoiio_sms.access_token,
            dest: dest,
            msg: msg
        };

        if (options != undefined) {
            var sender_name = options['sender_name'];
            var tag = options['tag'];
            var notify_url = options['notify_url'];

            if (sender_name != undefined) {
                params.sender_name = sender_name;
            }
            if (tag != undefined) {
                params.tag = tag;
            }
            if (notify_url != undefined) {
                params.notify_url = notify_url
            }
        }
        hoiio_http.makeHttpRequest("https://secure.hoiio.com/open/sms/bulk_send", params, "POST", callbackFunction)
    },
    history: function (callbackFunction, options) {
        var params = {
            app_id: hoiio_sms.app_id,
            access_token: hoiio_sms.access_token
        };
        if (options != undefined) {
            var from = options['from'];
            var to = options['to'];
            var page = options['page'];
            var page_size = options['page_size'];

            if (from != undefined) {
                params.from = from;
            }
            if (to != undefined) {
                params.to = to;
            }
            if (page != undefined) {
                params.page = page
            }
            if (page_size != undefined) {
                params.page_size = page_size
            }
        }
        hoiio_http.makeHttpRequest("https://secure.hoiio.com/open/sms/get_history", params, "POST", callbackFunction)
    },
    rate: function (dest, incoming, msg, callbackFunction) {
        var params = {
            app_id: hoiio_sms.app_id,
            access_token: hoiio_sms.access_token,
            dest: dest,
            incoming: incoming,
            msg: msg
        };
        hoiio_http.makeHttpRequest("https://secure.hoiio.com/open/sms/get_rate", params, "POST", callbackFunction);
    },
    queryStatus: function (txn_ref, callbackFunction) {
        var params = {
            app_id: hoiio_sms.app_id,
            access_token: hoiio_sms.access_token,
            txn_ref: txn_ref
        };
        hoiio_http.makeHttpRequest("https://secure.hoiio.com/open/sms/query_status", params, "POST", callbackFunction)
    }
}