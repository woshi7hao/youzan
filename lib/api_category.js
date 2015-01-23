/**
 * 获取商品分类二维列表
 * 详情请见：<http://open.koudaitong.com/doc/api?method=kdt.itemcategories.get>
 */
exports.getCategoryList = function(apiParams, callback) {
	var method = "kdt.itemcategories.get";

	this.doGet(method, apiParams, callback);
};

/**
 * 获取商品推广栏目列表
 * 详情请见：<http://open.koudaitong.com/doc/api?method=kdt.itemcategories.promotions.get>
 */
exports.getPromotionList = function(apiParams, callback) {
	var method = "kdt.itemcategories.promotions.get";

	this.doGet(method, apiParams, callback);
};

/**
 * 获取商品自定义标签列表
 * 详情请见：<http://open.koudaitong.com/doc/api?method=kdt.itemcategories.tags.get>
 */
exports.getTagList = function(apiParams, callback) {
	var method = "kdt.itemcategories.tags.get";

	this.doGet(method, apiParams, callback);
};

/**
 * 分页获取商品自定义标签列表
 * 详情请见：<http://open.koudaitong.com/doc/api?method=kdt.itemcategories.tags.getpage>
 */
exports.getPageTagList = function(apiParams, callback) {
	var method = "kdt.itemcategories.tags.getpage";

	this.doGet(method, apiParams, callback);
};