//set is used to store the unique values
//It accept all like array , object any...
// set is an unOrdered pool of unique elements
// There is index to access the specific elements


//Array contains duplicate values, creating a new arry with unique values using Set()
const arr = [1,2,3,4,5,6,6]
const set = new Set(arr)

const uniqueArr = [ ...set ] // deep copying using spread operater

console.log(arr)
console.log(set)
console.log(uniqueArr)


//adding values to set
set.add( [7,8,9,9] )  //  adding an array as a value into set
set.add( {name: 'Riyas'} )  //  adding a object as a value into the set
console.log(set)

//check weather the value in having or not
console.log(set.has(3)) // return  true ?? false

//iterating the set values
set.forEach(val => {console.log(val)})

//to check the set size
console.log(set.size)

//deleting the values from the set
set.delete(3);    // entering the values here to delete

//clear the hole set
set.clear()
