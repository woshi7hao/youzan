'use strict';
/*!
 * 对返回结果的一层封装，如果遇见有赞返回的错误，将返回一个错误
 * 参见：http://open.koudaitong.com/doc/api/errors
 */
exports.wrapper = function (callback) {
  return function (err, res, data) {
    if(!data){
      data = '{"err":"no response data"}';
    }
    data = JSON.parse(data);
    callback = callback || function () {};
    if (err) {
      err.name = 'KDTAPI' + err.name;
      console.log(err);
      return callback(err, res, data);
    }
    if (data.error_reponse) {
      err = new Error(data.error_reponse);
      err.name = 'KDTAPIError';
      err.code = data.error_reponse.code;

      console.log(err);
      return callback(err, res, data);
    }
    callback(null, res, data);
  };
};
