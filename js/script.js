function playGame(playerInput){
	     clearMessages()

	function getMoveName(Move){
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
	
	function displayResult(ComputerMove, PlayerMove){
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

	function printMessage(msg){
		var div = document.createElement('div');
		div.innerHTML = msg;
		document.getElementById('messages').appendChild(div);
	}

	function clearMessages(){
		document.getElementById('messages').innerHTML = '';
	}

	let randomNumber = Math.floor(Math.random()* 3 + 1); 
	
	let computerPlay = getMoveName(randomNumber);
	
	let playerPlay = getMoveName(playerInput);

	
	console.log('Wylosowana liczba to: ' + randomNumber);
	console.log('Gracz wpisał: ' + playerInput);

	
	printMessage('Mój ruch to: ' + computerPlay);

	printMessage('Twój ruch to: ' + playerPlay);

	printMessage(displayResult(computerPlay, playerPlay));
}

document.getElementById('play-rock').addEventListener('click', function(){
	playGame(1);
});
document.getElementById('play-paper').addEventListener('click', function(){
	playGame(2);
});
document.getElementById('play-scissors').addEventListener('click', function(){
	playGame(3);
});
