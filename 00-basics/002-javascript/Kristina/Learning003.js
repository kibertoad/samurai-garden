var myArray = [["John", 23], ["dog", 3]];
myArray.shift();
myArray.unshift(["Paul",35])
console.log(myArray);

var myList = [
    ["Chocolate Bar", 15],["Banana",25],["Dragonfruit",60],["Muesli",17],["Rainbow skittles",365]
];
console.log(myList);

function reusableFunction(){
    console.log("Hi World");
};
reusableFunction();

function functionWithArgs (param1, param2){
    console.log(param1+param2);
}
functionWithArgs(1,2)

function myLocalScope() {
    var myVar="Test"
    console.log('inside myLocalScope', myVar);
}
myLocalScope();
//console.log('outside myLocalScope', myVar);
//^This is supposed to not work, and does not work

var outerWear = "T-Shirt";
function myOutfit() {
    var outerWear="sweater"
    return outerWear;
}
myOutfit();
//local takes precedence over global variable here^

var sum = 0;
function addThree() {
    sum = sum + 3;
}
function addFive(){
    sum+=5
}
console.log(addThree());
console.log(addThree(addFive));
//^why functions have return statements

var processed = 0;
function processArg(num) {
    return (num + 3) / 5;
}
processed=processArg(7)
console.log(processed);

function nextInLine(arr, item) {
    arr.push(item);
    var removed = arr.shift();
    return removed;
}
var testArr = [1,2,3,4,5];
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));
//Basic JavaScript 50% completion