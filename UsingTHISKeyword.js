function User(username, name){
    this.username = username;
    this.name = name;
    // console.log(this);
    return this;
}

const fun1 = new User(1122, 'subham');
console.log(fun1);

const fun2 = new User(1133, 'Das');
console.log(fun1); 
console.log(fun2); 


/*
    In the above code if we dont return this, after calling fun1() when we call fun2() then again call fun1(), we can see the values are being overwritten. 
    So through " return this;", we are separating fun1() and fun2() from holding the same reference.
*/
