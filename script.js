let player1 = { symbol : "O", name : "Loic" }; // le nom du joueur sera pour plus tard
let player2 = { symbol : "X", name : "Marie"};
let jeu = document.getElementById("game");
let count = 0; // compteur des coups. 9 max.
let player = player1.symbol; // Par défaut le player1

let competitor1 = document.getElementById("competitor1") // competitor 1 et 2 seront les zones d'affichage pour chaque joueur. "A toi de jouer !" ou encore "gagné !"
let competitor2 = document.getElementById("competitor2")

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

competitor1.textContent = "A toi de jouer !"

// FONCTIONS DIVERSES 

function switchPlayer(){ // Fonction permettant de switcher de joueur et donc de symbole. La fonction est appelée à chaque clic dans le HTML.

  if (player == player1.symbol){ // Simple condition pour switcher de joueur.

    player = player2.symbol 

    competitor2.textContent = "A toi de jouer !"
    competitor1.textContent = ""

  } else {
    
    player = player1.symbol

    competitor1.textContent = "A toi de jouer !"
    competitor2.textContent = ""

  }
  
}

function check(numbox){ // Appelée individuellement dans le HTML. à chaque clic pour la box concernée. 

  var numbox = document.getElementById(numbox); 

  if (!gameFinished){ // Si le jeu n'est pas déclaré comme fini (si y'a pas de vainqueur)

    switchPlayer() // On switche de joueur

    numbox.textContent = player; // Insère dans la box HTML qui a été cliquée le symbole du joueur en cours.

    count++; // Incrémentation du nbr de coups (9 max possible)
    
  } // Si le jeu est fini, il ne se passe plus rien. Il est ainsi figé.


  if (!gameFinished && count >= 5){ // Permettra de figer le vainqueur une fois le score atteint.
    
    checkScore(player) // Tant que le jeu n'est pas fini, on fait un checkscore à chaque coup. l'appelle à partir du coup numéro 5 pour économiser des ressources.  
  }

    
  if (count == 9 && !checkScore()){ // Si le nbr de coup est à 9 (soit le max) et que checkScore renvoie false, alors match nul.

    jeu.textContent = "Match nul !" // Quand il y a 9 coups de joués et pas de vainqueur, affichage de match nul et on déclare la fin du jeu.
    
    competitor2.textContent = ""
    competitor1.textContent = ""

    gameFinished = true;        
  }    
}

function newGame(){
  location.reload() // Fonction native Reload la page entièrement. Il faudra modifier ça au moment où on compte le nbr de victoires ou autre sinon aucune donnée ne sera stockée.
}

function checkScore(player){  // Check toutes les conditions possibles de victoire à chaque coup joué. Utilisée à partir du coup numéro 5 car c'est à partir du 5e coup qu'il peut y avoir un vainqueur.
  
  // Principe : on vérifie le contenu .innerText de chaque box. Si c'est un "O" ou un "X" Il faut que les 3 conditions soient réunies pour ressortir un True.

  // Conditions score en Ligne

  let condition1 = (b1.innerText == player && b2.innerText == player && b3.innerText == player) // ressort true ou false.
  let condition2 = (b4.innerText == player && b5.innerText == player && b6.innerText == player) // player c'est en fin de compte le joueur en cours avant le switch de symbole vu que la fct de switch est appelée après la fct checkscore dans le HTML
  let condition3 = (b7.innerText == player && b8.innerText == player && b9.innerText == player)
 
  // Condition score en colonne
 
  let condition4 = (b1.innerText == player && b4.innerText == player && b7.innerText == player)
  let condition5 = (b2.innerText == player && b5.innerText == player && b8.innerText == player)
  let condition6 = (b3.innerText == player && b6.innerText == player && b9.innerText == player)
 
  // Conditions pour les Diagonales
 
  let condition7 = (b1.innerText == player && b5.innerText == player && b9.innerText == player) 
  let condition8 = (b3.innerText == player && b5.innerText == player && b7.innerText == player)
 
  if (condition1 || condition2 || condition3 || condition4 || condition5 || condition6 || condition7 || condition8){ // Que des OU. Une doit être True pour être vainqueur.

    if (player == "X"){

      competitor1.textContent = "Gagné !"
      competitor2.textContent = ""

    } else {
      
      competitor2.textContent = "Gagné !"
      competitor1.textContent = ""
    }
    
    gameFinished = true; // La game passe en True pour figer uniquement le vainqueur. Checkscore ne sera plus appelée. 

    jeu.textContent = "Partie terminée !"

  }

}


