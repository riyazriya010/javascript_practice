function capitalism(str){
    if(!str)
        return str

    let modifiedStr = ''

    for(let i = 0; i < str.length; i++){

        if(i === 0 && str[i-1] === ' '){

            if(str[i] >= 'a' && str[i] <= 'z'){
                let letter = String.fromCharCode(str.charCodeAt(i) - 32)
                modifiedStr += letter
            }
        }else{
            modifiedStr += str[i]
        }
    }
    return modifiedStr
}
const str = 'the baby looks beautiful'
console.log(capitalism(str))
