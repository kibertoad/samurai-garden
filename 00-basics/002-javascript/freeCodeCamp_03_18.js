function welcomeToBooleans() {
    return true;

}
console.log(welcomeToBooleans());

function  trueOrFalse(wasThatTrue) {
    if (wasThatTrue) {
        return "Yes, that true";
    }
    return "No, that was false";
}
console.log(trueOrFalse(true));

function testEqual(val) {
    if (val == 12) {
        return "Equal";
    }
    return  "Not Equal";
}
console.log(testEqual(10));

function testStrict(val) {
    if (val === 7) {
        return "Equal";
    }
    return "Not Equal";
}
console.log(testStrict(10));

function compareEquality(a, b) {
    if (a === b) {
        return "Equal";
    }
    return  "Not Equal";
}
console.log((compareEquality(10, "10")))

function testNotEqual(val) {
    if (val !== 99) {
        return "Not Equal";
    }
    return "Equal";
}
console.log(testNotEqual("99"));

function testGreaterThan(val) {
    if (val > 100) {
        return "over 100";
    }
    if (val > 10) {
        return "over 10";
    }
    return "10 or Under";
}
console.log(testGreaterThan(10));

function testGreaterOrEqual(val) {
    if (val >= 20) {
        return "20 or Over";
    }
    if (val >=10) {
        return "10 or Over";
    }
    return "Less than 10";
}
console.log(testGreaterOrEqual(0));

function testLessThan(val) {
    if (val < 25) {
        return "Under 25";
    }
    if (val < 55) {
        return "Under 55";
    }
    return "55 or Over";
}
console.log(testLessThan(35));

function testLessOrEqual(val) {
    if (val <= 12) {
        return "Smaller Than or Equal to 12";
    }
    if (val <= 24) {
        return "Smaller Than or Equal to 24";
    }
    return "More than 24";
}
console.log(testLessOrEqual(25));

function testLogicalAnd(val) {
    if (val <= 50 && val >= 25){
        return "Yes";
    }
    return "No";
}
console.log(testLogicalAnd(10));

function testLogicalOr(val) {
    if (val < 10 || val > 20) {
        return "Outside";
    }
    return "Inside";
}
console.log(testLogicalOr(15));

function testElse(val) {
    let result = "";
    if (val > 5 ) {
        result = "Bigger than 5";
    } else {
        result = "5 or Smaller";
    }
return result;
}
console.log(testElse(4));

function  testElseIf(val) {
    if (val > 10) {
        return "Greater than 10";
    } else if (val < 5) {
        return "Smaller than 5";
    }
    else {
        return "Between 5 and 10";
    }
}
console.log(testElseIf(7));

function orderMyLogic(val) {
    if (val < 5) {
        return "Less than 5";
    } else if (val < 10) {
        return "Less than 10";
    } else {
        return "Greater than or equal to 10";
    }
}
console.log(orderMyLogic(7));

function testSize(num) {
    if (num < 5) {
        return "Tiny";
    } else if (num < 10) {
        return "Small";
    } else if (num < 15) {
        return "Medium";
    } else if (num < 20) {
        return "Large";
    } else if (num >= 20){
        return "Huge";
    }
    return "Change Me";
}console.log(testSize(7));

let names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
function golfScore(par, strokes) {
    if (strokes === 1) {
        return names [0];
    } else if (strokes <= par -2) {
        return names [1];
    } else if (strokes === par) {
        return names [3];
    } else if (strokes === par + 1) {
        return names [4];
    } else if (strokes === par + 2) {
        return names [5];
    } else if (strokes >= par +3) {
        return names [6];
    }
    return "Change Me";
}
console.log(golfScore(5,4));


function caseInSwitch(val) {
    let answer = "";
    switch(val) {
        case 1:
            return "alpha";
            break;
        case 2:
            return "beta";
            break;
        case 3:
            return "gamma";
            break;
        case 4:
            return "delta";
            break;
     //Why Unreachable code? all break (181, 184, 187, 190 )
    }
    return answer;
}
console.log(caseInSwitch(1));

function switchOfStuff(val) {
    let answer = "";
    switch (val) {
        case "a":
            answer = "apple";
            break;
        case "b":
            answer = "bird";
            break;
        case "c":
            answer = "cat";
            break;
        default:
            answer = "stuff";
    }
   return answer;
}
console.log(switchOfStuff(1));

function sequentialSize(val) {
    let answer = "";
    switch (val) {
        case 1:
        case 2:
        case 3:
            answer = "Low";
            break;
        case 4:
        case 5:
        case 6:
            answer = "Mid";
            break;
        case 7:
        case 8:
        case 9:
            answer = "High";
            break;
    }
    return answer;
}
console.log(sequentialSize(5));

function chainToSwitch(val) {
    let answer = "";
    switch (val) {
        case "bob":
        answer = "Marley";
        break;
        case 42:
            answer = "The Answer";
            break;
        case 1:
            answer = "There is no #1";
            break;
        case 99:
            answer = "Missed me by this much!"
            break;
        case 7:
            answer = "Ate Nine";
            break;
    }
    return answer;
}
console.log(chainToSwitch(7));

function isLess(a, b) {
    return (a < b);
}
console.log(isLess(10, 15));

function abTest(a, b) {
    if (a < 0 || b < 0) {
        return undefined;
    }
    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}
console.log(abTest(2, 2));

let count = 0;
function cc(card) {
    switch (card) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count ++;
            break;
        case 10:
        case "J":
        case "Q":
        case "K":
        case "A":
            count --;
            break;
    }
    let holdbet = "Hold";
    if (count > 0) {
        holdbet = "Bet";
    }
    return count + " " + holdbet;
}
console.log(cc(2));

let myDog = {
    "name": "Fox",
    "legs": 4,
    "tails": 1,
    "friend": ["rabbit", "crow", "squirrel"]
};
console.log(myDog);

let testObj = {
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats"
};
let hatValue = testObj.hat;
let shirtValue = testObj.shirt;

console.log(hatValue);
console.log(shirtValue);
console.log(testObj);

let testWith = {
    "an entree": "hamburger",
    "my side": "veggies",
    "the drink": "water"
};
let entreeValue = testWith["an entree"];
let drinkValue = testWith["the drink"];

console.log(entreeValue);
console.log(drinkValue);
console.log(testWith);