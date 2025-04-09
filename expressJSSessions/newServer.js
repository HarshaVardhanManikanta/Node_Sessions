const express = require('express')
const server = express()
const myRouter = require('./routes') //middleware that handles routes

//make server use the json middleware
// server.use(express.json())

//make server use the router
server.use(myRouter)


server.listen(1300,(err)=>{
    if(err){
        console.warn('Server failed to start')
    }
    else{
        console.info('Server started successfully')
    }
})