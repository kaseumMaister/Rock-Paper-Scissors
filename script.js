function play5Rounds () {
    for (i = 1; i <= 5; i++) {
        let round = playRound();
        console.log(round);
    }
    
    function playRound () {
        let pcPick = getComputerAnswer();
        let playerPick = prompt(`Choose among: 'Rock', 'Paper', and 'Scissors' `);
        let result = '';

        if (pcPick === playerPick) {
            result = "That's a tie, Fellas!!"
        } else if (pcPick === "Rock" && playerPick === "Scissors" ||
        pcPick === "Paper" && playerPick === "Rock"  ||
        pcPick === "Scissors" && playerPick === "Paper") {
            result = "PC Wins"
        } else {
            result = "Player wins"
        }
         return `PC:${pcPick} x ${playerPick} :Player Round score is:  ${result}`;


        function getComputerAnswer () {
            let number = Math.floor(Math.random() *10) + 1;
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
    }
}

play5Rounds();