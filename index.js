//importing the modules
const http = require('http') //this is a core module for creating a server to listen for requests
const urlModule = require('url') //this is a core module for handling the request url in a better way
const fs = require('fs') //this is a core module for performing file operations (Read,Writing,Updating,Rename, Deleting)


//__dirname and __filename ==> Core variables
console.log(__dirname)
console.log(__filename)


//some more variables
const port = 60000 //the port on which the server listens for requests

//create the server
const server = http.createServer((request,response)=>{
    const {url,headers,method} = request //destructuring the request object to get the request details
    //url ==> link or source used from the browser to locate the server (data type is string)
    //headers ==> additional data related to the request from the browser (data type is string)
    //method ==>type of http method used from the browser to access something or perform some action
                 // (data type is string)
    // const parsedUrl = urlModule.parse(url,true) //parse the url (conversion from string to object)
    //                                             // true value is for accessing the query paramters
    // const {name,place} = parsedUrl.query //query contains the query parameters and query parameters are given in the url
    // response.write(`Hello ${name} from ${place} ,Welcome to the Server of NodeJS.`) //for sending the response
    // response.end() //to let the client know the response transfer is completed
    if(url.includes('readFile')){ //if url has read file perform read operation
       fs.readFile('Message.txt',(err,data)=>{
        if(err){
            response.end('<h1 style="color:red">Unable to read file</h1>')
        }
        else{
            response.write('<h1 style="color:green">File Read Successfully</h1>')
            response.end(`<h1 style="color:blue">${data}</h1>`)
        }
       })
    }
    else if(url.includes('writeFile')){
        fs.writeFile('Message.txt','I want to write this into file',(err)=>{
            if(err){
                response.end('<h1 style="color:red">Unable to write file</h1>')
            }
            else{
                response.end('<h1 style="color:green">File Write Successfully</h1>')
            }
           })
    }
    else if(url.includes('updateFile')){
        fs.appendFile('Message.txt','\nI want to update this in to file',(err)=>{
            if(err){
                response.end('<h1 style="color:red">Unable to update file</h1>')
            }
            else{
                response.end('<h1 style="color:green">File Updated Successfully</h1>')
            }
           })
    }
    else if(url.includes('renameFile')){
        fs.rename('Message.txt','Greet.txt',(err)=>{
            if(err){
                response.end('<h1 style="color:red">Unable to rename file</h1>')
            }
            else{
                response.end('<h1 style="color:green">File Renamed Successfully</h1>')
            }
           })
    }
    else if(url.includes('deleteFile')){
        fs.unlink('Greet.txt',(err)=>{
            if(err){
                response.end('<h1 style="color:red">Unable to delete file</h1>')
            }
            else{
                response.end('<h1 style="color:green">File Deleted Successfully</h1>')
            }
           })
    }
    else{
        response.end('Welcome to File System')
    }

})

//make the server active and listen for the incoming requests
server.listen(port,(err)=>{
    //callback for giving 
    if(err){
        console.error('Something went wrong...')
    }
    else{
        console.log('Server started successfully')
    }
})