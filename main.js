//Code each permutation of the game 
//let playerMove = "scissors";
//let playerMove2 = "scissors";
//let playerMove3 = "paper";
//let computerMove = "paper";
//let computerMove2 = "scissors";
//let computerMove3 = "paper";

// if playerMove === computerMove then it's a draw
//rock beats scissors
//scissors beats paper
//paper beats rock

/*let answers = ["rock", "paper", "scissors"]
function getWinner (player1, player2)*/

/*if (playerMove === computerMove) {
    console.log("Draw");
}*/


/*if (playerMove === "rock" && computerMove === "scissors") {
    console.log("Player wins");
} else if (playerMove === "scissors" && computerMove === "paper") { 
console.log("Player wins") 
} else if (playerMove === "paper" && computerMove === "rock") {
    console.log("Player wins")
} else if (playerMove === "scissors" && computerMove === "rock"){
    console.log("Computer wins")
} else if (playerMove === "paper" && computerMove === "scissors"){
    console.log("Computer wins")
}   else if (playerMove === "rock" && computerMove === "paper"){
        console.log("Computer wins")
} else {console.log ("draw") };*/

//write a function which takes two variables as parameters
//function should return a message to tell the winner

let numberOfGames = 0;
let numberofWins = 0;
let numberofDraws = 0;
let numberofLosses = 0;
function getWinner(player1, player2) {
    numberOfGames++;
    if (player1 === "rock" && player2 === "scissors") {
       numberofWins++; return "Rock crushes scissors, you win! Congratulations!";
    }   else if (player1 === "rock" && player2 === "lizard") {
        numberofWins++; return "Rock crushes lizard, you win! Congratulations!";
    } else if (player1 === "scissors" && player2 === "paper") { 
        numberofWins++; return "Scissors cut paper, you win! Congratulations!";
    } else if (player1 === "scissors" && player2 === "lizard") { 
        numberofWins++; return "Scissors decapitate lizard, you win! Congratulations!";
    } else if (player1 === "paper" && player2 === "rock") {
        numberofWins++; return "Paper wraps rock, you win! Congratulations!";
    } else if (player1 === "paper" && player2 === "Spock") {
        numberofWins++; return "Paper disproves Spock, you win! Congratulations!";
    } else if (player1 === "Spock" && player2 === "scissors") {
        numberofWins++; return "Spock smashes scissors, you win! Congratulations!";
    } else if (player1 === "Spock" && player2 === "rock") {
        numberofWins++; return "Spock vapourises rock, you win! Congratulations!"; 
    } else if (player1 === "lizard" && player2 === "Spock") {
        numberofWins++; return "Lizard poisons Spock, you win! Congratulations!";
    } else if (player1 === "lizard" && player2 === "paper") {
        numberofWins++; return "Lizard eats paper, you win! Congratulations!";
    } else if (player1 === "scissors" && player2 === "rock"){
        numberofLosses++; return "Rock crushes scissors, you lose! You suck!";
    } else if (player1 === "scissors" && player2 === "Spock"){
        numberofLosses++; return "Spock smashes scissors, you lose! You suck!";
    } else if (player1 === "paper" && player2 === "scissors"){
        numberofLosses++; return "Scissors cut paper, you lose! You suck!";
    } else if (player1 === "paper" && player2 === "lizard"){
        numberofLosses++; return "Lizard eats paper, you lose! You suck!";
    } else if (player1 === "rock" && player2 === "paper"){
        numberofLosses++; return "Paper wraps rock, you lose! You suck!"
    } else if (player1 === "rock" && player2 === "Spock"){
        numberofLosses++; return "Spock vapourises rock, you lose! You suck!"; 
    } else if (player1 === "Spock" && player2 === "lizard"){
        numberofLosses++; return "Lizard poisons Spock, you lose! You suck!";
    } else if (player1 === "Spock" && player2 === "paper"){
        numberofLosses++; return "Paper disproves Spock, you lose! You suck!";
    } else if (player1 === "lizard" && player2 === "scissors"){
        numberofLosses++; return "Scissors decapitate lizard, you lose! You suck!";
    } else if (player1 === "lizard" && player2 === "rock"){
        numberofLosses++; return "Rock crushes lizard, you lose! You suck!";
    } else numberofDraws++; return "Draw...better play again!"};
    
// prompt username
// use username in messages sent 
// restrict number of characters to 10 or fewer

    let userName = prompt("What is your name? Usernames are limited to ten characters.")
   while (userName.length > 10) {
    prompt("Please enter a username which is fewer than ten characters.");
   let userName = prompt("What is your name? Usernames are limited to ten characters.")
   }; 


// compare the player move to computer move   
// ask the player if they want to play again

    let playAgain = true;
    while(playAgain === true){
        
    let playerMove = prompt("Rock, paper, scissors, lizard or Spock?")
        const options = ["rock", "paper", "scissors", "lizard", "Spock"]
let computerMove = options[Math.floor(Math.random() * 5)]
        let result = getWinner(playerMove, computerMove)
         alert(result);
        alert(`${userName}, you have finished round ${numberOfGames} of Rock, paper, scissors, lizard, Spock. You have ${numberofWins} wins, ${numberofDraws} draws and ${numberofLosses} losses.`);
        playAgain = confirm("Do you want to continue playing?")
    }
// everytime we play a game , the count increases by one.
// Record wins, losses and draws(numbers).

   
