# youzan ![](https://travis-ci.org/frankwaizi/youzan.svg?branch=master)

nodejs sdk for www.youzan.com (koudaitong)

## 功能列表
- 商品接口
- 类目接口
- 物流接口
- 交易接口
- 客户接口

详细参见[有赞API文档](http://open.koudaitong.com/doc)

## Installation

```sh
$ npm install youzan
```

## Usage
```js
var youzan = require('youzan');


var proxy = null;//公司内网proxy，不需要设置为null
var appid = "";
var appsecret = "";
var format = "";
var version = "";
var signMethod = "";

var youzanAPI = new youzan(proxy, appid, appsecret, format, version, signMethod);
或
var youzanAPI = new youzan(proxy, appid, appsecret);

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
## License

The MIT License