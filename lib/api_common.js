var request = require("request"),
    _ = require("lodash"),
    moment = require("moment"),
    crypto = require("crypto"),
    querystring = require("querystring"),
    util = require('./util'),
    //FormData = require('form-data'),
    fs = require('fs'),
    wrapper = util.wrapper;

/**
 * 根据appid和appsecret创建API的构造函数
 * @param {String} appid       在有赞申请得到的appid
 * @param {String} appsecret   在有赞申请得到的appsecret
 * @param {String} format      （可选）指定响应格式。默认json,目前支持格式为json
 * @param {String} version     （可选）API协议版本，可选值:1.0，默认1.0
 * @param {String} signMethod  （可选）参数的加密方法选择。默认为md5，可选值是：md5
 */
var API = function(proxy, appid, appsecret, format, version, signMethod){
	this.appid = appid;
	this.appsecret = appsecret;
	this.format = format || "json";
	this.version = version || "1.0";
	this.signMethod = signMethod || "md5";

	if(proxy){
		request = request.defaults({proxy: proxy});
	}

	this.prefix = "http://open.koudaitong.com/api/entry";
};


API.prototype.doGet = function(method, apiParams, callback) {
	var url = this.buildRequestUrl(method, apiParams);

	var headers = {'Accept':'application/json'};
  var opts = {
      url : url,
    	headers : headers,
    	method: 'GET'
    };

    request(opts, wrapper(callback));
};


API.prototype.doPost = function(method, apiParams, filePaths, filekey, callback) {
  var url = this.buildRequestUrl(method, apiParams);

  var headers = {'Accept':'application/json'};
  var opts = {
      url : url,
      headers : headers,
      method: 'POST'
    };

  var formData = {};

  if(filePaths && filePaths.length >0 && filekey){
    formData[filekey] = [];

    for(var i = 0; i < filePaths.length; i++){
      formData[filekey].push(fs.createReadStream(filePaths[i]));
    }
    opts.formData = formData;
  }

  request(opts, wrapper(callback));
};

API.prototype.buildRequestUrl = function(method, apiParams) {
  var params = [];
  params.push({name: 'app_id', value: this.appid});
  params.push({name: 'method', value: method});
  params.push({name: 'timestamp', value: moment().format('YYYY-MM-DD HH:mm:ss')});
  params.push({name: 'format', value: this.format});
  params.push({name: 'v', value: this.version});
  params.push({name: 'sign_method', value: this.signMethod});
  for (var key in apiParams) {
    params.push({name: key, value: apiParams[key]});
  }
  params.push({name: 'sign', value: this.sign(params)});
  var _params = {};
  params.forEach(function(item) {
    _params[item.name] = item.value;
  });
  return this.prefix + '?' + querystring.stringify(_params);
};

API.prototype.sign = function(params) {
  var sortedParams = _.sortBy(params, 'name');
  var str = this.appsecret;
  sortedParams.forEach(function (item) {
    str += item.name;
    str += item.value;
  });
  str += this.appsecret;
  var result = crypto.createHash(this.signMethod).update(str).digest('hex');
  return result.toLowerCase();
};

/**
 * 用于支持对象合并。将对象合并到API.prototype上，使得能够支持扩展
 * Examples:
 * ```
 * // 商品接口
 * API.mixin(require('./lib/api_item'));
 * ```
 * @param {Object} obj 要合并的对象
 */
API.mixin = function (obj) {
  for (var key in obj) {
    if (API.prototype.hasOwnProperty(key)) {
      throw new Error('Don\'t allow override existed prototype method. method: '+ key);
    }
    API.prototype[key] = obj[key];
  }
};

module.exports = API;