function getMoveName(argMoveId) {
	if(argMoveId === 1){
	  return 'kamień';
	} else if(argMoveId === 2) {
		return 'papier';
	} else if(argMoveId === 3) {
		return 'nożyce';
	} else {	  
	  return 'nieznany ruch';
	}
}
  
function displayResult(argComputerMove, argPlayerMove) {
	console.log('moves:', argComputerMove, argPlayerMove);
	if(argComputerMove === 'kamień' && argPlayerMove === 'papier') {		
		return 'Ty wygrywasz'
	} else if(argComputerMove === 'papier' && argPlayerMove === 'nożyce') {		
		return 'Ty wygrywasz'
	} else if(argComputerMove === 'nożyce' && argPlayerMove === 'kamień') {		
		return 'Ty wygrywasz'
	} else if(argPlayerMove !== 'kamień' && argPlayerMove !== 'papier' && argPlayerMove !== 'nożyce') {		
		return 'Wybierz jedną z cyfr: 1, 2 lub 3!'
	}  else if(argComputerMove === argPlayerMove) {		
		return 'Mamy remis'
	} else {
		return 'Przegrywasz'
	}
}

function printMessage(msg) {
	var div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages() {
	document.getElementById('messages').innerHTML = '';
}

let randomNumber = Math.floor(Math.random()* 3 + 1); 

let computerMove = getMoveName(randomNumber);

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

let playerMove = getMoveName(playerInput);


printMessage('Mój ruch to: ' + computerMove);

printMessage('Twój ruch to: ' + playerMove);

printMessage(displayResult(computerMove, playerMove));
