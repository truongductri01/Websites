// alert("Hi, this is a challeng for you")
function ageInDays(){
  var birthYear = prompt("When were you born?");
  console.log(birthYear);
  var ageInDays = (2020 - birthYear) * 365;
  var h1 = document.createElement('h1');
  var textAnswer = document.createTextNode('You are ' + ageInDays + " days");
  h1.setAttribute('id', 'ageInDays');
  h1.appendChild(textAnswer);
  document.getElementById('flex-box-result').appendChild(h1);
}

function reset(){
  document.getElementById("ageInDays").remove();
  // remove () will remove the object with corresponding id if we do document...innerHTML
  //-> cannot run the ageInDays funtion on that object anymore
  // as it does not exist anymore
}

// or:
// function ageInDays(){
//   var birthYear = prompt("When were you born?")
//   console.log(birthYear);
//   var ageInDays = birthYear * 365;
//   document.getElementById("flex-box-result").innerHTML = "You are " + age + " days."
// }
// function reset(){
//   document.getElementById("flex-box-result").innerHTML = "";
// }
