function myStr() {
      let someAdjective = "awesome!";
     let myStr = "Learning to code is ";
    myStr += someAdjective;
    console.log(myStr);
}
myStr();

function lastNameLength() {
     lastNameLength = 0;
    let lastName = "Lovelace";
    lastNameLength = lastName.length;
    console.log(lastNameLength);
}
lastNameLength();

function firstLetter() {
    let firstLetterOfLastName = "";
    let lastName = "Lovelace";
    firstLetterOfLastName = lastName[0];
    console.log(firstLetterOfLastName);
}
firstLetter();

function undStr () {
     myStr = "Jello World";
    myStr = "Hello World!";
    console.log(myStr);
}
undStr();

function nthCharacter() {
    let lastName = "Lovelace";
    let thirdLetterOfLastName = lastName[2];
    console.log(thirdLetterOfLastName);
}
nthCharacter();

function lastCharacter() {
    let lastName = "Lovelace";
    let lastLetterOfLastName = lastName[lastName.length - 1];
    console.log(lastLetterOfLastName);
}
lastCharacter();

function nthLastCharacter() {
    let lastName = "Lovelace";
    let secondToLastLetterOfLastName = lastName[lastName.length - 2];
    console.log(secondToLastLetterOfLastName);
}
nthLastCharacter();

function wordBlanks() {
    let myNoun = "dog";
    let myAdjective = "big";
    let myVerb = "ran";
    let myAdverb = "quickly";
    let wordBlank = "The " + myAdjective + " " + myNoun + " " + myVerb + " " + myAdverb;
    console.log(wordBlank);

}
wordBlanks();

function multipleValues() {
    let myArray = ["Pizza", 5];
    console.log((myArray));
}
multipleValues();

function nestArray() {
    let myArray = [["White", 8], ["Black", 12]];
    console.log(myArray);
}
nestArray();

function accessArray() {
    let myArray = [50,60,70];
    let myData = myArray[0];
    console.log(myData);
}
accessArray();

function modifyArray() {
    let myArray = [18,64,99];
    myArray[0] = 45;
    console.log(myArray);
}
modifyArray();

function multiDimensional() {
    let myArray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], [13,14]]];
    let myData = myArray[2][1];
    console.log(myData);
}
multiDimensional();

function manipulateWithPush() {
    let myArray = [["John", 23], ["cat", 2]];
    myArray.push(["dog", 3]);
    console.log(myArray);
}
manipulateWithPush();

function manipulateWithPop() {
    let myArray = [["John", 23], ["cat", 2]];
    let removedFromMyArray = myArray.pop();
    console.log(myArray);
    console.log(removedFromMyArray);

}
manipulateWithPop();

function manipulateWithShift() {
    let myArray = [["John", 23], ["dog", 3]];
    let removedFromMyArray = myArray.shift();
    console.log(myArray);
    console.log(removedFromMyArray);
}
manipulateWithShift();

function manipulateWithUnshift() {
    let myArray = [["John", 23], ["dog", 3]];
    myArray.shift();
    myArray.unshift(["Paul", 35]);
    console.log(myArray);
}
manipulateWithUnshift();

function shoppingList() {
    let myList = [["Chocolate Bar", 15],["Hard cheese", 3], ["Red grapes", 2], ["French baguettes", 2], ["Blue cheese", 3]];
    console.log(myList);
}
shoppingList();

function writeWithFunctions() {
    console.log("Hello World!");
}
writeWithFunctions();

function  functionWithArgs(param1, param2) {
    console.log(param1 + param2);
}
functionWithArgs(1, 2);
functionWithArgs(7, 9);


const myGlobal = 10;
function fun1() {
   oopsGlobal = 5;
}
function fun2() {
    let output = "";
    if (typeof myGlobal != "undefined") {
        output = "myGlobal: " + myGlobal;
    }
    if (typeof oopsGlobal != "undefined") {
        output = " oopsGlobal: " + oopsGlobal;
    }
    console.log(output);
}
fun2();

function myLocalScope() {
 let myVar;
 console.log('inside myLocalScope', myVar);
}
myLocalScope();

let outerWear = "T-Shirt";

function myOutfit() {
    let outerWear = "sweater";
    console.log(outerWear) ;
}
myOutfit();

function timesFive(num) {
    return num * 5;
}
let answer = timesFive(5);
console.log(answer);

let sum = 0;
function addSum(num) {
    sum = sum + sum;
}
addSum(3);
console.log(sum);

let sum1 = 0;
function addThree() {
    sum1 = sum1 + 3;
}

function addFive() {
    sum1 = sum1 + 5;
}
addThree();
addFive();
console.log(sum1);

 processed = 0;
function processArg(num) {
    return (num +3) / 5;
}
processed = processArg(7);
console.log(processed);

function nextInLine(arr, item) {
    arr.push(item);
    return arr.shift();
}
let testArr = [1,2,3,4,5];

console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log(("After: " + JSON.stringify(testArr)));

