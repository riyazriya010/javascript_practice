

// this is used to conver the array of arrays in to an object

const entries = [
    ["name", "Riyas"],
    ["age", 23],
    ["city","coimbatore"]
]

const convertedObj = Object.fromEntries(entries)

console.log(convertedObj)

