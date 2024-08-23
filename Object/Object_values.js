
// Returns an array of a given object's own enumerable property values.

const person = {
    name: "Riyas",
    age: 23,
    domain: "Mern stack",
    intro: function() {
        return `I am ${this.name} from Hyderabad`
    }
}

console.log(Object.values(person))  // [ 'Riyas', 23, 'Mern stack', [Function: intro] ]

