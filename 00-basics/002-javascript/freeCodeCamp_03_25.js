function findLongestWordLength(str) {
    let strSplit = str.split('');
    let longestWord = 0;
    for (let i = 0; i < strSplit.length; i ++) {
        if (strSplit[i].length > longestWord) {
            longestWord = strSplit[i].length;
        }
    }
    return longestWord;
}
findLongestWordLength("May the force be with you");
console.log("findLongestWordLength: ", findLongestWordLength("May the force be with you"));

function findLongestWords(str) {
    let array = str.split(" ");
    array.sort(function(a,b) {
        return b.length - a.length;
    });
    return array[0].length;
}
findLongestWords("The quick brown fox jumped over the lazy dog");
console.log("findLongestWords :", findLongestWords("The quick brown fox jumped over the lazy dog"));

function largestOfFour(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        let largestNumber = arr[i][0];
        for (let j = 1; j < arr[i].length; j++) {
            if (arr[i][j] > largestNumber) {
                largestNumber = arr[i][j];
            }
            result[i] = largestNumber;
        }
    }
    return result;
}
largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
console.log("largestOfFour: ", largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));

function confirmEnding(str, target) {
    return (str.substr(-target.length) == target ? true : false);
}
console.log("confirmEnding: ", confirmEnding("Bastian", "n"));

function repeatStringNumTimes(str, num) {
    let repeatString = "";
    while (num > 0) {
        repeatString += str;
        num --;
    }
    return repeatString;
}
console.log("repeatStringNumTimes: ", repeatStringNumTimes("abc", 3));

function truncateString(str, num) {
 if (str.length > num) {
     return str.slice(0, num) + "...";
 }  else {
     return str;
 }
}
console.log("trucateStriung: ", truncateString("A-tisket a tasket A green and yellow basket", 8));

function findElement(arr, func) {
    let num = 0;

    for (let i = 0; i < arr.length; i++) {
        num = arr[i];
        if (func(num)) {
            return num;
        }
    }
    return undefined;
}
    findElement([1, 3, 5, 8, 9, 10], num => num % 2 === 0);
console.log("findElement: ", findElement([1, 3, 5, 8, 9, 10], num => num % 2 === 0));

function booWho(bool) {
    return typeof (bool) === "boolean"
}
booWho(true);
console.log("booWho: ", booWho(true));

function titleCase(str) {
    str = str.toLowerCase().split('');
    for (let i = 0; i < str.length; i++) {
str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join('');
}
titleCase("I'm a little tea pot");
console.log("titleCase: ", titleCase("I'm a little tea pot"));

function frankenSplice(arr1, arr2, n) {
    let localArray = arr2.slice();
    for (let i = 0; i < arr1.length; i++) {
        localArray.splice(n, 0, arr1[i]);
        n++;
    }
    return localArray;
}
frankenSplice([1, 2, 3], [4, 5, 6], 1);
console.log("frankenSplice: ", frankenSplice([1, 2, 3], [4, 5, 6], 1));

function bouncer(arr) {
    return arr.filter(Boolean);
}

bouncer([7, "ate", "", false, 9]);
console.log("bouncer: ", bouncer([7, "ate", "", false, 9]));

function getIndexToIns(arr, num) {
    arr.sort(function(a, b) {
        return a - b;
    });
    for (let a = 0; a < arr.length; a++) {
        if (arr[a] >= num) return a;
    }
    return arr.length;
}
getIndexToIns([40, 60], 50);
console.log("getIndexToIns: ", getIndexToIns([40, 60], 70));

function mutation(arr) {
    let test = arr[1].toLowerCase();
    let target = arr[0].toLowerCase();
    for (let i = 0; i < test.length; i++) {
        if (target.indexOf(test[i]) < 0) return false;
    }
    return true;
}
mutation(["hello", "hey"]);
console.log("mutation: ", mutation(["hello", "hey"]));

function chunkArrayInGroups(arr, size) {
    let temp = [];
    let result = [];

    for (let a = 0; a < arr.length; a++) {
        if (a % size !== size -1) temp.push(arr[a]);
        else {
            temp.push(arr[a]);
            result.push(temp);
            temp = [];
        }
    }
    if (temp.length !== 0) result.push(temp);
    return result;
}
chunkArrayInGroups(["a", "b", "c", "d"], 2);
console.log("chunkArrayInGroups: ", chunkArrayInGroups(["a", "b", "c", "d"], 2));
