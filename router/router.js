const express=require('express')
const router=express.Router()

const send=require('../controller/control');
const emails=require('../controller/control');
const bulk=require('../controller/control')
const receive=require('../controller/control');
const update=require('../controller/control');
const remove=require('../controller/control');


router.post('/send',send.sender)
router.post('/email',emails.email1)
router.post('/multidata',bulk.bulk1)
router.get('/get',receive.receiver)
router.put('/update/:id',update.updated)
router.delete('/delete/:id',remove.deleted)
module.exports = router