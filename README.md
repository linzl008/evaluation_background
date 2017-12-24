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
