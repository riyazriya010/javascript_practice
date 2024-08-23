

// Returns an array of a given object's own enumerable string-keyed property [key, value] pairs.

const person = {
    name: "Riyas",
    age: 23,
    domain: "Mern stack"
}

console.log(Object.entries(person))
// [ [ 'name', 'Riyas' ], [ 'age', 23 ], [ 'domain', 'Mern stack' ] ]