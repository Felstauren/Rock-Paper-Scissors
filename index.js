const choices = ["rock", "paper", "scissors"];
const computerSelection = ComputerChoice();
const playerSelection = "paper";
console.log(PlayRound())


function ComputerChoice(){
  return choices[Math.floor(Math.random()*choices.length)]
}

function PlayRound(){
  if (computerSelection == playerSelection){
  return console.log("Draw!")
}

  else if (computerSelection == "rock"){
  return(playerSelection == "paper") ? console.log("You Win!") : console.log("You Lose!")
}  

  else if (computerSelection == "paper"){
  return(playerSelection == "scissors") ? console.log("You Win!") : console.log("You Lose!")
} 
  
  else if (computerSelection == "scissors"){
  return(playerSelection == "rock") ? console.log("You Win!") : console.log("You Lose!")
}
}
