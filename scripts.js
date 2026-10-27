let nextPlayer = 'X';

document.getElementById('next-lbl').innerText = nextPlayer;

createGameBoard();

function createGameBoard()
{
    // Create nine buttons
    for (let i = 1; i <= 9; i++) {
        let cell = document.getElementById('c' + i);
        let button = document.createElement('button');
        button.innerText = '[ ]';
        cell.appendChild(button);
    }

    // Add click listeners
    let btns = document.querySelectorAll('button');

    for (let i = 0; i < btns.length; i++) {
        btns[i].addEventListener('click', takeCell);
    }
}

function takeCell(event)
{
    let button = event.target;

    button.innerText = '[' + nextPlayer + ']';
    button.disabled = true;

    if (nextPlayer === 'X') {
        nextPlayer = 'O';
    } else {
        nextPlayer = 'X';
    }

    document.getElementById('next-lbl').innerText = nextPlayer;

    if (isGameOver()) {
        document.getElementById('game-over-lbl').innerHTML =
            '<h1>Game Over</h1>';
    }
}

function isGameOver()
{
    let buttons = document.querySelectorAll('button');

    for (let i = 0; i < buttons.length; i++) {
        if (buttons[i].disabled === false) {
            return false;
        }
    }

    return true;
}