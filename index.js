let firstCard = getRandomCard()
let secondCard = getRandomCard()
let cards = [firstCard, secondCard]
let sum = firstCard+secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

function getRandomCard(){
    return Math.floor(Math.random() * (11 - 2 + 1) + 2)
}

function startGame(){
    renderGame()
}
function renderGame(){
    cardsEl.textContent = "Cards: "
    for(let index = 0; index < cards.length; index++){
        cardsEl.textContent += cards[index] + " "
    }
    
    sumEl.textContent = "sum: "+sum
    if(sum <= 20){
        message = "Do you want to draw a new card?"
    }else if(sum === 21){
        message = "You've got Blackjack!"
        hasBlackJack = true
    }else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}

function newCard(){
    let card = getRandomCard()
    cards.push(card)
    sum += card
    renderGame()
}


