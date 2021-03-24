const axios = require('axios');


const functions = {
    add: (num1,num2) => num1 + num2,
    isNull: () => null,
    // isNull: () => undefined, //err 'Should be null'
    checkValue: (x) => x,
    createUser: () => {
        const user = {firstName: 'Tomas'}
        user['lastName'] = 'Tomaitis'
        return user;
    },
    fetchUser: () =>  axios
        .get('https://jsonplaceholder.typicode.com/users/1')
        .then(res => res.data)
        .catch(err=>'error')

};

module.exports = functions;