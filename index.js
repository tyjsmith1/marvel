const url = "http://localhost:3000/characters"

//hero variables
const heroListContainer = document.getElementById("hero-list")



//server test complete!
fetch(url)
.then(response => response.json())
.then(characters => {
    const heroCharacters = characters.filter(character => character.class === "hero")
    renderHeroList(characters)
    console.log(heroCharacters)
}
)

//1) populate hero list and villian list with character names only. 
    // a) will need to filter the array by class so that heros and villians are separated

function renderHeroList (characters) {
    characters.forEach(character => {
        const heroListItem = document.createElement("li")
        heroListItem.textContent = character.name
        heroListContainer.appendChild(heroListItem)
    })
}

