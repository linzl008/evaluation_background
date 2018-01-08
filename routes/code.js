var express = require('express');
var router = express.Router();

//请求为 外部路由/模块名(文件名)_操作名(set,get)
// router.post('/*_*', function(req, res, next) {
//     console.log(req);
//     let path = req._parsedUrl.path;
//     let [fileName,cmd] = path.split("_");
//     fileName = fileName.split('/').pop();
//     cmd = cmd.split('?')[0];
//     require(`../src/controller/${fileName}.js`)[cmd](req,res,next);
// });

router.post('/commonReq', function(req, rsp, next) {
    //console.log(req);
    // let path = req._parsedUrl.path;
    // let [fileName,cmd] = path.split("_");
    // fileName = fileName.split('/').pop();
    // cmd = cmd.split('?')[0];
    //require(`../src/controller/commonReq.js`)[cmd](req,res,next);
    require(`../src/controller/commonReq`).solve(req,rsp,next);
});

router.post('/mainReq',function(req,rsp,next) {
    require('../src/controller/mainReq').get(req,rsp,next);
});


module.exports = router;
