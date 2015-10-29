var IMGi = 0;
var MGi = 0;
var cards = [];
var rank = ['2','3','4','5','6','7','8','9','10','jack','queen','king','ace'];
var value = [1,2,3,4,5,6,7,8,9,10,11,12,13];
var suite = ['hearts','diamonds','spades','clubs'];
var userDeck = [];
var userPoints = 0;
var computerDeck = [];
var computerPoints = 0;


var images = function(){
 userDeck[IMGi].img;
 computerDeck[IMGi].img;
 IMGi++;
};



//Here we have cards array 0-51.   
var c = 0;
while (c < 52) {
	for (var s = 0; s <= 3; s++) {
		for (var rv = 0; rv <= 12; rv++) {
			cards[c] = {
				suite: suite[s],
				rank: rank[rv],
				value: value[rv],
				img: 'images/' + rank[rv] + '_of_' + suite[s] + '.png'
			}
			c++;
		}
	}
}

//cuts the deck
//the 'array' here and in the ff is our 'var cards' above
var assignDeck = function(array){ 
	for(var i = 0; i < (array.length - 1); i++){
		if (i % 2 === 0) {
			userDeck.push(array[i]);
		} else {
			computerDeck.push(array[i]);
		}; 
	};
};	


//shuffles the deck 
var shuffle = function(array) {
	for (var i = array.length - 1; i > 0; i--) {
    	var j = Math.floor(Math.random() * (i + 1));
    	var temp = array[i];
    	array[i] = array[j];
    	array[j] = temp;
	}
	array = array;
	return array;
}


//checks if either the computer or player already won the game
var winnerCheck = function (playerPoints, computerPoints) {
	if (playerPoints === 10) {
		alert("Congrats you won the game!");
		$('.btn-flip').remove();
	} else if (computerPoints === 10) {
		alert("You lose!");	
		$('.btn-flip').remove();
	} else {
		return false;
	}
};

//starts the game and incorporates all above functions and variables
var mainGame = function() {            
	                     
	var bonus = 0;
	while (userDeck[MGi].value === computerDeck[MGi].value) {
		MGi += 2;
		bonus += 2;
	}
	if(userDeck[MGi].value > computerDeck[MGi].value){
		userPoints++;
		userPoints += bonus; 
	} else {
		computerPoints++;
		computerPoints += bonus;
	}
	MGi++;
};