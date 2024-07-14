// This will modify the entire array and return the new array with same length

const fruits = ['apple', 'banana', 'orange']
const modifiedFruits = fruits.map(val => val.toUpperCase())  //  [ 'APPLE', 'BANANA', 'ORANGE' ]
console.log(modifiedFruits);


const number = [1,2,3,4,5]
const newNumbers = number.map(num => num * 2) // [2 4, 6, 8, 10]
console.log(newNumbers)

