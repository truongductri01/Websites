var allButtons = document.getElementsByTagName('button');  // get all button elements
// this allButtons is not a list
console.log(allButtons);
console.log(typeof allButtons);

var copyAllButtons = [];
for (let i = 0; i < allButtons.length; i++) {
  copyAllButtons.push(allButtons[i].classList[1]);  // Just access the color of each button.
}
console.log(copyAllButtons);
// copyAllButtons.shift();



function buttonColorChange(buttonThingy){
    console.log(buttonThingy.value);
    if (buttonThingy.value == "red") {
      buttonsRed();
    }
    else if (buttonThingy.value == "green") {
      buttonsGreen();
    }
    else if (buttonThingy.value == "reset") {
      buttonsColorReset();
    }
    else if (buttonThingy.value == "random") {
      randomColors();
    }
}

function buttonsRed(){
  for (let i = 0; i < allButtons.length; i++) {
    let color = allButtons[i].classList[1]; // get the color of each button.
    allButtons[i].classList.remove(color);
    allButtons[i].classList.add("btn-danger");
  }
}

function buttonsGreen(){
  for (let i = 0; i < allButtons.length; i++) {
    let color = allButtons[i].classList[1]; // get the color of each button.
    allButtons[i].classList.remove(color);
    allButtons[i].classList.add("btn-success");
  }
}

function buttonsColorReset(){
  for (let i = 0; i < allButtons.length; i++) {
    let color = allButtons[i].classList[1]; // get the color of each button.
    allButtons[i].classList.remove(color);
    allButtons[i].classList.add(copyAllButtons[i]); // reset the color back to each button based on their original order.
  }
}

function randomColors(){
  for (let i = 0; i < allButtons.length; i++) {
    let color = allButtons[i].classList[1]; // get the color of each button.
    allButtons[i].classList.remove(color);
    let random_index = Math.floor(Math.random()*4);
    let random_color = copyAllButtons[random_index];
    allButtons[i].classList.add(random_color); // reset the color back to each button based on their original order.
  }
}
