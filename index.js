// // // comments
// // // operators [*,+,-,%]
// // // variable

// // // console.log("Hezron Kyalo");

// // // User Inputs 1. Prompt is a js built-in js functionality that helps get inputs from a user through the broswer.
// // // const prompt=require("prompt-sync")({sigint:true});

// // // fruit = prompt('What is your favorite fruit ?');

// // // console.log(fruit);


// // // food = prompt('How Much wa the food:');

// // // tipPercentage = prompt('tip %:') / 100;

// // // tipAmount = food * tipPercentage;
// // // total = food + tipPercentage;

// // // console.log("tip :" + tipAmount);
// // // console.log("total is :" + total);


// // // functions


// // // type casting


// // // Lesson 2 :
// // /* datatype : int, string, boolean, decimal, array [] , objects,
// //  Build a Weather App */
 
// //  //  Math operators Exponents**, modulo/reminder% , subtractio+ , _
 
// //  // Math.floor() method rounds a number down to the nearest integer and return the result.
// //  // math.ceil() method rounds a number to the nearest integer and returns the result.
// //  //  math.round() return a random number between 0(inclusive), and 1(exclusive)
// //  // 
 
 
// //  /* let & var the value can be change while const value cannot be changed.
// //   */

// // //  Baby wether app => conditionals

// // //  if rain the grab your umbrella
// // // else wear your sunglassess
// // // conditionals areuused in statements to compare variable values and data types. and they always return a boolean - true / false
// // //  == (double equal) - checks for equality
// // // e.g x == 8
// // //  === (triple equal sign) - checks for equality and data types
// // //  >, < - greater than , less than
// // // <= >= - greate than or equal to and less than or equal to
// // // != not or equal to
// // // !== not equal value or type
// // // let Weather = prompt("Enter weather in your region: ")

// // // if (Weather == 'rain'){
// // //     console.log('grab your umbrella');
// // // }else{
// // //     console.log('wear your sunglassess');
// // // }


// // //  LESSON 3: Functions => is a block of code
// // //  Basic of functions
// // //  Dynamic functions
// // //  tip Calculator App

// //  function sayName(){
// //     console.log("Hezron");
// //  }
// // //  Invoke or call the function
// // //  sayName()

// // //  dynamic
// // function sayMayName(name){
// //     console.log(name);
// // }

// // // sayMayName("hezron");

// // // functions arquments
// // // Template literals provide an easy way to interpolate variables and expression into strings

// // // interpolation is an efficient way of concatenation

// // function greeting(name){
// //     // greet = "Hi" + " " + name;
// //     // template literals `` and string interpolation
// //     greet = `Hi ${name}, Nice to meet you`
// //     console.log(greet);
// // }
// // // greeting("Hezron");

// // // Return statement stops the execution and return a value

// // function sum(a, b){
// //     // return

// //     return a + b;
// // }

// // // sum(4, 5);

// // // ES6 ARROW FUNCTIONS with explicit
// // const sumArrow = (a, b) => {
// //     return a + b;
// // }

// // //  arrow function with implicit return => remove curl brackets
// // const sumA = (a, b) => a + b;

// // // console.log(sumA(1, 2));



// // // LESSON 4: ARRAYS
// // // BASIC
// // // dYNAMIC FUNCTIONS
// // // TIP CALCULATOR APP
// // // BASIC OF ARRAYS
// // // const fruits = ["Mango", "Apple", "Banana", "Cucumber"];
// // // console.log(fruits);
// // // Access the value using property
// // // The index gives you the the location of a value within an array. It's similar to a street number.
// // // console.log(fruits[1]);

// // // array method .push()
// // // Adds one or more elements to the end of an array and returns the new legth of the array
// // // e.g
// // // fruits.push("Orange")
// // // console.log(fruits);

// // // Array method .slice()
// // //  return the portion of the array in a new array

// // // console.log(fruits.slice(2, 4));

// // // Array method .iindexOf()
// // // e.g
// // // console.log(fruits.indexOf("Mango"));

// // // Array method .length
// // // returns the element in array
// // // e.g
// // // console.log(fruits.length);


// // // Lesson 5 :Objects
// // // Objects are a type of variable, quite similar to arrays but they have someting called key-value

// // // e.g
// // const person = {
// //     name: "hezron",
// //     shirt: "White"
// // }
// // // Access a value => 1. dot notation and 2. Bracket notation

// // // console.log(person.shirt); //Dot notation
// // // console.log(person["shirt"]); //Bracket notation

