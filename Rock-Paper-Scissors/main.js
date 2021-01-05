let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById('userScore');
const computerScore_span = document.getElementById('computerScore');
const scoreboard_div = document.querySelector('.scoreboard');
const result_div = document.querySelector('.result');
const rock_div = document.getElementById('Rock');
const paper_div = document.getElementById('Paper');
const scissors_div = document.getElementById('Scissors');

//create timeout function for DIV glow

//create win function to increase user score
function win (userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    result_div.innerHTML = `${userChoice} beats ${computerChoice}. You win.`;
    document.getElementById(userChoice).classList.add('green-glow');
    setTimeout(function() {
        document.getElementById(userChoice).classList.remove('green-glow')}, 500);
}

//create lose function to increase computer score
function lose (userChoice, computerChoice) {
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    result_div.innerHTML = `${userChoice} loses to ${computerChoice}. Sorry!`;
    document.getElementById(userChoice).classList.add('red-glow');
    setTimeout(function() {
        document.getElementById(userChoice).classList.remove('red-glow')}, 500);
}

//create draw function to not increase either score
function draw (userChoice, computerChoice) {
    result_div.innerHTML = `${userChoice} ties ${computerChoice}.`;
    document.getElementById(userChoice).classList.add('gray-glow');
    setTimeout(function() {
        document.getElementById(userChoice).classList.remove('gray-glow')}, 500);
}

//create random number and find computer choice
function getComputerChoice() {
    let choices = ['Rock', 'Paper', 'Scissors'];
    let randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

//create game function
function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "PaperRock":
        case "RockScissors":
        case "ScissorsPaper":
            win(userChoice, computerChoice);
            break;
        case "RockPaper":
        case "PaperScissors":
        case "ScissorsRock":
            lose(userChoice, computerChoice);
            break;
        case "RockRock":
        case "PaperPaper":
        case "ScissorsScissors":
            draw(userChoice, computerChoice);
            break;
    }
}

//add event listeners
function main() {
    rock_div.addEventListener('click', function() {
        game('Rock');
    })
    paper_div.addEventListener('click', function() {
        game('Paper');
    })
    scissors_div.addEventListener('click', function() {
        game('Scissors');
    })
}

main();