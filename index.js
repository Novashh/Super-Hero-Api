
const SUPERHERO_TOKEN = '3078193402326692';
const BASE_URL = `https://www.superheroapi.com/api.php/${SUPERHERO_TOKEN}`;
const img = "https://www.superherodb.com/pictures2/portraits/10/100/1390.jpg";

const searchInput = document.getElementById('search')
const randomSearch = document.getElementById('newHeroButton');
const search = document.getElementById('searchButton');
const heroNameDiv = document.getElementById('name-Hero');
const heroImageDiv = document.getElementById('img-Hero');
const heroStatsDiv  = document.getElementById('hero-stats');

const getSuperHero = (id, name) => {
    fetch(`${BASE_URL}/${id}`)
      .then(response => response.json())
      .then(json => {
        console.log(json.powerstats)
        const superHero = json
         showHeroInfo(superHero)
  
      })
  }
  

 function showHeroInfo(character) {
    const heroName = `<h1>${character.name}</h1>`;

    const img = `<img src="${character.image.url}" height=250 width=250/>`

    const stats = Object.keys(character.powerstats).map(stat => {
        return `<p>${stat.toUpperCase()}:${character.powerstats[stat]}</p>`
    }).join('')
// @ts-ignore
    heroImageDiv.innerHTML = `${heroName}${img}`
    // @ts-ignore
    heroStatsDiv.innerHTML=`${stats}`
}

function getSearchSuperHero (name) {
// @ts-ignore
console.log(searchInput.value)
fetch(`${BASE_URL}/search/${name}`)
.then(Response => Response.json())
.then(json => {
    const hero = json.results[0]
    showHeroInfo(hero)
})
}
const randomHero = () => {
    const numberOfHeroes = 731
    return Math.floor(Math.random() * numberOfHeroes) + 1
  }
  
  newHeroButton.onclick = () => getSuperHero(randomHero())
  // @ts-ignore
  searchButton.onclick = () => getSearchSuperHero(searchInput.value)

