//最初に行っているシャッフル動作
function shuffle() {

    var meRand = deck[Math.floor(Math.random() * deck.length)];
    var youRand = deck[Math.floor(Math.random() * deck.length)];

    //HMTL書き換え
    meTopnum.innerHTML = meRand.visual;
    meTopsuit.innerHTML = meRand.suit;
    meBtmsuit.innerHTML = meRand.suit;
    meBtmnum.innerHTML = meRand.visual;

    youTopnum.innerHTML = youRand.visual;
    youTopsuit.innerHTML = youRand.suit;
    youBtmsuit.innerHTML = youRand.suit;
    youBtmnum.innerHTML = youRand.visual;

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

    meTopnum.innerHTML = me[0].visual;
    meTopsuit.innerHTML = me[0].suit;
    meBtmsuit.innerHTML = me[0].suit;
    meBtmnum.innerHTML = me[0].visual;

    youTopnum.innerHTML = you[0].visual;
    youTopsuit.innerHTML = you[0].suit;
    youBtmsuit.innerHTML = you[0].suit;
    youBtmnum.innerHTML = you[0].visual;

    //デバッグ用
    console.log(me[0].num);
    console.log(you[0].num);

}




