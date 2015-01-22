/**
 * 新增一个商品
 * 详情请见：<http://open.koudaitong.com/doc/api?method=kdt.item.add>
 */
exports.addItem = function(apiParams, filePaths, callback) {
	var method = "kdt.item.add";
	var filekey = "images[]";

	this.doPost(method, apiParams, filePaths, filekey, callback);
}

/**
 * 删除一个商品
 * 详情请见：<http://open.koudaitong.com/doc/api?method=kdt.item.delete>
 */
exports.deleteItem = function(apiParams, callback) {
	var method = "kdt.item.delete";

	this.doPost(method, apiParams, callback);
}

/**
 * 获取单个商品信息
 * 详情请见：<http://open.koudaitong.com/doc/api?method=kdt.item.get>
 */
exports.getItem = function(apiParams, callback) {
	var method = "kdt.item.get";

	this.doGet(method, apiParams, callback);
}

/**
 * 更新SKU信息
 * 详情请见：<http://open.koudaitong.com/doc/api?method=kdt.item.sku.update>
 */
exports.updateSku = function(apiParams, callback) {
	var method = "kdt.item.sku.update";

	this.doPost(method, apiParams, callback);
}

/**
 * 更新单个商品信息
 * 详情请见：<http://open.koudaitong.com/doc/api?method=kdt.item.update>
 */
exports.updateItem = function(apiParams, filePaths, callback) {
	var method = "kdt.item.update";
	var filekey = "images[]";

	this.doPost(method, apiParams, filePaths, filekey, callback);
}

/**
 * 商品下架
 * 详情请见：<http://open.koudaitong.com/doc/api?method=kdt.item.update.delisting>
 */
exports.delisting = function(apiParams, callback) {
	var method = "kdt.item.update.delisting";

	this.doPost(method, apiParams, callback);
}

/**
 * 商品上架
 * 详情请见：<http://open.koudaitong.com/doc/api?method=kdt.item.update.listing>
 */
exports.listing = function(apiParams, callback) {
	var method = "kdt.item.update.listing";

	this.doPost(method, apiParams, callback);
}

/**
 * 根据商品货号获取商品
 * 详情请见：<http://open.koudaitong.com/doc/api?method=kdt.items.custom.get>
 */
exports.customGetItem = function(apiParams, callback) {
	var method = "kdt.items.custom.get";

	this.doGet(method, apiParams, callback);
}

/**
 * 获取仓库中的商品列表
 * 详情请见：<http://open.koudaitong.com/doc/api?method=kdt.items.inventory.get>
 */
exports.getInventoryItemList = function(apiParams, callback) {
	var method = "kdt.items.inventory.get";

	this.doGet(method, apiParams, callback);
}

/**
 * 获取出售中的商品列表
 * 详情请见：<http://open.koudaitong.com/doc/api?method=kdt.items.onsale.get>
 */
exports.getOnsaleList = function(apiParams, callback) {
	var method = "kdt.items.onsale.get";

	this.doGet(method, apiParams, callback);
}

/**
 * 根据外部编号获取商品SKU
 * 详情请见：<http://open.koudaitong.com/doc/api?method=kdt.sku.custom.get>
 */
exports.customGetSku = function(apiParams, callback) {
	var method = "kdt.sku.custom.get";

	this.doGet(method, apiParams, callback);
}