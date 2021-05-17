const hello=function(){
    console.log('hi')
}
hello();

function hi(thing, anotherThing){
    console.log(thing+anotherThing)
}
hi('hi bat','wazzup');

const cat={
    attitude:'bad',
    name:'Paws',
    age: 32842
};
cat.attitude='mellow';
console.log(cat.attitude);
const dog='dog'
//^primitive
const array=[2,15,600];
console.log(array);
array.pop();
console.log(array);
array.push(67);
console.log(array);
console.log(array[1]);
const cat5={...cat, name:'mittens'};
console.log(cat5);

