{
	
	let playGame = function(playerInput){
		
		clearMessages()	
		
		const getMoveName = function(Move){
			if(Move == 1){
			return 'kamień';
			} else if(Move == 2){
				return 'papier';
			} else if(Move == 3){
				return 'nożyce';
			} else {	  
			return 'nieznany ruch';
			}
		}
		
		const displayResult = function(ComputerMove, PlayerMove){
			console.log('moves:', ComputerMove, PlayerMove);
			if(ComputerMove == 'kamień' && PlayerMove == 'papier'){		
				return 'Ty wygrywasz';
			} else if(ComputerMove == 'papier' && PlayerMove == 'nożyce'){		
				return 'Ty wygrywasz';
			} else if(ComputerMove == 'nożyce' && PlayerMove == 'kamień'){		
				return 'Ty wygrywasz';
			} else if(PlayerMove != 'kamień' && PlayerMove != 'papier' && PlayerMove != 'nożyce'){		
				return 'Wybierz jedną z cyfr: 1, 2 lub 3!';
			}  else if(ComputerMove == PlayerMove){		
				return 'Mamy remis';
			} else {
				return 'Przegrywasz';
			}
		}

		const printMessage = function(msg){
			var div = document.createElement('div');
			div.innerHTML = msg;
			document.getElementById('messages').appendChild(div);
		}

		function clearMessages(){
			document.getElementById('messages').innerHTML = '';
		}
		
		const randomNumber = Math.floor(Math.random()* 3 + 1); 
		
		const computerPlay = getMoveName(randomNumber),
		      playerPlay = getMoveName(playerInput);
		
		
		printMessage('Mój ruch to: ' + computerPlay);

		printMessage('Twój ruch to: ' + playerPlay);

		printMessage(displayResult(computerPlay, playerPlay));
	}
		const stone = document.getElementById('play-rock'),
			  paper = document.getElementById('play-paper'),
		      scissors = document.getElementById('play-scissors');

	stone.addEventListener('click', function(){
		playGame(1);
	});
	paper.addEventListener('click', function(){
		playGame(2);
	});
	scissors.addEventListener('click', function(){
		playGame(3);
	});
}
