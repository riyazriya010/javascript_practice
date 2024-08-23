
//    Copies all enumerable own properties from one or more source objects to a target object.

const Employee = {
    name:"Yaseer",
    age:22,
    salary:30000
}
    // copying the properties from employee to manager and over writting the unique property
let Manager = Object.assign(Employee, {name:"Riyas",age:23,additionalBonus:20000})
console.log(Manager)
