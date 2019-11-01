

arrNumbers = [];
function beepBoop(userInput) {


for (i = 0; i <= userInput; i++) {
  arrNumbers.push(i);
  console.log(arrNumbers);
 if(arrNumbers.includes(2) === true){
  arrNumbers.push("Beep!");
} else if(arrNumbers.includes(2) === true){
  arrNumbers.push("Boop!");
} else if (arrNumbers.includes(3) === true)
  arrNumbers.push("I'm sorry, Dave. I'm afraid I can't do that.");
}
};





// User Interface logic
$(document).ready(function() {
  $("#userForm").submit(function(event) {
    event.preventDefault();
    var userInput = parseInt($("#userInput").val());
    var results = beepBoop(userInput);
  });
});
