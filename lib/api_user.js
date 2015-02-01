'use strict';
/**
 * 根据微信粉丝用户的openid或user_id获取用户信息
 * 详情请见：<http://open.koudaitong.com/doc/api?method=kdt.users.weixin.follower.get>
 */
exports.getWeixinUser = function(apiParams, callback) {
	var method = 'kdt.users.weixin.follower.get';

	this.doGet(method, apiParams, callback);
};

/**
 * 根据多个微信粉丝用户的openid或user_id获取用户信息
 * 详情请见：<http://open.koudaitong.com/doc/api?method=kdt.users.weixin.follower.gets>
 */
exports.getWeixinUsers = function(apiParams, callback) {
	var method = 'kdt.users.weixin.follower.gets';

	this.doGet(method, apiParams, callback);
};

/**
 * 查询微信粉丝用户列表信息
 * 详情请见：<http://open.koudaitong.com/doc/api?method=kdt.users.weixin.followers.get>
 */
exports.getWeixinUserList = function(apiParams, callback) {
	var method = 'kdt.users.weixin.followers.get';

	this.doGet(method, apiParams, callback);
};