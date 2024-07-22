
img_rock = document.querySelector("#rock");
img_scissor = document.querySelector("#scissor");
img_paper = document.querySelector("#paper");

computer_rock = document.querySelector("#computer-choice-img_rock");
computer_scissor = document.querySelector("#computer-choice-img_scissor");
computer_paper = document.querySelector("#computer-choice-img_paper");

humanScore = 0;
computerScore = 0;

document.querySelector("#humanScore").innerHTML = `humanScore: ${humanScore}`;
document.querySelector("#computerScore").innerHTML = `computerScore: ${computerScore}`;

img_rock.addEventListener("click", e => {
    UserChoice = "rock";
    computerChoice = randomComputerChoise();
    UIComputerChoiceCheck(computerChoice);
    checkAnswer(computerChoice, UserChoice);
});


img_paper.addEventListener("click", e => {
    UserChoice = "paper";
    computerChoice = randomComputerChoise();
    UIComputerChoiceCheck(computerChoice);
    checkAnswer(computerChoice, UserChoice);
});


img_scissor.addEventListener("click", e => {
    UserChoice = "scissor";
    computerChoice = randomComputerChoise();
    UIComputerChoiceCheck(computerChoice);
    checkAnswer(computerChoice, UserChoice);
    
});



function randomComputerChoise() {
    const choices = ["rock", "paper", "scissor"];
    randomIndex = Math.floor(Math.random() *choices.length);
    return choices[randomIndex]
    
}


function checkAnswer(computerChoice, UserChoice){
    if (computerChoice === UserChoice) {
        alert("It's a tie!");
    } else if ((computerChoice === "rock" && UserChoice === "paper") ||
                (computerChoice === "scissor" && UserChoice === "rock") ||
                (computerChoice === "paper" && UserChoice === "scissor")) {
        alert("You win!");
        humanScore++;
        computerScore--;
        document.querySelector("#humanScore").innerHTML = `humanScore: ${humanScore}`;
        document.querySelector("#computerScore").innerHTML = `computerScore: ${computerScore}`;
    } else {
        alert("You lose!");
        humanScore--;
        computerScore++;
        document.querySelector("#humanScore").innerHTML = `humanScore: ${humanScore}`;
        document.querySelector("#computerScore").innerHTML = `computerScore: ${computerScore}`;
    }
};


function UIComputerChoiceCheck(computerChoice) {
    if (computerChoice === "rock") {
        computer_rock.style.display = "block";
        computer_scissor.style.display = "none";
        computer_paper.style.display = "none";
    } else if (computerChoice === "paper")  {
        computer_rock.style.display = "none";
        computer_scissor.style.display = "none";
        computer_paper.style.display = "block";
    } else if (computerChoice === "scissor") {
        computer_rock.style.display = "none";
        computer_scissor.style.display = "block";
        computer_paper.style.display = "none";
    }
}

        