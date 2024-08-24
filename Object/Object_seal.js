

// we can edit the property bu we cant delete it
const Obj = {
    id: 123,
    name:"Kumar",
    age:34
}

Object.seal(Obj)

Obj.id = 2345

console.log(Obj)