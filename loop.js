//FOR LOOP
//Basic For Loop
console.log("--- Basic For Loop ----")
for (let i = 1; i <= 5; i++){
    console.log(`Count: ${i}`)
}

//Loop Through Array
const fruits = ["apple", "banana", "orange", "mango"]
console.log("--- Loop Through Array ----")
for (let i = 0; i < fruits.length; i++){
    console.log(`Fruit ${i + 1}: ${fruits[i]}`)
}

// FOR OF LOOP
//Easier way to loop through array
console.log("--- For...Of Loop ----")
const colors = ["red", "green", "blue"]
for(let color of colors){
    console.log(`Color: ${color}`)
}

//FOR IN LOOP
//Used for objects
console.log("--- For...In Loop ----")
const student = {
    name: "John",
    age: 20,
    grade: "A"
}
for (let key in student){
    console.log(`${key}: ${student[key]}`)
}

//WHILE LOOP
//Runs while conditions is true
console.log("--- While Loop ----")
let count = 1;
while (count <= 5){
    console.log(`While count: ${count}`)
    count++
}

//DO WHILE LOOP
//Always runs at least once
console.log("--- Do..While Loop ----")
let num = 1;
do{
    console.log(`Number: ${num}`)
    num++
} while (num <= 3)

//BREAK AND CONTINUE
console.log("--- Break and Continue ----")
for (let i = 1; i <= 5; i++){
    if ( i===2 ) continue
    if ( i===4 ) break
    console.log(`Number ${i}`)
}