// CONSTANTS

//	defines the number of cards in a deck. 
//  52 with without a joker. can use a smaller # for testing
NUM_CARDS_IN_DECK = 52;		// Constant. Integer.

// Used to determine End Of Game Status.
// First player to reach GAME_POINT points wins the game
GAME_POINT = 4;			// Constant. Integer 

NUM_CARDS_TO_FLIP_IN_WAR = 3;
NUM_CARDS_TO_FLIP_NORMAL = 1;

// OBJECT DEFINITIONS AND GLOBAL VARIABLES

//	Defines what a card object looks like
// 	There will be 52 unique card objects
card  = {
	// numerical unique ID for this card. It will be set (incremented) when the card is created
	// 1 - 52
	cardId : 0,

	// The numerical "value" for this card. Used to determine who wins a skirmish
	value : 0,		// valid values are: 2 - 14, where "two" = 2, "three"=3, Jack"=11, Queen=12

	// string representing the card rank: "king", "ten" , "two", "Ace"
	rank : '',
	
	// string storing the suite. Possible values are: "heart", "diamond", "club", "spade"
	suite : '',	

	// string holding URL of the image for this cards 	
	// ie: "./images/aceDiamonds.jpg"
	image url : '',	

	// string: refers to the element on the page where this card is currently located
	// this value will change dynamically as this card gets played and moves around the board
	// possible css class values: user-card-img, computer-card-img, treasure-chest (or cards-in-play, or war-chest, or skirmish, or..?/), computer-card-pile, user-card-pile,
	cssId : '',

	// this property may not be needed, Depending on how we decide to write the alogrithm.
	// I can see two alogrithms for "war", one would not need this prop, the other might need this prop
	// It is here if needed. can be disgarded, if not used.
	owner : null	// either an array (player1, player2, skirmish), or a string, indicating the same
	
// possible Methods
	// setName
	// setOwner
	// updateScore
	// initialize // zero everything out
	// set cssID

};


/*
	// array storing every card in the deck, each element of the array is an object of type card. 
	// will be initialized, shuffled, and then used to "deal" the cards out to players at the start of the game.
*/
var fullDeck = [];		// array of card objects. 52 unique cards.

// temp testing decks
//var userDeck = [];
//var computerDeck = [];

function initializeDeck(deck){
// populates fullDeck as an unShuffled deck of cards

	/* test deck *//*
		// probably need to make two calls, one for userDeck, and computerDeck to use this function
		// or just split the deck in half after..

		var userDeck = [];
		var userPoints = 0;
		var computerDeck = [];
		var computerPoints = 0;
		var cards = [{value: 1}, 
					 {value: 2}, 
					 {value: 3}, 
					 {value: 4}
					 ];
		return 
	/* end Test deck */

	// Hiro's deckBuilder function

// What I made here is that we have card1-52.   Example:
	//console.log(card[49]),  { suite: 'clubs', rank: 'jack', value: 10 }
	//console.log(card[49].rank), jack
	//console.log(card[49].value), 10

	//I still don't know how to put the image property yet inline with Chris' images

	var deck=[];	// empty the deck for a clean slate

	var card = {};
	var rank = ['2','3','4','5','6','7','8','9','10','jack','queen','king','ace'];
	var value = [1,2,3,4,5,6,7,8,9,10,11,12,13];
	var suite = ['hearts','diamonds','spades','clubs'];

	var c = 1;
	// make (52) cards
	while (c <= NUM_CARDS_IN_DECK) {
		for (var s = 0; s <= 3; s++) {
			for (var rv = 0; rv <= 12; rv++) {
				// create a card object
				card[c] = {
					id: c,					// add an id field for this card
					value: value[rv],
					rank: rank[rv],
					suite: suite[s],
					imageURL: '',			// TODO: use above fields to build the file name of the image
					cssID: '',				// TODO: this gets set by front end. Changes as the card moves about the board
					owner: null				// TODO: this gets added when dealCards, and transferCards
				}

				// insert this card to the deck array (ie fullDeck)
				deck.push(card[c]); 		
				c++;
			}
		}
	}
	console.log(deck);  // testing
};

