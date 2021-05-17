const http=require ('http');

const server=http.createServer((request, response)=>{
    response.end('First Web Server');
});

server.listen(3000,()=>{
    console.log('Server is Started');
});