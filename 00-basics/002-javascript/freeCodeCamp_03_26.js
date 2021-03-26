let dog = {
    name: "Uflac",
    nuLegs: 4
};
console.log("dog: ", dog);

let dogs = {
    name: "Spot",
    numLegs: 4
};
console.log("dogs name: ", dogs.name);
console.log("dogs legs: ", dogs.numLegs);

let duck = {
    name: "Aflac",
    numLegs: 2,
    sayName: function () {
        return "The name of this duck is " + duck.name + ".";
    }
};
duck.sayName();
console.log("duck: ", duck.sayName());

let doog = {
    name: "Spot",
    numLegs: 4,
    sayLegs: function() {
        return "This dog has " + doog.numLegs + " legs.";
    }
};
doog.sayLegs();
console.log("doog: ", doog.sayLegs());

let dogg = {
    name: "Spot'",
    numLegs: 4,
    sayLegs: function () {
        return "This dog has " + this.numLegs + " legs.";
    }
};
dogg.sayLegs();
console.log("dogg: ", dogg.sayLegs());

function Dog4() {
    this.name = "Spot";
    this.color = "black";
    this.numLegs = 4;
}
Dog4.name;
console.log("Dog4: ", Dog4.name);

function Dogs() {
    this.name = "Rupert";
    this.color = "brown";
    this.numLegs = 4;
}
let hound = new Dogs();
console.log("hound: ", hound);

function Doog(name, color) {
    this.name = name;
    this.color = color;
    this. numLegs = 4;
}
let terrier = new Doog("George", "white");
console.log("terrier: ", terrier);

function House(numBedrooms) {
    this.numBedrooms = numBedrooms;
}
let myHouse = new House(3);

console.log("myHouse: ", myHouse instanceof House );

function Bird(name) {
    this.name = name;
    this.numLegs = 2;
}
let canary = new Bird("Tweety");
let ownProps = [];
for (let property in canary) {
    if (canary.hasOwnProperty(property)) {
        ownProps.push(property);
    }
}
console.log("canary: ", ownProps);

function Ddog(name) {
    this.name = name;
}
Ddog.prototype.numLegs = 4;
let beagle = new Ddog("Snopy");
console.log(beagle);

function Dooog(name) {
    this.name = name;
}
Dooog.prototype.numLegs = 4;

let beaagle = new Dooog("Snoopy");

let ownPropps = [];
let prototypeProps = [];
for (let property in beaagle) {
    if (beaagle.hasOwnProperty(property)) {
        ownPropps.push(property);
    } else {
        prototypeProps.push(property);
    }
}
console.log("Dooog: ", beaagle);
console.log("Dooog: ", beaagle.constructor === Dooog );

function Bird2(name) {
    this.name = name;
}

Bird2.prototype = {
    constructor: Bird2,
    numLegs: 2,
    eat: function() {
        console.log("nom nom nom"); },
    describe: function() {
        console.log("My name is " + this.name); }
};
console.log("Bird2: ", Bird2.name);
console.log("Bird2: ", Bird2.prototype.eat("nom nom nom"));
// how to check with console what happens to Bird2 after assigning to prototype?

function Dog2(name) {
    this.name = name;
}
Dog2.protoype = {
    constructor: Dog2,
    numLegs: 4,
    eat: function() {
        console.log("nom nom nom");
    },
    describe: function() {
        console.log("My name is " + this.name);
    }
};
console.log("Dog2: ", Dog2.name);
// how to check with console what happens to Dog2 after assigning to prototype?

function Dog5(name) {
    this.name = name;
}
let beagle3 = new Dog5("Snoopy");
console.log("Dog5: ", Dog5.prototype.isPrototypeOf(beagle3));

function Dog1(name) {
    this.name = name;
}
let beagle2 = new Dog1("Snoopy");
Dog1.prototype.isPrototypeOf(beagle2);
Object.prototype.isPrototypeOf(Dog1.prototype);
console.log("Dog1: ", Dog1.name);
// how to check with console Prototype chain?

function Cat(name) {
    this.name = name;
}
Cat.prototype = {
    constructor: Cat
};
function Bear(name) {
    this.name = name;
}
Bear.prototype = {
    constructor: Bear
};
function Animal() {
    Animal.prototype = {
        constructor: Animal,
        eat:function () {
            console.log("nom nom nom");
        }
    }
}
console.log(Cat.name);
// the same problem. I don't know how to do a result check

function Animal2() {

}
Animal2.prototype.eat = function() {
    console.log("nom nom nom"); };

console.log("Animal2: ");

function Animal3() { }
    Animal3.prototype = {
        constructor: Animal3,
        eat: function() {
            console.log("nom nom nom");
        }
    };
let duck7 = Object.create(Animal3.prototype);
let beagle7 = Object.create(Animal3.prototype);
console.log("Animal3: ", duck7);
console.log("Animal3 : ", beagle7);

function Animal4() { }

Animal4.prototype = {
    constructor: Animal4,
    eat: function() {
        console.log("nom nom nom");
    }
};
function Dog3() { }
Dog3.prototype = Object.create(Animal4.prototype);
let beagle4 = new Dog3();

console.log("Dog3: ", beagle4);
// what does a blue dot with an arrow mean?


function Animal1() { }
    function Bird1() { }
    function Dog6() { }

    Bird1.prototype = Object.create(Animal1.prototype);
    Dog6.prototype = Object.create(Animal1.prototype);

Bird1.prototype.constructor = Bird1;
Dog6.prototype.constructor = Dog6;
let duck1 = new Bird1();
let beagle1 = new Dog6();

console.log("duck1: ", duck1);
console.log("beagle1 :", beagle1);

function Animal8() { }
Animal8.prototype.eat = function() {
    console.log("nom nom nom");
};
function Dog7() { }
Dog7.prototype = Object.create(Dog7.prototype);
Dog7.prototype.constructor = Dog7;
Dog7.prototype.bark = function () {
    console.log( "Woof!");
}
let beagle8 = new Dog7()
console.log("beagle8: ", beagle8);

function Bird3() { }
Bird3.prototype.fly = function() {
    return "I am flying!";
};
function Penguin() { }
Penguin.prototype = Object.create(Bird3.prototype);
Penguin.prototype.constructor = Penguin;

Penguin.prototype.fly = function () {
    return "Alas, this is a flightless bird.";
};
let penguin = new Penguin();
console.log("Penguin: ", penguin.fly());

let bird3 = {
    name: "Donald",
    numLegs: 2
};
let boat1 = {
    name: "Warrior",
    type: "race-boat"
};
let glideMixin = function (obj) {
    obj.glide = function() {
        console.log("Gliding!");
    };
};
glideMixin(bird3);
glideMixin(boat1);
console.log("bird3: ", bird3);
console.log("boat1: ", boat1);

function Bird4() {
    let weight = 15;
    this.getWeight = function () {
        return weight;
    };
}
console.log("Bird4: ", Bird4.weight);

(function() {
    console.log("A cozy nest is ready");
})();

let funModule = (function() {
    return {
        isCuteMixin: function(obj) {
            obj.isCute = function () {
                return true;
            };
        },
        singMixin: function(obj) {
            obj.sing = function () {
                console.log("Singing to an awesome tune");
            };
        }
    };
})();
console.log("funModule: ", funModule);








