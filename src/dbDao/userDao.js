/**
 * Created by Linzl on 2017/12/20.
 */

var oracledb = require('../config/oracle');

//数据库连接层
exports.getUser = function(sql,callback){
     oracledb.executeSQL(sql,callback);
}