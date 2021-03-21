class Person {
    constructor(fullName, birthYear) {
        this.fullName = fullName;
        this.birthYear = birthYear;
    }

    // Instance method
    calcAge(){
        console.log(2021 - this.birthYear);
    }

    get age (){
        return 2021 - this.birthYear;
    }

    set fullName(name){
        console.log(name);
        if (name.includes(' ')) this._fullName = name;
        else alert(`${name} is not a full name!`);
    }

    get fullName(){
        return this._fullName
    }

    // Static method - not available on instances
    static hey (){
        console.log('Hey there 🖐')
    }

}

const tomas = new Person('Tomas Tomaitis',1991);
console.log(tomas);
tomas.calcAge();
console.log(tomas.age);

Person.hey();


// class Person {
//     constructor(firstName, birthYear) {
//         this.firstName = firstName;
//         this.birthYear = birthYear;
//     }
//
//     // method
//    calcAge(){
//         console.log(2021 - this.birthYear);
//    }
//
//    get age (){
//         return 2021 - this.birthYear;
//    }
//
// }
//
// const tomas = new Person('Tomas',1991);
// console.log(tomas);
// tomas.calcAge();
// console.log(tomas.age);

// Object: set/get
const account = {
    owner: 'Tomas',
    movements: [200,530,120,300],
    get latest(){
        return this.movements.slice(-1).pop();
    },
    set latest (mov){
        this.movements.push(mov);
    }
};

// get
console.log(account.latest);
// set
account.latest = 50;
console.log(account.movements); // [200,530,120,300, 50];


///////////////////////////////
// Object.create()
const PersonProto = {
    calcAge(){
        console.log(2021 - this.birthYear);
    },
    init(firstName, birthYear){
        this.firstName = firstName;
        this.birthYear = birthYear;

    }
};

const monika = Object.create(PersonProto);
monika.name = 'Monika';
monika.birthYear = 2012;
monika.calcAge();

const ona = Object.create(PersonProto);
ona.init('Ona', 2015);
ona.calcAge();

// Inheritance

class Person2 {
    constructor (firstName, lastName, birthYear){
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthYear = birthYear;
    }

    calcAge(){
        console.log(2021 - this.birthYear);
    }
}


class Student extends Person2 {
constructor(firstName,lastName,birthYear, course){
    super(firstName,lastName,birthYear);
    this.course = course;
}
introduce (){
console.log(`My name is ${this.firstName} and I study ${this.course}`);

}
}
const julius = new Student('Julius', 'Julaitis', 1998, 'JavaScript');
console.log(julius);
julius.introduce();

class Account {
    // Public fields/////////
    locale = navigator.language;
    // Private fields///////
    #movements = [];
    #pin;
    constructor(owner, currency, pin) {
        this.owner = owner;
        this.currency = currency;
        // protected property _
        this.#pin = pin;
        // this._movements = [];
        // this.locale = navigator.language;
    }

    //   Public method
    getMovements() {
        return this.#movements;
    }
    deposit(val) {
        this.#movements.push(val);
    }

    withdrow(val) {
        this.deposit(-val);
    }

    requestLone(val) {
        if (this.#approveLoan(val)) {
            this.deposit(val);
            console.log('Loan approved');
        }
    }
    //   protected method
    #approveLoan(val) {
        return true;
    }
}

const acc1 = new Account('Aurelija', 'Eur', 1234);
console.log(acc1);

// acc1._movements.push(200);
// acc1._movements.push(-150);
// console.log(acc1)
acc1.deposit(250);
acc1.withdrow(125);
acc1.requestLone(1000);

console.log(acc1);

// console.log(acc1.#movements);
// console.log(acc1.#approveLoan(200));