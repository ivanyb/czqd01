'use strict'

const express = require('express');
const router = express.Router();


const accountCtrl = require('../controllers/accountController.js');

//监控请求
//1.0 作用是将当前的login.html页面返回到浏览器
router.get('/login',accountCtrl.getloginpage);

//2.0 接收用户提交的信息将信息与db中的数据进行匹配
router.post('/login',accountCtrl.postlogin);


//3.0 作用是将当前的register.html页面返回到浏览器
router.get('/register',accountCtrl.getregisterpage);

//4.0 接收用户提交的信息将信息与db中的数据进行匹配
router.post('/register',accountCtrl.postregister);


//5.0 退出登录
router.get('/logout',accountCtrl.logout);

//将路由对象导出
module.exports = router;
