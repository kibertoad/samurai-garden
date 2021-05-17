/*const movieList = document.getElementById('movie-list');

movieList.style['background-color'] = 'red';
movieList.style.display = 'block';

const userChosenKeyName='level'

let person = {
    'first name': 'Max',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    [userChosenKeyName]:'...',
    greet: function() {
        alert('Hi there!');
    },
    1.5:'hello'
};

// ...

// person.age = 31;
delete person.age;
// person.age = undefined;
// person.age = null;
person.isAdmin = true;
const keyName='first name'

console.log(person[keyName]);
console.log(person[1.5]);
console.log(person); */

const cat = {
    name:'Meowzer',
    age:'Older than you',
    personality:'mean',
    hobbies:['napping', 'eating', 'hissing']
};
//copying object, spread, not entirely workable
const cat1={...cat};
delete cat.age;
console.log(cat);
console.log(cat1);
cat.hobbies.pop(2);
cat.hobbies.push('purring');
console.log(cat);
console.log(cat1);
const cat3={...cat, age:4,hobbies:[...cat.hobbies]};
cat.hobbies.pop(1);
console.log(cat);
console.log(cat3);
//copying object, but making it a fully functional new object
const personality={
    name:'happy'
};
const personality2=Object.assign({}, personality);

personality.name='angry';
console.log(personality);
console.log(personality2);

//destructuring object into var
const {name:feels}=personality;
console.log(feels);

//checking if property is in object
if ('name' in cat)

if (!('name' in cat))

 if (movie.info===undefined){

 };

 