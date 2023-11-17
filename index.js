const url = "http://localhost:3000/characters"
const likeButtonSrc = "./assets/like-button.png"

//hero elements
const heroListContainer = document.getElementById("hero-list")
const heroImage = document.getElementById("hero-image")
const heroDescription = document.getElementById("hero-description")
const heroWins = document.getElementById("hero-wins")
const heroLosses = document.getElementById("hero-losses")
const heroLikes = document.getElementById("hero-likes")
const heroTitle = document.getElementById("hero-title")
const heroLikeButton = document.getElementById("hero-like-button")
const likeHeroImage = document.createElement("img")
let selectedHero = null

function renderHeroLikeButton() {
    likeHeroImage.src = likeButtonSrc
    heroLikeButton.appendChild(likeHeroImage)
}

//villain elements
const villainListContainer = document.getElementById("villain-list")
const villainImage = document.getElementById("villain-image")
const villainDescription = document.getElementById("villain-description")
const villainWins = document.getElementById("villain-wins")
const villainLosses = document.getElementById("villain-losses")
const villainLikes = document.getElementById("villain-likes")
const villainTitle = document.getElementById("villain-title")
const villainLikeButton = document.getElementById("villain-like-button")
const likeVillainImage = document.createElement("img")
let selectedVillain = null

function renderVillainLikeButton() {
    likeVillainImage.src = likeButtonSrc
    villainLikeButton.appendChild(likeVillainImage)
}

//server
fetch(url)
    .then(response => response.json())
    .then(characters => {
        //split hero characters to different array
        const heroCharacters = characters.filter(character => character.class === "hero")
        renderHero(heroCharacters)
        
        //split villain characters to different array
        const villainCharacters = characters.filter(character => character.class === "villain")
        renderVillain(villainCharacters)
    }
    )

// -------------- HERO RENDER FUNCTIONS ----------------//

function renderHero(characters) {
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

//populates the center area whenever a hero is clicked from the hero list
function renderHeroSelection(character) {
    heroTitle.textContent = character.name
    heroImage.src = character.image
    heroDescription.textContent = character.description
    heroWins.textContent = `Wins: ${character.wins}`
    heroLosses.textContent = `Losses: ${character.losses}`
    heroLikes.textContent = `Likes: ${character.likes}`

    selectedHero = character
    renderHeroLikeButton(character)
}

// --------LIKE BUTTON SERVER UPDATE------//

heroLikeButton.addEventListener('click', (e) => {
    e.preventDefault()

    const updatedLikes = {
        likes: selectedHero.likes + 1
    }

    fetch(`${url}/${selectedHero.id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedLikes)
    })
    // pessimistic rendering!!! because the front end is updated with server data
        .then(response => response.json())
        .then(character => {
            renderHeroSelection(character)
        })
})


// -------------- VILLAIN RENDER FUNCTIONS ----------------//

function renderVillain(characters) {
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

//populates the center area whenever a villain is clicked from the villain list
function renderVillainSelection(character) {
    villainTitle.textContent = character.name
    villainImage.src = character.image
    villainDescription.textContent = character.description
    villainWins.textContent = `Wins: ${character.wins}`
    villainLosses.textContent = `Losses: ${character.losses}`
    villainLikes.textContent = `Likes: ${character.likes}`

    selectedVillain = character
    renderVillainLikeButton(character)
}
// --------LIKE BUTTON SERVER UPDATE------//
villainLikeButton.addEventListener('click', (e) => {
    e.preventDefault()

    const updatedLikes = {
        likes: selectedVillain.likes + 1
    }

    fetch(`${url}/${selectedVillain.id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedLikes)
    })
        .then(response => response.json())
        .then(character => {
            renderVillainSelection(character)
        })
})



//----------fight button event listener------//
const fightButton = document.getElementById("fight")
fightButton.addEventListener("mouseover", (e) => {
    e.preventDefault()

    //have the fight button change when we hover the mouse over it
    renderMouseOver(e)
})

const hoverMotion = document.getElementById("hover")

// function sent to mouseover event listener
function renderMouseOver() {
    hoverMotion.src = "./assets/Component 1.png"
}

fightButton.addEventListener("mouseleave", (e) => {

    e.preventDefault
    hoverMotion.src = "./assets/oh comic button.png"
})

// ----------battle simulation-----------

//create an array to out of the characters selected by the user
let battleArray = [selectedHero, selectedVillain]

//event listener that will simulate a battle on "click" of fight button
fightButton.addEventListener("click", (e) => {
    e.preventDefault()
    
    //Simulation is simply a random number generated
    const randomIndex = Math.floor(Math.random() * battleArray.length)
    
    //if random number === 1, the hero wins. if random number === 0, the villain wins
    if (randomIndex === 1) {
        fightSimulationResultsWinner(selectedHero)
        fightSimulationResultsLoser(selectedVillain)
    } else {
        fightSimulationResultsWinner(selectedVillain)
        fightSimulationResultsLoser(selectedHero)
    }
});

// ---------UPDATE WINNER STATS---------------------


function fightSimulationResultsWinner(winner) {
    const updatedWin = {
        wins: winner.wins + 1
    }
    fetch(`${url}/${winner.id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedWin)
    }
    )
    .then(response => response.json())
    .then(winner => {
        //this approach is otimistic because it updates front end elements directly
        const updatedWins = winner.wins
        const winsElement = document.getElementById(`${winner.class}-wins`)
        winsElement.textContent = `Wins: ${updatedWins}`
    
        //--- failed pessimistic approach---//
        // if (loser === selectedHero) {
        //     renderHeroSelection(loser);
        // } else {
        //     renderVillainSelection(loser);
        // }
    
    })
    
    }

// ----------UPDATE LOSER STATS-------------------

function fightSimulationResultsLoser(loser) {
    const updatedLoser = {
        losses: loser.losses + 1
        }
    fetch(`${url}/${loser.id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedLoser)
        })
        .then(response => response.json())
        .then(loser => {
            //this approach is otimistic because it updates front end elements directly
            const updatedLosses = loser.losses
            const lossesElement = document.getElementById(`${loser.class}-losses`)
            lossesElement.textContent = `Losses: ${updatedLosses}`
                //--- failed pessimistic approach---//
                // if (loser === selectedHero) {
                //     renderHeroSelection(loser);
                // } else {
                //     renderVillainSelection(loser);
                // }
        })
}