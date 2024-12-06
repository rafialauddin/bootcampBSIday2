//Basic Functon
function sayHello(name){
    return `Hello, ${name}!`
}

//Using the Function
console.log(sayHello("John"))

//Function with multiple parameter
function calculateTotal(price, quantity){
    return price * quantity;
}

// Using the Function
console.log(calculateTotal(10, 5))

//Arrow Function
const add = (a,b) => {
    return a + b
}

//Simple arrow function

const multiply = (a,b) => a*b

console.log(add(5,3))
console.log(multiply(4,4))