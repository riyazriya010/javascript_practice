
 /* 
 This rangeError will work when the value not satisfy the condition.

 The RangeError is an class if we want to throw that error we want to create 
 instance for that class by giving some information to show to user.

*/

function rangeError(value){
    
    if(!(value > -500 && value < 500)){
        throw new RangeError('Enter the value between -500 to 500');
    }
}

try{
    rangeError(600)
}catch(e){
    if(e instanceof RangeError){
        console.log(e);
    }
}
