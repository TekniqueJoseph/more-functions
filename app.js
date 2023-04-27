const startGameBtn = document.getElementById('start-game-btn');
let h1 = document.querySelector('#heading');
let h2 = document.querySelector('#sub');

const ROCK = 'ROCK'
const PAPER = 'PAPER'
const SCISSORS = 'SCISSORS'
const DEFAULT_USER_CHOICE = ROCK
let gameIsRunning = false;

const getPlayerChoice = function () {
    const selection = prompt(`${ROCK} ${PAPER} or ${SCISSORS}`, '').toUpperCase()
    if ( selection !== ROCK &&
         selection !== PAPER &&
         selection !== SCISSORS
    ) {
         alert(`Invalid choice. We chose ${DEFAULT_USER_CHOICE} for you.`)  
         return DEFAULT_USER_CHOICE
    }
    return selection
};

startGameBtn.addEventListener('click', function() {
    if(gameIsRunning) {
        return
    }
    gameIsRunning = true
    console.log('The game is starting...')
    const playerSelection = getPlayerChoice()
    console.log(playerSelection)
    h1.innerHTML = 'The game is starting...'
    h2.innerHTML = playerSelection
});
