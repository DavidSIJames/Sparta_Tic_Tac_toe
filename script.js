document.addEventListener('DOMContentLoaded', () => {
// object creation
  const game = new Object();
  game.divs = document.getElementsByTagName('td');
  game.clicked =[0,0,0,0,0,0,0,0,0];
  game.markX= ['','','','','','','','',''];
  game.markY= ['','','','','','','','',''];
  game.outWin = [[0,3,6],[1,4,7],[2,5,6],[0,1,2],[3,4,5],[6,7,8],[0,4,8],[2,4,6]];
  game.turn = true;
  game.target = "";

  // Event Listener for button clicks
  for(i=0;i<game.divs.length;i++){
    game.divs[i].addEventListener('click',(e) =>{
        // if statement that checks if panel has been clicked before
      if (!e.target.classList.contains('X') && !e.target.classList.contains('O')) {
        if (game.turn == true){
          // adding X and X class to the panel
          e.target.innerHTML = "X";
          e.target.setAttribute('class','X');
          game.mark[i] = 'X';
          console.log(game.mark[i]);
          game.turn = !game.turn;
        } else {
          // adding O and O class to the panel
          e.target.innerHTML = "O";
          e.target.setAttribute('class','O');
          game.mark[i] = 'O';
          console.log(game.mark[i]);
          game.turn = !game.turn;
        }
      }
      // for loop for the win checker
      for (j = 0; j < game.mark.length; j++) {
        for ( k = 0; k < .length; k++) {

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
