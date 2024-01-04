const fun1 = () => {
    const name = "Subham";
    console.log("Inside the fun1");
    const fun2 = () => {
        console.log(name);
        console.log("Inside the fun2");
    }
    console.log("Outside the fun2");
    return fun2; // we are returning the whole lexical scope of fun2()
}

console.log("Outside the fun1");

const funHolder = fun1();
funHolder();


/*
    1. Who called fun2() ?
    --> when we return the reference of the fun2, it is being called automatically.

    2. How are we returning the scope of the whole fun1 and fun2?
    --> Because as per lexical scoping, fun2() can access the codes of fun1() and thats how can access the reference of fun1() and so the reference of fun1() is also can be returned with the return of fun2().  

    3. What is closure ?
    --> When we return a function, we actually dont return the function but we return its lexical scope. This procedure is called as "Closure".
*/ 