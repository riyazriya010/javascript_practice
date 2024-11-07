
let y = 1

if(function f() {}){
    y += typeof f
}

console.log('y: ',y);  // 1undefined

/*
  However, function expressions like this don't create a variable f in 
  the surrounding scope, so it doesn't make f available outside of the function.

  When an empty function is used inside an if condition, it is treated as a truthy value. 
  This is because functions (even empty ones) are objects in JavaScript, and all objects are truthy. 
  So, the if block will always execute.

  The typeof operator returns a string describing the type of its operand. In this case, 
  since f is not accessible outside the function expression, f is undefined in the surrounding scope.
 */