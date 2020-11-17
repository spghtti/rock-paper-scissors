let computerWins = 0;
let playerWins = 0;
let computerSelection;

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {   //Turns buttons into player choice and plays against computer's choice
        
    button.addEventListener('click', () => {
        let computerSelection = computerPlay();
        playRound(event.target.id, computerSelection);
        
        document.getElementById("tally").textContent=`Human: ${playerWins} | Computer: ${computerWins}`
   
        document.getElementById("play").textContent=`You picked: ${event.target.id} | Computer picked: ${computerSelection}`

        if (computerWins == 5) {    // victory condition if computer wins
            const victoryMsg = document.querySelector('#victory');
            const winner = document.createElement('div');
            winner.classList.add('winner');
            winner.textContent = 'Computer wins :('
            victoryMsg.appendChild(winner);
            setTimeout(location.reload, 3000);
            setTimeout(function() {
                location.reload();
            }, 2000);
        }
        
        if (playerWins == 5) {      // victory condition if player wins
            const victoryMsg = document.querySelector('#victory');
            const winner = document.createElement('div');
            winner.classList.add('winner');
            winner.textContent = 'YOU WIN :)'
            victoryMsg.appendChild(winner);
            setTimeout(function() {
                location.reload();
            }, 2000);
        }
        
        
        
        
    });
});

function computerPlay() {   // Randomized computer choice
        let computerChoices = ["rock", "paper", "scissors"];
        let random = Math.floor(Math.random() * computerChoices.length);
        return computerChoices[random];
    }

function playRound(playerSelection, computerSelection) {  // Defining a single round of play
    if (playerSelection == "rock" && computerSelection == "paper") {
        console.log("You picked " + playerSelection);
        console.log("Computer picked " + computerSelection);
        console.log("Computer point");
        return ++computerWins;
        
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        console.log("You picked " + playerSelection);
        console.log("Computer picked " + computerSelection);
        console.log("Computer point");
        return ++computerWins;
        
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        console.log("You picked " + playerSelection);
        console.log("Computer picked " + computerSelection);
        console.log("Computer point");
        return ++computerWins;
        
    } else if (playerSelection == computerSelection) {
        console.log("You picked " + playerSelection);
        console.log("Computer picked " + computerSelection);
        console.log("Tie");

    } else {
        console.log("You picked " + playerSelection);
        console.log("Computer picked " + computerSelection);
        console.log("Your point");
        return ++playerWins;
        }
}


