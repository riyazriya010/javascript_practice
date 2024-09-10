function sum(a){
  return function(b){
    return function(c){
      return a * b * c
    }
  }
}
const num = sum(1)(2)(3)
console.log('num: ',num);


// function sum(a) {
//     console.log('a: ',a)
//     const inner = (b) => {
//         console.log('b: ',b)
//       if (b !== undefined) {
//         console.log('a+b: ',a + b)
//         return sum(a + b);
//       }
//       return a;
//     }
//     return inner;
//   }
  
//   console.log(sum(1)(2)(3)());
