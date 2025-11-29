// Date calculate in milliseconds

const myDate = new Date() // Date Object
// console.log(myDate.toString())
// console.log(myDate.getDate())
// console.log(myDate.toDateString())
// console.log(myDate.toLocaleDateString()) 
// console.log(myDate.toLocaleString())
// console.log(typeof myDate) // object

// const yourDate = new Date(2023, 0, 23)
// const yourDate = new Date(2023, 0, 23, 3, 6)
// const yourDate = new Date("2023-01-14")
const yourDate = new Date("01-14-2023")

// console.log(yourDate.toLocaleString())

let myTimeStamp = Date.now()
// console.log(myTimeStamp)
// console.log(yourDate.getTime())
// console.log(Math.floor(Date.now()/1000))

let newDate = new Date()
console.log(newDate)
console.log(newDate.getMonth() + 1)
console.log(newDate.getFullYear())

newDate.toLocaleString('default',{
    weekday: "long"
}
)
console.log(newDate)

/*
    Press ctrl + space to show all properties
*/