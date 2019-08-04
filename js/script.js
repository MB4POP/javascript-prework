function getMoveName(argMoveId){
	if(argMoveId == 1){
	  return 'kamień';
	} else if(argMoveId == 2){
		return 'papier';
	} else if(argMoveId == 3){
		return 'nożyce';
	} else {	  
	  return 'nieznany ruch';
	}
  }
  
function displayResult(argComputerMove, argPlayerMove){
	console.log('moves:', argComputerMove, argPlayerMove);
	if(argComputerMove == 'kamień' && argPlayerMove == 'papier'){		
		return 'Ty wygrywasz'
	} else if(argComputerMove == 'papier' && argPlayerMove == 'nożyce'){		
		return 'Ty wygrywasz'
	} else if(argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){		
		return 'Ty wygrywasz'
	} else if(argPlayerMove != 'kamień' && argPlayerMove != 'papier' && argPlayerMove != 'nożyce'){		
		return 'Wybierz jedną z cyfr: 1, 2 lub 3!'
	}  else if(argComputerMove == argPlayerMove){		
		return 'Mamy remis'
	} else {
		return 'Przegrywasz'
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

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = getMoveName(randomNumber);

/*
if(randomNumber == 1){
    computerMove = 'kamień';
} else if(randomNumber == 2){
	computerMove = 'papier';	
} else if(randomNumber == 3){
	computerMove = 'nożyce'
}
*/

printMessage('Mój ruch to: ' + computerMove);

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = getMoveName(playerInput);

/*
if(playerInput == '1'){
    playerMove = 'kamień';
} else if(playerInput == '2'){
	playerMove = 'papier';
} else if(playerInput == '3'){
	playerMove = 'nożyce'
}*/


printMessage('Twój ruch to: ' + playerMove);

/*
if( computerMove == 'kamień' && playerMove == 'papier'){
	printMessage('Ty wygrywasz!');
  } else if ( computerMove == 'kamień' && playerMove == 'nożyce'){
	printMessage('Przegrywasz!');
  } else if( computerMove == 'kamień' && playerMove == 'kamień'){
	printMessage('Mamy remis!');	
  } else if ( computerMove == 'papier' && playerMove == 'nożyce'){
	printMessage('Ty wygrywasz!');
  } else if( computerMove == 'papier' && playerMove == 'kamień'){
	printMessage('Przegrywasz!');
  } else if ( computerMove == 'papier' && playerMove == 'papier'){
	printMessage('Mamy remis!');
  } else if( computerMove == 'nożyce' && playerMove == 'kamień'){
	printMessage('Ty wygrywasz!');
  } else if ( computerMove == 'nożyce' && playerMove == 'nożyce'){
	printMessage('Mamy remis!');
  } else if( computerMove == 'nożyce' && playerMove == 'papier'){
	printMessage('Przegrywasz!');
  } else {printMessage('Wybierz jedną z cyfr: 1, 2 lub 3!');
}
*/

printMessage(displayResult(computerMove, playerMove));
