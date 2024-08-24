

// get the own prop of the object with the descriptor
const person = {
    name: "Riyas",
    age: 23,
    domain: "Mern stack"
}

const domain = Object.getOwnPropertyDescriptor(person, "domain")
console.log(domain)

// output:
// {
//     value: 'Mern stack',
//     writable: true,     
//     enumerable: true,   
//     configurable: true  
//   }

