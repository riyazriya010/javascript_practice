
function addNumber (number) {
    let sum = 0

    while(number){
        let lastInteger = number % 10
        sum += lastInteger
        number = Math.floor(number / 10)
    }
    return sum
}

let number = 12345
console.log(addNumber(number))
