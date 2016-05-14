
	var deck = [];
	var suit = ["HEART", "DIA", "CLUB", "SPADE"];
	var go = [];

	for (var i = 0; i < suit.length; i++) {
		for (var j = 0; j < 13; j++) {

			var object = {
				suit: suit[i],
				num: j
			}
			deck.push(object);
		}
	}
	var me = [];
	var you = [];

	var rand = Math.floor( Math.random() * deck.length);
	me.push(deck[rand]);
	deck.splice( rand, 1 );
	
	rand = Math.floor( Math.random() * deck.length);
	you.push(deck[rand]);
	deck.splice( rand, 1 );