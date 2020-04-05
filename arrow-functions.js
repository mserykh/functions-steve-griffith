
// ES6 (fat) Arrow functions
//work best in callback function scenarios
// parentheses around input if more than one
// curly braces around function body if more than one line/command
// return only needed if more than one line of code

let numbers = [123, 234, 345, 456, 567];
let names = ['Alex', 'Bree', 'Cara', 'Cole', 'Devon', 'Riley'];

//simple function syntax
//create a new array if the values from the array greater than 300

let big = numbers.filter(function(item) {
    return item > 300;
});

//arrow function version
let bigA = numbers.filter( item => item > 300);

console.log(big);
console.log(bigA);
names.forEach( function(item, index){
    console.log( index, item);
});

names.forEach( (item, index) => console.log( index, item ));

//Tips and Gotchas for Arrow Functions

let retVal = 42;
let obj = {'prop1': 'foo', 'prop2': 'bar'};

//1. One parameter, with and without curly braces
const f1 = (param) => {return param};
console.log( f1(7) );
const f2 = param => param;
console.log( f2(7) );

//2. No parameters
const f3 = () => retVal;
console.log( f3() );
const f4 = _ => retVal;
console.log( f4() );

//3. Returning objects
const f5 = (param) => obj;
//const f6 (param) => {'prop1': 'foo', 'prop2': 'bar'};
//fails
console.log( f5() );
const f7 = _ => ({'prop1': 'foo',
                  'prop2': 'bar'});
console.log( f7() );