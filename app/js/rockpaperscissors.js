var playerWins = 0;
var computerWins = 0;
function RPS() {
	var playerMove = prompt("Do you choose rock, paper, or scissors?");
	var computerMove = Math.random();
	if(computerMove < 0.34) {
		computerMove = "rock" ;
	} else if (computerMove <=0.67) {
		computerMove = "paper";
	} else {
		computerMove = "scissors";
	} console.log("Computer: " +computerMove);
	var getWinner = function(playerMove, computerMove) {
		var winner;
		if(playerMove === computerMove) {
			winner = "tie";
			console.log("It's a tie! The score is " + playerWins + " to " + computerWins + ".");
		} else if (playerMove == "rock") {
			if(computerMove == "scissors") {
				winner = "player";
				playerWins = playerWins + 1;
				console.log(winner + " won! The score is " + playerWins + " to " + computerWins + ".");
			} else {
				winner = "computer";
				computerWins = computerWins + 1;
				console.log(winner + " won! The score is " + playerWins + " to " + computerWins + ".");
			}
		} else if (playerMove == "paper") {
			if(computerMove =="rock") {
				winner = "player";
				playerWins = playerWins + 1;
				console.log(winner + " won! The score is " + playerWins + " to " + computerWins + ".");
			} else {
				winner = "computer";
				computerWins = computerWins + 1;
				console.log(winner + " won! The score is " + playerWins + " to " + computerWins + ".");
			}
		} else if (playerMove == "scissors:") {
			if(computerMove == "paper") {
				winner = "player";
				playerWins = playerWins + 1;
				console.log(winner + " won! The score is " + playerWins + " to " + computerWins + ".");
			} else {
				winner = "computer";
				computerWins = computerWins + 1;
				console.log(winner + " won! The score is " + playerWins + " to " + computerWins + ".");
			}
		}
	};}
	do {
      RPS();
    } while (playerWins <5 && computerWins <5);