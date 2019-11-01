

arrNumbers = [];
function beepBoop(userInput) {

for (i = 0; i < userInput; i++) {
  arrNumbers.push(i);
};

arrNumbers.forEach(function(){
 if(userInput === 3){
  arrNumbers.push("Beep!");
  console.log(arrNumbers);
} else if(userInput === 2){
  arrNumbers.push("Boop!");
} else if (userInput === 1)
  arrNumbers.push("I'm sorry, Dave. I'm afraid I can't do that.");
});
}




// User Interface logic
$(document).ready(function() {
  $("#userForm").submit(function(event) {
    event.preventDefault();
    var userInput = parseInt($("#userInput").val());
    var results = beepBoop(userInput);
  });
});
