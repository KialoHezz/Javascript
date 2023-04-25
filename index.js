import fetch from "node-fetch";

const SUPERHERO = '1415420709270129';
const BASE_URL = `https://superheroapi.com/api.php/${SUPERHERO}`
let getNewHeroDiv = document.getElementById("getNewHero");
let heroImageDiv = document.getElementById("heroImage");

const getSuperHero = (id, name) => {
  fetch(`${BASE_URL}/${id}`)
    .then(response => response.json())
    .then(json =>{
      console.log(json)
      heroImageDiv.innerHTML = `<imag src='${json.image.url}' height=200 width=200>`
    })
  
}

const randomHero = () =>  {
  const numberOfHeroes = 731

  return Math.floor(Math.random() * numberOfHeroes) + 1;
}

getNewHeroDiv.onclick = () => getSuperHero(randomHero );

