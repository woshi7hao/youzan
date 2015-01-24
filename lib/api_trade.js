'use strict';
/**
 * 卖家关闭一笔交易
 * 详情请见：<http://open.koudaitong.com/doc/api?method=kdt.trade.close>
 */
exports.closeTrade = function(apiParams, callback) {
	var method = 'kdt.trade.close';

	this.doPost(method, apiParams, callback);
};

/**
 * 获取单笔交易的信息
 * 详情请见：<http://open.koudaitong.com/doc/api?method=kdt.trade.get>
 */
exports.getTrade = function(apiParams, callback) {
	var method = 'kdt.trade.get';

	this.doPost(method, apiParams, callback);
};

/**
 * 修改一笔交易备注
 * 详情请见：<http://open.koudaitong.com/doc/api?method=kdt.trade.memo.update>
 */
exports.updateTradeMemo = function(apiParams, callback) {
	var method = 'kdt.trade.memo.update';

	this.doPost(method, apiParams, callback);
};

/**
 * 查询卖家已卖出的交易列表
 * 详情请见：<http://open.koudaitong.com/doc/api?method=kdt.trade.sold.get>
 */
exports.getSoldTradeList = function(apiParams, callback) {
	var method = 'kdt.trade.sold.get';

	this.doPost(method, apiParams, callback);
};