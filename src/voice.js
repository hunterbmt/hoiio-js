var HoiioVoice = function(app_id,access_token){
    HoiioVoice.app_id = app_id;
    HoiioVoice.access_token = access_token;
    HoiioVoice.hoiioHttp = HoiioHTTP;
};
HoiioVoice.prototype.call = function(dest, callback, options){
    var params = {
        app_id: HoiioVoice.app_id,
        access_token: HoiioVoice.access_token,
        dest2: dest
    };
    if (options != undefined) {
        var dest1 = options['dest1'];
        var caller_id = options['caller_id'];
        var max_duration = options['max_duration'];
        var tag = options['tag'];
        var notify_url = options['notify_url'];

        if (dest1 != undefined) {
            params.dest1 = dest1;
        }
        if (caller_id != undefined) {
            params.caller_id = caller_id;
        }
        if (max_duration != undefined) {
            params.max_duration = max_duration;
        }
        if (tag != undefined) {
            params.tag = tag;
        }
        if (notify_url != undefined) {
            params.notify_url = notify_url
        }
    }
    HoiioVoice.hoiioHttp.makeHttpRequest("makeCall", params, "POST", callback);
};
HoiioVoice.prototype.conference = function(dest, callback, option){
    var params = {
        app_id: HoiioVoice.app_id,
        access_token: HoiioVoice.access_token,
        dest: dest
    };
    if (options != undefined) {
        var room = options['room'];
        var caller_id = options['caller_id'];
        var tag = options['tag'];
        var notify_url = options['notify_url'];

        if (room != undefined) {
            params.room = room;
        }
        if (caller_id != undefined) {
            params.caller_id = caller_id;
        }
        if (tag != undefined) {
            params.tag = tag;
        }
        if (notify_url != undefined) {
            params.notify_url = notify_url
        }
    }
    HoiioVoice.hoiioHttp.makeHttpRequest("makeConference", params, "POST", callbackFunction)
};
HoiioVoice.prototype.hangup = function(txn_ref, callback){
    var params = {
        app_id: HoiioVoice.app_id,
        access_token: HoiioVoice.access_token,
        txn_ref: txn_ref
    }; 
    HoiioVoice.hoiioHttp.makeHttpRequest("hangupCall", params, "POST", callbackFunction)
}
HoiioVoice.prototype.history = function(callback, options){
    var params = {
        app_id: HoiioVoice.app_id,
        access_token: HoiioVoice.access_token
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
    HoiioVoice.hoiioHttp.makeHttpRequest("getCallHistory", params, "POST", callback);
};
HoiioVoice.prototype.rate = function(dest1, dest2, callbackFunction){
    var params = {
        app_id: HoiioVoice.app_id,
        access_token: HoiioVoice.access_token,
        dest1: dest1,
        dest2: dest2
    };
    HoiioVoice.hoiioHttp.makeHttpRequest("getCallRate", params, "POST", callback);
};
HoiioVoice.prototype.queryStatus = function(txn_ref, callback){
    var params = {
        app_id: HoiioVoice.app_id,
        access_token: HoiioVoice.access_token,
        txn_ref: txn_ref
    };
    HoiioVoice.hoiioHttp.makeHttpRequest("getCallStatus", params, "POST", callbackFunction)
}
