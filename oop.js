class Student{
    constructor(name, age, grade){
        this.name = name;
        this.age = age;
        this.grade = grade;
    }

    //class method
    study(){
        return `${this.name} is studying`
    }

    //getter method
    get studentInfo(){
        return `${this.name}, age ${this.age}, grade ${this.grade}`
    }

    //setter method
    set studentGrade(newGrade){
        if (newGrade >= 0 && newGrade <= 100){
            this.grade = newGrade
        } else{
            console.log("invalid grade")
        }
    }
}

const student = new Student("Rafi", 21, 84)
console.log(student.study())
console.log(student.studentInfo)

student.studentGrade = 70
console.log(student.studentInfo)

class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    introduce(){
        return `Hi!, I am ${this.name}`
    }
}

class Teacher extends Person{
    constructor(name,age,subject){
        super(name, age)
        this.subject = subject
    }
    
    teach(){
        return `${this.name} is teaching ${this.subject}`
    }
}

const teacher = new Teacher("yuyun", 55, "Matematika")
console.log(teacher.introduce())
console.log(teacher.teach())


//ENCAPSULATION USING PRIVATE FIELDS

class BankAccount{
    #balance = 0
    constructor(accountHolder){
        this.accountHolder = accountHolder;
    }

    deposit(amount){
        if(amount > 0){
            this.#balance += amount;
            return `Deposited ${amount}. New Balance : ${this.#balance}`
        }
        return "Invalid Amount"
    }

    getBalance(){
        return this.#balance
    }
}

const account = new BankAccount("John")
console.log(account.deposit(100))
console.log(account.getBalance())