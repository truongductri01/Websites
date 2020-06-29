let num0, num1, operator, answer;
operator = '+';
function generateRandomQuestion(){
  num0 = Math.floor(Math.random() * 10);
  num1 = Math.floor(Math.random() * 10);
  switch (operator) {
    case "+":
      answer = num0 + num1;
      break;
    case "-":
      answer = num0 - num1;
      break;
    case "x":
      answer = num0 * num1;
      break;
    case "/":
      while (num1 == 0) {
        num1 = Math.floor(Math.random() * 10);
      }
      answer = num0 / num1;
      break;
  }
  document.getElementById('num-0').textContent = num0;
  document.getElementById('num-1').textContent = num1;
  console.log(num0);
  console.log(num1);
  console.log(answer);
}
generateRandomQuestion();


function checkAnswer(){
  let op = document.getElementById('operator').textContent;
  let string = document.getElementById('answer-input').value;  // get the value of the input
  return string == answer;
}


function btn(){
  console.log("Button is clicked"); // Check if the button is clicked and function runs.
  if(checkAnswer()){
    document.getElementById('display').style.color = 'green';
    document.getElementById('display').textContent = `${answer} is the correct answer. Congratulation!`;
    // document.querySelector('form').style.display = 'none';
    document.getElementById("answer-form").style.display = 'none';

  }else{
    document.getElementById('display').style.color = 'red';
    document.getElementById('display').textContent = "You may have enter the wrong format or the wrong answer!";
  }
  // document.getElementById('answer').value = "";
}


// Change the operator based on user choice
function applyChange(){
  generateRandomQuestion();
  document.getElementById('operator').textContent = operator;
  document.getElementById('display').textContent = "";
}
function addition(){
  operator = "+";
  applyChange();
  document.querySelector('.container').style.boxShadow = '10px 15px #B22222';
}
function substraction(){
  operator = "-";
  applyChange();
  document.querySelector('.container').style.boxShadow = '10px 15px #FFD700';
}
function multiplication(){
  operator = "x";
  applyChange();
  document.querySelector('.container').style.boxShadow = '10px 15px #7CFC00';

}
function division(){
  operator = "/";
  applyChange();
  document.querySelector('.container').style.boxShadow = '10px 15px #1E90FF';
}

// Reset the game:
function reset(){
  applyChange();
  // document.querySelector('form').style.diplay = 'block';
  document.getElementById("answer-form").style.display = 'block';
  document.getElementById('answer-input').value = '';
}

// Change the difficulty: 1 digits - 2 digits ...

// Add time countdown. -> end time, hide question. User input in 5 more seconds or will lose the point.

// Create a welcome page: simple math vs. find solutions
