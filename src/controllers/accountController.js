'use strict'

const mongoose = require('mongoose');
let usermodel = mongoose.model('user');

//1.0 
exports.getloginpage = (req,res)=>{

	res.render('login.html',{title:'用户登录'},(err,content)=>{
		if(err)
		{
			console.log(err);
			res.end(err.toString());
			return;
		}
		res.end(content);
	});
}
//2.0 接收用户提交过来的用户名和密码做验证处理
exports.postlogin = (req,res)=>{
	res.setHeader('Content-Type','text/html;charset=utf8');

	//1.0 获取浏览器通过post提交过来的数据
	let uname = req.body.uname;
	let upwd = req.body.upwd;
	//2.0 去数据库中查询，如果有查询到数据则表示用户名和密码正确
	let where = {uname:uname,upwd:upwd};

	usermodel.find(where,(err,data)=>{
		if(data.length == 0)
		{
			res.end('<script>alert("用户名或者密码错误");window.location=window.location;</script>');
			return;
		}

	//3.0 向浏览器写入身份验证码
	req.session.username = uname;

	//4.0 响应给浏览器登录成功并且跳转到 /admin/list
	res.end('<script>alert("登录成功");window.location="/admin/list"</script>');
	
	});
	
}
//3.0
exports.getregisterpage = (req,res)=>{

	res.render('register.html',{title:'用户注册'},(err,content)=>{
		if(err)
		{
			console.log(err);
			res.end(err.toString());
			return;
		}
		res.end(content);
	});
}
//4.0 
exports.postregister = (req,res)=>{

	//1.0 获取到浏览器请求过来的数据  (body-parser)
	let uname = req.body.uname;
	let upwd =req.body.upwd;
	let uqq =req.body.uqq;
	let uemail =req.body.uemail

	//2.0 检查数据的合法性
	console.log(uname,upwd,uqq,uemail);
	
	//3.0 将数据插入到数据库中
	usermodel.create({
		uname:uname,
		upwd:upwd,
		uqq:uqq,
		uemail:uemail
	},(err)=>{

		//响应给浏览器用户已经注册成功
		res.setHeader('Content-Type','text/html;charset=utf8');
		res.end('<script>alert("用户注册成功");window.location="/account/login"</script>');
	});

}
//5.0
exports.logout = (req,res)=>{}
