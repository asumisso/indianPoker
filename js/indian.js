var deck = [];
var suit = ["HEART", "DIA", "CLUB", "SPADE"];

deckPush(); //デッキをプッシュ


var me = [];
var you = [];

draw(me);
draw(you);
//デバッグ用
console.log(me);
console.log(you);

shuffle(deck);
