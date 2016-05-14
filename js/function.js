

function deckPush(array) {

    var deck = [];
    var suit = ["HEART", "DIA", "CLUB", "SPADE"];


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

    }
}

    function draw(name) {
        var rand = Math.floor(Math.random() * deck.length);
        name.push(deck[rand]);
        deck.splice(rand, 1);
    }

function battle(me, you) {


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

    //デバッグ用
    console.log(me[0].num);
    console.log(you[0].num);

    //DOM操作
    createHTML();
}

function numAndSuit(person){

    if (person.suit == "DIA") {
        person.suit = "♦";
    }else if (person.suit == "HEART") {
        person.suit = "♥";
    }else if (person.suit == "CLUB") {
        person.suit = "♣";
    }else{
        person.suit = "♠";
    }

    if (person.num == 12) {
        person.num = "K";
    }else if (person.num == 11) {
        person.num = "Q";
    }else if (person.num == 10){
        person.num = "J";
    }else{
        person.num = person.num + 1;
    }

}


function createHTML(){
    //本当はHTMLに直接かきたかったんだけど、入れ子になってるidは撮ってこれないみたい
    //だから、createElementして、HTMLを追加していった
    //functionでmeとyouうごかしたかったんだけど、できなかったらベタ書きしてます
    //meとyou同じことしてる

    //me

    numAndSuit(me[0]);
    numAndSuit(you[0]);

    //div1のidをとってきてる
    var catchMeid = document.getElementById("me");

    //formを作ってdiv1に追加 
    var meForm = document.createElement("form");
    meForm.setAttribute("id","meForm");
    catchMeid.appendChild(meForm);

    //inputを作って↑に追加
    var meInput = document.createElement("input");
    meInput.setAttribute("id","meInput");
    meInput.setAttribute("type","text");
    meInput.setAttribute("value","myName");
    var catchForm =document.getElementById("meForm");
    catchForm.appendChild(meInput);

    //divをつくってdiv1に追加
    var meDiv = document.createElement("div");
    meDiv.setAttribute("id","meDiv");
    meDiv.setAttribute("class","card");
    catchMeid.appendChild(meDiv);


    //↑のidをとってきてる
    var catchMediv = document.getElementById("meDiv");

    //span(topnum用)をつくってmeDivに追加
    var meTopnum = document.createElement("span");
    meTopnum.setAttribute("class","topnum");
    meTopnum.innerHTML = me[0].num;
    catchMediv.appendChild(meTopnum);

    //span(topsuit用)をつくってmeDivに追加
    var meTopsuit = document.createElement("span");
    meTopsuit.setAttribute("class","topsuit");
    meTopsuit.innerHTML = me[0].suit;
    catchMediv.appendChild(meTopsuit);

    //span(btmsuit用)をつくってmeDivに追加
    var meBtmsuit = document.createElement("span");
    meBtmsuit.setAttribute("class","btmsuit");
    meBtmsuit.innerHTML = me[0].suit;
    catchMediv.appendChild(meBtmsuit);

    //span(btmnum用)をつくってmeDivに追加
    var meBtmnum = document.createElement("span");
    meBtmnum.setAttribute("class","btmnum");
    meBtmnum.innerHTML = me[0].num;
    catchMediv.appendChild(meBtmnum);



    //you
    var catchYouid = document.getElementById("you");

    var youForm = document.createElement("form");
    youForm.setAttribute("id","youForm");
    catchYouid.appendChild(youForm);

    var youImput = document.createElement("input");
    youImput.setAttribute("id","youImput");
    youImput.setAttribute("type","text");
    youImput.setAttribute("value","yourName");
    var catchForm =document.getElementById("youForm");
    catchForm.appendChild(youImput);

    var youDiv = document.createElement("div");
    youDiv.setAttribute("id","youDiv");
    youDiv.setAttribute("class","card");
    catchYouid.appendChild(youDiv);

    var catchYoudiv = document.getElementById("youDiv");

    var youTopnum = document.createElement("span");
    youTopnum.setAttribute("class","topnum");
    youTopnum.innerHTML = you[0].num;
    catchYoudiv.appendChild(youTopnum);

    var youTopsuit = document.createElement("span");
    youTopsuit.setAttribute("class","topsuit");
    youTopsuit.innerHTML = you[0].suit;
    catchYoudiv.appendChild(youTopsuit);

    var youBtmsuit = document.createElement("span");
    youBtmsuit.setAttribute("class","btmsuit");
    youBtmsuit.innerHTML = you[0].suit;
    catchYoudiv.appendChild(youBtmsuit);

    var youBtmnum = document.createElement("span");
    youBtmnum.setAttribute("class","btmnum");
    youBtmnum.innerHTML = you[0].num;
    catchYoudiv.appendChild(youBtmnum);

}