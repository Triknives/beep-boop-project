
inputNumbers = [];
sounds = [];
function beepBoop(userInput) {

for (i = 0; i < userInput; i++) {
  sounds.push(i);
}

// inputNumbers.forEach(function(){
 if(userInput === 1) {
  sounds.push("Beep!");
  console.log(sounds);
} else if(userInput === 2){
  sounds.push(i,"Boop!");
  console.log(sounds);
} else if (userInput === 3) {
  sounds.push("I'm sorry, Dave. I'm afraid I can't do that.");
  console.log(sounds);
} else {
}
}





// User Interface logic
$(document).ready(function() {
  $("#userForm").submit(function(event) {
    event.preventDefault();
    var userInput = parseInt($("#userInput").val());
    var results = beepBoop(userInput);
  });
});
