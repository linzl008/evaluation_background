/**
 * Created by Linzl on 2017/12/19.
 */

var redis = require("redis"),
    RDS_PORT = 6379,            //端口号
    RDS_HOST = '127.0.0.1',     //服务器IP  要连接的A服务器redis
    RDS_PWD = '123456',         //密码
    RDS_OPTS = {},              //设置项
    client = redis.createClient(RDS_PORT, RDS_HOST, RDS_OPTS);

//监听连接事件
client.auth(RDS_PWD, function () {
    console.log('auth success');
});
client.on('connect', function () {
    console.log('connect success');
});
client.on('ready', function (err) {
    if (err) {
        console.log('ready err:', err);
    } else {
        console.log('ready success');
    }
});
client.on('end', function (err) {
    if (err) {
        console.log('close redis err:', err);
    } else {
        console.log('close redis success');
    }
});
//测试使用
/*//写入JavaScript(JSON)对象
 client.hmset('sessionid', { username: 'kris', password: 'password' }, function(err) {
 console.log(err)
 })

 //读取JavaScript(JSON)对象
 client.hgetall('sessionid', function(err, object) {
 console.log(object)
 })*/

module.exports = redis;