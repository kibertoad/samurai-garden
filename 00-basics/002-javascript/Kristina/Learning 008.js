function log(thing){
    console.log(thing)
};

function sum(arr, n) {
    if (n <= 0) {
        return 0;
    } else {
        return sum(arr, n - 1) + arr[n - 1];
    }
}
log(sum([2,3,4,5],3));

// Setup
var contacts = [
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
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];


function lookUpProfile(name, prop){
        for (let i = 0; i < contacts.length; i++) {
            if (contacts[i].firstName === name) {
                if (prop in contacts[i]) {
                    return contacts[i][prop];
                } else {
                    return "No such property";
                }
            }
        }
        return "No such contact";
}
log(lookUpProfile("Akira", "likes"));

function randomFraction() {
    return Math.random();
}
log(randomFraction());
log(randomFraction());
log(randomFraction());
log(randomFraction());

function randomWholeNum() {
    var randomNumber=Math.random()*10
    return Math.floor(randomNumber);
}
log(randomWholeNum());
log(randomWholeNum());
log(randomWholeNum());
log(randomWholeNum());

function randomRange(myMin, myMax) {
    return Math.floor(Math.random() * (myMax - myMin + 1) + myMin);
}
log(randomRange(15,72));
log(randomRange(15,72));
log(randomRange(15,72));
log(randomRange(15,72));
log(randomRange(25,35));

function convertToInteger(str) {
    var a=parseInt(str);
    return a;
}
log(convertToInteger("56"));

function convertToInteger2(str) {
    var a = parseInt(str, 2);
    return a;
}
log(convertToInteger2("10011"));

function checkEqual(a, b) {
    return a==b ? "Equal" : "Not Equal";
}
log(checkEqual(1, 2));

function checkSign(num) {
    return (num === 0) ? "zero" : (num > 0) ? "positive" : "negative";}

log(checkSign(10));

function countdown(n){
        return n < 1 ? [] : [n, ...countdown(n - 1)];
    }
    log(countdown(5))

function rangeOfNumbers(startNum, endNum) {
    return startNum === endNum
        ? [startNum]
        : [...rangeOfNumbers(startNum, endNum - 1), endNum ];
}
log(rangeOfNumbers(6,55));

//Free Code Camp Basic JavaScript 100% completion. Will be going over some parts again, found some of these pretty difficult
