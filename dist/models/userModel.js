"use strict";var mongoose=require("mongoose"),schema=new mongoose.Schema({uname:String,upwd:String,uqq:String,uemail:String}),model=mongoose.model("user",schema);