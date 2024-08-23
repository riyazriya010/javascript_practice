
//      Creates a new object with the specified prototype object and properties.

const person = {
    printIntroduction: function() {
        console.log(`I am ${this.name} and I am ${this.age} years old`);
    }
}

//  Method - 1
const me1 = Object.create(person)
me1.name = "Suhaib"
me1.age = 23
me1.printIntroduction();

//Method - 2
const me2 = Object.create(person, {
    name:{
        value:"Riyas",
        writable:true,
        enumerable:true,
        configurable:true
    },
    age:{
        value:23,
        writable:true,
        enumerable:true,
        configurable:true
    }
})

me2.printIntroduction()