#youzan

----------
nodejs sdk for www.youzan.com (koudaitong)

##Usage


----------


    var youzan = require('youzan');
    var youzanAPI = new API(proxy, appid, appsecret, format, version, signMethod);
    
    var params = {
    "num_iid" : 78540
    };
    
    youzanAPI.getItem(params, function(err, res, result){
    if(err) return handle(err);
    //deal with the result
    });
##License


----------
The MIT License

> Written with [StackEdit](https://stackedit.io/).