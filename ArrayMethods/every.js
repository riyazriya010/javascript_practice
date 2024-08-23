// if all the values satisfy the condition it return true or return false

const number = [34, 54, 67, 89]

const result = number.every(val => {
    return val > 29
})

console.log(result)  // return false, because [ 34 ] if not greater than => 50