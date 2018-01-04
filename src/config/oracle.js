/**
 * Created by Linzl on 2017/12/19.
 */
var oracledb = require('oracledb');

var config = {
    user:'scott',　　//用户名
    password:'123456',　　//密码
    //IP:数据库IP地址，PORT:数据库端口，SCHEMA:数据库名称
    connectString : "localhost:1521/LINZL", //172.29.108.74
    poolMax : 12,   //设置连接池数量
};
//暴露使用的执行sql 的函数
exports.executeSQL = function(sql,callback){
    oracledb.getConnection(config, function(err, connection) {
        if (err) {
            console.error('err1',err);
            doRelease(connection,callback)
        }else{
            //执行SQL 语句
            connection.execute(sql,function(err, result) {
                if (err) {
                    console.error('--',err.message);
                    doRelease(connection,callback);
                }else{
                    console.log(result);
                    var result ={
                        retcode : '0000',
                        retmsg : '操作成功',
                        metadata : result.metaData ,
                        retdata : result.rows
                    }
                    //关闭连接
                    doRelease(connection);
                    callback(result);
                }

                // //打印返回的表结构
                // console.log(result.metaData);
                // //打印返回的行数据
                // console.log(result.rows);
            });
        }

    });

}

function doRelease(connection,callback) {
    connection.close(
        function(err) {
            if (err) {
                console.error('err2',err.message);
                if(callback)
                    callback({ retcode : '1111',retmsg : err.message });
            }
        });
}
// module.exports = oracledb;

// const typeorm =  require( "typeorm");
//
// typeorm.createConnection({
//     driver: {
//         type: "oracle",
//         host: "localhost",
//         port: 1158,
//         username: "scott",
//         password: "123456",
//         database: "evaluation"
//     },
//     entities: [
//         // __dirname + "../entity/*.js"
//     ],
//     autoSchemaSync: true,
// }).then(connection => {
//     // here you can start to work with your entities
// }).catch(error => console.log("error--",error));