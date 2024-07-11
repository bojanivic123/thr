// 1.

var currentSymbol = 'X';

var buttons = document.querySelectorAll('button');
for (var button of buttons) {
    button.addEventListener('click', function(event) {
        // provera da li je dugme vec kliknuto
        if (event.target.textContent !== '') {
            return;
        }

        event.target.textContent = currentSymbol;
        if (currentSymbol === 'X') {
            currentSymbol = 'O';
        } else {
            currentSymbol = 'X';
        }
    });
}




// 2.

var currentSymbol = 'X';
var someoneWon = false;

var buttons = document.querySelectorAll('button');
for (var button of buttons) {
    button.addEventListener('click', function(event) {
        // provera da li je igra gotova, ili je dugme vec kliknuto
        if (someoneWon || event.target.textContent !== '') {
            return;
        }

        event.target.textContent = currentSymbol;
        if (currentSymbol === 'X') {
            currentSymbol = 'O';
        } else {
            currentSymbol = 'X';
        }

        checkIfSomeoneWon();
    });
}

function checkIfSomeoneWon() {
    // redovi i kolone
    var lineClasses = ['.row-1', '.row-2', '.row-3', '.col-1', '.col-2', '.col-3'];
    for (var lineClass of lineClasses) {
        var lineButtons = document.querySelectorAll(lineClass);
        if (lineButtons[0].textContent !== ''
            && lineButtons[0].textContent === lineButtons[1].textContent
            && lineButtons[0].textContent === lineButtons[2].textContent) {
                someoneWon = true;
                var message = document.querySelector('.message');
                message.textContent = 'Igrac ' + lineButtons[0].textContent + ' je pobedio!';
        }
    }

    // dijagonale
    var diagonalSelectors = [
        '.row-1.col-1, .row-2.col-2, .row-3.col-3',
        '.row-1.col-3, .row-2.col-2, .row-3.col-1'
    ]
    for (var diagonalSelector of diagonalSelectors) {
        var diagonalButtons = document.querySelectorAll(diagonalSelector);
        if (diagonalButtons[0].textContent !== ''
            && diagonalButtons[0].textContent === diagonalButtons[1].textContent
            && diagonalButtons[0].textContent === diagonalButtons[2].textContent) {
                someoneWon = true;
                var message = document.querySelector('.message');
                message.textContent = 'Igrac ' + diagonalButtons[0].textContent + ' je pobedio!';
        }
    }
}