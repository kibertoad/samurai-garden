let contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavasScript", "Gaming", "Foxes"]
    }
];

function lookUpProfile(name, prop) {
    for (let i = 0; i < contacts.length; i ++) {
       if (contacts[i].firstName === name) {
    return contacts[i][prop] || "No such property";
       }
    }
    return "No such contact"
}
console.log(lookUpProfile("Harry", "lastName"));

function randomFraction() {
    return Math.random();
}
console.log((randomFraction()));

function randomWholeNum() {
    return Math.floor(Math.random() * 10);
}
console.log(randomWholeNum());

function randomRange(myMin, myMax) {
    return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
}
let myRandom = randomRange(9, 15);

console.log(myRandom);

function convertTooInteger(str) {
    return parseInt(str);
}
convertTooInteger("56");
console.log(convertTooInteger("56"));

function convertToInteger(str) {
    return parseInt(str, 2);
}
convertToInteger("10011");
console.log(convertToInteger("10011"));

function checkEqual(a, b) {
    return a === b ? "Equal" : "Not Equal";
}

console.log(checkEqual(1, 2));

function checkSign(num) {
    return  (num > 0) ? "positive" : (num < 0) ? "negative" : "zero";
}
console.log(checkSign(10));

function countDown (n) {
    if (n < 1) {
        return [];
    } else {
        const arr = countDown(n - 1);
        arr.unshift(n);
        return arr;
    }
}
console.log(countDown(5));

function rangeOfNumbers(startNum, endNum) {
    if (endNum - startNum === 0) {
        return [startNum];
    } else {
        let numbers = rangeOfNumbers(startNum, endNum - 1);
        numbers.push(endNum);
        return numbers;
    }
}
console.log(rangeOfNumbers(3, 5));

let catName ;
let quote ;
function catTalk() {
    "use strict";
    catName = "Oliver ";
    quote = catName + "says Meow!";

}
catTalk();
console.log(quote);
// How to understand "Variable might not have been initialized" (quote) ?

var numArray = [];
for (var i = 0; i < 3; i ++) {
    numArray.push(i);
}
console.log(numArray);
console.log(i);

var numArrays = [];
var m;
for (m = 0; m < 3; m ++) {
    numArrays.push(m);
}
console.log(numArrays);
console.log(m);

var printNumTwo;
for (var n = 0; n < 3; n ++) {
    if (n === 2) {
        printNumTwo = function () {
            return n;
        };
    }
}
console.log(printNumTwo());



let printNumTwoo;
for (let k = 0; k < 3; k++) {
    if (k === 2) {
        printNumTwoo = function () {
            return k;
        };
    }
}
console.log(printNumTwoo());

function checkScope() {
    let i =  "function scope";
    if (true) {
        let i = "block scope";
        console.log("Block scope i is: ", i);
    }
    console.log("Function scope i is: ", i);
    return i;
}
console.log(checkScope());

function printManyTimes(str) {
    const SENTENCE = str + "is cool!";
    for (let i = 0; i < str.length; i += 2) {
        console.log(SENTENCE);
    }
}
printManyTimes("freeCodeCamp ");

const s = [5, 7, 2];
function editInPlace() {
    s[0] = 2;
    s[1] = 5;
    s[2] = 7;
}
editInPlace();
console.log(s);

let obj = {
    name: "FreeCodeCamp",
    review: "Awesome"
};
Object.freeze(obj);
obj.review ="bad";
obj.newProp = "Test";
console.log(obj);

function freezeObj() {
    const MATH_CONSTANTS = {
        PI: 3.14
    };
    Object.freeze(MATH_CONSTANTS);
    try {
        MATH_CONSTANTS.PI = 99;
    } catch(ex) {
        console.log(ex);
    }
    return MATH_CONSTANTS.PI;
}
const PI = freezeObj();
console.log(PI);

const magic = () => {
    return new Date();
};
console.log(magic());

const doubler = (item) => item * 2;
doubler(4);
console.log(doubler(4));

const multiplier =(item, multi) => item * multi;
multiplier(5, 2);
console.log(multiplier(5, 2));

const myConcat = (arr1, arr2) => arr1.concat(arr2);

console.log(myConcat([1, 2], [3, 4, 5]));

const greeting = (name = "Anonymous") => "Hello " + name;

console.log(greeting("John"));
console.log(greeting());

