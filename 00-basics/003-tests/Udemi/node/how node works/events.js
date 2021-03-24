
// Standard - EventEmitter class
const EventEmitter = require('events');
const http = require('http');

// Best practices use classes PVZ:
//
// const Sales extends EventEmitter{
//    constructor(){
//        super();
//     }
// }


const myEmitter =  new EventEmitter();
myEmitter.on('newSale', () =>{
    console.log('there was a new sale!');
});

myEmitter.on('newSale', () => {
    console.log('Costumer name: Aurelija')

})
myEmitter.on('newSale', stock  => {
    console.log(`There are ${stock} items in stock.`)

})

myEmitter.emit('newSale', 9);


//////////////////////////
const server = http.createServer();

server.on('request', (req,res) => {
    console.log('Request received!')
    res.end('1!!!!!');
})
server.on('request', (req,res) => {
   console.log('2!!!!!');
})
server.on('request', (req,res) => {
    console.log('3!!!!!');
})

server.listen(8000,'127.0.0.1', () =>{
    console.log('Listening to requests on port 8000');
});