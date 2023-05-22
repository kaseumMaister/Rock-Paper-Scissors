
    let rounds = 0;
        let playerScore = 0;
        let computerScore = 0;

        function playRound(playerChoice) {
            if (rounds >= 5) {
                determineWinner();
                return;
            }

            let pcPick = getComputerAnswer();
            let playerPick = playerChoice;
            let scoreBoard = document.querySelector("#scoreboard");
            let result = '';

            if (pcPick === playerPick) {
                result = "That's a tie, Fellas!!";
            } else if (
                (pcPick === "Rock" && playerPick === "Scissors") ||
                (pcPick === "Paper" && playerPick === "Rock") ||
                (pcPick === "Scissors" && playerPick === "Paper")
            ) {
                result = "Computer Wins";
                computerScore++;
            } else {
                result = "Player wins";
                playerScore++;
            }
            
            rounds++;
            scoreBoard.innerText += result + "\n";

            if (rounds >= 5) {
                determineWinner();
            }
        }

        function getComputerAnswer() {
            let number = Math.floor(Math.random() * 10) + 1;
            let pcPick = '';

            if (number % 3 === 0) {
                pcPick = "Scissors";
            } else if (number % 2 === 0) {
                pcPick = "Paper";
            } else {
                pcPick = "Rock";
            }
            return pcPick;
        }

        function determineWinner() {
            let scoreBoard = document.querySelector("#scoreboard");
            scoreBoard.innerText += "\n------ Game Over ------\n";
            scoreBoard.innerText += "Player Score: " + playerScore + "\n";
            scoreBoard.innerText += "Computer Score: " + computerScore + "\n";
            if (playerScore > computerScore) {
                scoreBoard.innerText += "Player Wins!";
            } else if (playerScore < computerScore) {
                scoreBoard.innerText += "Computer Wins!";
            } else {
                scoreBoard.innerText += "It's a tie!";
            }
        }