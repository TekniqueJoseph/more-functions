const startGameBtn = document.getElementById('start-game-btn');
let h1 = document.querySelector('#heading');
let sub = document.querySelector('#sub')


function startGame() {
    console.log('The game is starting...')
    h1.innerHTML = 'The game is starting...'
}

// const person = {
//     greet: function greet(){
//         console.log('Rockin')
//         sub.innerHTML = ('Rockin')
//     }
// }

// person.greet()
startGameBtn.addEventListener('click', startGame);