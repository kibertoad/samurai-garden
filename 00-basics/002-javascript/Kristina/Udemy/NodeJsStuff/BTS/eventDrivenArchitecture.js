let events=require('events');
//creating an event emitter
let eventEmitter = new events.EventEmitter();
//this is the event listener
eventEmitter.on('connection', ()=>{
    console.log('connection successful');
})
//firing the connection event
eventEmitter.emit('connection');