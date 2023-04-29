const startGameBtn = document.getElementById('start-game-btn');
let heading = document.querySelector('#heading');
let player = document.querySelector('#player');
let computer = document.querySelector('#computer');
let champion = document.querySelector('#champion')

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_USER_CHOICE = ROCK;
const RESULT_DRAW = 'DRAW';
const RESULT_PLAYER_WINS = 'PLAYER_WINS';
const RESULT_COMPUTER_WINS = 'COMPUTER_WINS';
let gameIsRunning = false;

const getPlayerChoice = () => {
    const selection = prompt(`${ROCK} ${PAPER} or ${SCISSORS}`, '').toUpperCase()
    if ( selection !== ROCK &&
         selection !== PAPER &&
         selection !== SCISSORS
    ) {
         alert(`Invalid choice. We chose ${DEFAULT_USER_CHOICE} for you.`)  
         return;
    }
    return selection
};

const getComputerChoice = () => {
    const randomValue = Math.random();
    if (randomValue < 0.34) {
        return ROCK;
    } else if ( randomValue < 0.67){
        return PAPER;
    } else {
        return SCISSORS
    }
};

const getWinner = (cChoice, pChoice = DEFAULT_USER_CHOICE) => 
    cChoice === pChoice 
        ? RESULT_DRAW 
        : (cChoice === ROCK && pChoice === PAPER) || 
          (cChoice === PAPER && pChoice === SCISSORS) ||
          (cChoice === SCISSORS && pChoice === ROCK) 
        ? RESULT_PLAYER_WINS 
        : RESULT_COMPUTER_WINS;

    // if (cChoice === pChoice) {
    //     return RESULT_DRAW;
    // } else if (
    //     (cChoice === ROCK && pChoice === PAPER) || 
    //     (cChoice === PAPER && pChoice === SCISSORS) ||
    //     (cChoice === SCISSORS && pChoice === ROCK)
    // ) {
    //     return RESULT_PLAYER_WINS
    // } else {
    //     return RESULT_COMPUTER_WINS
    // }

const clear = () => {
    return heading.innerHTML = 'Hello'
    // player.innerHTML = ''
    // computer.innerHTML = ''
    // champion.innerHTML = ''
}

startGameBtn.addEventListener('click', () => {
    if(gameIsRunning) {
        return
    }
    gameIsRunning = true
    console.log('The game is starting...')
    const playerChoice = getPlayerChoice()
    const computerChoice = getComputerChoice()
    heading.innerHTML = 'The game is starting...'
    player.innerHTML = `You chose ${playerChoice || DEFAULT_USER_CHOICE}.`
    computer.innerHTML = `The CPU chose ${computerChoice}.`
    let winner;
    if (playerChoice) {
        winner = getWinner(computerChoice, playerChoice)
    } else {
        winner = getWinner(computerChoice)
    }
   
    champion.innerHTML = `The Result Is ${winner}!`
    let message = `You picked ${playerChoice || DEFAULT_USER_CHOICE}, the CPU picked ${computerChoice}. The result is`
    if (winner === RESULT_DRAW) {
        message = message + ' a draw.';
    } else if (winner === RESULT_PLAYER_WINS) {
        message = message + ' You won!';
    } else {
        message = message + ' The CPU won.'
    }
    alert(message)
    gameIsRunning = false;
});

// not related to game
// rest operator
const sumUp = (a,b,...numbers) => {
    const validateNumber = (number) => {
        return isNaN(number) ? 1 : number;
    }; 

    let sum = 0;
    console.log('a',a)
    console.log('b',b)
    console.log('the rest', numbers)
    for (const num of numbers) {
        sum += validateNumber(num)
    }
    return sum
}

const subtractUp = function(...numbers) {
    let sum = 0;
    console.log(numbers)
    for (const num of arguments) {
        sum -= num
    }
    return sum

}

console.log(sumUp(1,5,'dfd' ,-3,6,10))
console.log(sumUp(1,5,10,-3,6,10, 25, 88))
console.log(subtractUp(1,10,15,21))

// callback function
function greeting(name) {
    console.log(`Hello, ${name}`);
  }
  
  function processUserInput(callback) {
    const name = prompt("Please enter your name.");
    callback(name);
  }
  
  processUserInput(greeting);
  
