/**
 * 卖家确认发货
 * 详情请见：<http://open.koudaitong.com/doc/api?method=kdt.logistics.online.confirm>
 */
exports.confirmDelivery = function(apiParams, callback) {
	var method = "kdt.logistics.online.confirm";

	this.doPost(method, apiParams, callback);
}

/**
 * 卖家标记签收
 * 详情请见：<http://open.koudaitong.com/doc/api?method=kdt.logistics.online.confirm>
 */
exports.marksign = function(apiParams, callback) {
	var method = "kdt.logistics.online.marksign";

	this.doPost(method, apiParams, callback);
}

/**
 * 物流流转信息查询
 * 详情请见：<http://open.koudaitong.com/doc/api?method=kdt.logistics.trace.search>
 */
exports.searchTrace = function(apiParams, callback) {
	var method = "kdt.logistics.trace.search";

	this.doPost(method, apiParams, callback);
}