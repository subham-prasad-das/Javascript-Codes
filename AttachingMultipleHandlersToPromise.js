/*

    // attaching multiple handlers

const promise = new Promise((resolve, reject)=>{
    console.log("inside the promise") // 1
    resolve("1st done ")
})

promise
    .then(()=>{
        console.log("Inside the 1st then outside the timeout") // 2
        setTimeout(()=>{
            console.log("Inside the 1st then ran after 3 sec") // 4
        }, 3000)
    })

    .then(()=>{
        // console.log(result)
        console.log("Inside the 2nd then") // 3
    })

    inside the promise -> will be the first output as the promise is created 1st
    Inside the 1st then outside the timeout -> will be the 2nd output as its inside a normal console.log inside the 1st ".then()" function
    Inside the 2nd then -> will be the 3rd output as it is not promise chaining so it wont wait for the execution of the "setTimeout()" function
    Inside the 1st then ran after 3 sec -> finally this will be executed as by the end of 3 seconds all other things would have been ran

*/


/*

// promise chaining

const promise = new Promise((resolve, reject)=>{
    console.log("Inside the promise") // 1
    resolve("success")
}).then((result)=>{
    console.log(result)
    console.log("Inside the 1st then outside the timeout") // 2
    setTimeout(()=>{
        console.log("Inside the 1st then ran after 3 sec") // 5
    }, 3000)
}).then((result)=>{
    console.log(result) // 3
    console.log("Inside the 2nd then") // 4
})

*/