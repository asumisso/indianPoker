//デッキを用意
var deck = [];
var suit = ["♥", "♦", "♣", "♠"];
var me = [];
var you = [];

for (var i = 1; i < 14; i++) {
    for (var j = 0; j < suit.length; j++) {
        var object = {
            suit: suit[j],
            num: i
        }
        deck.push(object);
    }
}

//100msごとにshuffle()を行っている
//varで定義することによってgameStartのときにclearIntervalできる
var shuffleStart = setInterval("shuffle()", 100);

//onclickで呼び出される。メイン
function gameStart() {
    //シャッフル止める
    clearInterval(shuffleStart);

    //デバッグ用
    console.log(me);
    console.log(you);

    battle(me, you);

}