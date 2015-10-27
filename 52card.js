//What I made here is that we have card1-52.   Example:
//console.log(card[49]),  { suite: 'clubs', rank: 'jack', value: 10 }
//console.log(card[49].rank), jack
//console.log(card[49].value), 10

//I still don't know how to put the image property yet inline with Chris' images

var card = {};
var rank = ['2','3','4','5','6','7','8','9','10','jack','queen','king','ace'];
var value = [1,2,3,4,5,6,7,8,9,10,11,12,13];
var suite = ['hearts','diamonds','spades','clubs'];

var c = 1;
while (c <= 52) {
	for (var s = 0; s <= 3; s++) {
		for (var rv = 0; rv <= 12; rv++) {
			card[c] = {
				suite: suite[s],
				rank: rank[rv],
				value: value[rv],
				
			}
			c++;
		}
	}
}


