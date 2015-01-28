var should = require('should');
var config = require('./config');
var API = require('../');

describe('api_item', function() {
	var api = new API(config.proxy, config.appid, config.appsecret);

	describe('addItem', function() {
		it('should return a new item', function (done) {
			var apiParams = {
				"price" : "999.01",
				"title" : "测试商品",
				"desc" : "这是一个测试商品",
				"is_virtual" : 0,
				"post_fee" : "10.01",
				"quantity" : 123,
				"fields" : "num_iid, title, desc"
			};

			var filePaths = [];
				filePaths.push(__dirname+"/upload/item1-1.jpg");
				filePaths.push(__dirname+"/upload/item1-2.jpg");

			api.addItem(apiParams, filePaths, function (err, res, result) {
				should.not.exist(err);
				should.exist(result);
				result.should.have.propertyByPath('response', 'item');
				done();
			});
		});
	});

	// describe('deleteItem', function() {
	// 	it('should delete an item', function (done) {
	// 		var apiParams = {
	// 			'num_iid' : 7180062
	// 		};

	// 		api.deleteItem(apiParams, function (err, res, result) {
	// 			should.not.exist(err);
	// 			should.exist(result);
	// 			result.should.eql({"response": {"is_success": true}});
	// 			done();
	// 		});
	// 	});
	// });

	describe('getItem', function() {
		it('should return an item', function (done) {
			var apiParams = {
				'num_iid' : 2334970
			};

			api.getItem(apiParams, function (err, res, result) {
				should.not.exist(err);
				should.exist(result);
				result.should.have.propertyByPath('response', 'item');
				done();
			});
		});
	});

	describe('updateItem', function() {
		it('should return an item', function (done) {
			var apiParams = {
				'num_iid' : 2334970,
				'title' : '改一下名字咯'
			};
			var filePaths = null;

			api.updateItem(apiParams, filePaths, function (err, res, result) {
				should.not.exist(err);
				should.exist(result);
				result.should.have.propertyByPath('response', 'item');
				done();
			});
		});
	});
});