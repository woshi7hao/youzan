var should = require('should');
var config = require('./config');
var API = require('../');

describe('api_user', function() {
	var api = new API(config.proxy, config.appid, config.appsecret);

	describe('getWeixinUser', function() {
		it('should return a user', function (done) {
			var apiParams = {
				'weixin_openid' : 'oHjkjiklkla_kk29mkllk',
				'fields' : ''
			};

			api.getWeixinUser(apiParams, function (err, res, result) {
				should.not.exist(err);
				should.exist(result);
				result.should.have.propertyByPath('response', 'user');
				done();
			});
		});
	});

	describe('getWeixinUsers', function() {
		it('should return userlist', function (done) {
			var apiParams = {
				'weixin_openids' : 'oHjkjiklkla_kk29mkllk,oD58jaoisjdlknlk_uoija',
				'fields' : ''
			};

			api.getWeixinUsers(apiParams, function (err, res, result) {
				should.not.exist(err);
				should.exist(result);
				result.should.have.propertyByPath('response', 'users');
				done();
			});
		});
	});

	describe('getWeixinUserList', function() {
		it('should return userlist', function (done) {
			var apiParams = {
				'page_no' : 2,
				'page_size' : 20,
				'fields' : ''
			};

			api.getWeixinUserList(apiParams, function (err, res, result) {
				should.not.exist(err);
				should.exist(result);
				result.should.have.propertyByPath('response', 'users');
				done();
			});
		});
	});

});