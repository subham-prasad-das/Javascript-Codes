/*
const pi = Math.PI;
console.log(pi);

console.log(Object.getOwnPropertyDescriptor(Math, 'PI'));

    {
        value: 3.141592653589793,
        writable: false,
        enumerable: false,
        configurable: false
    }

As the property of PI have the value of 'writable', 'enumerable' and 'configurable' as false so it can never be overwritten.
*/

/*
Object.defineProperty(Math, 'PI', {
    writable: true,
    enumerable: true,
    configurable: true
});


This can not be possible for aforedefined properties and values
But we can make our own constants-->
*/

const owner = {
    name: 'Subham'
}

Object.defineProperty(owner, 'name', {
    writable: false,
    enumerable: false,
    configurable: false
});

owner.name = 'Shibam';
console.log(owner.name);