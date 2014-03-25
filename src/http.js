var HoiioHTTP = {
    HoiioAPIURL : {
        supportedCountries: "https://secure.hoiio.com/open/number/get_countries",
        availableNumbers : "https://secure.hoiio.com/open/number/get_choices",
        getNumberRates:"https://secure.hoiio.com/open/number/get_rates",
        subscription: "https://secure.hoiio.com/open/number/subscribe",
        configForwarding: "https://secure.hoiio.com/open/number/update_forwarding",
        subscribedNumbers:"https://secure.hoiio.com/open/number/get_active",
        sendSMS:"https://secure.hoiio.com/open/sms/send",
        sendBulkSMS:"https://secure.hoiio.com/open/sms/bulk_send",
        getSMSHistory:"https://secure.hoiio.com/open/sms/get_history",
        getSMSRate:"https://secure.hoiio.com/open/sms/get_rate",
        getSMSStatus:"https://secure.hoiio.com/open/sms/query_status",
        makeCall:"https://secure.hoiio.com/open/voice/call",
        makeConference:"https://secure.hoiio.com/open/voice/conference",
        hangupCall:"https://secure.hoiio.com/open/voice/hangup",
        getCallHistory:"https://secure.hoiio.com/open/voice/get_history",
        getCallRate:"https://secure.hoiio.com/open/voice/get_rate",
        getCallStatus:"https://secure.hoiio.com/open/voice/query_status",
        getUserBalance:"https://secure.hoiio.com/open/user/get_balance",
        getUserInfo:"https://secure.hoiio.com/open/user/get_info",
        sendFax:"https://secure.hoiio.com/open/fax/send",
        getFaxHistory:"https://secure.hoiio.com/open/fax/get_history",
        getFaxRate:"https://secure.hoiio.com/open/fax/get_rate",
        getFaxStatus:"https://secure.hoiio.com/open/fax/query_status",
        dial:"https://secure.hoiio.com/open/ivr/start/dial",
        play:"https://secure.hoiio.com/open/ivr/middle/play",
        gather:"https://secure.hoiio.com/open/ivr/middle/gather",
        record:"https://secure.hoiio.com/open/ivr/middle/record",
        monitor:"https://secure.hoiio.com/open/ivr/middle/monitor",
        transfer:"https://secure.hoiio.com/open/ivr/end/transfer",
        hangup:"https://secure.hoiio.com/open/ivr/end/hangup"
    }
}
HoiioHTTP.getAPIURL = function(name){
    return HoiioHTTP.HoiioAPIURL[name];
}
HoiioHTTP.getXMLHTTPRequest = function(){
    if (window.XMLHttpRequest)
        return new XMLHttpRequest();
    else
        return new ActiveXObject("Microsoft.XMLHTTP");
};
HoiioHTTP.converJSonToQueryString = function(json){
    var str = '';
    json = json || {};
    for (key in json) {
        str += key + '=' + json[key] + '&';
    }
    str = str.slice(0, str.length - 1);
    return str
};
HoiioHTTP.makeHttpRequest = function(api_name, params, method, callback){
    var request = HoiioHTTP.getXMLHTTPRequest();
    function setupCallBack (){
       request.onreadystatechange = function () {
            if (request.readyState == 4 && request.status == 200) {
                var response = eval("(" + request.response + ")");
                callback.call(response,response);
            }
        } 
    };
    
    setupCallBack();
    method = method || "POST";
    params = HoiioHTTP.converJSonToQueryString(params);
    var url = HoiioHTTP.getAPIURL(api_name);
    if (method.toUpperCase() == 'GET'){
        url = params ? url : url + "?" + params;
        HoiioHTTP.excuteGETRequest(request,url);
    }
    else {
        HoiioHTTP.excutePOSTRequest(request,url,params);
    }
       
};
HoiioHTTP.excuteGETRequest = function(request,url){
    request.open("GET", url, true);
    request.send(null);
};
HoiioHTTP.excutePOSTRequest = function(request,url,params){
    request.open("POST", url, true);
    request.setRequestHeader("Content-type", "application/json");
    request.send(params);
};

