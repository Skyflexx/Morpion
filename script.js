let player1 = "O";
let player2 = "X";
let jeu = document.getElementById("game");
let count = 0; // compteur des coups. 9 max.
let player = player1; // Par défaut le player1


function switchPlayer(){ // Fonction permettant de switcher de joueur et donc de symbole.

  if (player == player1){
    player = player2

  } else {
    player = player1
  }

}


function check(numbox){

    var numbox = document.getElementById(numbox);

    numbox.textContent = player;

    count++;
  
    if (count == 9) jeu.textContent = "Terminé !" // Quand il y a 9 coups de joués, alors on fait le calcul. 
 
}


function newGame(){
    location.reload()
}
