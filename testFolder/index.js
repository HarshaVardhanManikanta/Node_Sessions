//Event Loop
console.log('The session has started') //top level code

setTimeout(()=>{
    console.log('I am timer function')
},1000) //timer function and it runs in timer phase


setImmediate(()=>{
    console.log('I am from setImmediate') //immediate function and runs in the check phase
})

//check for pending tasks

