# 学术评估系统

## 计划
	一期：完成基本功能
	二期：redis分布式、管理平台，使用文件配置（清除日记配置等）
		  优化：处理CSRF攻击...
 
## 日记处理
	未完成
	每天生成新的日记文件（定时任务）
	定期清除过期日记（最好写成配置）

-----
## 参考
	oracle orm安装：[https://www.cnblogs.com/brookshi/p/6446155.html?utm_source=tuicool&utm_medium=referral](https://www.cnblogs.com/brookshi/p/6446155.html?utm_source=tuicool&utm_medium=referral "typeorm")
	redis 安装：[http://blog.csdn.net/ghost_hell/article/details/55260226](http://blog.csdn.net/ghost_hell/article/details/55260226 "redis")

----
## 代码解释

### 前端打包代码
	打包后文件放在：/evalucation_backgroup_support/public
	以静态文件形式访问，不用写路由

### 后端返回数据格式
	{
		rescode:"0000",
		resmsg:"请求成功",
		resdata:[....]
	}
	//返回的数据命名上统一小写

### 请求方法
	请求数据：GET
	除了请求数据外：POST

### 返回码
	0000：统一表示操作成功
	0001：请求方法不允许（路由找不到）
	0004：操作缺少参数
	1111：服务器错误

### 通用请求

    post 访问 /evaluation/mainReq 得到学科信息和授权级别的_id

```
{
    "code": "0000",
    "msg": {
        "discipline": [
            {
                "_id": "5a4efe9e7f46374250910c95",
                "name": "计算机"
            },
            {
                "_id": "5a4efec67f46374250910c96",
                "name": "艺术设计"
            },
            {
                "_id": "5a4efef37f46374250910c98",
                "name": "传播"
            }
        ],
        "authLevel": [
            {
                "_id": "5a4eff197f46374250910c99",
                "name": "硕士"
            },
            {
                "_id": "5a4eff397f46374250910c9a",
                "name": "博士"
            }
        ]
    }
}
```	
	然后post 访问 /evaluation/commonReq 可以访问和修改不同的表格数据

```
//set 操作 参数

{
	"tableName":"BasicSituation",//表格名(当后端无这个表时，会自动创建)
	"cmd":"set",//修改操作
	"filter":{//过滤字段(主键)
		"discipline":{
			"_id": "5a4efe9e7f46374250910c95"//学科ID
		},
		"authLevel":{
			"_id": "5a4eff197f46374250910c99"//授权级别ID
		}
	},
	"context":{//表格内容
		"string":"value",
		"number":1,
		"boolean":true,
		"array":[1,2,3],
		"object":{"hello":"world"}
	}
}

//set 成功后返回值

{
    "code": "0000",
    "msg": "BasicSituation set success!"
}

//get 操作 参数

{
	"tableName":"BasicSituation",//表格名(当后端无这个表时，会自动创建)
	"cmd":"get",//查询操作
	"filter":{//过滤字段(主键)
		"discipline":{
			"_id": "5a4efe9e7f46374250910c95"//学科ID
		},
		"authLevel":{
			"_id": "5a4eff197f46374250910c99"//授权级别ID
		}
	}
}

//get 成功后返回值
{
    "code": "0000",
    "msg": [
        {
            "_id": "5a52df50392f13cff61ec78e",
            "authLevel": {
                "_id": "5a4eff197f46374250910c99"
            },
            "discipline": {
                "_id": "5a4efe9e7f46374250910c95"
            },
            "array": [
                1,
                2,
                3
            ],
            "key": "value",
            "num": 1,
            "obj": {
                "key": "value",
                "num": 1,
                "array": [
                    1,
                    2,
                    3
                ]
            },
            "boolean": true,
            "number": 1,
            "object": {
                "hello": "world"
            },
            "string": "value"
        }
    ]
}
```
	
