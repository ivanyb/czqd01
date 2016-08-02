//作用是开启web服务器

'use strict'

// 这是从环境变量中去获取一个PORT的变量值，如果没有则默认给6000端口
let PORT = process.env.PORT || 9090;

const express = require('express');
const xtpl = require('xtpl');
const path = require('path');
const mongoose  = require('mongoose');
mongoose.connect('mongodb://localhost/CZ04');

let app = express();


//使用第三方中间件body-parse
const bodyparser = require('body-parser');
app.use(bodyparser());

//使用第三方中间件 express-session 来进行状态管理
const expressSession = require('express-session');
app.use(expressSession({
  secret: 'cz03', //加密的秘钥
  resave: false,  //将来的扩展参数，现在默认设置为false即可
  saveUninitialized: true
}));

app.use(express.static(path.join(__dirname,'statics')));

app.set('views',path.join(__dirname,'views')); 
app.set('view engine','html');
app.engine('html',xtpl.renderFile);

//加载数据库的模型
require('./models/userModel.js');

//使用routes文件夹中的路由js文件
app.use('/account',require('./routes/accountRouter.js'));

//这个路由的主要职责是：只要是访问了/admin下面的所有处理都会被这个路由来截取
//统一判断admin/*路径的访问是否有登录过
app.all('/admin/*',(req,res,next)=>{

	// console.log('admin/*');
	//判断当前浏览器是否登录过，如果没有登录过则跳转到登录页面,如果登录过则要继续处理它正常的逻辑
	let session = req.session || {};
	if(!req.session.username)
	{
		//跳转到登录页面
		res.setHeader('Content-Type','text/html;charset=utf8');
		res.end('<script>alert("您的登录信息已经失效，请重新登录");window.location="/account/login"</script>');
		return;
	}
	next();  //代表可以出发当前请求的正常处理逻辑
});

app.use('/',require('./routes/adminRouter.js'));



app.listen(PORT,()=>{

	console.log('环境启动'+ PORT);
});

