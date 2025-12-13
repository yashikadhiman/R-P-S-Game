const choices =["rock ✊🏼","paper 🖐🏼","scissors ✌🏼"];
const youDisplay = document.getElementById("youDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");

function playGame(youchoice){
    const computerChoice =choices[Math.floor(Math.random() *3)];
    let result ="";

    if(youchoice === computerChoice){
        result ="It's a TIE!";
    }
    else{
        switch(youchoice){
            case "rock ✊🏼 ":
            result = (computerChoice === "scissors ✌🏼")? "YOU WIN!" : "YOU LOSE!";
            break;
            case "paper 🖐🏼":
            result = (computerChoice === "rock ✊🏼")? "YOU WIN!" : "YOU LOSE!";
            break;
            case "scissors ✌🏼":
            result = (computerChoice === "paper 🖐🏼")? "YOU WIN!" : "YOU LOSE!";
            break;
        }
    }


    youDisplay.textContent = `You: ${youchoice}`;
    computerDisplay.textContent = `Computer: ${computerChoice}`;
    resultDisplay.textContent = result;
}

document.querySelector(".reset-button").addEventListener(
    "click", resetScore);
    function resetScore(){
        userScore = 0;
        computerScore = 0;
        youDisplay.textContent =` You: ${userScore}`;
    computerDisplay.textContent = `Computer: ${computerScore}`;
    resultDisplay.textContent = "Scores Reset!";
    }
