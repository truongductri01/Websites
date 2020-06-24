// Challenge 5: BlackJack
let blackjackGame = {
  'you': {'scoreSpan': '#your-blackjack-result', "div": "#your-box", "score": 0},
  'dealer': {'scoreSpan': '#dealer-blackjack-result', "div": "#dealer-box", "score": 0},
  'cards': ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"],
  'cardsMap': {"2": 2, "3": 3, "4": 4, "5": 5, "6": 6, "7": 7, "8": 8,
              "9": 9, "10": 10, "K": 10, "J": 10, "Q": 10, "A": [1, 11]}
};

const YOU = blackjackGame["you"]
const DEALER = blackjackGame["dealer"]

const hitSound = new Audio("hitSound.mp3");


document.querySelector("#blackjack-hit-button").addEventListener("click", blackjackHit);
document.querySelector("#blackjack-deal-button").addEventListener("click", blackjackDeal);
document.querySelector("#blackjack-stand-button").addEventListener("click", dealerLogic);
// Syntax: querySelector("#[id of the button]").addEventListener("[action]", function)

function returnRandomCard(){
  let randomIndex = Math.floor(Math.random()*13);
  return blackjackGame["cards"][randomIndex];
}
function showCard(player){
  if (player['score']<=21) {
    let cardImage = document.createElement("img");
    card = returnRandomCard();

    cardImage.src = card + ".png";
    cardImage.style.width = "25%";
    document.querySelector(player['div']).appendChild(cardImage);
    updateScore(card, player);
    showScore(player);
    hitSound.play();
  }
}
function updateScore(card, activePlayer){
  let scoreOfCard = 0;
  // if adding 11 keeps me below 21, add 11. else, add 1
  if(card == "A"){
    if(activePlayer["score"] + 11 <= 21){
      scoreOfCard = 11;
    }
    else{
      scoreOfCard = 1;
    }
  }
  else{
    scoreOfCard = blackjackGame['cardsMap'][card]
  }
  activePlayer["score"] += scoreOfCard;
}
function showScore(activePlayer){
  if (activePlayer['score'] > 21) {
    document.querySelector(activePlayer['scoreSpan']).textContent = 'BUST!';
    document.querySelector(activePlayer['scoreSpan']).style.color = 'red';
  }
  else{
    document.querySelector(activePlayer['scoreSpan']).textContent = activePlayer['score'];
  }
}

function blackjackHit(){
  showCard(YOU);
}
function blackjackDeal(){
  // reset the game;
  let yourImages = document.querySelector("#your-box").querySelectorAll("img");
  let dealerImages = document.querySelector("#dealer-box").querySelectorAll("img");

  for (var i = 0; i < yourImages.length; i++) {
    yourImages[i].remove();
  }
  for (var i = 0; i < dealerImages.length; i++) {
    dealerImages[i].remove();
  }

  winner = computeWinner();
  showResult(winner);
  updateTable(winner);

  YOU['score'] = 0;
  DEALER['score'] = 0;

  document.querySelector(YOU['scoreSpan']).textContent = 0;
  document.querySelector(YOU['scoreSpan']).style.color = 'white';

  document.querySelector(DEALER['scoreSpan']).textContent = 0;
  document.querySelector(DEALER['scoreSpan']).style.color = 'white';

  hitSound.play();
}

function dealerLogic(){
  // automatically decide whether to draw card or not.
  showCard(DEALER);
}

function computeWinner(){
  let winner;
  if (YOU['score'] <= 21){
    if (YOU['score'] > DEALER['score'] || DEALER['score'] > 21){
      winner = YOU;
    }
    else if (YOU['score'] < DEALER['score']) {
      winner = DEALER;
    }
  }
  else {
    if (DEALER['score'] <= 21) {
      winner = DEALER;
    }
  }
  return winner

}

function showResult(winner){
  let message, messageColor;
  if (winner == YOU) {
    message = "You won!";
    messageColor = "green";
  }
  else if (winner == DEALER) {
    message = "You lost!"
    messageColor = "red";
  }
  else {
    message = "Draw!";
    messageColor = "blue";
  }

  document.querySelector("#blackjack-result").textContent = message;
  document.querySelector("#blackjack-result").style.color = messageColor;
}

function updateTable(winner){
  // parseInt to convert string to integer.
  // parseFloat to convert string to float.
  if (winner == YOU) {
    wins = parseInt(document.getElementById("wins").textContent) + 1;
    document.getElementById("wins").textContent = wins;
  }
  else if (winner == DEALER) {
    losses = parseInt(document.getElementById("losses").textContent) + 1;
    document.getElementById("losses").textContent = losses;
  }
  else{
    draws = parseInt(document.getElementById("draws").textContent) + 1;
    document.getElementById("draws").textContent = draws;
  }
}
