let numberOfWin = 0;
let numberOfLost = 0;

for (let i = 1; i <= 5; i++) {
  let userNumber = parseFloat(prompt("Enter The Numbere 1 to 5"));
  let guessNumber = Math.floor(Math.random() * 5) + 1;
  if (userNumber == guessNumber) {
    console.log("You have won!!!");
    numberOfWin++;
  } else {
    console.log("You have lost. The guess number is " + guessNumber);
    numberOfLost++;
  }
}

document.write("Number of win " + numberOfWin + "<br/>");
document.write("Number of lost " + numberOfLost);
