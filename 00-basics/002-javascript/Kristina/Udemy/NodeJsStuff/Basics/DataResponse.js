const http=require('http');

const data=[
    {
        id:1,
        name:'Joe'
    },
    {
        id:2,
        name:'Jim'
    },
    {
        id:3,
        name:'Bat'
    },
    {
        id:4,
        name:'Goku'
    }
];

const server=http.createServer((req, res)=>{
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Content-Launguage', 'en-US');
    res.setHeader('Date', new Date(Date.now()));
    res.setHeader('X-Powered-By', 'Node.js');
    res.end(
        JSON.stringify({
            success : true,
            results:data.length,
            data : data
    })
    )
});

server.listen(3000, ()=> {
    console.log('Server is started');
});