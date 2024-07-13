//Map Object holds key value pair
//Every keys are must be unique

const myObject = {}

const a = {}
const b = {}

myObject[a] = 'a'
myObject[b] = 'b'  // this will overwrite the previous key value pair

console.log(myObject)  // { '[object object]' : 'b' }


// to solve this we use the Map
const map = new Map( [ [ a, 'a'], [ b, 'b' ] ])
console.log(map) // { {} => 'a', {} => 'b' }

const myMap = new Map()
console.log(myMap)

//addding the values to the Map
myMap.set('name', 'Riyas')
myMap.set('age', 23)

// to get the particular value from the Map
console.log(myMap.get('name'))

// to check wether the value exit or not
console.log(myMap.has('name'))