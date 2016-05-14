function deckPush(deck) {

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

function shuffle(array) {
    for (var i = 0; i < 15; i++) {
        var rand = Math.floor(Math.random() * array.length);
        console.log(array[rand]); //デバッグ
  }

}

function battle(me, you) {

  function draw(name) {
    var rand = Math.floor(Math.random() * deck.length);
    name = deck[rand];
    deck.splice(rand, 1);
  }
    draw(me);
    draw(you);

    if (me.num > you.num) {
        document.write("あなたの勝利です！");
    } else if (me.num < you.num) {
        document.write("あなたの負けです…");
    } else if (me.num == you.num) {
        document.write("引き分け");
    } else {
        document.write("おかしい");
    }
  }