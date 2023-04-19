// comments
// operators [*,+,-,%]
// variable

// console.log("Hezron Kyalo");

// User Inputs 1. Prompt is a js built-in js functionality that helps get inputs from a user through the broswer.
const prompt=require("prompt-sync")({sigint:true});

fruit = prompt('What is your favorite fruit ?');

console.log(fruit);

// datatype : int, string, boolean

food = prompt('How Much wa the food:');

tipPercentage = prompt('tip %:') / 100;

tipAmount = food * tipPercentage;
total = food + tipPercentage;

console.log("tip :" + tipAmount);
console.log("total is :" + total);

// functions
