const greet = (name, subham) => {
    console.log("Hi" + " " + name);
    subham();
}

const callMe = () => {
    console.log("Inside the callback function");
}

greet("peter", callMe);