let yourArray = ["string", 1, true, undefined, null];
console.log(yourArray);

let myArray = ["a", "b", "c", "d"];
myArray[1] = "besides b";
console.log("myArray: ", myArray);

function mixedNumbers(arr) {
    arr.unshift('I', 2, 'three');
    arr.push(7, 'VIII', 9);
    return arr;
}
console.log("mixedNumber: ", (mixedNumbers(['IV', 5, 'six'])));

function popShift(arr) {
    let popped = arr.pop();
    let shifted = arr.shift();
    return [shifted, popped];
}
console.log("popShift: ", popShift(['challenge', 'is', 'not', 'complete']));

const arr = [2, 4, 5, 1, 7, 5, 2, 1];
arr.splice(1, 4);
console.log("arr: ", arr);

function htmlColorName(arr) {
    arr.splice(0, 2, 'DarkSalmon', 'BlanchedAlmond');
    return arr;
}
console.log("htmlColorName", htmlColorName(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));

function forecast(arr) {
    return arr.slice(2, 4);
}
console.log("forecast: ", forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));

function copyMachine(arr, num) {
    let newArr = [];
    while (num >= 1) {
        newArr.push([...arr]);
        num--;
    }
    return newArr;
}

console.log("copyMachine: ", copyMachine([true, false, true], 2));

function spreadOut() {
    let fragment = ['to', 'code'];
    let sentence = ['learning', ...fragment, 'is', 'fun'];
    return sentence;
}
console.log("spreadOut: ", spreadOut());

function quickCheck(arr, elem) {
   // return arr.indexOf(elem) >= 0 ? true : false;
     if (arr.indexOf(elem) >= 0) {
        return true;
    }
    return false;
}
console.log("quickCheck: ", quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));

function filteredArray(arr, elem) {
    let newArr = [];
    for (let i = 0; i < arr.length; i ++) {
        if (arr[i].indexOf(elem) == -1) {
           newArr.push(arr[i]);
        }
    }
    return newArr;
}
console.log("filteredArray: ", filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 1));

let nestedArray = [
    ['deep'],
    [
        ['deeper'], ['deeper']
    ],
    [
        [
            ['deepest'], ['deepest']
        ],
        [
            [
                ['deepest-est?']
            ]
        ]
    ]
];
// nestedArray[2][1][0][0][0] = 'deeper still';
console.log(nestedArray[2][1][0][0][0]);

let myNestedArray = [
    ['unshift', false, 1, 2, 3, 'complex', 'nested'],
    ['loop', 'shift', 6, 7, 1000, 'method'],
    ['concat', false, true, 'spread', 'array', ['deep']],
    ['mutate', 1327.98, 'splice', 'slice', 'push', [['deeper']]],
    ['iterate', 1.3849, 7, '8.4876', 'arbitrary', 'depth', [[['deepest']]]]
];
console.log("myNestedArray: ", myNestedArray);

let foods = {
    apples: 25,
    oranges: 32,
    plums: 28
}
foods.bananas = 13;
foods.grapes = 35;
foods.strawberries = 27;

console.log(foods);

let userActivity = {
    id: 23894201352,
    date: 'January 1, 2017',
    data: {
        totalUsers: 51,
        online: 42
    }
};
userActivity.data.online = 45;

console.log("userActivity",userActivity);

let  fruits = {
    apples: 25,
    oranges: 32,
    plums: 28,
    bananas: 13,
    grapes: 35,
    strawberries: 27
}
function checkInventory(scannedItem) {
    return foods[scannedItem];
}
console.log("checkInventory",checkInventory("oranges"));

let food = {
    apples: 25,
    oranges: 32,
    plums: 28,
    bananas: 13,
    grapes: 35,
    strawberries: 27
}
//delete food.oranges;
//delete food.plums;
//delete food.strawberries;

food.oranges = undefined;
food.plums = undefined;
food.strawberries = undefined;

console.log("food: ", food);

let users = {
    Alan: {
        age: 27,
        online: true
    },
    Jeff: {
        age: 32,
        online: true
    },
    Sarah: {
        age: 48,
        online: true
    },
    Ryan: {
        age: 19,
        online: true
    }
};

function isEveryoneHere(obj) {
    if (obj.hasOwnProperty('Alan') &&
    obj.hasOwnProperty('Jeff') &&
    obj.hasOwnProperty('Sarah') &&
    obj.hasOwnProperty('Ryan')) {
        return true;
    }
    return false;
}
console.log("users", isEveryoneHere(users));

let user = {
    Alan: {
        online: false
    },
    Jeff: {
        online: true
    },
    Sarah: {
        online: false
    }
}

function countOnline(usersObj) {
    let result = 0;
    for (let user in usersObj) {
        if (usersObj[user].online === true) {
            result++;
        }
    }
    return result;
}
console.log("countOnline: ", countOnline(user));

let userss = {
    Alan: {
        age: 27,
        online: false
    },
    Jeff: {
        age: 32,
        online: true
    },
    Sarah: {
        age: 48,
        online: false
    },
    Ryan: {
        age: 19,
        online: true
    }
};

function getArrayOfUsers(obj) {
    return Object.keys(obj);
}

console.log("getArray: ", getArrayOfUsers(userss));

let uuser = {
    name: 'Kenneth',
    age: 28,
    data: {
        username:'kennethCodesAllDay',
        joinDate: 'March 26, 2016',
        organization: 'freeCodeCamp',
        friends: [
            'Sam',
            'Kira',
            'Tomo'
        ],
        location: {
            city: 'San Francisco',
            state: 'CA',
            country: 'USA'
        }
    }
};

function addFriend(userObj, friend) {
    userObj.data.friends.push(friend);
    return userObj.data.friends;
}
console.log("addFriend: ",addFriend(uuser, 'Pete'));

function convertToF(celsius) {
    let fahrenheit = celsius * 9/5 + 32;
    return fahrenheit;
}
console.log("convertToF:", convertToF(30));

function reverseString(str) {
    return str
        .split("")
        .reverse()
        .join("")
}
console.log("reverseString: ", reverseString("hello"));

function factorialize(num) {
    if (num < 0) {
        return -1;
    } else if (num == 0) {
        return 1;
    } else {
        return (num * factorialize(num - 1));
    }
}
console.log("factorialize: ", factorialize(5));