/*	
	//	uses Fisher-Yates alogrithm to randomly reorder (shuffle) an array of cards
	//  main use is at the start of a game to shuffle global fullDeck of cards
	//	optionally could be used to shuffle any array of cards passed in (ie warchest/cardsInPlay, or player1.stack)
	// takes in an array of cards
*/
// function shuffle(cardsArray) {
function shuffleCards(array) {
	// This is a function used to shuffle the deck 
	// uses Fisher-Yates Shuffle alogrithm
		//this is the website I got the shuffle funciton for arrays from
		// http://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array

	// Make start button, then have it change to flip button
	for (var i = array.length - 1; i > 0; i--) {
    	var j = Math.floor(Math.random() * (i + 1));
    	var temp = array[i];
    	array[i] = array[j];
    	array[j] = temp;
	}
	// array = array;
	console.log (array); // for testing
	return array;
};

function animateShuffle(){
	// called by shuffle
	// front end indicates shuffle
};



/*
	// dealing function (randomly assigns half the cards from deck to each player)
	// alters global variables: player1.stack (array of cards), and player2.stack (array of cards)
	//	uses global variable fullDeck to distribute half the cards to each player.
*/
function dealCards(array, userDeck, computerDeck){
		//fullDeck, player1.stack, player2.stack
		//var assignDeck = function(array){ 

//this function assigns the shuffled array to either userDeck or computerDeck
	for(var i = 0; i < array.length; i++){
		if(i % 2 === 0){
			userDeck.push(array[i]);
		} else {
			computerDeck.push(array[i]);
		}; 
	};
	console.log("userDeck: ", userDeck);
	console.log("computerDeck: ", computerDeck);

};


/*
	// array of card objects that are in play -> flipped card + any cards set aside in "war"  
	// cards in play will be popped off the players' stacks and placed here. 
	// winner of a skirmish will get all these cards pushed to the end of his stack
	// 	and this array will be reset to [] (perhaps popped from here, pushed to winner?).
							// formerly treasureChest = []; // or could be called warChest // skirmish // cardsInPlay
	*/						
var cardsInPlay = [];  // array of cards in play - to be acquired by one of the players

/*
	// defines what a player object will look like.
	// there will be 2 players: player 1, and computer.
	// might name them player1 and player2 for simplicity.
	// will this be object var, or a function with initializer methods as well ?
	// var or function ?
*/
player = {
	id : 0,			// cardsInPlay/warChest === id 0, computer ===id 1, player === id 2  make these CONSTANTS so the actual value can be set as Appropriate as appropriate
	name : '',		// string, the player's name
	stack: [],  	// an array of card objects
					//This is the cards that the player owns. It is the cards he can "flip" 	// was formerly called "warChest : []" // or pile 

	score : 0		// The player's current score. Everytime he wins a skirmish, his points increase.
					// It is one method to determine "End of Game" (first person to 10) and winner. Will also be shown on gameboard

};

// the two players. will be of type objects.
//  TODO need to create the two players from the player object

// TODO: decide on names of the player variables. (only need 2)
var player1, player2, computer, person, computerPlayer;  

// just a convenience variable so can reference the above variables as players[0], players[1]
// might nnot use these. 
var player = [player1, player2];  
	// or whatever the player variables are called
	// this is a convenience so could access the players as
	// player[0] and player[1].  
	// then, for example, could use a numeric return value to refer to, and have automatic access to, winning player.

// TODO: initialize the two player variables as player objects
function startGame(){
	// TODO: initiated when user clicks on "Start" button (click handler)

	// TODO: get player name : returns player 1 name

	// initialize deck
	initializeDeck();


	// initialize players	(name)
		// set names
		// empty/reset stack if necessary
		// reset score if necessary
	// initialize gameboard (name)
		// (set / reset score)
		// (set player names)
		// (empty "flipped cards")
		// (empty "spoils of war")
		// change "start game" to "end game" or "flip", 
			// add "flip" (if not done above)
	// shuffle deck
	shuffleCards(fullDeck);
		// animate shuffle deck
	// deal deck
	dealCards(fullDeck, player1.stack, player2.stack);
		// animate deal deck

};

function getPlayerName(name){
};

function initializeGame(){};

function rePlay(){
	// to replay a game.
	// reset score for both players
	// empty both players stacks
	// ... basically, do everything that do at Start Game
	// Except, to not ask player for name, or reset names.

};

