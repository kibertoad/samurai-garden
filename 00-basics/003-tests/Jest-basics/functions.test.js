const functions = require('./functions');

test('adds 1 + 2 to equal 3', () => {
    expect(functions.add(1, 2)).toBe(3); //pass
});

test('adds 2 + 2 to NOT equal 5', () => {
    expect(functions.add(2, 2)).not.toBe(5); //pass
});


// NULL
test('Should be null', () => {
    expect(functions.isNull()).toBeNull(); //pass
});



// FALSY
test('Should be falsy', () => {
    expect(functions.checkValue(null)).toBeFalsy(); //pass
});

// test('Should be falsy', () => {
//     expect(functions.checkValue(2)).toBeFalsy(); //not pass
// });



//Not pass .toBe() change to toStrictEqual(); ///////////////

// test('User should be Tomas object', () => {
//     expect(functions.createUser()).toBe({firstName: 'Tomas', lastName: 'Tomaitis'});
// });

test('User should be Tomas object', () => {
    expect(functions.createUser()).toStrictEqual({firstName: 'Tomas', lastName: 'Tomaitis'});
}); //pass


// Less than and greater than
test('Should be under 1600', () => {
   const load1 = 800;
   const load2 = 700;
   expect(load1 + load2).toBeLessThan(1600);
}); //pass

// regular expressions
test('There is no I in team', ()=> {
    expect('team').not.toMatch(/I/)
}); //pass

test('There is no I in team', ()=> {
    expect('teami').not.toMatch(/I/i)
}); // not pass


// Arr
test('Admin should be in usernames', () => {
    let usernames = ['Tomas', 'Jonas', 'admin'];
    expect(usernames).toContain('admin')
})

// Working with async data/ Promise
test('User fetched name should be Leanne Graham', () =>{
    expect.assertions(1);
    return functions.fetchUser()
        .then(data => {
            expect(data.name).toEqual('Leanne Graham');
        })
});

