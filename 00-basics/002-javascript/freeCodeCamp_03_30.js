function sumAll(arr) {
    let max = Math.max(arr[0], arr[1]);
    let min = Math.min(arr[0], arr[1]);
    let sumBetween = 0;
    for (let i = min; i <= max; i ++) {
        sumBetween += i;
    }
    return sumBetween;
}
console.log("sumAll: ", sumAll([1, 4]));

function diffArray(arr1, arr2) {
    let newArr = [];

    function onlyInFirst(first, second) {
        for (let i = 0; i < first.length; i++) {
            if (second.indexOf(first[i]) === -1) {
                newArr.push(first[i]);
            }
        }
    }
    onlyInFirst(arr1, arr2);
    onlyInFirst(arr2, arr1);
    return newArr;
}
diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
console.log("diffArray: ", diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));

function destroyer(arr) {
    let valsToRemove = Object.values(arguments).slice(1);

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < valsToRemove.length; j++) {
            if (arr[i] === valsToRemove[j]) {
                delete arr[i];
            }
        }
    }
    return arr.filter(item => item !== null);
}
destroyer([1, 2, 3, 1, 2, 3], 2, 3);
console.log("diffArray: ", destroyer([1, 2, 3, 1, 2, 3], 2, 3));

function whatIsInAName(collection, source) {
    let arr = [];
    let srcKeys = Object.keys(source);
    return collection.filter(function (obj) {
        for (let i = 0; i < srcKeys.length; i++) {
            if ( !obj.hasOwnProperty(srcKeys[i]) || obj[srcKeys[i]] !== source[srcKeys[i]] ) {
               return false;
            }
        }
        return true;
    });
    return arr;
}
whatIsInAName([{ first: "Romeo", last: "Montague"}, { first: "Mercutio", last: null },
    { first: "Tybalt", last: "Capulet" }], {last: "Capulet"});
console.log("whatIsInAname: ", whatIsInAName([{ first: "Romeo", last: "Montague"}, { first: "Mercutio", last: null },
    { first: "Tybalt", last: "Capulet" }], {last: "Capulet"}));

function spinalCase(str) {
    let regex =  /\s+|_+/g;
    str = str.replace(/([a-z])([A-Z])/g, "$1 $2");
    return str.replace(regex, "-").toLowerCase();
}
spinalCase('This Is Spinal Tap');
console.log("spinalCase: ", spinalCase('This Is Spinal Tap'));

function translatePigLatin(str) {
    let concatRegex = /^[^aeiou]/;
    let myConsonants = str.match(concatRegex);
    return myConsonants !== null ? str
        .replace(concatRegex, "")
        .concat(myConsonants)
        .concat("ay")
        : str.concat("way");
}
translatePigLatin("consonant");
console.log("translatePigLatin: ", translatePigLatin("consonant"));

function myReplace(str, before, after) {
    let index = str.indexOf(before);
    if (str[index] === str[index].toUpperCase()) {
        after = after.charAt(0).toUpperCase() + after.slice(1);
    } else {
        after = after.charAt(0).toLowerCase() + after.slice(1);
    }
    str = str.replace(before, after);
    return str;
}
myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
console.log("myReplace: ", myReplace("A quick brown fox " +
    "jumped over the lazy dog", "jumped", "leaped"));

function pairElement(str) {
    let paired = [];
    let search = function(char) {
        switch (char) {
            case "A":
                paired.push(["A", "T"]);
                break;
            case "T":
                paired.push(["T", "A"]);
                break;
            case "C":
                paired.push(["C", "G"]);
                break;
            case "G":
                paired.push(["G", "C"]);
                break;

        }
    };
    for (let i = 0; i < str.length; i++) {
        search(str[i]);
    }
    return paired;
}
pairElement("GCG");
console.log("pairElement: ", pairElement("GCG"));

function fearNotLetter(str) {
    for (let i = 0; i < str.length; i++) {
        let code = str.charCodeAt(i);
        if (code !== str.charCodeAt(0) + i) {
            return String.fromCharCode(code - 1);
        }
    }
    return undefined;
}
fearNotLetter("abce");
console.log("fearNotLetter: ", fearNotLetter("abce"));

function uniteUnique(arr) {
    let finalArray = [];
    for (let i = 0; i < arguments.length; i++) {
        let arrayArguments = arguments[i];
        for (let j = 0; j < arrayArguments.length; j++) {
            let indexValue = arrayArguments[j];
            if (finalArray.indexOf(indexValue) < 0) {
                finalArray.push(indexValue);
            }
        }
    }
    return finalArray;
}
uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
console.log("uniteUnique: ", uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));

function convertHTML(str) {
    let temp = str.split("");
    for (let i = 0; i < temp.length; i++) {
        switch (temp[i]) {
            case "<":
                temp[i] = "&lt;";
                break;
            case "&":
                temp[i] = "&amp;";
                break;
            case ">":
                temp[i] = "&gt;";
                break;
            case  '"':
                temp[i] = "&quot;";
                break;
            case "'":
                temp[i] = "&apos;";
                break;
        }
    }
    temp = temp.join("");
    return temp;
}
convertHTML("Dolce & Gabbana");
console.log("convertHTML: ", convertHTML("Dolce & Gabbana"));

function sumFibs(num) {
    let prevNumber = 0;
    let currNumber = 1;
    let result = 0;
    while (currNumber <= num) {
        if (currNumber % 2 !== 0) {
            result += currNumber;
        }
        currNumber += prevNumber;
        prevNumber = currNumber - prevNumber;
    }
    return result;
}
sumFibs(4);
console.log("sumFibs: ", sumFibs(4));

function sumPrimes(num) {
    function isPrime(num) {
        for (let i = 2; i <+ Math.sqrt(num); i++) {
            if (num% i == 0)
                return false;
            }
return true;
        }
        let sum = 0;
        for (let i = 2; i <= num; i++) {
            if (isPrime(i))
                sum += i;
            }
            return sum;
}
sumPrimes(10);
console.log("sumPrimes: ", sumPrimes(10));

function smallestCommons(arr) {
    const [min, max] = arr.sort((a, b) => a - b);
    const numberDivisors = max - min + 1;
    let upperBound = 1;
    for (let i = min; i <= max; i++) {
        upperBound *= i;
    }
    for (let multiple = max; multiple <= upperBound; multiple += max) {
        let divisorCount = 0;
        for (let i = min; i <= max; i++) {
            if (multiple % i === 0) {
                divisorCount += 1;
            }
        }
        if (divisorCount === numberDivisors) {
            return multiple;
        }
    }
}
smallestCommons([1, 5]);
console.log("smallestCommons: ", smallestCommons([1, 5]));

function dropElements(arr, func) {
    while (arr.length > 0 && !func(arr[0])) {
        arr.shift();
    }
    return arr;
}
dropElements([1, 2, 3,], function(n) {return n < 3; });
console.log("dropElements: ", dropElements([1, 2, 3,], function(n) {return n < 3; }));

function steamrollArray(arr) {
    const flat = [].concat(...arr);
    return flat.some(Array.isArray) ? steamrollArray(flat) : flat;
}

steamrollArray([1, [2], [3, [[4]]]]);
console.log("steamrollArray: ", steamrollArray([1, [2], [3, [[4]]]]));

