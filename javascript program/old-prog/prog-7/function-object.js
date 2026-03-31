const user = {
    username: "Codeofjeet",
    course: "JavaScript"
}

function handleObject(obj) {
    console.log(`User name is ${obj.username} and course name is ${obj.course}`);
}

handleObject(user);
handleObject({
    username: "jeetendra",
    course: "React js"
})