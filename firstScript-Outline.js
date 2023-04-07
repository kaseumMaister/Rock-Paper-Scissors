function getComputerChoice () {
    let pcNumber = Math.floor(Math.random() * 10) + 1;
    let pcPick = '';
    if (pcNumber % 3 === 0) {
        pcPick = "Scissors";
    } else if(pcNumber % 2 === 0) {
        pcPick = "Paper";
    } else {
        pcPick = "Rock";
    }
    return pcPick;
}

let pcPick = getComputerChoice();
let playerPick = "Rock";
function playFiveRounds () {

    for (i = 0; i <= 5; i++) {
        let round = getComputerChoice();
        console.log(round);
        return playRound(round, playerPick);
    }
function playRound (pcPick, playerPick) {
    let roundOutput = '';
    if (pcPick === playerPick) {
        roundOutput = "That's a tie";
    } else if (pcPick === "Rock" && playerPick === "Scissors" || pcPick === "Scissors" &&
        playerPick === "Paper" || pcPick === "Paper" && playerPick === "Rock") {
        roundOutput = "PC Won"
    } else {
        roundOutput = "Player Won"
    }
    return roundOutput;
}
}
console.log("PC Pick: " + pcPick);
console.log("Player Pick: " + playerPick)
console.log(playFiveRounds());