function resetPlayer(){

};

function resetGame(){
	// player clicks reset
	animateResetGame();
};
function animateResetGame(){
	// front end stuff when player clicks reset.
	// called from resetGame
	// stuff such as change "reset Game" button to "flip" or "end"
};


/*
	// graphics: previously shown cards goto warChest if isWar
	// previous cards move from player stack to warChest 
	// if isWar
	// else they go to the skirmish winner if there was one.
	// check if game over.. (ie a player has no cards to flip)
	// display new cards.
*/	
function flipCards(){
	// since we don't want to animate winner of previous skirmish until "flip" button is pressed (else player won't be able to see the cards that were previously flipped..)
	// we actually need to do processing for the previous battle here, Then Flip Cards at the END of this function.
	// other way to do this would be to run slow animations, or require user to press another button after flipping to process the battle.

	// compareCards (computes winner of hand, or tie)
	// transferCards (either to winner of hand, or to spoils of war)
	// animate transferCards
	// update score
	// get new cards
	// animate flipCards
	// 	or in inPlay[0] always hold player 1s card,
	// and inPlay[1] always hold player 2''s card.

	// so if compare cards [inplay[0],inPlay[1]]
						
	// var player1 card = shift
	// var player2 card = shift

	// shift card from each players stack
	// unshift into warChest
	// return winning card or null.
	// if null, set isWar and is do warStuff
	// 	set numberOfCardsToFlip

	// else transferCards(warChest, winningCard.owner);

// transferCards resets isWar variable.
// reset numberOfCardsTofFlip back to zero.
// change ownership of card

	// get next cards:
		// if isWar: numCards to shift off each players stack = 2 or 3  or 4 ..
			// make sure both players have enough cards FIRST.
			// is not : game over
		// if not isWar numCards to pop off each player's stack = 1
};


/*
	// given two cards, determines which one "wins" the skirmish
	// returns 0 if tie, 1 if first card, 2 if second card
function compareCards(card1, card2){

};
*/
function winnerThisHand(player1,player2){

	return ;	// winner of this hand, or null if a tie
};

// If there is a tie, isWar needs to be set to true (and numCardsToFlip changes)
// each time there is a winner, and cards get transfered to a player, this will be reselt to false
// This will determine how the cards are flipped 
//	ie, !isWar: flip 1 card. isWar: each add a card to the "spoils of war", and then flip a card. or flip 4 cards, or whatever
var isWar(){

	return ;	// true or false
};

function war

// empties warChest onto skirmish winners stack
// could also be used to 
function transferCards(fromArray, toArray){	

	animateTransferCards()
};

function animateTransferCards(fromPlayer, toPlayer){

};



function updateScore(player){
	// increase player's score
	// update score for that player on the front end
	animateUpdateScore(player);
};
function animateUpdateScore(player){};


/*
	// check to see if we have a winner
	// if one of the players has an empty stack, this player looses, and game is over "out of amunition, you loose"
	//	if one player has GAME_POINT points, this player wins, and game is over
	// will need to look at, but not change, both player objects
*/
function isGameOver(player1, computer){
	// logic to determine if game is over
	// and if so, who the winner / looser is

	/*
	// This is a function to check to see if either the computer or player won the game
	var winnerCheck = function (playerPoints, computerPoints) {
		if(playerPoints === 2){
			console.log("Congrats you won the game!");
			return false;
		} else if(computerPoints === 2) {
			console.log("You lose sucker!");	
			return false;
		} 
	*/

	if (player1.points === GAME_POINT) {
		console.log("Congrats you won the game!");
		return true;					//TODO: return player1 as winner, and maybe a reason
										// could run different animation, depending on reason
	}
	
	if (computer.points === GAME_POINT) {
		console.log("You lose sucker!"); //TODO: return player1 as winner, and maybe a reason
										// could run different animation, depending on reason
		return true;
	}
	// TODO : if either player has no cards in the deck 
		// ran out of amunition
		// return true

	// no winner yet
	return false;
};


function endGame(winningPlayer){
	// do any gameOver backend Clean and processing
	animateGameOver(winningPlayer);
	// change "flip" button to "replay"
	// other stuff
};

function animateGameOver(winningPlayer){
	// front end stuff indicating game over
	// called by endGame()
};



