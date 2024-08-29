// Find the second Largest without flattening th earray
function findSecondLargest(arr, firstLarge = -Infinity, secondLarge = -Infinity){

    for(let val of arr){
        if(Array.isArray(val)){
           [firstLarge, secondLarge] =  findSecondLargest(val, firstLarge, secondLarge)
        }else if(val > firstLarge){
            secondLarge = firstLarge
            firstLarge = val
        }else if(val > secondLarge && val < firstLarge){
            secondLarge = val
        }
    }
    return [firstLarge, secondLarge]
}
console.log(findSecondLargest([2, 43, 5, [23, 54, [90 , 3]], [1]]));



// problem 2
const values = 
    [
    {value:"name"},
    {value:"email@email.com"},
    {value:"passeor432"}
]

// const [name, email, password] = values.map(object => object.value)

const [{value:email}, {value:name}, {value:password}] = values

console.log(name, email, password)
