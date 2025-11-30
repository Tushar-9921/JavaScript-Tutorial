const arr = [1, 2, 3, 4, 5]
// console.log(arr[0])

const myArr = new Array(0,1,2,3,4,5)
// console.log(myArr[0])
// console.log(typeof myArr)

// Array Methods

// myArr.push(1) // Add Value in Aaray
// myArr.push(325)
// myArr.pop() // Not give any argument. Remove Last Value In Array


// myArr.unshift(451,54) // Add value starting in array 
// myArr.shift() // Not give any argument. First element remove

// console.log(myArr.includes(5)) // Element is exist or not Check it give boolean 
// console.log(myArr.indexOf(9)) // When Not found element then give -1

// const newArray = myArr.join() // Join is give String value
// console.log(typeof myArr) // Object
// console.log(typeof newArray) // String

//slice , splice

console.log("A ", myArr)

const myNewArr = myArr.slice(1, 3) // Slice: 1,3 Ni vacche ni value aape
console.log(myNewArr)
console.log("B ", myArr)

const myNewArr2 = myArr.splice(1, 3) // Splice: Original Array Ni value Remove kari ne aape
console.log("C " ,myArr)
console.log(myNewArr2)