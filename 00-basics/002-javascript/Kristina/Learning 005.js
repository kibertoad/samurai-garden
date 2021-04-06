function log(thing){
    console.log(thing)
};

function testLogicalOr(val) {
    if (val<10 || val>20) {
        return "Outside";
    }
    return "Inside";
}
log(testLogicalOr(15));

function testElse(val) {
    var result = "";
    if (val > 5) {
        result = "Bigger than 5";
    }else{
        result = "5 or Smaller";
    }
    return result;
}
log(testElse(4));

function testElseIf(val) {
    if (val > 10) {
        return "Greater than 10";
    }  else if (val < 5) {
        return "Smaller than 5";
    }else{
        return "Between 5 and 10";
}}
log(testElseIf(7));

function orderMyLogic(val) {
    if(val < 5) {
        return "Less than 5";
    } else if (val < 10) {
        return "Less than 10";
    } else {
        return "Greater than or equal to 10";
    }
}
log(orderMyLogic(4));

function testSize(num) {
    if (num < 5) {
        return "Tiny"
    } else if (num < 10) {
        return "Small"
    } else if (num < 15) {
        return "Medium"
    } else if (num < 20) {
        return "Large"
    } else {
        return "Huge"
    }
}
log(testSize(7));

var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
function golfScore(par, strokes) {
    if (strokes == 1) {
        return names[0];
    } else if (strokes <= par - 2) {
        return names[1];
    } else if (strokes == par - 1) {
        return names[2];
    } else if (strokes == par) {
        return names[3];
    } else if (strokes == par + 1) {
        return names[4];
    } else if (strokes == par + 2) {
        return names[5];
    } else {
        return names[6];
    }
}
log(golfScore(5, 4));

function caseInSwitch(val) {
    var answer = "";
    {
        switch(val){
            case (1):
                answer="alpha";
                break;
            case (2):
                answer="beta";
                break;
            case (3):
                answer="gamma";
                break;
            case (4):
                answer="delta";
                break;
    }}
    return answer;
}
log(caseInSwitch(1));
log(caseInSwitch(2));

function switchOfStuff(val) {
    var answer = "";
    switch (val) {
        case "a":
            answer="apple";
            break;
        case "b":
            answer="bird";
            break;
        case "c":
            answer="cat";
            break;
        default:
            answer="stuff";
            break;
    }
    return answer;
}
log(switchOfStuff(1));
log(switchOfStuff("b"));

function sequentialSizes(val) {
    var answer = "";
    switch(val) {
        case 1:
            answer="Low"
        case 2:
            answer="Low"
        case 3:
            answer="Low"
            break;
        case 4:
            answer="Mid"
        case 5:
            answer="Mid"
        case 6:
            answer="Mid"
            break;
        case 7:
            answer="High"
        case 8:
            answer="High"
        case 9:
            answer="High"
            break;
    }
    return answer;
}
log(sequentialSizes(1));

function chainToSwitch(val) {
    var answer = "";
    switch(val){
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
        answer = "Missed me by this much!";
        break;
    case 7:
        answer = "Ate Nine";
        break;
    }
    return answer;
}
log(chainToSwitch(7));

function isLess(a, b) {
    return a<b;
}
log(isLess(10, 15));

//Free Code Camp Basic JavaScript 70% completion