class MyTestClass {
    constructor(name) {
        this.name = name
    }

    getNameForDisplay() {
        return 'Name is: '+this.name
    }
}


const x = 'X value'
const y = 'Y value'
const z = x + y

const myTestObject = new MyTestClass(z)
console.log(myTestObject.getNameForDisplay())

// I don't understand this part, please explain
const efbrerferhferu = 'rferferferfr'+'rferferferfr'