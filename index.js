// function getComputerChoice
// return randomly rock, paper or scissors
// user Math.randon
// not necessary with array
// ----> test in browser!
function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3)
    if (randomNumber === 0) {
        return "rock"
    } else if (randomNumber === 1) {
        return "paper"
    } else {
        return "scissors"
    };
}


// function getHumanChoice
// return one of valid choices depending on input
// user prompt for input
// -----> test by using console.log
function getHumanChoice() {
    let humanInput = prompt("Rock, paper or scissors?");
    if (humanInput.toLowerCase() === "rock") {
        return "rock"
    } else if (humanInput.toLowerCase() === "paper") {
        return "paper"
    } else if (humanInput.toLowerCase() === "scissors") {
        return "scissors"
    }
}


// create variables humanScore and computerScore (global)
// initialize with 0
let humanScore = 0;
let computerScore = 0;

// function playRound
// parameters of frunction: humanChoice and computerChoice
// humanChoice: case-insensitive
// playRound should output text depending on winner
// update score variables
function playRound(humanChoice, computerChoice) {
    let winnerMessage = "";
    if ((humanChoice === "rock" && computerChoice === "scissors") || (humanChoice === "paper" && computerChoice === "rock") || (humanChoice === "scissors" && computerChoice === "paper")) {
        winnerMessage = "human won!"
        humanScore += 1
    } else if ((humanChoice === "rock" && computerChoice === "paper") || (humanChoice === "paper" && computerChoice === "scissors") || (humanChoice === "scissors" && computerChoice === "rock")) {
        winnerMessage = "computer won!"
        computerScore += 1
    } else if ((humanChoice === "rock" && computerChoice === "rock") || (humanChoice === "paper" && computerChoice === "paper") || (humanChoice === "scissors" && computerChoice === "scissors")) {
        winnerMessage = "It's a tie!"
    }
    return winnerMessage;
}


// function playGame
// move playRound to declared inside playGame
// play 5 rounds by calling playRound 5 times
function playGame() {
    let computerChoice = getComputerChoice();
    let humanChoice = getHumanChoice();
    let msg = playRound(humanChoice, computerChoice);

    console.log(computerChoice);
    console.log(humanChoice);
    console.log(msg);
    console.log(`Computer chose: ${computerChoice}, you chose: ${humanChoice}. That means that ${msg}`)
    console.log(`Your points: ${humanScore}, computer points: ${computerScore}.`)
}

playGame();
playGame();
playGame();
playGame();
playGame();
