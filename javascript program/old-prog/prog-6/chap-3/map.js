const no = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const newNo = no.map( (num) => num + 1)
// const newNo = no.map( (num) => {return num + 1})

const newNo = no.
map( (num) => num + 1)
.map( (num) => num * 5)
.filter( (num) => num > 30 )
console.log(newNo)