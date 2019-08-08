{
	const stone = document.getElementById('play-rock');
	const paper = document.getElementById('play-paper');
	const scissors = document.getElementById('play-scissors');

	stone.addEventListener('click', function() {
		playGame(1);
	});
	paper.addEventListener('click', function() {
		playGame(2);
	});
	scissors.addEventListener('click', function() {
		playGame(3);
	});

	const playGame = function(playerInput) {

		const randomNumber = Math.floor(Math.random() * 3 + 1);
		const computerPlay = getMoveName(randomNumber);
		const playerPlay = getMoveName(playerInput);

		clearMessages();

		printMessage('Mój ruch to: ' + computerPlay);

		printMessage('Twój ruch to: ' + playerPlay);

		printMessage(displayResult(computerPlay, playerPlay));

	};

	const getMoveName = function(move) {
		if(move === 1){
			return 'kamień';
		} else if(move === 2){
			return 'papier';
		} else if(move === 3){
			return 'nożyce';
		} else {
			return 'nieznany ruch';
		}
	};

	const displayResult = function(computerMove, playerMove) {
		console.log('moves:', computerMove, playerMove);
		if(computerMove === 'kamień' && playerMove === 'papier') {
			return 'Ty wygrywasz';
		} else if(computerMove === 'papier' && playerMove === 'nożyce') {
			return 'Ty wygrywasz';
		} else if(computerMove === 'nożyce' && playerMove === 'kamień') {
			return 'Ty wygrywasz';
		} else if(playerMove !== 'kamień' && playerMove !== 'papier' && playerMove !== 'nożyce') {
			return 'Wybierz jedną z cyfr: 1, 2 lub 3!';
		}  else if(computerMove === playerMove) {
			return 'Mamy remis';
		} else {
			return 'Przegrywasz';
		}
	};

	const printMessage = function(msg) {
		let div = document.createElement('div');
		div.innerHTML = msg;
		document.getElementById('messages').appendChild(div);
	};

	const clearMessages = function() {
		document.getElementById('messages').innerHTML = '';
	};
}
