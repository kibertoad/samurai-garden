// C:\Users\aurno\WebstormProjects\samurai-garden\00-basics\003-tests\Udemi\node>
// node index.js

const fs = require('fs'); //file system
const http = require('http');
const url = require('url');

// FILES ///////////////////////////////////////////////////
// //SYNCHRONOUS /avoid
// // Read files from txt
// const textInt = fs.readFileSync('./txt/input.txt', 'utf-8');
// console.log(textInt);
//
//
// // Write new files to txt
// const textOut = `This is what we know about the avocado: ${textInt}.n\ Created on ${Date.now()}`;
// fs.writeFileSync('./txt/output.txt', textOut);
// console.log('File written!');
//
// // ASYNCHRONOUS / use
// // fs.readFile('./txt/start.txt', 'utf-8',  (err,data) =>{
// //     console.log(`2. ${data}`);
// // })
// //
// // console.log('1. will read first')
// // callback hell
// fs.readFile('./txt/start.txt', 'utf-8',  (err,data1) =>{
//     if(err) return console.log('Error!');
//
//     fs.readFile(`./txt/${data1}.txt`, 'utf-8',  (err,data2) =>{
//         console.log(`2. ${data2}`);
//         fs.readFile('./txt/append.txt', 'utf-8',  (err,data3) =>{
//             console.log(`2. ${data3}`);
//
//             fs.writeFile('./txt/final.txt', `${data2}n\ ${data3}`, 'utf-8',  (err) =>{
//                 console.log('Your file has been written');
//             });
//         });
//     });
// });
//
/// console.log('Will read file!');


// ///////////////////////////////////////////////////////////////////

//SERVER
const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8');
const productData = JSON.parse(data);


const server = http.createServer((req, res) => {
    const pathName = req.url;
    if (pathName === '/' || pathName === '/overview') {
        res.end('this is the Overview');
    }else if (pathName === '/product') {
        res.end('this is the Product');
        // http://127.0.0.1:8000/api
    }else if (pathName === '/api'){
        // fs.readFile(`${__dirname}/dev-data/data.json`, 'utf-8', (err,data)=> {
        //     const productData = JSON.parse(data);
        //     console.log(productData);
            res.writeHead(200, {'Content-type': 'application/json'});
            res.end(data);
    }else{
        res.writeHead(404, {
            'Content - type': 'text/html',
            'my-own-header': 'hello - world'
        });
        res.end('Page not found!');
    }

});

server.listen(8000,'127.0.0.1', () =>{
    console.log('Listening to requests on port 8000');
});


