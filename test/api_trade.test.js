var should = require('should');
var config = require('./config');
var API = require('../');

describe('api_trade', function() {
	var api = new API(config.proxy, config.appid, config.appsecret);

	describe('closeTrade', function() {
		it('should return a trade', function (done) {
			var apiParams = {
				'tid' : 'E14077639126662',
				'close_reason' : '买家不想买了',
				'fields' : ''
			};

			api.closeTrade(apiParams, function (err, res, result) {
				should.not.exist(err);
				should.exist(result);
				result.should.have.propertyByPath('response', 'trade');
				done();
			});
		});
	});

	describe('getTrade', function() {
		it('should return a trade', function (done) {
			var apiParams = {
				'tid' : 'E14077639126662',
				'fields' :''
			};

			api.getTrade(apiParams, function (err, res, result) {
				should.not.exist(err);
				should.exist(result);
				result.should.have.propertyByPath('response', 'trade');
				done();
			});
		});
	});

	describe('updateTradeMemo', function() {
		it('should return a trade', function (done) {
			var apiParams = {
				'tid' : 'E14077639126662',
				'memo' : '重要的交易',
				'fields' : ''
			};

			api.updateTradeMemo(apiParams, function (err, res, result) {
				should.not.exist(err);
				should.exist(result);
				result.should.have.propertyByPath('response', 'trade');
				done();
			});
		});
	});

	describe('getSoldTradeList', function() {
		it('should return tradelist', function (done) {
			var apiParams = {};

			api.getSoldTradeList(apiParams, function (err, res, result) {
				should.not.exist(err);
				should.exist(result);
				result.should.have.propertyByPath('response', 'trades');
				done();
			});
		});
	});

});