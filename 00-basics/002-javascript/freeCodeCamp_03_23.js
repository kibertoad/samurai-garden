let myString = "Hello, world!";
let myRegex = /Hello/;
let result = myRegex.test(myString);
console.log(result);

let waldoIsHiding = "Somewhere Waldo is hiding in this text";
let waldoRegex = /waldo/;
let result2 = waldoRegex.test(waldoIsHiding);
console.log("result2 :", result2);

let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/;
let result1 = petRegex.test(petString);
console.log("result1 : ", result1);

let myStrring = "freeCodeCamp";
let fccRegex = /freeCodeCamp/i;
let result3 = fccRegex.test(myStrring);
console.log("result3 :", result3);

let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/;
let result4 = extractStr.match(codingRegex);
console.log("result4 :", result4);

let  twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /Twinkle/gi;
let result5 = twinkleStar.match(starRegex);
console.log("result5 : ", result5);

let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /un./;
let result6 = unRegex.test(exampleStr);
console.log("result6 : ", result6);

let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi;
let result7 = quoteSample.match(vowelRegex);
console.log("result7 :", result7);

let quoteSample2 = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/gi;
let result8 = quoteSample2.match(alphabetRegex);
console.log("result8 :", result8);

let quoteSample3 = "Blueberry 3,141592653s are delicious.";
let myRegex2 = /[h-s2-6]/gi;
let result9 = quoteSample3.match(myRegex2);
console.log("result9 :", result9);

let quoteSample4 = "3 blind mice";
let myRegex3 = /[^0-9aeiou]/gi;
let result10 = quoteSample4.match(myRegex3);
console.log("result10: ", result10);

let difficultSpelling = "Mississippi";
let myRegex4 = /s+/gi;
let result11 = difficultSpelling.match(myRegex4);
console.log("result11 :", result11);

let chewieQuote = "Aaaaaaaaaaaaarrgh!";
let chewieRegex = /Aa*/;
let result12 = chewieQuote.match(chewieRegex);
console.log("result12 :", result12);

let text = "<h1>Winter is coming</h1>";
let myRegex5 = /<.*?>/;
let result13 = text.match(myRegex5);
console.log("result13 :", result13);

let crowd = "P1P2P3P4P5P6CCCCccccP7P8P9";
let reCriminals = /C+/;
let matchedCriminals = crowd.match(reCriminals);
console.log("matchedCriminals: ", matchedCriminals);

let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/;
let result14 = calRegex.test(rickyAndCal);
console.log("result14: ", result14);

let caboose = "The last car on a train is the caboose";
let lastRegex8 = /caboose$/;
let result15 = lastRegex8.test(caboose);
console.log("result15: ", result15);

let quoteSample5 = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g;
let result16 = quoteSample5.match(alphabetRegexV2).length;
console.log("result16: ", result16);

let quoteSample6 = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/g;
let result17 = quoteSample6.match(nonAlphabetRegex).length;
console.log("result17: ", result17);

let movieName = "2001: A space Odyssey";
let numRegex = /\d/g;
let result18 = movieName.match(numRegex).length;
console.log("result18: ", result18);

let movieName2 = "2001: A Space Odyssey";
let noNumRegex = /\D/g;
let result19 = movieName2.match(noNumRegex).length;
console.log("result19 : ", result19);

let username = "JackOfAllTrades";
let userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i;
let result20 = userCheck.test(username);
console.log("result20: ", result20);

let sample = "Whitespace is important in separating words";
let countWhiteSpace = /\s/g; // Change this line
let result21 = sample.match(countWhiteSpace);
console.log("result21: ", result21);

let sample2 = "Whitespace is important in separating words";
let countNonWhiteSpace1 = /\S/g; // Change this line
let result22 = sample2.match(countNonWhiteSpace1).length;
console.log("result22 : ", result22);

let ohStr = "Ohhh no";
let ohRegex = /oh{3,6}\sno/;
let result23 = ohRegex.test(ohStr);
console.log("result23 :", result23);

let haStr = "Hazzzzah";
let haRegex = /Haz{4,}ah/;
let result24 = haRegex.test(haStr);
console.log("result24: ", result24);

let timStr = "Timmmmber";
let timRegex3 = /Tim{4}ber/;
let result25 = timRegex3.test(timStr);
console.log("result25: ", result25);

let favWord = "favorite";
let favRegex = /favou?rite/;
let result26 = favRegex.test(favWord);
console.log("result26 :", result26);

let sampleWord = "astronaut";
let pwRegex = /(?=\w{6})|(?=\w*\d{2})/;
let result27 = pwRegex.test(sampleWord);
console.log("result27: ", result27);

let myString2 = "Eleanor Roosevelt";
let myRegex6 = /(Franklin|Eleanor).*Roosevelt/;
let result28 = myRegex6.test(myString2);
console.log("result28: ", result28);

let repeatNum = "42 42 42'";
let reRegex7 = /^(\d+)\s\1\s\1$/;
let result29 = reRegex7.test(repeatNum);
console.log("result29: ", result29);

let str = "one two three";
let fixRegex = /(\w+)\s(\w+)\s(\w+)/;
let replaceText = "$3 $2 $1";
let result30 = str.replace(fixRegex, replaceText);
console.log("result30: ", result30);

let hello = "Hello, World! ";
let wsRegex = /^\s+|\s+$/g;
let result31 = hello.replace(wsRegex, "");
console.log("result31: ", result31);

let a = 5;
let b = 1;
a++;

console.log("a =", a);
let sumAB = a + b;
console.log("a + b = ",sumAB);

let output = "Get this to log once";
console.log(output);
//console.clear();

let seven = 7;
let three = "3";
console.log(seven + three);
console.log(typeof seven);
console.log(typeof  three);

let receivables = 10;
let payables = 8;
let netWorkingCapital = receivables - payables;
console.log(`Net working capital is: ${netWorkingCapital}`);

let myArray = [1, 2, 3];
let arraySum = myArray.reduce((previous, current) => previous + current);
console.log(`Sum of array values is: ${arraySum}`);

let innerHtml = "<p>Click here to <a href=\"#Home\">return home</a></p>";
console.log("innerHTML =", innerHtml);

let x = 7;
let y = 9;
let result32;

if(x === y) {
    result32 = "Equal!";
} else {
    result32 = "Not equal!";
}
console.log("result32 =", result32);

function getNine() {
    let x = 6;
    let y = 3;
    return x + y;
}
let result33 = getNine();
console.log("result33 =", result33);

function raiseToPower(b, e) {
    return Math.pow(b, e);
}
let base = 2;
let exp = 3;
let power = raiseToPower(base, exp);
console.log("power =", power);

function countToFive() {
    let firstFive = "12345";
    let len2 = firstFive.length
    for(let i = 0; i < len2; i++) {
        console.log(firstFive[i]);
    }
}
countToFive();

function zeroArray(m, n) {
    let newArray = [];
    for (let i = 0; i < m; i ++) {
        let row = [];
        for (let j = 0; j < n; j ++) {
            row.push(0);
        }
        newArray.push(row);
    }
    return newArray;
}
let matrix = zeroArray(3, 2)
console.log("matrix: ", matrix);

function myFunction() {
    for (let i = 0; i <= 4; i += 2) {
        console.log("Still going!");
    }
}
console.log(myFunction());

