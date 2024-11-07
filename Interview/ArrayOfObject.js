const arr = [
             { language: 'JavaScript' }, 
             { language: 'JavaScript' }, 
             { language: 'TypeScript' }, 
             { language: 'C++' }
            ]

function convert(arr){
    let arryOfObj = []

    arr.forEach(obj => {
        let language = obj.language
        let found = arryOfObj.find(lang => lang.language === language)

        if(found){
            found.count++
        }else{
            arryOfObj.push({ language: language, count: 1 })
        }
    })

    return arryOfObj
}

console.log('New Array of Object: ',convert(arr));