// in the name of god
const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay= document.getElementById('result');
const possibleChoices = document.querySelectorAll('.choices');
const scoreP1 = document.getElementById('p1');
const scoreP2 = document.getElementById('p2');
let userChoice;
let computerChoice;
possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener('click' , (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    showResult();
}));
let colorClass = [
    "text-secondary",
    "text-info",
    "text-warning",
    "text-muted",
    "text-success",
    "text-danger"
]
function removeUserColorClass() {
    userChoiceDisplay.classList.remove(colorClass[0])
    userChoiceDisplay.classList.remove(colorClass[1])
    userChoiceDisplay.classList.remove(colorClass[2])
}
function removeBotColorClass() {
    computerChoiceDisplay.classList.remove(colorClass[0])
    computerChoiceDisplay.classList.remove(colorClass[1])
    computerChoiceDisplay.classList.remove(colorClass[2])
}
function removeResultColorClass() {
    resultDisplay.classList.remove(colorClass[3])
    resultDisplay.classList.remove(colorClass[4])
    resultDisplay.classList.remove(colorClass[5])
}
function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1;

    if (randomNumber === 1) {
        computerChoice = 'stone';
    }else if (randomNumber === 2) {
        computerChoice = 'paper';
    }else if (randomNumber === 3) {
        computerChoice = 'scissors';
    }
    computerChoiceDisplay.innerHTML = ""   
    computerChoiceDisplay.innerHTML = computerChoice;
    if(computerChoiceDisplay.innerHTML == "stone") {
        computerChoiceDisplay.innerHTML = "سنگ"
        removeBotColorClass()
        computerChoiceDisplay.classList.add(colorClass[0])
    }
    if(computerChoiceDisplay.innerHTML == "paper") {
        computerChoiceDisplay.innerHTML = "کاغذ"
        removeBotColorClass()
        computerChoiceDisplay.classList.add(colorClass[1])
    }
    if(computerChoiceDisplay.innerHTML == "scissors") {
        computerChoiceDisplay.innerHTML = "قیچی"
        removeBotColorClass()
        computerChoiceDisplay.classList.add(colorClass[2 ])
    }
    userChoiceDisplay.innerHTML = ""   
    userChoiceDisplay.innerHTML = userChoice;
    if(userChoiceDisplay.innerHTML == "stone") {
        userChoiceDisplay.innerHTML = "سنگ"
        removeUserColorClass()
        userChoiceDisplay.classList.add(colorClass[0])
    }
    if(userChoiceDisplay.innerHTML == "paper") {
        userChoiceDisplay.innerHTML = "کاغذ"
        removeUserColorClass()
        userChoiceDisplay.classList.add(colorClass[1])
    }
    if(userChoiceDisplay.innerHTML == "scissors") {
        userChoiceDisplay.innerHTML = "قیچی"
        removeUserColorClass()
        userChoiceDisplay.classList.add(colorClass[2])
    }
    }
let sp1 = 0;
let sp2 = 0;
function showResult() {
    let result;
    if (computerChoice == userChoice) {
        result = 0;
    }
    if (computerChoice == "stone" && userChoice == "paper") {
        result = 1;
    }
    if (computerChoice == "stone" && userChoice == "scissors") {
        result = 2;
    }
    if (computerChoice == "paper" && userChoice == "scissors") {
        result = 1;
    }
    if (computerChoice == "paper" && userChoice == "stone") {
        result = 2;
    }
    if (computerChoice == "scissors" && userChoice == "stone") {
        result = 1;
    }
    if (computerChoice == "scissors" && userChoice == "paper") {
        result = 2;
    }
    function removeResultColorClass() {
        resultDisplay.classList.remove(colorClass[3])
        resultDisplay.classList.remove(colorClass[4])
        resultDisplay.classList.remove(colorClass[5])
    }
    let showResult
    if (result == 0) {
        showResult = "مساوی"
        removeResultColorClass()
        resultDisplay.classList.add(colorClass[3])
    }
    if (result == 1) {
        showResult = "شما بردید"
        removeResultColorClass()
        resultDisplay.classList.add(colorClass[4])
    }
    if (result == 2) {
        showResult = "شما باختید"
        removeResultColorClass()
        resultDisplay.classList.add(colorClass[5])
    }
    if (result == 1) {
        sp2 ++;
    }
    if (result == 2) {
        sp1 ++;
    }
    resultDisplay.innerHTML = showResult;
    scoreP1.innerHTML = sp1;
    scoreP2.innerHTML = sp2;
}
function resetScores() {
    sp1 = 0;
    sp2 = 0;
    scoreP1.innerHTML = sp1;
    scoreP2.innerHTML = sp2;
}