// // // assig object

// // person.phone = '+2540070000'; //Dot notation
// // // console.log(person);

// // person["last"] = "Woow"; //Bracket notation
// // // console.log(person);

// // // Arrow function , object, Template literals $ string interpolation
// // const introducer = (name, shirt) => {
// //     const person = {
// //         name: name,
// //         shirt: shirt,
// //         assests: 100000,
// //         liabilities: 50000,
// //     }

// //     const intro = `Hi my name is ${person.name} and the color of my shirt is ${person[shirt]} and my net worthy is ${person.assests - person.liabilities}`

// //     return intro
// // }

// // // console.log(introducer('Hezron', 'Black'));


// // // Create methods - is a property containing a function definition

// // const introduce = (name, shirt) => {
// //     const person = {
// //         name: name,
// //         shirt: shirt,
// //         assests: 100000,
// //         liabilities: 50000,
// //         netWorthy: function(){
// //             return this.assests - this.liabilities;
// //         }
// //     }

// //     const intro = `Hi my name is ${person.name} and the color of my shirt is ${person[shirt]} and my net worthy is ${person.netWorthy()}`


// //     return intro
// // }

// // // console.log(introduce('Hezron', 'Black'));


// // // LESSON 06 : FOR LOOOPS
// // const fruits = ["Banana", "Apple", "Mango"];

// // // console.log(fruits[0]);
// // // console.log(fruits[1]);
// // // console.log(fruits[2]);

// // // let i - is declare a variable , i=0 - initialize, i<fruits.length - condition, i++ - increment
// // // for (let i=0; i<fruits.length; i++){
// // //     console.log(i, fruits[i]);
// // // }

// // for (const fruit of fruits){
// //     // console.log(fruit);
// // }

// // // [1, 2, 3, 4]
// // // result = 0;
// // // result = 1;
// // // result = 3;
// // // result = 6;
// // // result = 10;

// // const sumArray = (num) => {
// //     let result = 0;
    
// //     // for looop
// //     for (const number in num){
// //         console.log(Number(number));
        
// //         result = result + Number(number);
// //     }
    
    
// //     return { result }
// // }

// // const num = [1, 2, 3, 4, 5]; //15
// // // console.log(sumArray(num));




// // //  loops, array , objects
// // // Function to check which element in array is great than and output that element.
// // const max = (numbers) => {
// //     let result = numbers[0];
    
// //     // for loops
// //     for (const number of numbers) {
// //         if (number > result){
// //             result = number
// //         }
// //     }
// //     return {result}

// // }

// // // console.log(max([1, 2, 3, 4, 5, 1]));



// // // function should return an object {'h': 2, 'a':2} when the function call.
// // //  in => indexes
// // // of => return the letters
// // const letterFrequency = (phrase) => {
// //     // make a frequency object {}
// //     let frequency = {};
// //     // console.log(phrase)
// //     // for loop
// //     for ( let letter of phrase){
// //         // check if letter exist in frequency
// //         if (letter in frequency){
// //             // exist then increament the value y +1
// //             // frequency[letter] = frequency[letter] + 1
// //             // above statement in shorthand
// //             frequency[letter] += 1
// //             // otherwise, set the value to 1
// //         }else{
// //             frequency[letter] = 1
// //         }
// //     }

// //     return frequency
// // }

// // // console.log(letterFrequency('hahaha'));

// // // incremetor operators


// // const wordFrequency = (phrase) => {
// //     const words = phrase.split(' ');

// //     return letterFrequency(words)
// // }

// // // const userInput = prompt('Write your sentence: ')

// // // console.log(wordFrequency(userInput));


// // // LESSON 08: ARRAY METHODS 
// // // HIGHER ORDER FUNCTIONS MAP(), FILTER(), REDUCE()
// // // e.g map methods- loops and returns array and arrow
// // // [1, 2, 3, 4].map(number => console.log(number));

// // const doubleMap = (numbers) => {
// //     return numbers.map(number => number * 2);
// // }

// // // console.log(doubleMap([1, 2, 3]));


// // // e.g filter
// // // [1, 2, 3, 4, 5, 6]

// // const filter = (numbers, greaterThan) => {
// //     // empty error
// //     result = [];

// //     for(let num in numbers){
// //         if(num > greaterThan){
// //             result.push(num);
// //         }
// //     }

// //     return result;
// // }

// // // console.log(filter([1, 2, 3, 4, 5, 6, 7]), 3);
// // // logical operator $$, ||, 

