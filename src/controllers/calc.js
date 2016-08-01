//es6的导入新写法
'use strict'

import {add,substract} from '../models/add.js'; //等价于 var add =  require('./add.js')


console.log(add(1,2));