const increment = (number, value = 1) => number + value;

console.log(increment(5, 2));
console.log(increment(5));

function howMany(...args) {
    return "You have passed " + args.length + " arguments. ";
}
console.log(howMany(0, 1, 2));
console.log(howMany("string", null, [1, 2, 3,], { }));

const sum = (...args) => {
    return args.reduce((a, b) => a +b, 0)
}
console.log(sum(1, 2, 3));

const arr = [6, 89, 3, 45];
const maximus = Math.max(...arr);

console.log(maximus);

const arr1 = ["JAN", "FEB", "MAR", "APR", "MAY"];
let arr2;
arr2 = [...arr1];
console.log(arr2);

const HIGH_TEMPERATURES ={
    yesterday: 75,
    today: 77,
    tomorrow: 80
};
const {today, tomorrow} = HIGH_TEMPERATURES;
console.log(HIGH_TEMPERATURES);

const LOCAL_FORECAST = {
    yesterday: { low: 61, high: 75},
    today: { low: 64, high: 77},
    tomorrow: { low: 68, high: 80}
};
const {today: {low: lowToday, high: highToday}} = LOCAL_FORECAST;
console.log(LOCAL_FORECAST.today);

let g = 8, h = 6;
 [g, h] = [h, g];
console.log(g, h);

const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
    const [a, b, c,...ar1] = list;
    return ar1;
}
 const ar1 = removeFirstTwo(source);
console.log(ar1);

    const stats = {
        max: 56.78,
        standard_deviation: 4.34,
        median: 34.54,
        mode: 23.87,
        min: -0.75,
        average: 35.85
    };
    const half = ({ max, min}) => (max + min) / 2.0;

    console.log(half);
/*
I didn't find the answer why const half didn't take over the const stats object properties max and min?
Subject: Use Destructuring Assignment to Pass an Object as a Function's Parameters
 */

const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["no-extra=semi", "no-dup-keys"]
};
function makeList(arr) {
    const failureItems = [];
    for (let i = 0; i < arr.length; i ++) {
        failureItems.push(`<li class="text-warning">${arr[i]}</li>`);
    }
    return failureItems;
}
const failureList = makeList(result.failure);
console.log(failureList);

const createPerson = (name, age, gender) => {
    return {
        name,
        age,
        gender
    };
};
console.log(createPerson("Zodiac Hasbro", 56, "male"));

const createPersons = (name, age, gender) => ({name, age, gender});
console.log(createPersons("Zo Ha", 25, "female"));

const bicycle = {
    gear: 2,
    setGear(newGear) {
        this.gear = newGear;
    }
};
bicycle.setGear(3);
console.log(bicycle.gear);

class Vegetable {
    constructor(name) {
        this.name = name;
    }
}
const carrot = new  Vegetable('carrot');
console.log(carrot.name);

class Book {
    constructor(author) {
        this._author = author;
    }
    get writer() {
        return this._author;
    }
    set writer(updateAuthor) {
        this._author = updateAuthor;
    }
}
const novel = new Book('anonymous');
console.log(novel.writer);
novel.writer = 'newAuthor';
console.log(novel.writer);

class Thermostat {
    constructor(fahrenheit) {
        this.fahrenheit = fahrenheit;
    }
    get temperature() {
        return (5 / 9) * (this.fahrenheit);
    }
    set temperature(celsius) {
        this.fahrenheit = (celsius * 9.0) / 5 +32;
    }
}
const thermos = new Thermostat(76);
let temp = thermos.temperature;
thermos.temperature = 26;
temp = thermos.temperature;

console.log(thermos.temperature);

const makeServerRequest2 = new Promise((resolve, reject) => {});
console.log(makeServerRequest2);

const makeServerRequest = new Promise((resolve, reject) => {
    let responseFromServer = true;

    if(responseFromServer) {
        resolve("We got the data");
    } else {
        reject("Data not received");
    }
});
makeServerRequest.then(result => {
    console.log(result);
})
console.log(makeServerRequest);

const makeServerRequest1 = new Promise((resolve, reject) => {
    let responseFromServer1 = false;

    if(responseFromServer1) {
        resolve ("We got the data");
    } else {
        reject("Data not received");
    }
});
makeServerRequest1.catch(error => {
    console.log(error);
})
console.log(makeServerRequest1);


