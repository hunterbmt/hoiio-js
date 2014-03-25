var HoiioIVR = function(app_id,access_token){
    HoiioIVR.app_id = app_id;
    HoiioIVR.access_token = access_token;
    HoiioIVR.hoiioHttp = HoiioHTTP;
};
HoiioIVR.prototype.dial = function(dest, callback, options){
    var params = {
        app_id: HoiioIVR.app_id,
        access_token: HoiioIVR.access_token,
        dest: dest
    };
    if (options != undefined) {
        var msg = options['msg'];
        var caller_id = options['caller_id'];
        var max_duration = options['max_duration'];
        var tag = options['tag'];
        var notify_url = options['notify_url'];

        if (msg != undefined) {
            params.msg = msg;
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
    HoiioIVR.hoiioHttp.makeHttpRequest("dial", params, "POST", callback)
}
HoiioIVR.prototype.play = function(session, callback, options){
    var params = {
        app_id: HoiioIVR.app_id,
        access_token: HoiioIVR.access_token,
        session: session
    };
    if (options != undefined) {
        var msg = options['msg'];
        var tag = options['tag'];
        var notify_url = options['notify_url'];

        if (msg != undefined) {
            params.msg = msg;
        }
        if (tag != undefined) {
            params.tag = tag;
        }
        if (notify_url != undefined) {
            params.notify_url = notify_url
        }
    }
    HoiioIVR.hoiioHttp.makeHttpRequest("play", params, "POST", callback);
};
HoiioIVR.prototype.gather =  function (session, notify_url, callback, options) {
    var params = {
        app_id: HoiioIVR.app_id,
        access_token: HoiioIVR.access_token,
        session: session,
        notify_url: notify_url
    };
    if (options != undefined) {
        var msg = options['msg'];
        var max_digits = options['max_digits'];
        var timeout = options['timeout'];
        var attempts = options['attempts'];
        var tag = options['tag'];

        if (msg != undefined) {
            params.msg = msg;
        }
        if (max_digits != undefined) {
            params.max_digits = max_digits;
        }
        if (timeout != undefined) {
            params.timeout = timeout;
        }
        if (attempts != undefined) {
            params.attempts = attempts;
        }
        if (tag != undefined) {
            params.tag = tag;
        }
    }
    HoiioIVR.hoiioHttp.makeHttpRequest("gather", params, "POST", callback)
};
HoiioIVR.prototype.record = function (session, notify_url, callback, options) {
    var params = {
        app_id: HoiioIVR.app_id,
        access_token: HoiioIVR.access_token,
        session: session,
        notify_url: notify_url
    };
    if (options != undefined) {
        var msg = options['msg'];
        var max_duration = options['max_duration'];
        var tag = options['tag'];

        if (msg != undefined) {
            params.msg = msg;
        }
        if (max_duration != undefined) {
            params.max_duration = max_duration;
        }
        if (tag != undefined) {
            params.tag = tag;
        }
    }
    HoiioIVR.hoiioHttp.makeHttpRequest("record", params, "POST", callback);
};
HoiioIVR.prototype.monito = function (session, notify_url, callback, options) {
    var params = {
        app_id: HoiioIVR.app_id,
        access_token: HoiioIVR.access_token,
        session: session,
        notify_url: notify_url
    };
    if (options != undefined) {
        var msg = options['msg'];
        var tag = options['tag'];
        if (msg != undefined) {
            params.msg = msg;
        }
        if (tag != undefined) {
            params.tag = tag;
        }
    }
    HoiioIVR.hoiioHttp.makeHttpRequest("monitor", params, "POST", callback)
};
HoiioIVR.prototype.transfer = function (session, dest, callback, options) {
    var params = {
        app_id: HoiioIVR.app_id,
        access_token: HoiioIVR.access_token,
        session: session,
        dest: dest
    };
    if (options != undefined) {
        var msg = options['msg'];
        var caller_id = options['caller_id'];
        var on_failure = options['on_failure'];
        var tag = options['tag'];
        var notify_url = options['notify_url'];

        if (msg != undefined) {
            params.msg = msg;
        }
        if (caller_id != undefined) {
            params.caller_id = caller_id;
        }
        if (on_failure != undefined) {
            params.on_failure = on_failure;
        }
        if (tag != undefined) {
            params.tag = tag;
        }
        if (notify_url != undefined) {
            params.notify_url = notify_url;
        }
    }
    HoiioIVR.hoiioHttp.makeHttpRequest("transfer", params, "POST", callback)
};
HoiioIVR.prototype.hangup = function (session, callback, options) {
    var params = {
        app_id: HoiioIVR.app_id,
        access_token: HoiioIVR.access_token,
        session: session
    };
    if (options != undefined) {
        var msg = options['msg'];
        var tag = options['tag'];
        var notify_url = options['notify_url'];
        if (msg != undefined) {
            params.msg = msg;
        }
        if (tag != undefined) {
            params.tag = tag;
        }
        if (notify_url != undefined) {
            params.notify_url = notify_url;
        };
    }
    HoiioIVR.hoiioHttp.makeHttpRequest("hangup", params, "POST", callback)
};