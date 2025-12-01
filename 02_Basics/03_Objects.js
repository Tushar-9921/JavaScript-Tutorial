// singleton

// Object Literals

const mySymbol = Symbol("Key1")

const jsUser = {
    name: "Tushar",
    "full Name": "Tushar Parmar",
    [mySymbol]: "Key2",
    age: 18,
    gmail: "trp@gmail.com",
    isLoggedIn: false,
    lastLoggedIn: ["Monday","Saturday"]
}

// console.log(jsUser.name)
// console.log(jsUser["gmail"])
// console.log(jsUser["full Name"])
// console.log(jsUser.mySymbol)
// console.log(typeof jsUser.mySymbol)

jsUser.gmail = "trp@google.com"
// Object.freeze(jsUser) // => Object is freeze mense It is not change now
jsUser.gmail = "trp@microsoft.com"
// console.log(jsUser)

jsUser.greeting = function() {
    console.log("Hello Tushar Parmar")
}
jsUser.greetingTwo = function() {
    console.log(`Hello Tushar Parmar, ${this.name}`)
}

console.log(jsUser.greeting())
console.log(jsUser.greetingTwo())
