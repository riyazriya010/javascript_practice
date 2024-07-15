// making copy within the array
// copyWithin( target, start:number, end:number )

const fruits = ['Banana', 'Apple', 'Orange', 'Mango']

                                         // [   0      1      2       3   ]
console.log(fruits.copyWithin(0, 1, 2))  // [ Apple, Apple, Orange, Mango ]