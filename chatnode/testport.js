var http = require("http"),assert = require("assert");
var opt = {
    host:"localhost",
    port:8080,
    path:"/send",
    method:"POST",
    headers:{'content-type':'application/x-www-form-urlencoded'}
}
var req = http.request(opts,function(res){
    res.setEncoding("utf-8");
    var data = ""
    res.on('data',function(d){
        data += d;
    });
    res.on('end',function(){
        assert.strictEqual(data,'{"status":"ok","message":"tweet received"}')
    });
});
req.writ("tweet=test");
req.end()