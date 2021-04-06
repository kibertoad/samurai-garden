function log(thing){
    console.log(thing)
};

function abTest(a, b) {
    if (a<0 || b<0)
        return ;
    //supposed to return undefined, hense blank
    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}
log(abTest(2,2));
log(abTest(0,-5));

var count = 0;
function cc(card) {
    switch (card) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count++;
            break;
        case 10:
        case "J":
        case "Q":
        case "K":
        case "A":
            count--;
            break;
    }
    if (count > 0) {
        return count + " Bet";
    } else {
        return count + " Hold";
    }
}
log(cc(2)); log(cc(3)); log(cc(7)); log(cc('K')); log(cc('A'));

var myDog0 = {
    "name": "Cerberus",
    "legs": 4,
    "tails":3,
    "friends": ["Hades", "Persephone"],
};
log(myDog0.name); log(myDog0.legs); log(myDog0.friends);

var testObj = {
    12: "Namath",
    16: "Montana",
    19: "Unitas"
};
var playerNumber=16;
var player = testObj[playerNumber];
log(player);

var myDog = {
    "name": "Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
};
myDog.name="Happy Coder"
log(myDog.name);

var myDog1 = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
};
myDog1.bark="The Government is Lying"
log(myDog1);
delete myDog1.tails;
log(myDog1);

function phoneticLookup(val) {
    var result = "";
    var lookup= {
        "alpha": "Adams",
        "bravo":"Boston",
        "charlie":"Chicago",
        "delta":"Denver",
        "echo":"Easy",
        "foxtrot":"Frank"
    };
    result = lookup[val];
    return result;
}
log(phoneticLookup("charlie"));

function checkObj(obj, checkProp) {
    if(obj.hasOwnProperty(checkProp)) {
        return obj[checkProp];
    } else {
        return "Not Found";
    }
};

//Free Code Camp Basic JavaScript 80% completion


