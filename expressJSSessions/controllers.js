//It contains all the call backs/handlers

const handler1 = (request,response)=>{
    response.send('Response from the get path')
}

const handler2 = (request,response)=>{
    response.send('Response from the post path')
}

//file handler controller
const ftHandler = (request,response)=>{
    const {query} = request
    if(query.fileType==='text'){
        console.log('Requested a text file')
        response.sendFile(`${__dirname}/files/hello.txt`) //thi methods allows us to send files
    }
    else if(query.fileType==='json'){
        console.log('Requested a JSON file')
        response.sendFile(`${__dirname}/files/hello.json`) //thi methods allows us to send files
    }
    else if(query.fileType==='html'){
        console.log('Requested a HTML file')
        response.sendFile(`${__dirname}/files/hello.html`) //thi methods allows us to send files
    }
}

module.exports = {
    handler1,
    handler2,
    ftHandler
}