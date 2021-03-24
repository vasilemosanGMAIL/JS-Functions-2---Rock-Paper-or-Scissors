const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (userInput === "rock") {
    return userInput;
  } else if (userInput === "paper") {
    return userInput;
  } else if (userInput === "scissors") {
    return userInput;
  } else {
    console.log("Invalid input");
  }
};

const getComputerChoice = () => {
  let randomNumber = Math.floor(Math.random() * 3);
  let computerChoice = "";
  if (randomNumber === 0) {
    computerChoice = "rock";
    return computerChoice;
  } else if (randomNumber === 1) {
    computerChoice = "paper";
    return computerChoice;
  } else if (randomNumber === 2) {
    computerChoice = "scissors";
    return computerChoice;
  }
};

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return console.log("Game was a tie");
    // validation if user chose rock
  } else if (userChoice === "rock") {
    if (computerChoice === "paper") return console.log("Computer won.");
    else if (computerChoice === "scissors") {
      return console.log("User won.");
    }
  } // validation if user chose paper
  else if (userChoice === "paper") {
    if (computerChoice === "scissors") return console.log("Computer won.");
    else if (computerChoice === "rock") {
      return console.log("User won.");
    }
  } // validation if user chose scissors
  else if (userChoice === "scissors") {
    if (computerChoice === "rock") return console.log("Computer won.");
    else if (computerChoice === "paper") {
      return console.log("User won.");
    }
  }
};

const playGame = () => {
  let userChoice = getUserChoice("rock");
  console.log(`This is the user choice: ${userChoice}`);
  let computerChoice = getComputerChoice();
  console.log(`This is the computer choice: ${computerChoice}`);
  determineWinner(userChoice, computerChoice);
};

//getUserChoice("RocK");
playGame();
//getComputerChoice();
//determineWinner("paper", "paper");
