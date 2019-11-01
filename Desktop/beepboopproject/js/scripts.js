
inputNumbers = [];
sounds = [];
function beepBoop(userInput) {

for (i = 0; i <= userInput; i++) {
  arrNumbers.push(i);
};

// inputNumbers.forEach(function(){
 if(userInput.includes(1)) {
  sounds.push(i,"Beep!");
  console.log(arrNumbers);
} else if(i === 2){
  sounds.push(i,"Boop!");
} else if (i === 3) {
  arrNumbers.push("I'm sorry, Dave. I'm afraid I can't do that.");
  console.log(arrNumbers);
} else {
}
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
