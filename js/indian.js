//デッキを用意
var deck = [];
var suit = ["♥", "♦", "♣", "♠"];
var visual = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
var me = [];
var you = [];

//ハート、ダイア
for (var j = 0; j < 2; j++) {
    for (var i = 1; i < 14; i++) {

        var object = {
            num: i,
            suit: "<span class='red'>"+suit[j]+"</span>",
            visual: "<span class='red'>" + visual[i - 1] + "</span>"
        }
        deck.push(object);
    }
}

//クラブ、スペード
for (var j = 2; j < 4; j++) {
    for (var i = 1; i < 14; i++) {

        var object = {
            num: i,
            suit: suit[j],
            visual: visual[i - 1]
        }
        deck.push(object);
    }
}

console.log(deck.length);

for (var i = 0; i < deck.length; i++) {
    console.log(deck[i]);
}



//100msごとにshuffle()を行っている
//varで定義することによってgameStartのときにclearIntervalできる
var shuffleStart = setInterval("shuffle()", 500);

//onclickで呼び出される。メイン
function gameStart() {
    //シャッフル止める
    clearInterval(shuffleStart);

    battle(me, you);
}
