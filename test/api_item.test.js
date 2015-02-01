var should = require('should');
var config = require('./config');
var API = require('../');

describe('api_item', function() {
	var api = new API(config.proxy, config.appid, config.appsecret);

	// describe('addItem', function() {
	// 	it('should return a new item', function (done) {
	// 		var apiParams = {
	// 			'price' : '999.01',
	// 			'title' : '测试商品',
	// 			'desc' : '这是一个测试商品',
	// 			'is_virtual' : 0,
	// 			'post_fee' : '10.01',
	// 			'quantity' : 123,
	// 			'fields' : ''
	// 		};

	// 		var filePaths = [];
	// 			filePaths.push(__dirname+'/upload/item1-1.jpg');
	// 			filePaths.push(__dirname+'/upload/item1-2.jpg');

	// 		api.addItem(apiParams, filePaths, function (err, res, result) {
	// 			should.not.exist(err);
	// 			should.exist(result);
	// 			result.should.have.propertyByPath('response', 'item');
	// 			done();
	// 		});
	// 	});
	// });

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

	describe('updateSku', function() {
		it('should return a sku msg', function (done) {
			var apiParams = {
				'num_iid' : 2334970,
				'sku_id' : 26564026,
				'quantity' : 123,
				'price' : '123.12',
				'outer_id' : '123'
 			};
			
			api.updateSku(apiParams, function (err, res, result) {
				should.not.exist(err);
				should.exist(result);
				result.should.have.propertyByPath('response', 'sku');
				done();
			});
		});
	});

	describe('updateItem', function() {
		it('should return an item', function (done) {
			var apiParams = {
				'num_iid' : 2334970,
				'title' : '改名字',
				'price' : '230.01'
			};
			var filePaths = null;//如需更新商品图片

			api.updateItem(apiParams, filePaths, function (err, res, result) {
				should.not.exist(err);
				should.exist(result);
				result.should.have.propertyByPath('response', 'item');
				done();
			});
		});
	});

	describe('delisting', function() {
		it('should return an item', function (done) {
			var apiParams = {
				'num_iid' : 2334970,
				'fields' : ''
			};
			
			api.delisting(apiParams, function (err, res, result) {
				should.not.exist(err);
				should.exist(result);
				result.should.have.propertyByPath('response', 'item');
				done();
			});
		});
	});

	describe('listing', function() {
		it('should return an item', function (done) {
			var apiParams = {
				'num_iid' : 2334970,
				'fields' : ''
			};
			
			api.listing(apiParams, function (err, res, result) {
				should.not.exist(err);
				should.exist(result);
				result.should.have.propertyByPath('response', 'item');
				done();
			});
		});
	});

	describe('customGetItem', function() {
		it('should return an item', function (done) {
			var apiParams = {
				'outer_id' : '1',
				'fields' : ''
			};
			
			api.customGetItem(apiParams, function (err, res, result) {
				should.not.exist(err);
				should.exist(result);
				result.should.have.propertyByPath('response', 'items');
				done();
			});
		});
	});

	describe('getInventoryItemList', function() {
		it('should return itemlist', function (done) {
			var apiParams = {
				// 'q' : '女鞋',
				'fields' : ''
			};
			
			api.getInventoryItemList(apiParams, function (err, res, result) {
				should.not.exist(err);
				should.exist(result);
				result.should.have.propertyByPath('response', 'items');
				done();
			});
		});
	});

	describe('getOnsaleList', function() {
		it('should return itemlist', function (done) {
			var apiParams = {
				// 'q' : '女鞋',
				'fields' : ''
			};
			
			api.getOnsaleList(apiParams, function (err, res, result) {
				should.not.exist(err);
				should.exist(result);
				result.should.have.propertyByPath('response', 'items');
				done();
			});
		});
	});

	describe('customGetSku', function() {
		it('should return skulist', function (done) {
			var apiParams = {
				'num_iid' : 2334970,
				'outer_id' : '123',
				'fields' : ''
			};

			api.customGetSku(apiParams, function (err, res, result) {
				should.not.exist(err);
				should.exist(result);
				result.should.have.propertyByPath('response', 'skus');
				done();
			});
		});
	});
});