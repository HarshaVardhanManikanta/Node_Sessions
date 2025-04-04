//importing express
const express = require('express') //this returns a function
const server = express() //this step instantiates a server

//http requests==> get,post,put and delete
//CRUD ==> Create Read Update Delete 
//get ==> this is for retrieving data
//post ==> this is for sending some data to create new records in the database
//put ==> this is for updating existing data in a database without creating a new record
//delete ==> this is for deleting existing data in a database

//setting up the server

server.use(express.json()) //middleware function.

//get method
server.get('/',(request,response)=>{
    response.send('<h1>Hello Welcome to Express JS</h1>') //we use send method instead of write
})

//post method
server.post('/createAccount',(request,response)=>{
    const {body} = request
    console.log(body,'This is the body value')
    response.json(body)
})

//put method
server.put('/update',(request,response)=>{
    response.send('<h1>Hi, Your Account is updated</h1>')
})

//make the server listen for the incoming requests
server.listen(1300,(err)=>{
    if(err){
        console.warn('Server failed to start')
    }
    else{
        console.info('Server started successfully')
    }
})