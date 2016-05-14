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