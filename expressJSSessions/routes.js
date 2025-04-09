//creating a router and assigning routes

const router = require('express').Router() //creates a router
const {handler1,handler2,ftHandler} = require('./controllers')
const {ageVerifyMiddleware,fileTypeVerify} = require('./middlewares')

router.get('/getPath',handler1)

router.post('/postPath',handler2)

//get request for sending out a file
router.get('/requestFile',ageVerifyMiddleware,fileTypeVerify,ftHandler)

module.exports = router