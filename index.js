// import fetch from "/node-fetch";

const SUPERHERO = '1415420709270129';
const BASE_URL = `https://superheroapi.com/api.php/${SUPERHERO}`
console.log(BASE_URL)

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
  console.log(searchInput.value);
  fetch(`${BASE_URL}/search/${name}`) 
    .then(response => response.json())
    .then(json =>{
      const hero = json.results[0] 
      showHeroInfo(hero)
     
  })
}


const showHeroInfo = (character) => {
  const name = `<h2>${character.name}</h2>`;
  const img = `<imag src="${character.image.url}" height=200 width=200>`;

  const stats = Object.keys(character.powerstats).map(stat => {
    return `<p>${stat}: ${character.powerstats[stat.toUpperCase()]}</p>`
  }).join('')

  // return an array of p tags
  // console.log(stats.join(""));

  heroImageDiv.innerHTML = `${name} ${img} ${stats}`
} 


const randomHero = () =>  {
  const numberOfHeroes = 731

  return Math.floor(Math.random() * numberOfHeroes) + 1;
}

getNewHeroDiv.onclick = () => getSuperHero(randomHero );
searchBtn.onclick = () => getSearchSuperHero(searchInput.value)

