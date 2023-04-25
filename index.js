// Function for random select a fruit
const randomSelection = (fruits) => {
  let randomNumber = Math.floor(Math.random() * fruits.length);

  return fruits[randomNumber]
}
// Arrays
fruits = ["Apple", "Mango", "Orange", "Banana", "quavas"];
// console.log(randomSelection(fruits));


//  rainy (1), sunny (-1), overcast (0)
const weatherScorer = (weather, weather2) => {
  let score;

  if( weather == 'rainy' && weather2 == 'overcast'){
    score = 2;
  } else if( weather == 'rainy'){
    score = 1
  } else if (weather == 'sunny') {
    score = -1
  }else {
    score = 0
  }

  return score
}

console.log(weatherScorer('rainy'));