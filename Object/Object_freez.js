
 // if we use this method we cant delete or edit the property of the object

const Obj = {
    id: 123,
    name:"Kumar",
    age:34
}

Object.freeze(Obj)

delete Obj.id

console.log(Obj)

