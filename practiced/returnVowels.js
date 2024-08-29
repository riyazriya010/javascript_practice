
//Write a function that takes a string as input and returns the string with all vowels removed.
function vowels(str) {
    let vow = /[aeiou]/g
    let newStr = ''
    for(let val of str){
        if(!val.match(vow)){
            newStr += val
        }
    }
    return newStr;
}
const str = "Riyas"
console.log(vowels(str));


//Write a function that takes a string as input and returns the string with all duplicate 
//characters removed.
function removeDuplicates(str) {
    let lowerWord = str.toLowerCase();
    let set = new Set(lowerWord)
    let words = [...set].join('')
    return words
}
console.log(removeDuplicates('RiyasrY'))