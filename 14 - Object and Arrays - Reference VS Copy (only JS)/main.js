// start with strings, numbers and booleans
let number = 1;
let number2 = number;
let number = 2;

// Let's say we have an array
const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];

// and we want to make a copy of it.
//...
// or use the new ES6 Spread
const playersCopy = [...players];

// with Objects
const person = {
  name: 'Wes Bos',
  age: 80
};

// and think we make a copy:

const personCoty = {...person};