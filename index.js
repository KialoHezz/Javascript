import fetch from "node-fetch";

const SUPERHERO = '1415420709270129';
const BASE_URL = `https://superheroapi.com/api.php/${SUPERHERO}`
const getNewHeroDiv = document.getElementById("getNewHero");
const heroImageDiv = document.getElementById("heroImage");
const searchBtn = document.getElementById("searchBtn");

const searchInput = document.getElementById("searchInput")


const getSuperHero = (id, name) => {
  // Someone searches : 1. By name => base_url/search/batman
  // json.result[0].image.url
  
  // 2. id => base_url/id
  // json.image.url
  fetch(`${BASE_URL}/${id}`)
    .then(response => response.json())
    .then(json =>{
      console.log(json)
      heroImageDiv.innerHTML = `<imag src='${json.image.url}' height=200 width=200>`
    })
  
}

const getSearchSuperHero = (name) => {
  fetch(`${BASE_URL}/search/${name}`) 
    .then(response => response.json())
    .then(json =>{
      const hero = json.results[0]
      console.log(hero )
      heroImageDiv.innerHTML = `<imag src='${hero.image.url}' height=200 width=200>`
  })
}

const randomHero = () =>  {
  const numberOfHeroes = 731

  return Math.floor(Math.random() * numberOfHeroes) + 1;
}

getNewHeroDiv.onclick = () => getSuperHero(randomHero );
searchBtn.onclick = () => getSearchSuperHero(searchInput.value)

