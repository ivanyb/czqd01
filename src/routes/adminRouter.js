'use strict'

const express = require('express');
const router = express.Router();


const adminCtrl = require('../controllers/adminController.js');

router.get('/admin/list',adminCtrl.list);

// router.get('/admin/add',adminCtrl.getadd);
// router.post('/admin/add',adminCtrl.postadd);


module.exports  = router;

