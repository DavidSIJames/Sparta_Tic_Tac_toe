document.addEventListener('DOMContentLoaded', () => {
// object creation
  const game = new Object();
  game.divs = document.getElementsByTagName('td');
  game.showTurn = document.getElementsByClassName('playerTurn');
  game.clicked =0;
  game.markX= [];
  game.markO= [];
  game.winCon = [[0,3,6],[1,4,7],[2,5,8],[0,1,2],[3,4,5],[6,7,8],[0,4,8],[2,4,6]];
  game.turn = true;
  game.target = "";
  game.winCount = 0;
  // for loop for the win checker
  game.winCheck = (movesArray,player) =>{
    game.clicked++;
    for (j = 0; j < game.winCon.length; j++) {
      game.winCount = 0;
      for ( k = 0; k < game.winCon[j].length; k++) {
        if (movesArray.indexOf(game.winCon[j][k]) !==-1) {
          game.winCount++;
        }
        if(game.winCount ===3){
          alert(`Congrats ${player}, you win!`);

        }
      }
    }
  }

  // Event Listener for button clicks
  for(i=0;i<game.divs.length;i++){
    game.divs[i].addEventListener('click',(e) =>{
        // if statement that checks if panel has been clicked before
      if (!e.target.classList.contains('X') && !e.target.classList.contains('O')) {
        if (game.turn){
          // adding X and X class to the panel
          game.showTurn[0].innerText = "It is O's turn";
          e.target.innerHTML = "X";
          game.markX.push(Number(e.target.attributes[0].value));
          e.target.setAttribute('class','X');
          console.log(game.markX);
          game.turn = !game.turn;
          game.winCheck(game.markX,'X');
        } else {
          // adding O and O class to the panel
          game.showTurn[0].innerText = "It is X's turn";
          e.target.innerHTML = "O";
          e.target.setAttribute('class','O');
          game.markO.push(Number(e.target.attributes[0].value));
          console.log(game.markO);
          game.turn = !game.turn;
          game.winCheck(game.markO,'O');
        }
      }

    })
  }
  // click Event for the reset button
  document.getElementById('reset').addEventListener('click',() =>{
    for ( i = 0; i < game.divs.length; i++) {
      game.divs[i].innerHTML ='';
      game.divs[i].setAttribute('class','');
    }
    game.turn = true;
  })


});