// // const nums = [1, 2, 3, 4];

// // // console.log(nums.filter(num => num > 2));

// // // console.log(nums.filter(num => num > 2));
// // // ARRAY OF OBJECTS
// // const actors = [
// //     {name: 'Johnny', netWorth: 2000000},
// //     {name: 'Hezron', netWorth: 10 },
// //     {name: 'Ngoma', netWorth: 20},
// // ]

// // // let result = actors.filter(actor => actor.netWorth > 10);
// // // let names = result.map(actor => actor.name).join(', ')

// // // index.innerHTML = `<p>${names}</p>`


// // // .reduce
// // // SUM all of the net worths
// // //  SUM: Think reduce
// // // reduce takes in a function as an arqument
// // // reduce loops and give you back the   accumulator

// // const number = [1, 2, 3]

// // // let result = number.reduce(function(prev, next){
// // //     return prev + next
// // // });

// // // ES6 NOTATION

// // let result = number.reduce((prev, next) => prev + next)
// // // console.log(result);


// // // DOM => replit.com
// let title = document.getElementById("title");

// console.log('Before:', title.innerHTML);

// let message = "GoodBye My Lover";

// title.innerHTML = message

// console.log('After:', title.innerHTML);

// title.innerHTML = `<p>${message}</p>`

// // style property

// title.style.color = 'red';


// // let redDiv = document.getElementById("red");
// // let yellowdiv = document.getElementById("yellow");
// // let greenDiv = document.getElementById("green");

// // redDiv.onclick = () => {
// //     console.log(' User Chose: Rock');
// //     // getComputerChoice
// //     // compare userChoice vs. computer choice => result
// //     // -1 , 0, 1
// //     // show everthing on the screen (DOM)
// // }
// // yellowdiv.onclick = () => console.log('You clicked yellow')
// // greenDiv.onclick = () => console.log('You clicked green')

// // at console will get a nodelist{}
// const colorsquareBtn = document.getElementsByClassName("colorsquare");

// console.log(colorsquareBtn);

// // console.log(colorsquareBtn[0].value);
// // console.log(colorsquareBtn[1].value);
// // console.log(colorsquareBtn[2].value);


// // forEach
// const timesClicked = {'red': 0, 'yellow': 0, 'green': 0}

// colorsquareBtn.forEach(square => {
//     square.onclick = () => {
//         timesClicked[square.value] += 1;
//         square.innerText = timesClicked[square.value]
//         // console.log(square.value)
//     };
// });

// function clearScores(){
//     timesClicked.red = 0;
//     timesClicked.yellow = 0;
//     timesClicked.green = 0;
        
//     square.forEach(square => {
//         square.innerText = '';
//     });
// }
// const clearDiv = document.getElementById("clear");
// clearDiv.onclick = () => clearScores();



// Tip Calculator 



/* 
🌟 APP: Tip Calculator

These are the 3 functions you must use 👇
=========================================
calculateBill()
increasePeople()
decreasePeople()

These functions are hard coded in the HTML. So, you can't change their names.

These are all the DIV ID's you're gonna need access to 👇
========================================================
#1 ID 👉 'billTotalInput' = User input for bill total
#2 ID 👉 'tipInput' = User input for tip
#3 ID 👉 'numberOfPeople' = Current number of people you're splitting the bill between
#4 ID 👉 'perPersonTotal' = Total dollar value owed per person
*/

// Get global access to all inputs / divs here (you'll need them later 😘)
// bill input, tip input, number of people div, and per person total div



// Get number of people from number of people div


// ** Calculate the total bill per person **
const calculateBill = () => {
    // get bill from user input & convert it into a number
    
  
    // get the tip from user & convert it into a percentage (divide by 100)
    
  
    // get the total tip amount
    
  
    // calculate the total (tip amount + bill)
    
  
    // calculate the per person total (total divided by number of people)
  
  
    // update the perPersonTotal on DOM & show it to user
  
  }
  
  // ** Splits the bill between more people **
  const increasePeople = () => {
    // increment the amount of people
  
  
    // update the DOM with the new number of people
  
  
    // calculate the bill based on the new number of people
  
  }
  
  // ** Splits the bill between fewer people **
  const decreasePeople = () => {
    // guard clause
    // if amount is 1 or less simply return
    // (a.k.a you can't decrease the number of people to 0 or negative!)
  
    
    // decrement the amount of people
  
  
    // update the DOM with the new number of people
  
  
    // calculate the bill based on the new number of people
  
  }