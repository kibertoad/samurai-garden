function log(thing){
    console.log(thing)
};

var myMusic = [
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
        "artist": "Queen",
        "title": "Queen",
        "release_year": 1973,
        "formats": [
            "CD",
            "8T",
            "LP"
        ],
        "gold": true

    }
];
log(myMusic);

var myStorage = {
    "car": {
        "inside": {
            "glove box": "maps",
            "passenger seat": "crumbs"
        },
        "outside": {
            "trunk": "jack"
        }
    }
};
var gloveBoxContents = myStorage.car.inside["glove box"];
log(gloveBoxContents);

var myPlants = [
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
var secondTree = myPlants[1].list[1];
log(secondTree);

var collection = {
    2548: {
        albumTitle: 'Slippery When Wet',
        artist: 'Bon Jovi',
        tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
        albumTitle: '1999',
        artist: 'Prince',
        tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
        artist: 'Robert Palmer',
        tracks: []
    },
    5439: {
        albumTitle: 'ABBA Gold'
    }
};
function updateRecords(object, id, prop, value) {
    if (prop !== 'tracks' && value !== "") {
        object[id][prop] = value;
    } else if (prop === "tracks" && object[id].hasOwnProperty("tracks") === false) {
        object[id][prop] = [value];
    } else if (prop === "tracks" && value !== "") {
        object[id][prop].push(value);
    } else if (value === "") {
        delete object[id][prop];
    }
    return object;
}
updateRecords(collection, 5439, 'artist', 'ABBA');
log(collection);

var myArray = [];
var a=0
var b=6
while(a<6){
    b--
    myArray.push(b)
    a++
};
log(myArray);

var myArray1 = [];
for(var i = 1; i < 6; i++) {
    myArray1.push(i);
};
log(myArray1);

var myArray2= [];
for (var i = 1; i < 10; i += 2) {
    myArray2.push(i);
}
log(myArray2);

var myArray3 = [];
for (var i = 9; i > 0; i -= 2) {
    myArray3.push(i);
};
log(myArray3);

var myArr4 = [ 2, 3, 4, 5, 6];
var total=0
for (var i = 0; i < myArr4.length; i++) {
    total += myArr4[i];
};
log(total);

function multiplyAll(arr) {
    var product = 1;
    for (var i=0; i < arr.length; i++) {
        for (var j=0; j < arr[i].length; j++) {
            product = product * arr[i][j];
        }
    }
    return product;
}
multiplyAll([[1,2],[3,4],[5,6,7]]);

var myArray5 = [];
var i = 10;
do {
    myArray5.push(i);
    i++;
}while (i < 10)
log (myArray5);



