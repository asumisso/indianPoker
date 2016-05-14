<<<<<<< HEAD
function deckPush(array) {
    // >>>>>>> 5f6707572bd7547a8d1c9cc7c6d71acc0ca55625
=======
function deckPush(deck) {
>>>>>>> 1caf8bbac8bf4bf7b9c1e248696183515740b7ff

    for (var i = 0; i < suit.length; i++) {
        for (var j = 0; j < 13; j++) {

            var object = {
                suit: suit[i],
                num: j
            }
            array.push(object);
        }
    }

}

function shuffle(array) {
    for (var i = 0; i < 15; i++) {
        var rand = Math.floor(Math.random() * array.length);
        console.log(array[rand]); //デバッグ
<<<<<<< HEAD

        var topnum = document.createElement("span");
        node.setAttribute('class','topnum');

        var topsuit = document.createElement("span");
        node.setAttribute('class','topsuit');

        var btmsuit = document.createElement("span");
        node.setAttribute('class','btmsuit');

        var btmnum = document.createElement("span");
        node.setAttribute('class','btmnum');

=======
>>>>>>> 1caf8bbac8bf4bf7b9c1e248696183515740b7ff
    }

}

function battle(me, you) {

  function draw(name) {
    var rand = Math.floor(Math.random() * deck.length);
    name.push(deck[rand]);
    deck.splice(rand, 1);
  }
    draw(me);
    draw(you);

    if (me[0].num > you[0].num) {
        document.write("あなたの勝利です！");
    } else if (me[0].num < you[0].num) {
        document.write("あなたの負けです…");
    } else if (me[0].num == you[0].num) {
        document.write("引き分け");
    } else {
        document.write("おかしい");
    }
<<<<<<< HEAD
}
=======
  }
>>>>>>> 1caf8bbac8bf4bf7b9c1e248696183515740b7ff
