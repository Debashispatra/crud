const express = require('express');
const app = express();

const bodyParser=require('body-parser')

const router=require('../router/router')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/',router)


module.exports=app;