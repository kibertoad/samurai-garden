let RobotDinosaurFromSpace = {};
RobotDinosaurFromSpace.roar = function(line) {
    console.log(`The creature roars '${line}'`);
};

RobotDinosaurFromSpace.roar("I shall eat all of you puny humans ");
function roar (line) {
    console.log(`The ${this.type} Robot Dinosaur From Space Roars '${line}'`);
}
let EvilDinosaur= {type: "mean", roar};
let SemiDecentDinosaur= {type: "bored", roar};

EvilDinosaur.roar("I shall eat all you puny humans," +
    "suffer in my jaws of death!");

SemiDecentDinosaur.roar("....Let's at least knock them out first I don't like when my food screams");
roar.call(EvilDinosaur, "Burp! " + "*barely audible screetching*");
roar.call(SemiDecentDinosaur, "....I hate you and I have a migraine");
let protoDino= {
    roar(line) {
        console.log(`The ${this.type} Robot Dinosaur From Space Roars '${line}'`);
    }
};
let TinyDino = Object.create(protoDino);
TinyDino.type = "mmol";
TinyDino.roar("I have no idea why I'm here");
//free code camp bit
var a=9;
console.log(a);
var a1 = 18;
var b=a1;
console.log(b)
var myVar = 665;
myVar++;
console.log(myVar);
myVar--;
console.log(myVar);
/*(this note is for me don't pay attention)
The remainder operator % gives the remainder of the division of two numbers.
In mathematics, a number can be checked to be even or odd by checking the
remainder of the division of the number by 2.
 */
var remainder=57%5;
console.log(remainder);
var a = 15;
var b = 55;
var c = 122;
a += 56;
b += 22;
c += 66;
console.log(a,b,c);
var a2 = 66;
var b2 = 79;
var c2 = 415;
a2 -= 1871;
b2 -= 6;
c2 -= 17;
console.log(a2,b2,c2);
let a3 = 9;
let b3 = 44;
let c3 = 66;
a *= 848;
b *=5;
c *= 45;
console.log(a3,b3,c3);
var a4 = 56;
var b4 = 88;
var c4 = 94;
a4 /= 15;
b4 /= 78;
c4 /= 789;
console.log(a4,b4,c4);
var myFirstName="K";
var myLastName="V";
console.log(myFirstName+myLastName);
//Free Code Camp Basic JavaScript 20% completion
/*(note for me, don't pay attention)In JavaScript, you can escape a quote from considering it as an end
of string quote by placing a backslash (\) in front of the quote.
 */
var myStr = "Freelancers are \"lazy\"";
console.log(myStr);
/* Code	Output
\'	single quote
\"	double quote
\\	backslash
\n	newline
\r	carriage return
\t	tab
\b	word boundary
\f	form feed
*/
var myStr1="FirstLine\n\t\SecondLine\nThirdLine";
console.log(myStr1);
var myStr2="The Dragon "+"Has Awoken";
console.log(myStr2);
var myStr3="The poor poor cat ";
myStr3+="Was stuck in Davy Jone's locker"
console.log(myStr3);
var myName="Lady V";
var myStr4="Hey I'm "+myName+" What's up?";
console.log(myStr4);
var lastNameLength = 0;
var lastName = "Cthulhu";
lastNameLength=lastName.length;
console.log(lastNameLength);
var firstLetterOfLastName = "";
var lastName2 = "Pomeranian";
firstLetterOfLastName = lastName2[0];
console.log(firstLetterOfLastName);
const lastName3 = "Adam the Destroyer";
const lastLetterOfLastName = lastName3[lastName3.length-1];
console.log(lastLetterOfLastName);
var myArray = ["Evil", "Tree", "Squirrel"];
console.log(myArray);
//*multi-dimensional array.
var ComicConvention = [["Nerd count",23,],["Geek count",55]];
console.log(ComicConvention);
var FlappyBirdCount = [30,25,10,8,50];
var myBadLuck;
myBadLuck=FlappyBirdCount[3];
console.log(myBadLuck);
var newArray=[55,66,78,99,100];
newArray[3]=798;
console.log(newArray);
var arrayTree = [
    [55400,288,555],
    [678,88,36],
    [58,17,999],
    [[100,111,152], 13666, 1444]
];
console.log(arrayTree[3]);
console.log(arrayTree[3][0]);
console.log(arrayTree[3][0][1]);
var myArray = [["John", 23], ["cat", 2]];
myArray.push(["dog", 3]);
console.log(myArray);
var myArray2 = [["John", 23], ["cat", 2]];
var removedFromMyArray=myArray2.pop()
console.log(myArray2);
var ourArray = ["Julien", "Jillian", ["Gill"]];
var removedFromOurArray = ourArray.shift();
console.log(ourArray);
//Free Code Camp Basic JavaScript 40% completion
