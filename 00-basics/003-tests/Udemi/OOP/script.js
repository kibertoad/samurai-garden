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