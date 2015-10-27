var userDeck = [];
var userPoints = 0;
var computerDeck = [];
var computerPoints = 0;
var cards = [{num: 1}, 
			 {num: 2}, 
			 {num: 3}, 
			 {num: 4}
			 ];



//this function assigns the shuffled array to either userDeck or computerDeck
var assignDeck = function(player, array){ 
	for(var i = 0; i < array.length; i++){
		if(array[i] === array[0]){
			player.push(array[i]);
		} else if(array[i] === array[1]){
			player.push(array[i]);
		} else if(array[i] === array[2]){
			player.push(array[i]);
		} else {
			player.push(array[i]);
		}
	};
};	
// http://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
	//this is the website I got the shuffle funciton for arrays from
//This is a function used to shuffle the deck //Make start button, then have it change to flip button
var shuffle = function(userInput){      
	if(userInput === "startGame"){
		var shuffleArray = function(array) {
    	for (var i = array.length - 1; i > 0; i--) {
        	var j = Math.floor(Math.random() * (i + 1));
        	var temp = array[i];
        	array[i] = array[j];
        	array[j] = temp;
    		}
    		array = array;
    		return array;
		}
	shuffleArray(cards);
	} 
}
// This is a function to check to see if either the computer or player won the game
var winnerCheck = function (playerPoints, computerPoints) {
	if(playerPoints > computerPoints){
		console.log("Congrats you won the game!");
	} else if(playerPoints === computerPoints) {
		console.log("The game is a tie!");	
	} else {
		console.log("You lose sucker!");
	}
};

//This is the main function that starts the game and incorporates all above functions and variables
var mainGame = function(){            
	shuffle("startGame"),assignDeck(userDeck, cards); 
	shuffle("startGame"), assignDeck(computerDeck, cards);
	console.log("userDeck: ", userDeck);
	console.log("computerDeck: ", computerDeck);
		for(var i = 0; i < 4; i++){
			if(userDeck[i].num > computerDeck[i].num){
				userPoints++;
			} 
		////////I am having trouble with the tired part of the game///////////
		
			// else if (userDeck[i].num === computerDeck[i].num){
			// 		if(userDeck[i + 1].num > computerDeck[i + 1].num){
			// 			userPoints = userPoints + 2;	
			// 		} 
			// 		else {
			// 			computerPoints = computerPoints + 2;
			// 		}
			// } 
			else {
				computerPoints++;
			}
		};
		console.log("UserPoints: ", userPoints);
		console.log("ComputerPoints:", computerPoints);

		winnerCheck(userPoints, computerPoints);
};

mainGame(); //Have method start when user click "start button, restart button"