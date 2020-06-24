function rpsGame(yourChoice){
  console.log(yourChoice);
  // console.log(yourChoice.src);
  var humanChoice, botChoice;
  humanChoice = yourChoice.id;
  botChoice = numberToChoice(randToRpsInt());
  console.log(botChoice);
  results = decideWinner(humanChoice, botChoice);
  console.log(results);
  //   return "Win, Draw, or Lost plus the color of it.";
  //   //or: return {"messages": "You win", "color": "green"}
  // }

  rpsFrontEnd(humanChoice, botChoice, results);
}

function randToRpsInt(){
  return Math.floor(Math.random()*3); // the random will return number in (0, 3)
  // -> with Math.floor number will only be 0, 1, 2
}

function numberToChoice(number){
  return ['rock', 'paper', 'scissors'][number];
}

function decideWinner(humanChoice, botChoice){
  var rpsDatabase = {
    'rock': {'scissors':1, 'rock': 0.5, 'paper':0},
    'scissors': {'paper':1, 'scissors':0.5, 'rock':0},
    'paper': {'rock':1, 'paper':0.5, 'scissors':0}
  }
  var humanScore = rpsDatabase[humanChoice][botChoice];
  var botScore = 1 - humanScore;
  if (humanScore == 0) {
    return {'message': 'You Lost', 'color': 'red'};
  }
  else if (humanScore == 0.5) {
    return {'message': 'Draw', 'color': 'yellow'};
  }
  else {
    return {'message': 'You Win', 'color': 'green'};
  }
}

function rpsFrontEnd(humanChoice, botChoice, finalMessage){
  var imagesDatabase = {
    'rock': document.getElementById('rock').src,
    'paper': document.getElementById('paper').src,
    'scissors': document.getElementById('scissors').src
  }

  document.getElementById('rock').remove();
  document.getElementById('paper').remove();
  document.getElementById('scissors').remove();

  var humanDiv = document.createElement('div');
  var botDiv = document.createElement('div');
  var messageDiv = document.createElement('div');

  // TODO: Set attributes for each div.
  humanDiv.innerHTML = "<img src='" + imagesDatabase[humanChoice]+"' width='25%' style='box-shadow: 0px 5px 25px rgba(0, 0, 255, 0.5)'>";
  messageDiv.innerHTML = "<h1 style='color: " + finalMessage['color'] + "; font-size: 60px; padding: 10px'>" + finalMessage['message'] + "</h1>";
  botDiv.innerHTML = "<img src='" + imagesDatabase[botChoice]+"' width='25%' style='box-shadow: 0px 5px 25px rgba(255, 0, 0, 0.5)'>";

  document.getElementById('flex-box-rps-div').appendChild(humanDiv);
  document.getElementById('flex-box-rps-div').appendChild(messageDiv);
  document.getElementById('flex-box-rps-div').appendChild(botDiv);



}
