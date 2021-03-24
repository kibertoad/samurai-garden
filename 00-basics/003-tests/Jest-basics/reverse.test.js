const reverse = require('./reverse');

test('reverse function exists', () =>{
    expect(reverse).toBeDefined();
});


// ?
test('string reverses', () =>{
    expect(reverse('hello')).toEqual('olleh');
});
