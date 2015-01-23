#youzan

nodejs sdk for www.youzan.com (koudaitong)

##Usage
```js
var youzan = require('youzan');
var youzanAPI = new youzan(proxy, appid, appsecret, format, version, signMethod);

//get item
var params = {
    "num_iid" : 78540
};

youzanAPI.getItem(params, function(err, res, result){
    if(err) return handle(err);
    //deal with the result
});

//add item
var params = {
	"price" : "999.01",
	"title" : "测试商品",
	"desc" : "这是一个测试商品",
	"is_virtual" : "0",
	"post_fee" : "10.01",
	"sku_properties" : "",
	"sku_quantities" : "",
	"sku_prices" : "",
	"sku_outer_ids" : ""
}
var filePaths = [];
	filePaths.push(__dirname+"/upload/item1-1.jpg");
	filePaths.push(__dirname+"/upload/item1-2.jpg");

youzanAPI.addItem(params, filePaths, function(err, res, result){
    if(err) return handle(err);
    //deal with the result
});
```
##License

The MIT License

> Written with [StackEdit](https://stackedit.io/).
