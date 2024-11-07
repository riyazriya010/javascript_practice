"use strict"

{
    foo()
    function foo(){
        console.log('foo')
    }
}

console.log(
    `foo name ${ 
        'foo' in globalThis ? 'is' : 'is not' 
    } global. The typeof foo is ${typeof foo}`
);