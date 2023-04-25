// Function for random select a fruit
const randomSelection = (fruits) => {
  let randomNumber = Math.floor(Math.random() * fruits.length);

  return fruits[randomNumber]
}
// Arrays
fruits = ["Apple", "Mango", "Orange", "Banana", "quavas"];
console.log(randomSelection(fruits));