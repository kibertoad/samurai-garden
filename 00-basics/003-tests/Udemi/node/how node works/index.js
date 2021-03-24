// Event loop
// const fs = require('fs');
// 1.
// setTimeout(() => console.log('Timer 1 finished'), 0);
// setImmediate(() => console.log('Immediate 1 finished'));
//
// fs.readFile('test-file.txt', () => {
//     console.log('I/O finished');
// });
//
// console.log('Hello from top-level code');//1


// 2.
//
// setTimeout(() => console.log('Timer 1 finished'), 0);//2
// setImmediate(() => console.log('Immediate 1 finished'));//3
//
// fs.readFile('test-file.txt', () => {
//     console.log('I/O finished');//4
//     console.log('-----------');
//
//     setTimeout(() => console.log('Timer 2 finished'), 0);//6
//     setTimeout(() => console.log('Timer 3 finished'), 3000);//7
//     setImmediate(() => console.log('Immediate 2 finished'));//5
//
//
// });
// console.log('Hello from top-level code');//1


// 3.
const fs = require('fs');


setTimeout(() => console.log('Timer 1 finished'), 0);//2
setImmediate(() => console.log('Immediate 1 finished'));//3

fs.readFile('test-file.txt', () => {
    console.log('I/O finished');//4
    console.log('-----------');

    setTimeout(() => console.log('Timer 2 finished'), 0);//7
    setTimeout(() => console.log('Timer 3 finished'), 3000);//7
    setImmediate(() => console.log('Immediate 2 finished'));//6

    process.nextTick(() => console.log('process .nextTick'));//5 Better use setImmediate()!!!
});

console.log('Hello from top-level code');//1