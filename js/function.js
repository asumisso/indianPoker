  function deckPush(deck){

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

  function draw(me, you){

  var rand = Math.floor( Math.random() * deck.length);    
  me = deck[rand];
  deck.splice(rand,1);
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 5f6707572bd7547a8d1c9cc7c6d71acc0ca55625
  rand = Math.floor( Math.random() * deck.length);    
  you = deck[rand];
  deck.splice(rand,1);
  
  if(me.num > you.num){
      document.write("あなたの勝利です！");
    }else if (me.num < you.num) {
      document.write("あなたの負けです…");
    }else if (me.num == you.num){
      document.write("引き分け");
    }
  }


  function shuffle(deck) {
  var n = deck.length, t, i;

  while (n) {
    i = Math.floor(Math.random() * n--);
    t = deck[n];
    deck[n] = deck[i];
    deck[i] = t;
  }

  return deck;
}

<<<<<<< HEAD
console.log(deck);
=======
console.log(deck);
>>>>>>> d4d37df2f880cb97b16a3233069a683c4fce9adc
>>>>>>> 5f6707572bd7547a8d1c9cc7c6d71acc0ca55625
