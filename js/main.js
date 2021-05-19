//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

function printFaves(arr) {
    var ok = Object.keys(arr)
    var ov = Object.values(arr)
    for(let i = 0; i < (ok.length); i++){
        if(typeof(ov[i][0]) === "object"){
            console.log(`${ok[i]}: ${Object.keys(ov[i][0])}, ${Object.values(ov[i][0])}`)
        } else if(Array.isArray(ov[i])){
            console.log(`${ok[i]}: ${ov[i]}`)
        } else {
            console.log(`${ok[i]}: ${ok[i]}`)
        }
    }
}

printFaves(person3)


//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the person's age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one person's
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype

//JS Classes
function Person (name,age,height) {
    this.name = name;
    this.age = age;
    this.height = height;

    // Use an arrow to create the printInfo method
    
    this.printInfo = () => {
        return `Name: ${this.name} \n Age: ${this.age} \n Height: ${this.height}`
    }

    // Create another arrow function for the addAge method that takes a single parameter
    // Adding to the age 
    
    this.addAge = (n) => {
        // this.age++
        this.age += n
    }
}

let new_person = new Person('Jessica', 63, '5ft 4in')
let new_person2 = new Person('Sarah', 42, '6 ft 1in')

console.log(new_person.printInfo())
console.log(new_person2.printInfo())

new_person2.addAge(3)

console.log(new_person2.printInfo())


// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if its length 
    is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

const isLongEnough = (str, num) => {
    return new Promise( (resolve, reject) => {
        if(str.length > num){
            resolve(true)
        } else {
            reject(false)
        }
    })
}

isLongEnough("say hello to my little friend", 10)
.then( (result) => {
    console.log(`Big word`)
})

.catch( (error) => {
    console.log(`Small number`)
})

// Code Wars #1: Calculate BMI (redo with JS) (Result: successful)

/*
Write function bmi that calculates body mass index (bmi = weight / height2).
if bmi <= 18.5 return "Underweight"
if bmi <= 25.0 return "Normal"
if bmi <= 30.0 return "Overweight"
if bmi > 30 return "Obese"
*/

function bmi(weight,height){

    if((weight / (height ** 2)) <= 18.5){
        return `Underweight`
    }
    if((weight / (height ** 2)) <= 25.0){
        return `Normal`
    }
    if((weight / (height ** 2)) <= 30.0){
        return `Overweight`
    }
    if((weight / (height ** 2)) > 30){
        return `Obese`
    }
}

console.log(bmi(50, 1.80))
console.log(bmi(80, 1.80))

// Code Wars #2: Grasshopper - Personalized Message (Result: successful)

/*
Create a function that gives a personalized greeting. This function takes two parameters: 
name and owner.
Use conditionals to return the proper message:
case 	return
name equals owner 	'Hello boss'
otherwise 	'Hello guest'
*/

function greet (name, owner){
    if(name === owner){
        return `Hello boss`
    } else {
        return `Hello guest`
    }
}

console.log(greet("Max","Max"))
console.log(greet("Max","Mick"))
