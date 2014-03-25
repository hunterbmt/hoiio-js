var HoiioNumber = function(app_id,access_token){
    HoiioNumber.app_id = app_id;
    HoiioNumber.access_token = access_token;
    HoiioNumber.hoiioHttp = HoiioHTTP;
};
HoiioNumber.prototype.supportedCountries = function (callback){
    var params = {
        app_id: HoiioNumber.app_id,
        access_token: HoiioNumber.access_token
    };
    HoiioNumber.hoiioHttp.makeHttpRequest("supportedCountries", params, "POST", callback)
};
HoiioNumber.prototype.availableNumbers = function(country, state, callback, options){
    var params = {
        app_id: HoiioNumber.app_id,
        access_token: HoiioNumber.access_token,
        country: country,
        state: state
    };
    if (options && options['page']) {
        params.page = options['page'];
    }
    HoiioNumber.hoiioHttp.makeHttpRequest("availableNumbers", params, "POST", callback)
};
HoiioNumber.prototype.rates = function(country, callback){
    var params = {
        app_id: HoiioNumber.app_id,
        access_token: HoiioNumber.access_token,
        country: country
    };
    hoiio_http.makeHttpRequest("getNumberRates", params, "POST", callback)
};
HoiioNumber.prototype.subscription = function(number, duration, callback){
    var params = {
        app_id: HoiioNumber.app_id,
        access_token: HoiioNumber.access_token,
        number: number,
        duration: duration
    };
    HoiioNumber.hoiioHttp.makeHttpRequest("subscription", params, "POST", callback)
};
HoiioNumber.prototype.configForwarding = function(number, callback, options){
    var params = {
        app_id: HoiioNumber.app_id,
        access_token: HoiioNumber.access_token,
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
    HoiioNumber.hoiioHttp.makeHttpRequest("configForwarding",params, "POST", callback);
};
HoiioNumber.prototype.subscribedNumbers = function(callback){
    var params = {
        app_id: HoiioNumber.app_id,
        access_token: HoiioNumber.access_token
    };
    HoiioNumber.hoiioHttp.makeHttpRequest("subscribedNumbers",params, "POST", callback);
};