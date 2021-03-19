
const body = document.querySelector('body');
const input = document.querySelector('input');
//////////////////////////////////////
const div = document.createElement('div');
// 1. Fetch and Promises PVZ:
// const getData = function (country) {
//   fetch(`https://restcountries.eu/rest/v2/name/${country}`) //Return Promise
//     .then(response => {
//       return response.json();
//     })
//     .then(results => {
//       console.log(results);
//     })
//     .catch(err => {
//       console.log(err);
//     });
// };
//
// getData('lithuania');
//////////////////////

// 2. Print Country:
// const getData = function (country) {
//     fetch(`https://restcountries.eu/rest/v2/name/${country}`) //Return Promise
//         .then(response => {
//             // 404 err
//             if(!response.ok){
//                 throw new Error( `Country not found (${response.status})`)
//             }
//             return response.json();
//         })
//         .then(results => {
//             console.log(results);
//             div.innerHTML = ` <div>
//     <img class="country__img"  src="${results[0].flag}"/>
//     <div class="country__data">
//       <h3 class="country__name">${results[0].name}</h3>
//       <h4 class="country__region">${results[0].region}</h4>
//     </div>
//   </div>
//     `;
//         })
//         .catch(err => {
//             console.log(err);
//            div.innerHTML = `Error (${err})`; // 404 err in HTML
//         });
//     body.appendChild(div);
// };
//
// getData('lithuania');
// // getData('germany');
////////////////////

// Search  Crypto by name:
// input.addEventListener('keyup', function(e){
//     fetch('https://api.coinlore.com/api/tickers/')
//         .then(response => {
//             return response.json();
//         }).then(results => {
//         // console.log(results);
//         div.innerHTML = '';
//         const info = results.data;
//         const search = e.target.value;
//         info.forEach(element => {
//             console.log(element.name);
//             const h3 = document.createElement('h3');
//             h3.innerHTML = element.name;
//             if (element.name.toLowerCase().includes(search.toLowerCase())) {
//                 div.appendChild(h3);
//             }
//         });
//     }).catch(error => {
//         console.log(error);
//     })
//     body.appendChild(div);
// })
//////////////
// Search by country:
// input.addEventListener('keyup', function(e){
//     console.log('start');
//     fetch('https://restcountries.eu/rest/v2/')
//         .then(response => {
//             return response.json();
//         }).then(results => {
//         div.innerHTML = '';
//         const search = e.target.value;
//       //   const filteredResults = results.filter((resultEntry) => {
//       //       return resultEntry.name === e.target.value;
//       //
//       //   })
//       // console.log(filteredResults);
//         results.forEach(element => {
//             console.log(element.name);
//             const h3 = document.createElement('h3');
//             h3.innerHTML = element.name;
//             if (element.name.toLowerCase().includes(search.toLowerCase())) {
//                 div.appendChild(h3);
//             }
//         });
//     }).catch(error => {
//         console.log(error);
//     })
//     body.appendChild(div);
// })
// Search by coordinates:
//
// const whereAmI = function (lat, lng) {
//     fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`) //Return Promise
//         .then(response => {
//             // 403 err
//             if(!response.ok){
//                 throw new Error( `Problem with geocoding (${response.status})`)
//             }
//             return response.json()
//         })
//         .then(data => {
//             console.log(`You are in ${data.city},${data.country}`);
//         })
//         .catch(err => {
//             console.error(err.message);
//         });
// };
//
// whereAmI(19.037, 72.873);

// PROMISES PVZ:

// const p = Promise.resolve([1,2,3]);
// p.then(function(v) {
//     console.log(v[0]); // 1
// });
//
// p.then(function(v) {
//     console.log(v[2]); // 1
// });


// ASYNC / AWAIT

// const con = async function(country){
//  const res =  await fetch('https://api.coinlore.com/api/tickers/');
//
//     console.log(res);
// }
// con();
// console.log('First');
//

// ASYNC / AWAIT 2 + TRY/CATCH ERR

const bit = async function(bit) {
    try {

        // Crypto
        const res = await fetch('https://api.coinlore.com/api/tickers/');
        // ERR
        if(!res.ok) throw new Error('Problem getting data');
        const data = await res.json();
        const d = data.data;
        d.forEach(element => {
            const h3 = document.createElement('h3');
            h3.innerHTML = element.name;
            console.log(h3)
            div.appendChild(h3);


// body.appendChild(div);
        })
// Country
        const resC = await fetch('https://restcountries.eu/rest/v2');
        if(!resC.ok) throw new Error('Problem getting data');
        const dataC = await resC.json();
        const c = dataC;
        c.forEach(elementC => {
            const h2 = document.createElement('h2');
            h2.innerHTML = elementC.name;
            console.log(h2)
            div.appendChild(h2);
        })

    }catch (err){
        console.error(err);
    }
        body.appendChild(div);
    }

// console.log('1: Will get data'); //1
// bit();//3
// console.log('2. Finished getting data');//2

console.log('1: Will get data'); //1
const d = bit();//2 - return PROMISE
console.log(d);//2
console.log('2. Finished getting data');//3