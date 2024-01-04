function setName(name){
    this.name = name;
}

function setPassword(password){
    this.password = password;
}

function User(name, password){
    setName.call(this, name);
    setPassword.call(this, password);
}

const user1 = new User('subham', 1234);
console.log(user1);

/*
    When we call the setName() or setPassword() inside the User(), the execution was successful but after the successful execution, the reference of the setName() or setPassword() gets poped out. So to make their reference stay with User(), User() actually gives its own 'this' to execute with User()'s reference.
*/