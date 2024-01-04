// promise chaining

let p1 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log("Resolved in 2 seconds") // resolved in 2 seconds
        resolve(22)
    }, 2000)
}).then((value)=>{
    console.log("value inside 1st then "+value) // value inside 1st then 22
    let p2 = new Promise((resolve, reject)=>{
        resolve("Promise 2")
    })
    return p2
}).then((value)=>{
    console.log("value inside 2nd then "+value) // value inside 2nd then Promise 2
    console.log("Now we are done") // Now we are done
    return 2
}).then((value)=>{
    console.log("value inside 3rd then "+value) // value inside 3rd then 2
    console.log("Finally we are done") // Finally we are done
})