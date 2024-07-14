//Map Object holds key value pair
//Every keys are must be unique
//Key any and Values any

const myObject = {}

const a = {}
const b = {}

myObject[a] = 'a'
myObject[b] = 'b'  // this will overwrite the previous key value pair

console.log(myObject)  // { '[object object]' : 'b' }


// to solve this we use the Map
const map = new Map( [ [ a, 'a'], [ b, 'b' ] ])
console.log(map) // { {} => 'a', {} => 'b' }



/*      ----------     */
const myMap = new Map()
console.log(myMap)


//addding the values to the Map
myMap.set('name', 'Riyas')
myMap.set('age', 23)


// to get the particular value from the Map
console.log(myMap.get('name'))


// to check wether the value exit or not
console.log(myMap.has('name'))


//this return the value as a arrya inside object
console.log(myMap.entries())  //  { [ 'name', 'Riyas ], [ 'age', 23 ] }


//iterating the object
for(let iterate of myMap.entries()){
    console.log(iterate[1]); // Riyas, 23
}


//destructuring the object
for(let [key, value] of myMap.entries()){
    console.log(key, value)
} // name Riyas, age 23


myMap.forEach(val => {
    console.log(val)
}) // Riyas, 23


//only to get the keys and only to get the values
console.log(myMap.keys())  // { name, age }
console.log(myMap.values())  // { Riyas, 23 }
