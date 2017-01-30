var player = 1;
var moves = 0;

function play(square) {
	if(square.innerHTML==='') {
		moves++;

		if(player===1) {
			square.innerHTML = 'X';
			player = 2;
		}
		else {
			square.innerHTML = 'O';
			player = 1;
		}
		
		var result = checkGameOver();
		
		if( result!==false ) {
			document.getElementById('message').innerHTML = 'Game Over: '+result;
		}
		else {
			document.getElementById('message').innerHTML = 'Keep playing';
		}
	}
}

function checkGameOver() {
	// 1st: check if theres less 5 moves
	if(moves<5) {
		return false;
	}
	
	// 2nd: check for winner lines
	var row1 = document.getElementsByClassName('r1');
	
	if( row1[0].innerHTML!=='' &&
			row1[0].innerHTML===row1[1].innerHTML &&
			row1[0].innerHTML===row1[2].innerHTML) {
		return row1[0].innerHTML + ' is the winner.';
	}
	
	// 3rd: check if board is full
	if(moves>8){
		return "It's a tie";
	}
	// continue game
	else
		return false;
}