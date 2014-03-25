var HoiioAccount = function(app_id,access_token){
    this.app_id = app_id;
    this.access_token = access_token;
    this.hoiioHttp = HoiioHTTP;
};
HoiioAccount.prototype.balance = function(callback){
    var params = {
        app_id: this.app_id,
        access_token: this.access_token
    }
    this.hoiioHttp.makeHttpRequest("getUserBalance", params, "POST", callback)
}
HoiioAccount.prototype.info = function(callback){
    var params = {
        app_id: this.app_id,
        access_token: this.access_token
    }
    hoiio_http.makeHttpRequest("getUserInfo", params, "POST", callback)
};