
arrNumbers = [];

for (i = 0; i < 101; i++) {
    arrNumbers.push(i);
   if(arrNumbers.includes(1) === true);{
    arrNumbers.push("Beep!");
  } else if(arrNumbers.includes(2) === true);{
    arrNumbers.push("Boop!");
  } else if(arrNumbers.includes(2) === true);{
    arrNumbers.push("I'm sorry, Dave. I'm afraid I can't do that.");
  }  
}
console.log(arrNumbers);





//
// // User Interface logic
// $(document).ready(function() {
//   $("#userInput").submit(function(event) {
//     event.preventDefault();
//     var userInput = parseInt($("#userInput").val());
//   });
// });
