/**
 * Created by Linzl on 2017/12/20.
 */

const UserDao = require('../dbDao/userDao');
const SQL = require('../utils/sql');
//返回用户列表
exports.getUser = function(req,res,next){
    //处理req的请求数据，权限确认等等
    UserDao.getUser(SQL.findUser,function (result) {
        //返回数据格式处理
        console.log(result);
        res.send(result)
    });
}