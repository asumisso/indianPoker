function deckPush(deck) {
    // >>>>>>> 5f6707572bd7547a8d1c9cc7c6d71acc0ca55625

    for (var i = 0; i < suit.length; i++) {
        for (var j = 0; j < 13; j++) {

            var object = {
                suit: suit[i],
                num: j
            }
            deck.push(object);
        }
    }

}

function draw(name) {

    var rand = Math.floor(Math.random() * deck.length);
    name.push(deck[rand]);
    deck.splice(rand, 1);
}

function shuffle(array) {
    for (var i = 0; i < 15; i++) {
        var rand = Math.floor(Math.random() * array.length);
        console.log(array[rand]); //デバッグ

    }
}

function draw(me, you) {

    var rand = Math.floor(Math.random() * deck.length);
    me = deck[rand];
    deck.splice(rand, 1);
    rand = Math.floor(Math.random() * deck.length);
    you = deck[rand];
    deck.splice(rand, 1);

    if (me.num > you.num) {
        document.write("あなたの勝利です！");
    } else if (me.num < you.num) {
        document.write("あなたの負けです…");
    } else if (me.num == you.num) {
        document.write("引き分け");
    } else {
        document.write("おかしい");
    }





    console.log("aaaaa");
