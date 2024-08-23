
// Write a function that takes an array of integers and returns the second largest number.
function secondLargest(nums){

    if(Array.length < 1) return null

    let max = -Infinity

    let secondLargest = nums.reduce((second, first) => {
        if(first > max){
            max = first
        }else{
            second = first
        }
        return second
      },-Infinity)

    return secondLargest
}
const arr = [11,2,3,100,100,50,69,69]
console.log(`secondLargest: ${secondLargest(arr)}`);



// Given an array, find the longest sequence of consecutive numbers
    function findConsecutive(nums) {

        if (nums.length === 0) return 0;
        if (nums.length === 1) return 1;

        let newArry = [...new Set(nums)].sort((a, b) => a - b);
        let longest = 1;
        let currentStreak = 1;
    
        for (let i = 1; i < newArry.length; i++) {
            if (newArry[i] === newArry[i - 1] + 1) {
                currentStreak++;
            } else {
                longest = Math.max(longest, currentStreak);
                currentStreak = 1;
            }
        }
        longest = Math.max(longest, currentStreak);
    
        return longest;
    }
const arr1 = [0]
console.log(`consecutive length: ${findConsecutive(arr1)}`);