// ## Array Cardio Day 2
const people = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 }
];
const comments = [
  { text: 'Love this!', id: 523423 },
  { text: 'Super good', id: 823423 },
  { text: 'You are the best', id: 2039842 },
  { text: 'Ramen is my fav food ever', id: 123523 },
  { text: 'Nice Nice Nice!', id: 542328 }
];
// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?

const result1 = people.some( person => {
    return (new Date()).getFullYear() - person.year >= 19;
});
console.log(result1);

// Array.prototype.every() // is everyone 19 or older?

const result2 = people.every( person => {
    return (new Date()).getFullYear() - person.year >= 19;
});
console.log(result2);

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423

const result3 = comments.find( comment => {
    return comment.id === 823423
});

console.log(result3);

// Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423

const result4 = comments.findIndex( comment => {
    return comment.id === 823423
});

console.log(result4);

delete comments[result4];
console.table(comments);