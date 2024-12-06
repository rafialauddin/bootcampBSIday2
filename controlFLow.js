//IF ELSE

//Basic Statements
let studentScore = 85;

if(studentScore >= 80){
    console.log("Excellent Work!")
}

//If-Else Statement
let age = 17;

if (age >= 18){
    console.log("You Can Vote")
} else{
    console.log("Too Young to Vote")
}

//If-Else If-Else Statement
let grade = 75;
if (grade >= 90){
    console.log("Grade A")
} else if (grade >= 80){
    console.log("Grade B")
} else if (grade >= 70){
    console.log("Grade C")
} else if (grade >= 60){
    console.log("Grade D")
} else {
    console.log("Grade F")
}

// Nested If Statements
let isLoggedIn = true
let isAdmin = true
let hasPermission = true

if(isLoggedIn){
    if(isAdmin){
        if(hasPermission){
            console.log("Welcome")
        } else {
            console.log ("Insufficient Permissions")
        }
    } else {
        console.log("Welcome to User Dashboard")
    }
} else {
    console.log("Please log in First")
}

//Using logical operators with if statements
let username = "john_doe"
let password = "secret123"

if (username === "john_doe" && password === "secret123"){
    console.log("Login Successful")
} else {
    console.log("Invalid Credentials")
}

//Ternary Operator
let isSubscribed = true
let message = isSubscribed ? "Welcome Back" : "Please Subscribe"



//SWITCH CASE