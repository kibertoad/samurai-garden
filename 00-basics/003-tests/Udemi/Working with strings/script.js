// 1.
const airline = 'TAP  Air Prtugal';
const plain = 'A354';
console.log(plain[0]);
console.log(airline.indexOf('P'));
console.log(airline.length);
console.log('airline'.slice(2, 5));
// console.log(aline.slice(0));

// 2.
const checkMid = function (seat) {
    const s = seat.slice(-1);
    if (s === 'B' || s === 'E') {
        console.log('Your get the midle seat');
    } else {
        console.log('Your get lucy');
    }
};
checkMid('11B');
checkMid('23C');
checkMid('3E');

// 3.

const passanger = 'JoNAs';
const passangerL = passanger.toLocaleLowerCase();
const pasangerC = passangerL[0].toUpperCase() + passangerL.slice(1);
console.log(pasangerC);

const passang = name => {
    const nameLover = name.toLocaleLowerCase();
    const nameC = nameLover[0].toUpperCase() + nameLover.slice(1);
    return nameC;
};

console.log(passang('LiNas'));
console.log(passang('MoNiKa'));

// 4.

const email = 'hello@gmail.com';
const login = '    Hello@gmail.Com\n';

// const lowerEmail = login.toLocaleLowerCase();
// const trimmedEmail = login.trim();

const normalEmail = login.toLocaleLowerCase().trim();
console.log(normalEmail);
console.log(email === normalEmail);

// 5

const checkBagg = function (items) {
    const baggage = items.toLocaleLowerCase();
    if (baggage.includes('knife') || baggage.includes('gun')) {
        console.log('you can\'t pass');
    } else {
        console.log('you can pass');
    }
};

checkBagg('knife, food, computer');
checkBagg('foog, phone');
checkBagg('snacks, gun');

// 6.
const capitalizeName = name => {
    const names = name.split('');
    const namesUpper = [];
    for (const n of names) {
        namesUpper.push(n[0].toUpperCase() + n.slice(1));
    }
    console.log(namesUpper.join(''));
};
capitalizeName('jassica ann smith davis');
capitalizeName('aurelija norvilaite');

// 7.
const maskCard = function (number) {
    const str = number + '';
    const last = str.slice(-4);
    return last.padStart(str.length, '#');
};
console.log(maskCard(5654645456));
console.log(maskCard('5654654564654654654'));
console.log(maskCard('Labass'));