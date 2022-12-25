let firstCard = 3
let secondCard = 20

let sum = firstCard+secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

function startGame(){
    cardsEl.textContent = "cards: "+firstCard+" "+secondCard
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


