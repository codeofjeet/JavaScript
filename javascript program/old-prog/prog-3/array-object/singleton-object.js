//singleton-object
const userobject = new Object()
userobject.id = "123jeet";
userobject.name = "Jeetendra";
userobject.isLoggedIn = false;
console.log(userobject);

userobject.emaail = "someone@gmail.com";
userobject.fullname={
    userfullname:{
        firstname: "jeetendra",
        lastname: "kumar"
    }
}
console.log(userobject.fullname.userfullname.firstname);

/*
const userone = {
id: 1234,
email:"someone@gmail.com",
fullname: {
userfullname: {
firstname:"jeetendra",
lastname:"kumar"
}
}
}
*/