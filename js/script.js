
function game() {
	let playerScore = 0;
	let computerScore = 0;
	let moves = 0;

	function playGame() {
		let rockBtn = document.querySelector('.rock');
		let paperBtn = document.querySelector('.paper');
		let scissorBtn = document.querySelector('.scissor');
		let playerOptions = [rockBtn,paperBtn,scissorBtn];
		let computerOptions = ['rock','paper','scissors']
		
		// Function to start playing game
		playerOptions.forEach(option => {
			option.addEventListener('click',function(){

				let movesLeft = document.querySelector('.movesleft');
				moves++;
				movesLeft.innerText = `Moves Left: ${10-moves}`;
				

				let choiceNumber = Math.floor(Math.random()*3);
				let computerChoice = computerOptions[choiceNumber];

				// Function to check who wins
				winner(this.innerText,computerChoice)
				
				// Calling gameOver function after 10 moves
				if(moves == 10){
					gameOver(playerOptions,movesLeft);
				}
			})
		})
		
	}

	// Function to decide winner
	let winner = (player,computer) => {
		let result = document.querySelector('.result');
		let playerScoreBoard = document.querySelector('.p-count');
		let computerScoreBoard = document.querySelector('.c-count');
		player = player.toLowerCase();
		computer = computer.toLowerCase();
		if(player === computer){
			result.textContent = 'Tie'
            result.style.color = 'grey'
		}
		else if(player == 'rock'){
			if(computer == 'paper'){
				result.textContent = 'Computer Won';
                result.style.color = "red";
				computerScore++;
				computerScoreBoard.textContent = computerScore;

			}else{
				result.textContent = 'Player Won'
                result.style.color = "green";
				playerScore++;
				playerScoreBoard.textContent = playerScore;
			}
		}
		else if(player == 'scissors'){
			if(computer == 'rock'){
				result.textContent = 'Computer Won';
                result.style.color = "red";
				computerScore++;
				computerScoreBoard.textContent = computerScore;
			}else{
				result.textContent = 'Player Won';
                result.style.color = "green";
				playerScore++;
				playerScoreBoard.textContent = playerScore;
			}
		}
		else if(player == 'paper'){
			if(computer == 'scissors'){
				result.textContent = 'Computer Won';
                result.style.color = "red";
				computerScore++;
				computerScoreBoard.textContent = computerScore;
			}else{
				result.textContent = 'Player Won';
                result.style.color = "green";
				playerScore++;
				playerScoreBoard.textContent = playerScore;
			}
		}
	}

	// Function to run when game is over
	function gameOver(playerOptions,movesLeft) {

		let chooseMove = document.querySelector('.move');
		let result = document.querySelector('.result');
		let reloadBtn = document.querySelector('.reload');
        

		playerOptions.forEach(option => {
			option.style.display = 'none';
		})

	
		chooseMove.innerText = 'Game Over!!'
		movesLeft.style.display = 'none';

		if(playerScore > computerScore){
			result.style.fontSize = '2rem';
			result.innerText = 'You Won The Game'
			result.style.color = '#308D46';
		}
		else if(playerScore < computerScore){
			result.style.fontSize = '2rem';
			result.innerText = 'You Lost The Game';
			result.style.color = 'red';
		}
		else{
			result.style.fontSize = '2rem';
			result.innerText = 'Tie';
			result.style.color = 'grey'
		}
		reloadBtn.innerText = 'Restart';
        reloadBtn.style.visibility = "visible";
		reloadBtn.addEventListener('click',() => {
			window.location.reload();
		})
	}

	playGame();
	
}

game();





  
