const url = "http://localhost:3000/characters"

//hero elements
const heroListContainer = document.getElementById("hero-list")
const heroImage = document.getElementById("hero-image")
const heroDescription = document.getElementById("hero-description")
const heroWins = document.getElementById("hero-wins")
const heroLosses = document.getElementById("hero-losses")
const heroLikes = document.getElementById("hero-likes")
const heroTitle = document.getElementById("hero-title")

//villain elements
const villainListContainer = document.getElementById("villain-list")
const villainImage = document.getElementById("villain-image")
const villainDescription = document.getElementById("villain-description")
const villainWins = document.getElementById("villain-wins")
const villainLosses = document.getElementById("villain-losses")
const villainLikes = document.getElementById("villain-likes")
const villainTitle = document.getElementById("villain-title")


//server test complete!
fetch(url)
.then(response => response.json())
.then(characters => {
    const heroCharacters = characters.filter(character => character.class === "hero")
    renderHero(heroCharacters)

    const villainCharacters = characters.filter(character => character.class === "villain")
    renderVillain(villainCharacters)
}
)

// -------------- HERO RENDER FUNCTIONS ----------------//

function renderHero (characters) {
    characters.forEach(character => {
        //1) create a new element
        const heroListItem = document.createElement("li")
        //2) pull the text from the db.json and apply it to the newly created element
        heroListItem.textContent = character.name
        //3) append the new element (with your new text) to the container that already exists
        heroListContainer.appendChild(heroListItem)

        heroListItem.addEventListener("click", (e) => {
            e.preventDefault()
            renderHeroSelection(character)
        })
    })
}
function renderHeroSelection(character) {
    heroTitle.textContent = character.name
    heroImage.src = character.image
    heroDescription.textContent = character.description
    heroWins.textContent = `Wins: ${character.wins}`
    heroLosses.textContent = `Losses: ${character.losses}`
    heroLikes.textContent = `Likes: ${character.likes}`
}

// -------------- VILLAIN RENDER FUNCTIONS ----------------//

function renderVillain (characters) {
    characters.forEach(character => {
        //1) create a new element
        const villainListItem = document.createElement("li")
        //2) pull the text from the db.json and apply it to the newly created element
        villainListItem.textContent = character.name
        //3) append the new element (with your new text) to the container that already exists
        villainListContainer.appendChild(villainListItem)

        villainListItem.addEventListener("click", (e) => {
            e.preventDefault()
            renderVillainSelection(character)
        })
    })
}

function renderVillainSelection(character) {
    villainTitle.textContent = character.name
    villainImage.src = character.image
    villainDescription.textContent = character.description
    villainWins.textContent = `Wins: ${character.wins}`
    villainLosses.textContent = `Losses: ${character.losses}`
    villainLikes.textContent = `Likes: ${character.likes}`
}

//fight button event listener
const fightButton = document.getElementById("fight")
fightButton.addEventListener("mouseover", (e) => {
    e.preventDefault()
    console.log ("mouse")
    //have the fight button change when we hover the mouse over it
    const hoverMotion = document.getElementById("hover")
    hoverMotion.src = "./assets/Component 1.jpg"


})