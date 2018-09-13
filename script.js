document.addEventListener('DOMContentLoaded', () => {

  const game = new Object();
  game.divs = document.getElementsByTagName('td');
  game.clicked =[0,0,0,0,0,0,0,0,0];
  game.mark = ['','','','','','','','',''];
  game.outWin = []
  game.inWin = []
  game.turn = true;
  game.target = "";


  for(i=0;i<game.divs.length;i++){
    game.divs[i].addEventListener('click',(e) =>{
      if (!e.target.classList.contains('X') && !e.target.classList.contains('O')) {
        if (game.turn == true){
          e.target.innerHTML = "X";
          e.target.setAttribute('class','X');
          game.mark[i] = 'X';
          console.log(game.mark[i]);
          game.turn = !game.turn;
        } else {
          e.target.innerHTML = "O";
          e.target.setAttribute('class','O');
          game.mark[i] = 'O';
          console.log(game.mark[i]);
          game.turn = !game.turn;
        }
      }
      for (var j = 0; j < game.mark.length; j++) {
        for (var k = 0; k < array.length; k++) {

        }
      }
    })
  }
  document.getElementById('reset').addEventListener('click',() =>{
    for ( i = 0; i < game.divs.length; i++) {
      game.divs[i].innerHTML ='';
      game.divs[i].setAttribute('class','');

    }
    game.turn = true;
  })


});
