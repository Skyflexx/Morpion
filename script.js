let player1 = "O";
let player2 = "X";
let jeu = document.getElementById("game");
let count = 0; // compteur des coups. 9 max.
let player = player1; // Par défaut le player1
let winner = document.getElementById("winner")



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

   
  
    if (count == 9){

        jeu.textContent = "Terminé !" // Quand il y a 9 coups de joués, alors on fait le calcul. 

        checkScore()

    } 
 
}


function newGame(){
    location.reload()
}


function checkScore(){

   
    let b1 = document.getElementById("box1")
    let b2 = document.getElementById("box2")
    let b3 = document.getElementById("box3")
    let b4 = document.getElementById("box4")
    let b5 = document.getElementById("box5")
    let b6 = document.getElementById("box6")
    let b7 = document.getElementById("box7")
    let b8 = document.getElementById("box8")
    let b9 = document.getElementById("box9")

    // Conditions score en Ligne

    let condition1 = (b1.innerText ==  "O" && b2.innerText == "O" && b3.innerText == "O") // ressort true ou false.
    let condition2 = (b4.innerText ==  "O" && b5.innerText == "O" && b6.innerText == "O")
    let condition3 = (b7.innerText ==  "O" && b8.innerText == "O" && b9.innerText == "O")

    // Condition score en colonne

    let condition4 = (b1.innerText ==  "O" && b4.innerText == "O" && b7.innerText == "O")
    let condition5 = (b2.innerText ==  "O" && b5.innerText == "O" && b8.innerText == "O")
    let condition6 = (b3.innerText ==  "O" && b6.innerText == "O" && b9.innerText == "O")

    // Diagonales

    let condition7 = (b1.innerText ==  "O" && b5.innerText == "O" && b9.innerText == "O") 
    let condition8 = (b3.innerText ==  "O" && b5.innerText == "O" && b7.innerText == "O")

   

    

    if (condition1 || condition2 || condition3 || condition4 || condition5 || condition6 || condition7 || condition8){

        winner.textContent = "Vainqueur, joueur 1 !"

    }






}