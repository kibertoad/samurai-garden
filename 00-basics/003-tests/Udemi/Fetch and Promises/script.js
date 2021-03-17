
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

// Search from countries by name:

input.addEventListener('keyup', function(e){
    fetch('https://api.coinlore.com/api/tickers/')
        .then(response => {
            return response.json();
        }).then(results => {
        // console.log(results);
        div.innerHTML = '';
        const info = results.data;
        const search = e.target.value;
        info.forEach(element => {
            console.log(element.name);
            const h3 = document.createElement('h3');
            h3.innerHTML = element.name;
            if (element.name.toLowerCase().includes(search.toLowerCase())) {
                div.appendChild(h3);
            }
        });
    }).catch(error => {
        console.log(error);
    })
    body.appendChild(div);
})
