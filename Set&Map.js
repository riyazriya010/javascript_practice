//set is used to store the unique values
//It accept all like array , object any...


//Array contains duplicate values, creating a new arry with unique values using Set()
const arr = [1,2,3,4,5,6,6]
const set = new Set(arr)

const uniqueArr = [ ...set ]

console.log(arr)
console.log(set)
console.log(uniqueArr)
