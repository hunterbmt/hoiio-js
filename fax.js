var HoiioFax = function(app_id,access_token){
    this.app_id = app_id;
    this.access_token = access_token;
    this.hoiioHttp = HoiioHTTP;
};
HoiioFax.prototype.send = function(dest, file, callback, options){
    var params = {
        app_id: this.app_id,
        access_token: this.access_token,
        dest : dest,
        file: file,
    }
    if (options != undefined) {
        var filename = options['filename'];
        var caller_id = options['caller_id'];
        var tag = options['tag'];
        var notify_url = options['notify_url'];

        if (filename != undefined) {
            params.filename = filename;
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
    this.hoiioHttp.makeHttpRequest("sendFax", params, "POST", callback);
};
HoiioFax.prototype.history = function(callback, options){
    var params = {
        app_id: this.app_id,
        access_token: this.access_token,
    }   
    if (options != undefined) {
        var from = options['from'];
        var to = options['to'];
        var page = options['page'];
        var page_size = options['page_size'];
        var type = options['type'];
        var src = options['src'];
        var dest = options['dest'];
        var tag = options['tag'];

        if (from != undefined) {
            params.from = from;
        }
        if (to != undefined) {
            params.to = to;
        }
        if (page != undefined) {
            params.page = page;
        }
        if (page_size != undefined) {
            params.page_size = page_size;
        }
        if (type != undefined) {
            params.type = type;
        }
        if (src != undefined) {
            params.src = src;
        }
        if (dest != undefined) {
            params.dest = dest;
        }
        if (tag != undefined) {
            params.tag = tag;
        }
    }
    this.hoiioHttp.makeHttpRequest("getFaxHistory", params, "POST", callback);
};
HoiioFax.prototype.rate = function(dest, incoming, callback){
    var params = {
        app_id: this.app_id,
        access_token: this.access_token,
        dest : dest,
        incoming : incoming
    };
    
    this.hoiioHttp.makeHttpRequest("getFaxRate", params, "POST", callback); 
};
HoiioFax.prototype.queryStatus = function(txn_ref, callback){
    var params = {
        app_id: this.app_id,
        access_token: this.access_token,
        txn_ref : txn_ref 
    };
    this.hoiioHttp.makeHttpRequest("getFaxStatus", params, "POST", callback);
};
