
function beepboop(userInput){

var inputArray = [];
for (i = 0; i < userInput; i++) {
    inputArray.push(i);
  var inputString = inputString.push(inputArray);

 if(inputString[i].includes('3')){
  inputString[i].push("I'm sorry, Dave. I'm afraid I can't do that.");
  console.log(inputString);
} else if(userInput === 2){
  inputString[i].push(i,"Boop!");
  console.log(inputString);
} else if (userInput === 3) {
  inputString[i].push("I'm sorry, Dave. I'm afraid I can't do that.");
  console.log(inputString);
};
};
};


// User Interface logic
$(document).ready(function() {
  $("#userForm").submit(function(event) {
    event.preventDefault();
    var userInput = parseInt($("#userInput").val());
    var results = beepboop(userInput);
  });
});


//
// inputNumbers = sounds.split("");
// sounds = [];
// function beepBoop(userInput) {
//
// for (i = 0; i < userInput; i++) {
//   sounds.push(i);
//   console.log(sounds);
// }
//
// // inputNumbers.forEach(function(){
//  if(userInput === 1) {
//   sounds.push("Beep!");
//   console.log(sounds);
// } else if(userInput === 2){
//   sounds.push(i,"Boop!");
//   console.log(sounds);
// } else if (userInput === 3) {
//   sounds.push("I'm sorry, Dave. I'm afraid I can't do that.");
//   console.log(sounds);
// } else {
//   return inputNumbers
//   console.log(inputNumbers);
// }
// }
//
// k= tostring(x)
