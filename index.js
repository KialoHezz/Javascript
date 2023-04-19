// comments
// operators [*,+,-,%]
// variable

// console.log("Hezron Kyalo");

// User Inputs 1. Prompt is a js built-in js functionality that helps get inputs from a user through the broswer.
const prompt=require("prompt-sync")({sigint:true});

// fruit = prompt('What is your favorite fruit ?');

// console.log(fruit);


// food = prompt('How Much wa the food:');

// tipPercentage = prompt('tip %:') / 100;

// tipAmount = food * tipPercentage;
// total = food + tipPercentage;

// console.log("tip :" + tipAmount);
// console.log("total is :" + total);


// functions


// type casting


// Lesson 2 :
/* datatype : int, string, boolean, decimal, array [] , objects,
 Build a Weather App */
 
 //  Math operators Exponents**, modulo/reminder% , subtractio+ , _
 
 // Math.floor() method rounds a number down to the nearest integer and return the result.
 // math.ceil() method rounds a number to the nearest integer and returns the result.
 //  math.round() return a random number between 0(inclusive), and 1(exclusive)
 // 
 
 
 /* let & var the value can be change while const value cannot be changed.
  */

//  Baby wether app => conditionals

//  if rain the grab your umbrella
// else wear your sunglassess
// conditionals areuused in statements to compare variable values and data types. and they always return a boolean - true / false
//  == (double equal) - checks for equality
// e.g x == 8
//  === (triple equal sign) - checks for equality and data types
//  >, < - greater than , less than
// <= >= - greate than or equal to and less than or equal to
// != not or equal to
// !== not equal value or type
// let Weather = prompt("Enter weather in your region: ")

// if (Weather == 'rain'){
//     console.log('grab your umbrella');
// }else{
//     console.log('wear your sunglassess');
// }


//  LESSON 3: Functions => is a block of code
//  Basic of functions
//  Dynamic functions
//  tip Calculator App

 function sayName(){
    console.log("Hezron");
 }
//  Invoke or call the function
//  sayName()

//  dynamic
function sayMayName(name){
    console.log(name);
}

// sayMayName("hezron");

// functions arquments
// Template literals provide an easy way to interpolate variables and expression into strings

// interpolation is an efficient way of concatenation

function greeting(name){
    // greet = "Hi" + " " + name;
    // template literals `` and string interpolation
    greet = `Hi ${name}, Nice to meet you`
    console.log(greet);
}
// greeting("Hezron");

// Return statement stops the execution and return a value

function sum(a, b){
    // return

    return a + b;
}

// sum(4, 5);

// ES6 ARROW FUNCTIONS with explicit
const sumArrow = (a, b) => {
    return a + b;
}

//  arrow function with implicit return => remove curl brackets
const sumA = (a, b) => a + b;

// console.log(sumA(1, 2));



// LESSON 4: ARRAYS
// BASIC
// dYNAMIC FUNCTIONS
// TIP CALCULATOR APP
// BASIC OF ARRAYS
const fruits = ["Mango", "Apple", "Banana", "Cucumber"];
// console.log(fruits);
// Access the value using property
// The index gives you the the location of a value within an array. It's similar to a street number.
// console.log(fruits[1]);

// array method .push()
// Adds one or more elements to the end of an array and returns the new legth of the array
// e.g
fruits.push("Orange")
// console.log(fruits);

// Array method .slice()
//  return the portion of the array in a new array

console.log(fruits.slice(2, 4));

// Array method .iindexOf()
// e.g
console.log(fruits.indexOf("Mango"));

// Array method .length
// returns the element in array
// e.g
console.log(fruits.length);