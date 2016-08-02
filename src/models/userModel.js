
//职责：定义user表结构和实例化model对象

'use strict'

const mongoose = require('mongoose');

let schema = new mongoose.Schema({

	uname:String,
	upwd:String,
	uqq:String,
	uemail:String
});


//实例化model对象
let model = mongoose.model('user',schema);


//这里不需要将model export出去因为创建好以后，自动已经加载在内存中
