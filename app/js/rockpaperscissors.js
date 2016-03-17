var playerWins = 0;
var computerWins = 0;
	var playerMove = prompt("Do you choose rock, paper, or scissors?");
	var computerMove = Math.random();
	if(computerMove < 0.34) {
		computerMove = "rock" ;
	} else if (computerMove <=0.67) {
		computerMove = "paper";
	} else {
		computerMove = "scissors";
	} console.log("Computer: " +computerMove);
	var getWinner = function(choice1, choice2) {
		var winner;
		if(choice1 === choice2) {
			winner = "tie";
			console.log("It's a tie! The score is " + playerWins + " to " + computerWins + ".");
		} else if (choice1 == "rock") {
			if(choice2 == "scissors") {
				winner = "player";
				playerWins = playerWins + 1;
				console.log(winner + " won! The score is " + playerWins + " to " + computerWins + ".");
			} else {
				winner = "computer";
				computerWins = computerWins + 1;
				console.log(winner + " won! The score is " + playerWins + " to " + computerWins + ".");
			}
		} else if (choice1 == "paper") {
			if(choice2 =="rock") {
				winner = "player";
				playerWins = playerWins + 1;
				console.log(winner + " won! The score is " + playerWins + " to " + computerWins + ".");
			} else {
				winner = "computer";
				computerWins = computerWins + 1;
				console.log(winner + " won! The score is " + playerWins + " to " + computerWins + ".");
			}
		} else if (choice1 == "scissors:") {
			if(choice2 == "paper") {
				winner = "player";
				playerWins = playerWins + 1;
				console.log(winner + " won! The score is " + playerWins + " to " + computerWins + ".");
			} else {
				winner = "computer";
				computerWins = computerWins + 1;
				console.log(winner + " won! The score is " + playerWins + " to " + computerWins + ".");
			}
		}
	};
	do {
      getWinner(playerMove, computerMove);
    } while (playerWins <5 || computerWins <5);