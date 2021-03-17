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
