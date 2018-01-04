/**
 * Created by Linzl on 2017/12/24.
 */
const node_xj = require("xls-to-json");
var oracle = require('../config/oracle');

let config={
    rebuild:true,  //删除旧有的表
}

var sheetList = [
    'table_name',
    // 'Sheet2'
]
// xls-to-json 不支持 多个sheet 读取
function excelToJson(){
    for (var i = 0; i < sheetList.length; i++) {
        var sheetname = sheetList[i];
        node_xj({
            input: "../data/test.xls",  // input xls
            // output: "../data/output.json", // output json
            output: null, // output json 填null 表示不输出到文件
            sheet: sheetname  // specific sheetname
        }, function(err, result) {
            if(err) {
                console.error(err);
            } else {
                createSql('EUSER',result);
                // console.log(result);
            }
        });
    }

}
function createSql(tablename,data){
    //name,type,primaryKey
    var sql ="";
    sql +=`CREATE  TABLE ${tablename} ( `;
    var comments = ''; //添加 comment
    for (var i = 0; i < data.length; i++) {
        var obj = data[i];
        sql+=obj.name+' '+obj.type+'';
        //约束
        if(obj.default){
            sql+=' DEFAULT '+obj.default;
        }
        if(obj.primaryKey){
            sql+=' CONSTRAINT '+('pk_'+tablename).toUpperCase()+' PRIMARY KEY'
        }
        if(obj.notNull){
            sql+=' CONSTRAINT '+('nn_'+tablename).toUpperCase()+' NOT NULL'
            // CONSTRAINT nn_userid NOT NULL
        }
        if(!obj.primaryKey && obj.unique){ //在有主键的情况下，不用 unique ，否则会冲突
            sql+=' CONSTRAINT '+('uq_'+tablename).toUpperCase()+' UNIQUE'
            // CONSTRAINT uq_userid UNIQUE
        }
        if(obj.check){
            sql+=' CONSTRAINT '+('ck_'+tablename).toUpperCase() + ' CHECK ('+obj.name+' IN('+ obj.check+'))';
            // CONSTRAINT ck_userid CHECK (commission_pct IN(10,12.5,15,17.5,20)));
        }
        if(obj.foreignKey){ //使用时，要注意 foreignKey 对应的表是否已经建立
            sql+=' CONSTRAINT '+('fk_'+tablename).toUpperCase()+' REFERENCES '+obj.foreignKey;
            // CONSTRAINT fk_dept_id REFERENCES s_dept(id),
        }
        if(obj.comment){
            // comment on column EMP.empid
            // is '员工编号'; --添加列描述
            comments +=`execute immediate 'comment on column ${tablename}.${obj.name} IS ''${obj.comment}''';`
        }
        if(i<data.length - 1){
            sql+=','
        }
    }
    sql+=')'
   /* sql=`CREATE TABLE EUSER(
                USERNAME VARCHAR2(14) CONSTRAINT PK_EUSER PRIMARY KEY,
                PASSWORD VARCHAR2(50)
            )`;*/
    if(config.rebuild){
        // drop table USERINFO;
        // execute immediate '${sql}';
        sql = `declare
               num   number;
            begin
                select count(1) into num from user_tables where table_name = upper('${tablename}') ;
                if num > 0 then
                    execute immediate 'drop table ${tablename}';
                end if;
                execute immediate '${sql}';
                ${comments}
            end;
            `;
    }

    // sql=sql.toUpperCase()
    console.log(sql)
    oracle.executeSQL(sql,function (result) {
        console.log('---->',result)
    });
}
excelToJson();