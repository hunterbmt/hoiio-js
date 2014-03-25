var HoiioSMS = function(app_id,access_token){
    this.app_id = app_id;
    this.access_token = access_token;
    this.hoiioHttp = HoiioHTTP;
};
HoiioSMS.prototype.send = function(dest, msg, callback,options){
    var params = {
        app_id: this.app_id,
        access_token: this.access_token,
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
    this.hoiioHttp.makeHttpRequest("sendSMS", params, "POST", callback);
};
HoiioSMS.prototype.bulkSend = function(dest, msg, callback, options){
    var params = {
        app_id: this.app_id,
        access_token: this.access_token,
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
    this.hoiioHttp.makeHttpRequest("sendBulkSMS", params, "POST", callback);
};
HoiioSMS.prototype.history = function(callback,option){
    var params = {
        app_id: this.app_id,
        access_token: this.access_token
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
    this.hoiioHttp.makeHttpRequest("getSMSHistory", params, "POST", callback);
}
HoiioSMS.prototype.rate = function(dest, incoming, msg, callback) {
    var params = {
        app_id: this.app_id,
        access_token: this.access_token,
        dest: dest,
        incoming: incoming,
        msg: msg
    };
    this.hoiioHttp.makeHttpRequest("getSMSRate", params, "POST", callback);
}
HoiioSMS.prototype.queryStatus = function(txn_ref, callback){
    var params = {
        app_id: hoiio_sms.app_id,
        access_token: hoiio_sms.access_token,
        txn_ref: txn_ref
    };
    this.hoiioHttp.makeHttpRequest("getSMSStatus", params, "POST", callback);
}
