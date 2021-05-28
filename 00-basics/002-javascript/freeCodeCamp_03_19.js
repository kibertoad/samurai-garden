let someObj = {
    propName: "John"
};

function propPrefix(str) {
    let s = "prop";
    return s + str;
}
let someProp = propPrefix("Name");
console.log(someObj[someProp]);

let testObj = {
    12: "Namath",
    16: "Montana",
    19: "Unitas"
};

let playerNumber = 16;
let player = testObj[playerNumber];
console.log(player);

let myDog = {
    "name": "Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
};
myDog.name = "Happy Coder";
myDog.bark = "woof";
delete myDog.bark;
console.log(myDog.name);
console.log(myDog);
console.log(myDog);

let myLittleDog = {
    "name": "Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
};

myDog.bark = "woof";
delete myDog.bark;

console.log(myLittleDog);



function phoneticLookup(val) {
    let result = "";

let lookup = {
    "alpha": "Adams",
    "bravo": "Boston",
    "charlie": "Chicago",
    "delta": "Denver",
    "echo": "Easy",
    "foxtrot": "Frank"
};
result = lookup[val];
return result;
}

console.log(phoneticLookup("charlie"));


let myObj = {
    gift: "pony",
    pet: "kitten",
    bed: "sleigh"
};

function checkObj(checkProp) {
   return  myObj.hasOwnProperty(checkProp) ? myObj[checkProp] : "Not Found";
}

checkObj("gift");
console.log(checkObj("gift"));


let myMusic = [
    {
        "artist": "Billy Joel",
        "title": "Piano Man",
        "release_year": 1973,
        "formats": [
            "CD",
            "8T",
            "LP"
        ],
        "gold": true
    },
    {
        "artist": "Deep Purple",
        "title": "Smoke on the water",
        "release_year": 1976,
        "formats": [
            "CD",
            "8T",
            "LP"
            ]
    }
];
console.log(myMusic);

let myStorage = {
    "car": {
        "inside": {
            "glove box": "crumbs"
        },
        "outside": {
            "trunk": "jack"
        }
    }
};

let gloveBoxContents = myStorage.car.inside["glove box"];

console.log(gloveBoxContents);

let myPlants = [
    {
        type: "flowers",
        list: [
            "rose",
            "tulip",
            "dandelion"
        ]
    },
    {
        type: "trees",
        list: [
            "fir",
            "pine",
            "birch"
        ]
    }
];

let secondTree = myPlants[1].list[1];

console.log(secondTree);

let collection = {
    2548: {
        albumTitle: "Slippery When Wet",
        artist: "Bon Jovi",
        tracks: ["Let It Rock", "You Give Love a Bad Name"]
    },
    2468: {
        albumTitle: "1999",
        artist: "Prince",
        tracks: ["1999", "Little Red Corvette"],
    },
    1245: {
        artist: "Robert Palmer",
        tracks: []
    },
    5439: {
        albumTitle: "ABBA Gold"
    }
};

function updateRecords(object, id, prop, value) {
    if (prop !== "tracks" && value !== "") {
        object [id][prop] = value;
    } else if (prop === "tracks" && object[id].hasOwnProperty("tracks") === false) {
        object [id][prop] = [value];
    } else if (prop === "tracks" && value !== "") {
        object [id][prop].push(value)
    } else  if (value !== "") {
        delete object [id][prop]
    }
    return object;
}
console.log(updateRecords(collection, 5439, "albumTitle", "ABBA"));

let myArray = [];
 let i = 5;
 while (i >= 0) {
     myArray.push(i);
     i--;
 }
 console.log(myArray);

 let nextArray = [];
 for (let i = 1; i < 6; i++) {
     nextArray.push(i);
 }
 console.log(nextArray);


 let firstArray = [];
 for (let i = 1; i < 10; i += 2) {
     firstArray.push(i);
 }
 console.log(firstArray);

let secondArray = [];
for (let i = 9; i >= 1; i -= 2){
    secondArray.push(i);
}
console.log(secondArray);

let myArr = [2, 3, 4, 5, 6];
let total = 0;
for (i = 0; i < myArr.length; i ++) {
    total += myArr[i];
}
console.log(total);

function multiplyAll(arr) {
    let product = 1;
    for (let i = 0; i < arr.length; i ++) {
        for (let j = 0; j <arr[i].length; j ++) {
            product *= arr[i][j];
        }
    }
    return product;
}
console.log(multiplyAll([[1, 2], [3, 4], [5, 6, 7]]));


    let firstArr = [];
    let n= 10;
    do {
        firstArr.push(n);
        n++;
    } while (n <= 10);

console.log(firstArr);

function sum(arr, n) {
    if (n <= 0) {
        return 0;
    } else {
        return  sum(arr, n - 1) + arr[n - 1];
    }
}
console.log(sum([2, 3, 4, 5], 3));
