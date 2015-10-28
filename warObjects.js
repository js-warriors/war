- full deck of cards [{value, suite},..]  
			//52 elements of type card  
			// used to deal the deck.
- card 
	- image url	// "./images/aceDiamonds.jpg"
	- suite		// "heart", "diamond", "club", "spade"
	- rank 	 	// "king", "ten" , etc
	- value  	// 1-13  numeric value. highest number wins
	- cssId		// refers to the element on the page where // will change dynamically depending on where it goes in time
				// (user-card-img, computer-card-img, treasureChest, pile1, pile1)
- treasureChest [] // cards in play - to be acquired by one of the players
- warChest[0] [card1,card2,..]	// player1's or the computer's "stack"
- warChest[1] [card1,card2,..]	// player2's "stack"
		-- where card1, card2 is an object of type card

Functions

-dealing function (randomly assigns half the cards from deck to each player)
- game over?
- flip card
- compare cards - determine who won that skirmish
- ...

player1, computerPlayer
player[0], player[1]


fulldeck = []; // array storing every card in the deck, each element of the array is an object of type card

card  = {
	// numerical unique ID for this card. It will be set (incremented) when the card is created
	// 1 - 52
	cardId : 0,

	// string holding URL of the image for this cards 	"./images/aceDiamonds.jpg"
	image url : '',	
	
	// string storing the suite. Possible values are: "heart", "diamond", "club", "spade"
	suite : '',	

	// string representing the card rank: "king", "ten" , "two", "Ace"
	rank : '',
	
	// string: refers to the element on the page where this card is currently located
	// this value will change dynamically as this card gets played and moves around the board
	// possible css class values: user-card-img, computer-card-img, treasure-chest, computer-card-pile, user-card-pile
	cssId : '',

	// The numerical "value" for this card. Used to determine who wins a skirmish
	value : 0		// valid values are: 2 - 14, where "two" = 2, "three"=3, Jack"=11, Queen=12

};

treasureChest = []; // this will be an array of card objects that are in play -> flipped card + any cards set aside in "war"

player = {
	name : '',		// string, the player's name
	warChest : [],  // or pile //This is the cards that the player owns. It is the cards he can "flip"
	score : 0		// The player's current score. Everytime he wins a skirmish, his points increase.
					// It is one method to determine "End of Game" (first person to 10) and winner. Will also be shown on gameboard
};

