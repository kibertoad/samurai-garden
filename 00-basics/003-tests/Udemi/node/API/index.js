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
//SERVER / simple API
const replaceTemplate = (temp,product) =>{
let output = temp.replace(/{%PRODUCTNAME%}/g, product.productName);
output = output.replace(/{%IMAGE%}/g, product.image);
output = output.replace(/{%PRICE%}/g, product.price);
output = output.replace(/{%FROM%}/g, product.from);
output = output.replace(/{%NUTRIENTS%}/g, product.nutrients);
output = output.replace(/{%QUANTITY%}/g, product.nutrients);
output = output.replace(/{%DESCRIPTION%}/g, product.descriptionn);
output = output.replace(/{%ID%}/g, product.id);

if(!product.organic) output = output.replace(/{%NOT_ORGANIC%}/g, 'not-organic'); //by class name
 return output;
}



const tempProduct = fs.readFileSync(`${__dirname}/templates/template-product.html`, 'utf-8');
const tempCard = fs.readFileSync(`${__dirname}/templates/template-card.html`, 'utf-8');
const tempOverview = fs.readFileSync(`${__dirname}/templates/template-overview.html`, 'utf-8');

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8');
const dataObj = JSON.parse(data);


const server = http.createServer((req, res) => {
    const pathName = req.url;


    // Overview page
    if (pathName === '/' || pathName === '/overview') {
        res.writeHead(200, {'Content-type': 'text/html'});

        // loop through data and return array
        const cardsHtml = dataObj.map(el => replaceTemplate(tempCard, el));
       const output = tempOverview.replace('{%PRODUCT_CARDS%}', cardsHtml)
        res.end(output);

        // Product page
    }else if (pathName === '/product') {
        res.end('this is the Product');
        // http://127.0.0.1:8000/api
    }else if (pathName === '/api'){
        res.writeHead(200, {'Content-type': 'application/json'});
        res.end(data);
        // Not found
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


