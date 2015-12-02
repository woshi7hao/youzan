var should = require('should');
var config = require('./config');
var API = require('../');

describe('api_logistics', function() {
	var api = new API(config.proxy, config.appid, config.appsecret);

	describe('confirmDelivery', function() {
		it('should return successful shipping status', function (done) {
			var apiParams = {
				'tid' : 'E123456',
				'is_no_express' : 0,
				'out_type' : 1,
				'out_sid' : 'E654321'
			};

			api.confirmDelivery(apiParams, function (err, res, result) {
				should.not.exist(err);
				should.exist(result);
				result.should.eql({'response' : {'shipping' : {'is_success':true}}});
				done();
			});
		});
	});

	describe('marksign', function() {
		it('should return successful marksign status', function (done) {
			var apiParams = {
				'tid' : 'E123456'
			};

			api.marksign(apiParams, function (err, res, result) {
				should.not.exist(err);
				should.exist(result);
				result.should.eql({'response' : {'is_success' : true}});
				done();
			});
		});
	});

	describe('searchTrace', function() {
		it('should return trace info', function (done) {
			var apiParams = {
				'tid' : 'E123456'
			};

			api.searchTrace(apiParams, function (err, res, result) {
				should.not.exist(err);
				should.exist(result);
				result.should.have.propertyByPath('response', 'out_sid');
				done();
			});
		});
	});

});