  function deckPush(){

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

  function draw(name){

  var rand = Math.floor( Math.random() * deck.length);    
  name.push(deck[rand]);
  deck.splice(rand,1);
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

console.log(deck);