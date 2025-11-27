// Primitive => Call by Value || Meanse it is not give original data but it give its copy of this data , and change its copy not original data

// 7 Types: String, Number, Boolean, null, undefined, Symbol => It is used to give unique value , BigInt => Use for Large ammout value/Scientific value store 

const score = 100
const scoreValue = 122.23

const isLoggedIn = false
const outsideTemp = null
let userEmail;

let id = Symbol('123')
let anotherId = Symbol('123')

console.log(id === anotherId)

const bigNumber = 12456432435435432354n



// Reference type (Non-Primitive) => Call by Reference => allocate reference direct in memory

// Array, Objects, Functions 

const arr = ["Tushar", "Bhavesh", "Divyesh", "Dhaval", "Hardik"];   // Type is called Object

let myObj = { // Type is called Object
    name: "Tushar", 
    age: 12,
}

const myFunction = function() { // Type called Object Function
    console.log("Hello Tushar")
}

console.log(typeof myFunction)


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive) // Data ni copy male, Heap (Non-Primitive) // Give original value reference


// Primitive(Stack) It is give copy of data not original data
let instaId = "tushar__parmar"
let secondId = instaId
instaId = "bhavesh__parmar"

console.log(secondId)
console.log(instaId)



// Non-Primitive(Heap) It is give Original reference 
let userOne = {
    email: "trp@gmail.com",
    pass: "7841"
}

let userTwo = userOne

userTwo.email = "brp@gmail.com"
userTwo.pass = "1452"
console.log(userTwo)