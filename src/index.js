import emojipedia from "./emojipedia";

var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.

function double(x) {
  return x * 2;
}
const newNumbers = numbers.map(double);

console.log(newNumbers);
// var newNumbers = [];
// numbers.forEach(function (x) {
//   newNumbers.push(x * 2);
// });

// const newNumbers = numbers.map(function (x) {
//   return x * 2;
// });

// console.log(newNumbers);

//Filter - Create a new array by keeping the items that return true.
const newNumber = numbers.filter(function(num) {
  return num < 10;
});
console.log(newNumber);

// var newNumbers = [];
// numbers.forEach(function(num) {
//   if (num < 10) {
//     newNumbers.push(num);
//   }
// })

//Reduce - Accumulate a value by doing something to each item in an array.

var newAccumulate = numbers.reduce(function(accumulator, currentNumber) {
  console.log("accumulator = " + accumulator);
  console.log("currentNumber = " + currentNumber);
  return accumulator + currentNumber;
});
console.log(newAccumulate);

// var newNumber = 0;
// numbers.forEach(function (currentNumber) {
//   newNumber += currentNumber
// })

//Find - find the first item that matches from an array.

const newFirstNumber = numbers.find(function(num) {
  return num > 10;
});

console.log(newFirstNumber);

//FindIndex - find the index of the first item that matches.

const newFirstNumberIndex = numbers.findIndex(function(num) {
  return num > 10;
});

console.log(newFirstNumberIndex);

var listMeaning = emojipedia.map(function(mean) {
  var meaning = mean.meaning.substring(1, 100);
  return meaning;
});
console.log(listMeaning);
