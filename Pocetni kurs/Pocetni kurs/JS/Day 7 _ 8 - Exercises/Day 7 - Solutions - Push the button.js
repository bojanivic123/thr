var button = document.querySelector('button');
var buttonClicked = false;
var playerPoints = 0;
var computerPoints = 0;

button.style.display = 'none';
setTimeout(showButton, 2000);

button.addEventListener('click', function () {
    buttonClicked = true;
});


function showButton() {
    button.style.left = Math.random() * (innerWidth - 100) + 'px';
    button.style.top = Math.random() * (innerHeight - 100) + 'px';
    button.style.display = '';
    setTimeout(hideButton, 1000);
}

function hideButton() {
    if (buttonClicked) {
        playerPoints++;
    } else {
        computerPoints++;
    }
    buttonClicked = false;
    
    button.style.display = 'none';
    setTimeout(showButton, 2000);
    
    updatePointsOnPage();
}

function updatePointsOnPage() {
    document.querySelector('.player-points').textContent = playerPoints;
    document.querySelector('.computer-points').textContent = computerPoints;
}
