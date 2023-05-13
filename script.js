let player1 = { symbol : "O", name : "Loic" };
let player2 = { symbol : "X", name : "Marie"};
let jeu = document.getElementById("game");
let count = 0; // compteur des coups. 9 max.
let player = player1.symbol; // Par défaut le player1
let winner = document.getElementById("winner")

let b1 = document.getElementById("box1")
let b2 = document.getElementById("box2")
let b3 = document.getElementById("box3")
let b4 = document.getElementById("box4")
let b5 = document.getElementById("box5")
let b6 = document.getElementById("box6")
let b7 = document.getElementById("box7")
let b8 = document.getElementById("box8")
let b9 = document.getElementById("box9")

let gameFinished = false

function switchPlayer(){ // Fonction permettant de switcher de joueur et donc de symbole.

  if (player == player1.symbol){
    player = player2.symbol

  } else {
    player = player1.symbol
  }

}

function check(numbox){

  var numbox = document.getElementById(numbox);

  numbox.textContent = player;

  count++;   

  if (!gameFinished){ // Permettra de figer le vainqueur une fois le score atteint.
    
    checkScore(player)   

  }
  
  
  if (count == 9 && !checkScore()){ // Si le nbr de coup est à 9 (soit le max) et que checkScore renvoie false, alors match nul.

    jeu.textContent = "Match nul !" // Quand il y a 9 coups de joués, alors on fait le calcul.       

  }    
}

function newGame(){
  location.reload() // Reload la page
}

 
 
function checkScore(player){  // Check toutes les conditions possibles de victoire à chaque coup joué.

  // Conditions score en Ligne

  let condition1 = (b1.innerText ==  player && b2.innerText == player && b3.innerText == player) // ressort true ou false.
  let condition2 = (b4.innerText ==  player && b5.innerText == player && b6.innerText == player)
  let condition3 = (b7.innerText ==  player && b8.innerText == player && b9.innerText == player)
 
  // Condition score en colonne
 
  let condition4 = (b1.innerText ==  player && b4.innerText == player && b7.innerText == player)
  let condition5 = (b2.innerText ==  player && b5.innerText == player && b8.innerText == player)
  let condition6 = (b3.innerText ==  player && b6.innerText == player && b9.innerText == player)
 
  // Diagonales
 
  let condition7 = (b1.innerText ==  player && b5.innerText == player && b9.innerText == player) 
  let condition8 = (b3.innerText ==  player && b5.innerText == player && b7.innerText == player)

 
  if (condition1 || condition2 || condition3 || condition4 || condition5 || condition6 || condition7 || condition8){
    
    winner.textContent = "Vainqueur : " + player + " !"    

    b1.click()
    b2.click()
    b3.click()
    b4.click()
    b5.click()
    b6.click()
    b7.click()
    b8.click()
    b9.click()

    gameFinished = true;

  }

}


// To do list :

// Afficher quel joueur doit jouer son coup "X à toi !"

// Faire en sorte qu'une fois la partie finie, on ne puisse plus cliquer. Pour l'instant ça affiche le dernier symbole utilisé.

// Réussir à afficher le nom du vainqueur.

// Bonus : Scoring, animations.