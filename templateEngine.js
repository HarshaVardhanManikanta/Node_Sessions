// template engine==>ejs (Embedded JavaScript)
const ejs = require('ejs')
const {createServer} = require('http')
const fs = require('fs')
const port = '1300'

const server = createServer((request,response)=>{
    //first read the ejs file
    fs.readFile('response.ejs','utf-8',(err,data)=>{
        if(err){
            console.log('failed')
        }
        else{
            console.log('File read success')
            const htmlData = ejs.render(data,{name:'Ram'})
            response.write(htmlData+'\nThis is the HTML data') // \n is an escape character create a new line
            response.end()
        }
    })
})

server.listen(port,(err)=>{
    if(err){
        console.error('Server failed')
    }
    else{
        console.log('Server started')
    }
})

