const studentName = `Rafi`
let studentAge = 22
let studentGrade
let nameUseFormatBaru = `Nama ${studentName} Usia ${studentAge}`
let _privateKey = "131102" //Variabel penting diawali dengan _ diawal supaya membedakan saja

let score = 95.5
let attendance = 85
let isPassing = true

// array
let courseModules = ["Variables", "Functions","Objects","Arrays"];

//Object
let student = {
    name: `John`,
    age: 20,
    grades: [85,80,90],
    contacs: {
        email: `johnsipetarung@gmail.com`,
        whatsapp: `081829302810`
    }
}

//Aritmathics & Logical Operator

let totalScore = 85 + 90;      // Addition
let averageScore = totalScore / 2;  // Division
let bonusPoints = score++;     // Increment
let penaltyPoints = score--;   // Decrement
let remainder = 10 % 3;        // Modulus

// Assignment Operators
let currentScore = 85;
currentScore += 5;             // Same as: currentScore = currentScore + 5
currentScore -= 2;             // Same as: currentScore = currentScore - 2

// Comparison Operators
let isEqual = 5 == "5";        // true (loose equality)
let isStrictEqual = 5 === "5"; // false (strict equality)
let isGreater = 90 > 85;       // true
let isLessOrEqual = 85 <= 90;  // true


// Logical Operations
let hasPassingGrade = score >= 60;
let hasAttandance = true;

// And Operator &&
let willPass = hasPassingGrade && hasAttandance;

// OR Operator ||
let needsHelp = (score < 60) || (attendance < 80)

// Not Operator !
let isFailing = !hasPassingGrade

//operator ternary
function getFee(isMember){
    return(isMember ? '$2.00' : '$10.00')
}


console.log(studentName);
console.log(studentAge);
console.log(studentGrade);
console.log(nameUseFormatBaru);
console.log(courseModules[2])
console.log(student.contacs.email)

