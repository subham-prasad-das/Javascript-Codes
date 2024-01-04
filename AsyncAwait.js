const p = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("It is resolved")
        console.log("Resolved after 10 seconds")
    }, 10000)
    console.log("Inside promise but outside the setTimeout")
})

/*
function getResolved(){
    p.then((res)=> console.log(res))
    console.log("under the .then() method")
}
*/

async function getResolved(){
    const val = await p;
    console.log(val);
    console.log("It waited the promise to get resolved after 10 seconds and then it got resolved")
}

getResolved();