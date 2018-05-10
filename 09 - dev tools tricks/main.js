const dogs = [
    { name: 'Snickers', age: 2 },
    { name: 'hugo', age: 8 }
];

// Regular
console.log('hello');

// Interpolated
console.log('Hello %s', 'interpolation');

// Styled
console.log('%c I am some great text', 'font-size: 25px; background: red;')

// warning!
console.warn('warn');

// Error :|
console.error('err!');

// Info
console.info('Crocodiles eat 3-4 people per year');

// Testing
console.assert(0, 'That is wrong!');

// clearing
console.clear();

// Viewing DOM Elements

console.dir();

// Grouping together
dogs.forEach(dog => {
  console.groupCollapsed(`${dog.name}`);
  console.log(`This is ${dog.name}`);
  console.log(`${dog.name} is ${dog.age} years old`);
  console.log(`${dog.name} is ${dog.age * 7} dog years old`);
  console.groupEnd(`${dog.name}`);
});
// counting
console.count('test');
console.count('test');
console.count('test');

// timing
console.time('fetching data');
fetch('https://api.github.com/users/marsibarsi')
  .then(data => data.json())
  .then(data => {
    console.timeEnd('fetching data');
    console.log(data);
  }
);

console.table(dogs);