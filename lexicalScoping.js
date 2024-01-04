{
    const var1 = "Subham";
    
    const fun1 = () => {
        const var2 = "Prasad";
        const fun2 = () => {
            const var3 = "Das";
    
            console.log(var1); // accessible
            console.log(var2); // accessible
            console.log(var3); // accessible
        }
    
        fun2();
    
        console.log(var1); // accessible
        console.log(var2); // accessible
        console.log(var3); // not accessible
    }
    
    fun1();
    
    console.log(var1); // accessible
    console.log(var2); // not accessible
    console.log(var3); // not accessible
}

console.log(var1); // not accessible
console.log(var2); // not accessible
console.log(var3); // not accessible