const p1 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("It is resolved 1");
    }, 10000);
});

const p2 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("It is resolved 2");
    }, 5000);
});

async function getResollved1(){
    const pro1 = await p1;
    console.log(pro1);
    console.log("The promise 1 is resolved completely");

    const pro2 = await p2;
    console.log(pro2);
    console.log("The promise 2 is resolved completely")
}

getResollved1();


// when inside getResolved function which is async in nature, we keep await p1, which is taking 10 seconds to get resolved, above p2, which is taking 5 seconds to get resolved, the execution will wait for 10 seconds for p1 to get resolved. And after 10 seconds both p1 and p2 will get resolved...

// But if we had kept p2 upon p1, then after 5 seconds p2 had get resolved and after another 5 seconds p1 should have get resolved(taking 10 seconds in total)

// If we had taken two functions for two of the promises then the one resolving first wd have consoled first. p2 then p1 in the upper case