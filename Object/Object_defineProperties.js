
 //   Definig one or more properties for the object
const person = {}

Object.defineProperties(person, {
    firstName: {
        value:"Riyas",
        writable:true,
        enumerable:true,
        configurable:true
    },
    lastName:{
        value:"Leo",
        enumerable:true,
        writable:true,
        configurable:true
    },
    fullName:{
        get: function() {
            console.log(`${this.firstName} ${this.lastName}`)
        },

        set: function(values) {
            const [first, last] = values.split(' ')
            this.firstName = first
            this.lastName = last
        }
    }
})

console.log(person.firstName);

person.fullName = "Leo Das"

console.log(person.firstName)