const eventEmitter = require('events').EventEmitter //events is the module

//Class==> It is a blue print which contains constructor funtion, class members(parameters and functions)
//Object/Instance ==> it is the physical or usable form of the class

const eventEmitterInstance = new eventEmitter() //new keyword is a constructor to create objects

//listening to an event and handling the event
const name = 'Ram'
eventEmitterInstance.on('greet',(name)=>{
    console.log(`Good Morning ${name}...!`)
}) //using the "on" function we registered an event and created a listener(event handler) for it

//emitting an event
eventEmitterInstance.emit('greet',name) //for emitting the particular event