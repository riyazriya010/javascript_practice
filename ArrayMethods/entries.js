// this will give iterative array

const fruits = ['Banana', 'Apple', 'Orange', 'Mango']

// console.log(fruits.entries().next().value) // [0, Banana]

for(let [index, fruit] of fruits.entries()){
    console.log(index + 1, fruit)
}