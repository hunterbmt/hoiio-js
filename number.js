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
var hoiio_number = {
    init: function (app_id, access_token) {
        hoiio_number.app_id = app_id;
        hoiio_number.access_token = access_token;
        hoiio_http.init();
    },
    supportedCountries: function (callbackFunction) {
        var params = {
            app_id: hoiio_number.app_id,
            access_token: hoiio_number.access_token
        };
        hoiio_http.makeHttpRequest("https://secure.hoiio.com/open/number/get_countries", params, "POST", callbackFunction)
    },
    availableNumbers: function (country, state, callbackFunction, options) {
        var params = {
            app_id: hoiio_number.app_id,
            access_token: hoiio_number.access_token,
            country: country,
            state: state
        };
        if (options != undefined) {
            var page = options['page'];
            if (page != undefined) {
                params.page = page;
            }
        }
        hoiio_http.makeHttpRequest("https://secure.hoiio.com/open/number/get_choices", params, "POST", callbackFunction)
    },
    rates: function (country, callbackFunction) {
        var params = {
            app_id: hoiio_number.app_id,
            access_token: hoiio_number.access_token,
            country: country
        };
        hoiio_http.makeHttpRequest("https://secure.hoiio.com/open/number/get_rates", params, "POST", callbackFunction)
    },
    subscription: function (number, duration, callbackFunction) {
        var params = {
            app_id: hoiio_number.app_id,
            access_token: hoiio_number.access_token,
            number: number,
            duration: duration
        };
        hoiio_http.makeHttpRequest("https://secure.hoiio.com/open/number/subscribe", params, "POST", callbackFunction)
    },
    configForwarding: function (number, callbackFunction, options) {
        var params = {
            app_id: hoiio_number.app_id,
            access_token: hoiio_number.access_token,
            number: number
        };
        if (options != undefined) {
            var forward_to = options['forward_to'];
            var forward_sms_to = options['forward_sms_to'];
            var mode = options['mode'];

            if (forward_to != undefined) {
                params.forward_to = forward_to;
            }
            if (forward_sms_to != undefined) {
                params.forward_sms_to = forward_sms_to;
            }
            if (mode != undefined) {
                params.mode = mode;
            }
        }
        hoiio_http.makeHttpRequest("https://secure.hoiio.com/open/number/update_forwarding", params, "POST", callbackFunction)
    },
    subscribedNumbers: function (callbackFunction) {
        var params = {
            app_id: hoiio_number.app_id,
            access_token: hoiio_number.access_token
        };
        hoiio_http.makeHttpRequest("https://secure.hoiio.com/open/number/get_active", params, "POST", callbackFunction)
    }
}