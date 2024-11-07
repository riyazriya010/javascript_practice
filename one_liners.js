
// Merge two array remove duplicates
const mergedArr = (arr1,arr2) => [...new Set([...arr1, ...arr2])]

const arr1 = [1,2,3,2,3,4,5]
const arr2 = [6,2,6,4,5]

console.log(mergedArr(arr1, arr2))


// check anagraham of two words
const isAnagaraham = (str1, str2) => [...str1.toLowerCase()].sort().join('')
                     === [...str2.toLowerCase()].sort().join('')
const str1 = 'Listen';
const str2 = 'Silent';
console.log(isAnagaraham(str1, str2))


// Generate an array of numbers from 1 to n
const generatedArray = n => [...Array(n).keys()].map(i => i + 1)
console.log(generatedArray(5))


// Shuffle An Array
const shuffledArray = arr => arr.sort(() => Math.random() - 0.5);
console.log(shuffledArray([1,2,3,4,5]));


// get the current date format "YYYY-MM-DD"
const currentDate = () => new Date().toISOString().split('T')[0];
console.log(currentDate());


// Group an Array of object by specific property
const groupByProperty = (arr, prop) => arr.reduce((result, obj) => 
                     (result[obj[prop]] = [...result[obj[prop]] || [], obj],result), {});
const objArray = [{ id: 1, name: 'John' }, { id: 2, name: 'Jane' }, { id:3, name: 'John' }];

console.log(groupByProperty(objArray, 'id'))


// Generate a range of numbers from start to end with a step
const range = (start, end, step = 1) => 
    [... Array(Math.floor((end - start) / step) + 1)]
          .map((_, i) =>  start + (i * step));

console.log(range(1, 10, 2));



