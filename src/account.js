var HoiioAccount = function(app_id,access_token){
    HoiioAccount.app_id = app_id;
    HoiioAccount.access_token = access_token;
    HoiioAccount.hoiioHttp = HoiioHTTP;
};
HoiioAccount.prototype.balance = function(callback){
    var params = {
        app_id: HoiioAccount.app_id,
        access_token: HoiioAccount.access_token
    }
    HoiioAccount.hoiioHttp.makeHttpRequest("getUserBalance", params, "POST", callback)
}
HoiioAccount.prototype.info = function(callback){
    var params = {
        app_id: HoiioAccount.app_id,
        access_token: HoiioAccount.access_token
    }
    hoiio_http.makeHttpRequest("getUserInfo", params, "POST", callback)
};