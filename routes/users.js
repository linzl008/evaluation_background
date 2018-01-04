var express = require('express');
var router = express.Router();
var User = require('../src/controller/userCtrl');

/* GET users listing. */
router.get('/', User.getUser);

module.exports = router;
