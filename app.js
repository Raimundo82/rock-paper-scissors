let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice() {
    const choices = ["r", "p", "s"];
    const computerChoice = Math.floor(Math.random() * 3);
    return choices[computerChoice];
}

function convertToWord(letter) {
    if (letter === "r") return "Pedra";
    if (letter === "p") return "Papel";
    return "Tesoura"
}

function getSubWords(type) {
    if (type === 'user') return "user".fontsize(3).sub();
    if (type === 'comp') return "computer".fontsize(3).sub();
}

function win(userChoice, computerChoice) {
    const userChoice_div = document.getElementById(userChoice);
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(userChoice)}${getSubWords('user')} venceu ${convertToWord(computerChoice)}${getSubWords('comp')}  GANHASTE!!`;
    userChoice_div.classList.add('green-glow');
    setTimeout(() => userChoice_div.classList.remove('green-glow'), 300);
}


function loose(userChoice, computerChoice) {
    const userChoice_div = document.getElementById(userChoice);
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    userScore_span.innerHTML = userScore;
    result_p.innerHTML = `${convertToWord(userChoice)}${getSubWords('user')} perdeu para ${convertToWord(computerChoice)}${getSubWords('comp')}  PERDESTE..`;
    userChoice_div.classList.add('red-glow');
    setTimeout(() => userChoice_div.classList.remove('red-glow'), 300);
}

function draw(userChoice, computerChoice) {
    const userChoice_div = document.getElementById(userChoice);
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} empatou com ${convertToWord(computerChoice)}${smallCompWord}  EMPATARAM.`;
    userChoice_div.classList.add('gray-glow');
    setTimeout(() => userChoice_div.classList.remove('gray-glow'), 300);
}

function game(userChoice) {
    computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "pr":
        case "rs":
        case "sp":
            win(userChoice, computerChoice)
            break;
        case "rp":
        case "sr":
        case "ps":
            loose(userChoice, computerChoice)
            break;
        case "rr":
        case "ss":
        case "pp":
            draw(userChoice, computerChoice)
            break;
    }
    if (userScore === 10) {
        result_p.innerHTML = `PARABENS GANHASTE CONTRA AO COMPUTADOR!!`;
        setTimeout(() => location.reload(), 3000);


    } else if (computerScore === 10) {
        result_p.innerHTML = `POUCA SORTE! ACABASTE DE PERDER O JOGO CONTRA O COMPUTADOR!!`;
        setTimeout(() => location.reload(), 3000);

    }
}


function main() {
    rock_div.addEventListener('click', () => game("r"))

    paper_div.addEventListener('click', () => game("p"))

    scissors_div.addEventListener('click', () => game("s"))
}

main();