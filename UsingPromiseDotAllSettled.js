let p1 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve(22);
    }, 2000);
});

let p2 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        reject(console.log("Ye kya hua, kaise hua ?? "));
    }, 4000);
});

let p = Promise.allSettled([p1, p2]);
p.then((value)=>{
    console.log(value);
});