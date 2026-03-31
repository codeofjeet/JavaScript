const no = [10, 20, 30]
// const total = no.reduce( function (acc, arr) {
//     return acc + arr
// }, 0)

// const total = no.reduce( (acc, arr) => acc + arr, 0)

// console.log(total)

const addCart = [
    {
        courseName : "JavaScript",
        price : 3500
    },

    {
        courseName : "Java",
        price : 5000
    },

    {
        courseName : "Python",
        price : 4500
    },

    {
        courseName : "WebDevp",
        price : 4000
    },
]

const payAmount = addCart.reduce( (acc, item) => acc + item.price, 0)
console.log(payAmount)