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
let humanScore1 = 0;
let computerScore1 = 0;
// hämta score



// function playRound
// parameters of frunction: humanChoice and computerChoice
// humanChoice: case-insensitive
// playRound should output text depending on winner
// update score variables
function playRound(humanChoice, computerChoice) {
    let winnerMessage = "";
    if ((humanChoice === "rock" && computerChoice === "scissors") || (humanChoice === "paper" && computerChoice === "rock") || (humanChoice === "scissors" && computerChoice === "paper")) {
        winnerMessage = "human won!"
        humanScore1 += 1
    } else if ((humanChoice === "rock" && computerChoice === "paper") || (humanChoice === "paper" && computerChoice === "scissors") || (humanChoice === "scissors" && computerChoice === "rock")) {
        winnerMessage = "computer won!"
        computerScore1 += 1
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

// UI
//skapa knappar med rätt värde
const buttons = document.querySelectorAll("button");

let player = document.getElementById("player");
let computer = document.getElementById("computer");

// hämta tomma fält för score
let humanScore = document.getElementById("human-score");
let computerScore = document.getElementById("computer-score");

let score1 = 0;
let score2 = 0;

humanScore.textContent = score1;
computerScore.textContent = score2;

//lägg till event till knapparna och anropa playRound
buttons.forEach((button)=> {
    button.addEventListener("click", () => {
        let computerChoice = getComputerChoice();
        let msg = playRound(button.id, computerChoice);

        if (msg === "human won!") {
            score1 += 1;
        } else if ( msg === "computer won!") {
            score2 += 1;
        } else {
            console.log("It's a tie.")
        }
        // console.log(button.id);
        // console.log(computerChoice);

        // console.log(score1)
        // console.log(score2);
        humanScore.textContent = score1;
        computerScore.textContent = score2;
        player.textContent = button.id;
        computer.textContent = computerChoice;
        let winners = "";
        if (score1 === 5) {
            winners = "You won!"
            let winnerstatement = document.getElementById("winners");
            winnerstatement.textContent = winners;
        } else if (score2 === 5) {
            winners = "Computer won!"
            let winnerstatement = document.getElementById("winners");
            winnerstatement.textContent = winners;
        } else if (score1 === 5 && score2 === 5) {
            winners = "It's a tie!"
            let winnerstatement = document.getElementById("winners");
            winnerstatement.textContent = winners;
        } 
    })
})
