//for of loop

// const no = [1,2,3,4,5]
// for (const i of no) {
//     console.log(i)
// }

// const name = "jeetendra kumar"
// for (const i of name) {
//     console.log(`Each char of string :- ${i}`)
// }

//Maps

// const map = new Map()
// map.set('JS', "JavaScript")
// map.set('CPP', "C++")
// map.set('PY', "Python")
// map.set('CPP', "C++")
// console.log(map)
// for (const [key, value] of map) {
//     console.log(`Key is :- ${key} and value is :- ${value}`)
// }

//Map is not iterable for in loop
// for (const key in map) {
//     console.log(key)
// }
// const myObject = {
//     'JS' : 'JavaScript',
//     'CPP' : 'C++',
//     'PY' : 'Python'
// }

//Object is not iterable
// for (const [key, value] of myObject) {
//     console.log(`Key is :- ${key} and value is :- ${value}`)
// }       

// for in
// for (const key in myObject) {
//     console.log(`key of object ${key} and value of key ${myObject[key]}`)
// }

// const no1 = [23,69,12,90]
// for (const key in no1) {
//     console.log(`key of array ${key} and value of key ${no1[key]}`)
// }

// higher-order function (HOF) forEach
// Takes one or more functions as arguments (callback functions).

const leng = ["JavaScript", "Python", "Java", "CPP"]
// leng.forEach(function(item){
//     console.log(item)
// });

// leng.forEach( (item) => {
//     console.log(item)
// })

// function printValue(item){
//     console.log(item)
// }

// leng.forEach(printValue)

// leng.forEach( (item, index, arr) => {
//     console.log(item, index, arr)
// })

const language = [
    {
        languageName : "javascript",
        fileName : "js"
    },

    {
        languageName : "java",
        fileName : "java"
    },

    {
        languageName : "C++",
        fileName : "cpp"
    }
]

// language.forEach( (item) => {
//     console.log(item.languageName)
// })

const num = [34, 56, 7, 23, 97 ,43, 65, 62, 20]
// const result = []
// num.forEach( (item) => {
//     if(item % 2 == 0){
//         result.push(item)
//     }    
// })

// console.log(result)

// filter

// const result1=num.filter( (item) => item % 2 == 0)
// console.log(result1)

const Lang = [
    {
        language : "C",
        duration : "2 months",
        fees : 4500
    },

    {
        language : "C++",
        duration : "4 months",
        fees : 7000
    },

    {
        language : "java",
        duration : "6 months",
        fees : 15000
    },

    {
        language : "python",
        duration : "7 months",
        fees : 16000
    },

    {
        language : "javascript",
        duration : "6 months",
        fees : 12000
    },

    {
        language : "mysql",
        duration : "2 months",
        fees : 4000
    },

    {
        language : "react",
        duration : "6 months",
        fees : 13000
    }
]

let userResult = Lang.filter( (item) => item.duration === "2 months")
// console.log(userResult)
userResult = Lang.filter( (item) => item.fees < 10000)
console.log(userResult)