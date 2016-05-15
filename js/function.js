//最初に行っているシャッフル動作
function shuffle() {

    var meRand = deck[Math.floor(Math.random() * deck.length)];
    var youRand = deck[Math.floor(Math.random() * deck.length)];

    //赤に書き換え
    changeSuitRed(meRand);
    changeSuitRed(youRand);

    //HMTL書き換え
    meTopnum.innerHTML = meRand.num;
    meTopsuit.innerHTML = meRand.suit;
    meBtmsuit.innerHTML = meRand.suit;
    meBtmnum.innerHTML = meRand.num;

    youTopnum.innerHTML = youRand.num;
    youTopsuit.innerHTML = youRand.suit;
    youBtmsuit.innerHTML = youRand.suit;
    youBtmnum.innerHTML = youRand.num;

    return;

}

//色を変える動作,JQK
function changeSuitRed(person) {
    if (person.num == 13) {
        person.num = "K";
    } else if (person.num == 12) {
        person.num = "Q";
    } else if (person.num == 11) {
        person.num = "J";
    }

    if (person.suit == "♥" || person.suit == "♦") {
        person.num = "<span class='red'>" + person.num + "</span>";
        person.suit = "<span class='red'>" + person.suit + "</span>";
    }
}


function resetSuitRed() {

    //♥リセット
    for (var i = 0; i < 13; i++) {
        var object = {
            suit:"♥",
            num:i+1
        }
        deck.splice(i,1,object);
    }

    //♦リセット
    for (var i = 13; i < 26; i++) {
        var object = {
            suit:"♦",
            num:i+1-13
        }
        deck.splice(i,1,object);
    }

    //♣リセット
    for(var i = 36;i<39;i++){
        var object = {
            suit:"♣",
            num:i+1-26
        }
        deck.splice(i,1,object);
    }

    //♠リセット
    for (var i = 49; i <52; i++) {
        var object ={
            suit:"♠",
            num:i+1-39
        }
        deck.splice(i,1,object);
    }

    return;
}


function draw(name) {
    var rand = Math.floor(Math.random() * deck.length);
    name.push(deck[rand]);
    deck.splice(rand, 1);
}

//はやと変更
function myname(){
  var str = document.m1.m2.value;
  return str;
}

function yourname(){
  var str = document.y1.y2.value;
  return str;
}

function battle(me, you) {

    resetSuitRed();
    draw(me);
    draw(you);

    if (me[0].num > you[0].num) {
      //はやと変更
        gameResult.innerHTML = myname() + "の勝利です！";
    } else if (me[0].num < you[0].num) {
        gameResult.innerHTML = yourname() + "の勝利です…";
    } else if (me[0].num == you[0].num) {
        gameResult.innerHTML = "引き分け";
    } else {
        gameResult.innerHTML = "おかしい";
    }

    meTopnum.innerHTML = me[0].num;
    meTopsuit.innerHTML = me[0].suit;
    meBtmsuit.innerHTML = me[0].suit;
    meBtmnum.innerHTML = me[0].num;

    youTopnum.innerHTML = you[0].num;
    youTopsuit.innerHTML = you[0].suit;
    youBtmsuit.innerHTML = you[0].suit;
    youBtmnum.innerHTML = you[0].num;

    //デバッグ用
    console.log(me[0].num);
    console.log(you[0].num);

}




