let p1 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve(22);
    }, 2000);
});

let p2 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve(44);
    }, 4000);
});

let p = Promise.all([p1, p2]);
p.then((value)=>{
    console.log(value);
});
