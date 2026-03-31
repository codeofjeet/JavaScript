//objects literals

const mysybol = Symbol("jeetendra")

const user = {
    name : "jitendra",
    "full name" : "jeetendra gangwar",
    [mysybol] : "jeetendra",
    age : 28,
    location : "jaipur",
    email : "jeet@google.com",
    isLoggedIn : false,
    function1: function() {
        console.log("Hello");
      },
    function2: function() {
        console.log(`Hello ${this.name}`);
    }
}

console.log(user.name);
console.log(user["location"]);
console.log(user["full name"]);
console.log(user[mysybol]);

user.email="jeet@gmail.com"
console.log(user.email);
Object.freeze(user)
user.email="gangwarjeet@gmail.com"
console.log(user.email);

console.log(user.function1());
console.log(user.function2());

const obj1 = {1: "A", 2: "B"}
const obj2 = {3: "C", 4: "D"}
const obj3 = {5: "E", 6: "F"}

const obj4 = {obj1, obj2, obj3}
console.log(obj4);

const obj5 = Object.assign({}, obj1, obj2, obj3)
console.log(obj5);

const obj6 = {...obj1, ...obj2}
console.log(obj6);

console.log(Object.keys(user));
console.log(Object.values(user));