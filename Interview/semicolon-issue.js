function foo() {

    return // here the js will automaticlly put semicolon ;
    {
        message: "Hello World"
    };

    /*
       correct code

       return {
       message: 'Hello World
       }

       return (
       { 
       message: "Hello World"
        }
       );

    */

}
console.log(foo()); //Undefined


/*
 JavaScript's automatic semicolon insertion (ASI). 
*/