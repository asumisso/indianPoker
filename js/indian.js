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
deckPush(deck); //デッキをプッシュ


var me;
var you;

draw(me, you);
// >>>>>>> 5f6707572bd7547a8d1c9cc7c6d71acc0ca55625

shuffle(deck);
