

// Returns an array of a given object's own enumerable property names.

const Person = {
    name: "Riyas",
    age:23,
    salary:70000
}

const prop = Object.keys(Person)
console.log(prop)  // [name, age, salary]