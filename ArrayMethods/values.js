// this will return the values and can iterate this

const fruits = ['Banana', 'Apple', 'Orange', 'Mango']

console.log(fruits.values().next().value); // Banana

for(let val of fruits.values()){
    // console.log(val) // this only return the values without index
}