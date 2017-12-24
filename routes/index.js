var express = require('express');
var router = express.Router();


/* GET home page. */
/*router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  //重定位到首页
  res.redirect('/index.html')
});*/
router.post('/evaluation/login', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  console.log("enter")
  res.json({code:'0000',msg:"登录成功"})
});

module.exports = router;
