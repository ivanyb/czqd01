"use strict";var express=require("express"),router=express.Router(),adminCtrl=require("../controllers/adminController.js");router.get("/admin/list",adminCtrl.list),module.exports=router;