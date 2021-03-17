// 2.1 Looping a triangle:
let x = '';
for( let i = 1; i<= 7;  i++){
    x = '#' + x;
    console.log(x);
}

// 2.2 FizzBuzz:

for(let i = 1; i<= 100; i++){
    if( i % 3){
        console.log (`${i} - Fizz `);
    }else if ( i % 5) {
        console.log (`${i} - Bizz`);
    }else ( i % 3 && i % 5)
    console.log(`${i} - FizzBuzz`);
}

// 2.3 Board:

let h = 8;
let w = 9;
let board = "";


for (let i = 0; i < h; i++) {
    for (let j = 0; j < w; j++)
    {
        if (j == w - 1) {
            board += "\n";
        } else if ((i + j) % 2 == 0){
            board += " ";
        }
        else {
            board += "#";
        }
    }
}
console.log(board);
/////////////////////////

// 3.1 Minimum
const min = (a,b) =>{
    return (a <= b) ? a : b;
};

console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10



//3.2 Recursion:
const isEven = e => {

    e = Math.abs(e);

    if(e === 0) return true;

    if(e === 1) return false;

    return isEven(e - 2);
}
console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → ??

// 3.3