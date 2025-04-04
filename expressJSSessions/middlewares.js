const express = require('express')
const server = express()
const port = 3900
const bodyParser = require('body-parser')

//App level middleware
server.use(express.json()) // this middleware will extract the jSON format request body
server.use(bodyParser.text()) //this middleware will recognize text format in the request body

//route level middleware
function customMiddleware(request,response,next){
    if(request.body.age < 18){
        response.send('You need to be atleast 18 years')
    }
    else{
        console.log('Proceed to Next step')
        next() // this function will handover the control to the next middle ware in the order/sequence
    }
}
//get method
server.get('/getData',(request,response)=>{
    response.send(request.body + 'this is the request body value')
})

//post method
server.post('/getAccess',customMiddleware,(request,response)=>{
    response.send(`${request.body.name}, Welcome to the Services Zone`)
})

//server listening
server.listen(port,(err)=>{
    if(err){
      console.error('Something went wrong')
    }
    else{
        console.info('Server started at ',port)
    }
})