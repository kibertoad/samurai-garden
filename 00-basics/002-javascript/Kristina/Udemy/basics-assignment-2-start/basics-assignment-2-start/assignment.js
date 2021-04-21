const task3Element = document.getElementById('task-3');

function hi(){
    alert('HI')
};

function sayHello(name){
    alert(`Hello ${name}!`)
};

task3Element.addEventListener('click',hi);

sayHello('Jim');

function boredom(time,place,reasonForRegret){
    alert(`I regret being at ${place} at ${time} because I am missing ${reasonForRegret}`)
};

boredom('today','The Mall','The new episode of Naruto airing')