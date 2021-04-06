function welcomeToBooleans() {
    return true;
};
console.log(welcomeToBooleans);

function test (myCondition) {
    if (myCondition) {
        return "It was true";
    }
    return "It was false";
};
console.log(test(true));
console.log(test(false));

function trueOrFalse(wasThatTrue) {
    if(wasThatTrue){
        return "Yes, that was true";
    }
    return "No, that was false"
};
console.log(trueOrFalse(false));

function testEqual(val) {
    if (val==12) {
        return "Equal";
    }
    return "Not Equal";
};
console.log(testEqual(10));

function testStrict(val) {
    if (val===7) {
        return "Equal";
    }
    return "Not Equal";
}
console.log(testStrict(10));

function compareEquality(a, b) {
    if (a === b) {
        return "Equal";
    }
    return "Not Equal";
}
console.log(compareEquality(10, "10"));

console.log(1 !=  2);
console.log(1!= "1");
console.log(1!= '1');
console.log(1!= true);
console.log(0 != false);

function testNotEqual(val) {
    if (val!=99) { // Change this line
        return "Not Equal";
    }
    return "Equal";
}
console.log(testNotEqual(10));

function log(thing){
    console.log(thing)
};
//first instance of me getting frustrated and writing code to solve a problem. log() is less of a pain to write than console.log()

log('sup');

log(3 !==  3);
log(3 !== '3');
log(4 !==  3);

function testStrictNotEqual(val) {
    if (val!==17) {
        return "Not Equal";
    }
    return "Equal";
}
log(testStrictNotEqual(10));

log(5   >  3);
log(7   > '3');
log(2   >  3);
log('1' >  9);

function testGreaterThan(val) {
    if (val>100) {
        return "Over 100";
    }
    if (val>10) {
        return "Over 10";
    }
    return "10 or Under";
}
log(testGreaterThan(10));

log(6   >=  6);
log(7   >= '3');
log(2   >=  3);
log('7' >=  9);

function testGreaterOrEqual(val) {
    if (val>=20) {
        return "20 or Over";
    }
    if (val>=10) {
        return "10 or Over";
    }
    return "Less than 10";
}
log(testGreaterOrEqual(10));

log(2   < 5);
log('3' < 7);
log(5   < 5);
log(3   < 2);
log('8' < 4);

function testLessThan(val) {
    if (val<25) {
        return "Under 25";
    }
    if (val<55) {
        return "Under 55";
    }
    return "55 or Over";
}
log(testLessThan(10));

log(4   <= 5);
log('7' <= 7);
log(5   <= 5);
log(3   <= 2);
log('8' <= 4);

function testLessOrEqual(val) {
    if (val<=12) {
        return "Smaller Than or Equal to 12";
    }
    if (val<=24) {
        return "Smaller Than or Equal to 24";
    }
    return "More Than 24";
};

function testLogicalAnd(val) {
    if (val >= 25 && val <=50) {
        return "Yes";
    }
    return "No";
}

log(testLogicalAnd(10));






