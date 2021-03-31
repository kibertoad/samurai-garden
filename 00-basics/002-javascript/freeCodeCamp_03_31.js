function binaryAgent(str) {
    let biString = str.split(" ");
    let uniString = [];
    for (let i = 0; i < biString.length; i++) {
        uniString.push(String.fromCharCode(parseInt(biString[i], 2)));
    }
    return uniString.join("");
}
binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
console.log("binaryAgent:" , binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"));

function truthCheck(collection, pre) {
    let counter = 0;
    for (let c in collection) {
        if (collection[c].hasOwnProperty(pre) && Boolean(collection[c][pre])) {
            counter++;
        }
    }
    return counter == collection.length;
}
truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");
console.log(truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex"));

function addTogether() {
    function checkNum(num) {
        return (typeof num === "number");
    };
    if (arguments.length === 2) {
        let first = arguments[0];
        let second = arguments[1];
        if (checkNum(first) && checkNum(second)) {
            return first + second;
        } else {
            return undefined;
        }
    } else if (arguments.length === 1) {
        let first = arguments[0];
        if (checkNum(first)) {
            function addSecond(second) {
                if (checkNum(second)) {
                    return first + second;
                } else {
                    return undefined;
                }
            };
            return addSecond;
        } else {
            return undefined;
        }
    } else {
        return undefined;
    }
}
addTogether(2, 3);
console.log("addTogether: ", addTogether(2, 3));

let Person = function (firstAndLast) {
    let fullName = firstAndLast;

    this.getFirstName = function() {
        return fullName.split("")[0];
    };
    this.getLastname = function() {
        return fullName.split("")[1];
    };
    this.getFullName = function () {
        return fullName;
    };
    this.setFirstName = function (name) {
        fullName = name + "" + fullName.split("")[1];
    };
    this.setLastName = function (name) {
        fullName = fullName.split("")[0] + "" + name;
    };
    this.setFullName = function (name) {
        fullName = name;
    };
};
let bob = new Person('Bob Ross');
bob.getFullName();
console.log("bob.getFullName: ", bob.getFullName());

function orbitalPeriod(arr) {
    let GM = 398600.4418;
    let earthRadius = 6367.4447;
    let a = 2 * Math.PI;
    let newArr = [];

    let getOrbPeriod = function(obj) {
        let c = Math.pow(earthRadius + obj.avgAlt, 3);
        let b = Math.sqrt(c / GM);
        let orbPeriod = Math.round(a * b);
        return {name: obj.name, orbitalPeriod: orbPeriod};
    };
    for (let elem in arr) {
        newArr.push(getOrbPeriod(arr[elem]));
    }
    return newArr;
}
orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
console.log("orbitalPeriod: ", orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]));

function palindrome(str) {
    return (
        str.replace(/[\W_]/g, "").toLowerCase() === str
            .replace(/[\W_]/g, "")
            .toLowerCase()
            .split("")
            .reverse()
            .join("")
    );
}
palindrome("eye");
console.log("palindrome: ", palindrome("eye"));

function convertToRoman(num) {
    let decimalValue = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    let romanNumeral = [
        "M",
        "CM",
        "D",
        "CD",
        "C",
        "XC",
        "L",
        "XL",
        "X",
        "IX",
        "V",
        "IV",
        "I"
    ];
    let romanized = "";

    for (let index = 0; index < decimalValue.length; index++) {
        while (decimalValue[index] <= num) {
            romanized += romanNumeral[index];
            num -= decimalValue[index];
        }
    }
    return romanized;
};
convertToRoman(36);
console.log("romanized: ",convertToRoman(36));

function rot13(str) {
    return (str.split("")
        .map.call(str, function(char) {
        let x = char.charCodeAt(0);
        if (x < 65 || x > 90) {
            return String.fromCharCode(x);
        }
        else if (x < 78) {
            return String.fromCharCode(x + 13);
        }
        return String.fromCharCode(x -13);
    })
    .join("")
    );
    return str;
}
rot13("SERR PBQR PNZC");
console.log("rot13: ", rot13("SERR PBQR PNZC"));

function telephoneCheck(str) {
    let regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
    return regex.test(str);
}
telephoneCheck("555-555-5555");
telephoneCheck("27576227382");
console.log("telephoneCheck: ", telephoneCheck("555-555-5555"));
console.log("telephoneCheck: ", telephoneCheck("27576227382"));

let denom = [
    { name: "ONE HUNDRED", val: 100.0 },
    { name: "TWENTY", val: 20.0 },
    { name: "TEN", val: 10.0 },
    { name: "FIVE", val: 5.0 },
    { name: "ONE", val: 1.0 },
    { name: "QUARTER", val: 0.25 },
    { name : "DIME", val: 0.1 },
    { name: "NICKEL", val: 0.05 },
    { name: "PENNY", val: 0.01 }
];

function checkCashRegister(price, cash, cid) {
    let output = { status: null, change: [] };
    let change = cash - price;

    let register = cid.reduce(
        function (acc, curr) {
            acc.total += curr[1];
            acc[curr[0]] = curr[1];
            return acc;
        },
        { total: 0 }
    );
    if (register.total === change) {
        output.status = "CLOSED";
        output.change = cid;
        return output;
    }
    if (register.total < change) {
        output.status = "INSUFFICIENT_FUNDS";
        return output;
    }
    let change_arr = denom.reduce(function(acc, curr) {
        let value = 0;
        while (register[curr.name] > 0 && change >= curr.val) {
            change -= curr.val;
            register[curr.name] -= curr.val;
            value += curr.val;
            change = Math.round(change * 100) / 100;
        }
        if (value > 0) {
            acc.push([curr.name, value]);
        }
        return acc;
    }, []);
    if (change_arr.length < 1 || change > 0) {
        output.status = "INSUFFICIENT_FUNDS";
        return output;
    }
    output.status = "OPEN";
    output.change = change_arr;
    return output;
    }
    checkCashRegister(19.5, 20.0, [
        ["PENNY", 1.01],
        ["NICKEL", 2.05],
        ["DIME", 3.1],
        ["QUARTER", 4.25],
        ["ONE", 90.0],
        ["FIVE", 55.0],
        ["TEN", 20.0],
        ["TWENTY", 60.0],
        ["ONE HUNDRES", 100.0]
        ]);
  checkCashRegister(19.5, 20, [["PENNY", 1.01],
      ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25],
      ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60],
      ["ONE HUNDRED", 100]]);
console.log("checkCashRegister: ", checkCashRegister(19.5, 20, [["PENNY", 1.01],
    ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55],
    ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));

