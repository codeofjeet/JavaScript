const user = {
    name: "jeetendra",
    course: "JavaScript",
    price: 6500,

    wecomeMessage: function() {
        console.log(`${this.name}, wecome to ${this.course}`)
    }
}

user.wecomeMessage();
user.name="Deepak";
user.wecomeMessage();

console.log(this);  // if print this line at console then print window object

function abc(){
    console.log(this)
}

abc()

function abc1(){
    let name = "jeetendra"
    console.log(this.name)
}

abc1()

 const abc2 = () => {
    let name = "jeetendra"
    console.log(this.name)
}

abc2()

const addTwo = (n1, n2) => {
    return n1 + n2;             //exlicite retrn
}

console.log(addTwo(2,3))

const addTwo1 = (n1, n2) =>  n1 + n2;             //emlicite retrn you can used (n1 + n2)


console.log(addTwo1(2,3))

const retobj = () => ({name:"jeetendra"})
console.log(retobj())