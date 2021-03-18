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


// 4.1 The sum of a range
function range(start, end, a) {
    if (!a) { a = 1; }
    const r = [];
    for (let i = start; start <= end ? i <= end : i >= end; i += a) { r.push(i); }
    return r;
}


function sum(arr) {
    let s = 0;
    for (let i = 0; i < arr.length; i++) { s += arr[i];}
    return s;
}

console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55

// 4.2 Reversing an array:

const reverseArray = (arr) => {
    const newArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        newArr.push(arr[i])
    }
    return newArr;
}
console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];