// CONSTANTS

//	defines the number of cards in a deck. 
//  52 with without a joker. can use a smaller # for testing
CARDS_N_DECK = 52;		// Constant. Integer.

// Used to determine End Of Game Status.
// First player to reach GAME_POINT points wins the game
GAME_POINT = 4;			// Constant. Integer 

// OBJECT DEFINITIONS AND GLOBAL VARIABLES

//	Defines what a card object looks like
// 	There will be 52 unique card objects
card  = {
	// numerical unique ID for this card. It will be set (incremented) when the card is created
	// 1 - 52
	cardId : 0,

	// string holding URL of the image for this cards 	
	// ie: "./images/aceDiamonds.jpg"
	image url : '',	
	
	// string storing the suite. Possible values are: "heart", "diamond", "club", "spade"
	suite : '',	

	// string representing the card rank: "king", "ten" , "two", "Ace"
	rank : '',
	
	// string: refers to the element on the page where this card is currently located
	// this value will change dynamically as this card gets played and moves around the board
	// possible css class values: user-card-img, computer-card-img, treasure-chest (or cards-in-play, or war-chest, or skirmish, or..?/), computer-card-pile, user-card-pile,
	cssId : '',

	// The numerical "value" for this card. Used to determine who wins a skirmish
	value : 0,		// valid values are: 2 - 14, where "two" = 2, "three"=3, Jack"=11, Queen=12

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

function initializeDeck(){
	// pupulates fullDeck as an unShuffled deck of cards
};


/*
	// dealing function (randomly assigns half the cards from deck to each player)
	// alters global variables: player1.stack (array of cards), and player2.stack (array of cards)
	//	uses global variable fullDeck to distribute half the cards to each player.
*/
function deal(){

};

/*	
	//	uses Fisher-Yates alogrithm to randomly reorder (shuffle) an array of cards
	//  main use is at the start of a game to shuffle global fullDeck of cards
	//	optionally could be used to shuffle any array of cards passed in (ie warchest/cardsInPlay, or player1.stack)
*/
function shuffle(cardsArray) {


};

function animateShuffle(){
	// called by shuffle
	// front end indicates shuffle
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
var person, computer;	  
// (decide what the var names should be) 
// player1, player2..


// FUNCTIONS





var player1, player2, computerPlayer;  // decide on names of the player variables. (only need 2)

// just a convenience variable so can reference the above variables as players[0], players[1]
var player = [player1, player2];  
	// or whatever the player variables are called
	// this is a convenience so could use player[0] and player[1].  then, for example, could use a numeric return value to refer to, and have automatic access to, winning player.

function startGame(){
	// get player name : returns player 1 name

	// initialize deck
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
		// animate shuffle deck
	// deal deck
		// animate deal deck
};

function initializeGame(){};

function getPlayerName(name){
};

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

};


// given two cards, determines which one "wins" the skirmish
// returns 0 if tie, 1 if first card, 2 if second card
function compareCards(card1, card2){

};

// If there is a tie, this needs to be set to true
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
};
function animateUpdateScore(player){};


/*
	// check to see if we have a winner
	// if one of the players has an empty stack, this player looses, and game is over "out of amunition, you loose"
	//	if one player has GAME_POINT points, this player wins, and game is over
	// will need to look at, but not change, both player objects
*/
function isGameOver(){
	// logic to determine if game is over
	// and if so, who the winner / looser is

	return ;		// return false or winner
};

function endGame(winningPlayer){
	// do any gameOver backend Clean and processing
	animateGameOver(winningPlayer);
};

function animateGameOver(winningPlayer){
	// front end stuff indicating game over
	// called by endGame()
};



