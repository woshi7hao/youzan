var should = require('should');
var config = require('./config');
var API = require('../');

describe('api_category', function() {
	var api = new API(config.proxy, config.appid, config.appsecret);

	describe('getCategoryList', function() {
		it('should return categorylist', function (done) {
			var apiParams = {};

			api.getCategoryList(apiParams, function (err, res, result) {
				should.not.exist(err);
				should.exist(result);
				result.should.have.propertyByPath('response', 'categories');
				done();
			});
		});
	});

	describe('getPromotionList', function() {
		it('should return categorylist', function (done) {
			var apiParams = {};

			api.getPromotionList(apiParams, function (err, res, result) {
				should.not.exist(err);
				should.exist(result);
				result.should.have.propertyByPath('response', 'categories');
				done();
			});
		});
	});

	describe('getTagList', function() {
		it('should return taglist', function (done) {
			var apiParams = {};

			api.getTagList(apiParams, function (err, res, result) {
				should.not.exist(err);
				should.exist(result);
				result.should.have.propertyByPath('response', 'tags');
				done();
			});
		});
	});

	describe('getPageTagList', function() {
		it('should return taglist', function (done) {
			var apiParams = {};

			api.getPageTagList(apiParams, function (err, res, result) {
				should.not.exist(err);
				should.exist(result);
				result.should.have.propertyByPath('response', 'tags');
				done();
			});
		});
	});

});