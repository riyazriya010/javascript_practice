// to access the particular vaues using the index inside the at()

const arr = [1,2,3,4,5]

let sum = 0

for(let i = -1; i > -6; i--){
    sum += arr.at(i)
}
console.log(sum)


var findDifference = function(nums1, nums2) {
    let list = [[],[]]
    let set1 = new Set()
    let set2 = new Set()

    let arr1 = nums1.filter(val => {
        if(!nums2.includes(val)){
            if(!set1.has(val)){
            set1.add(val)
            list[0].push(val)
            return val
            }
        }
    })
    
    let arr2 = nums2.filter(val => {
        if(!nums1.includes(val)){
            if(!set2.has(val)){
            set2.add(val)
            list[1].push(val)
            return val
            }
        }
    })
    console.log(list)
    return list
};
const nums1 = [80,5,-20,33,26,29] 
const nums2 = [-69,0,-36,52,-84,-34,-67,-100,80]
console.log(findDifference(nums1, nums2))

