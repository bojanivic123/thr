var btn = document.querySelector('button');
var userDiv = document.querySelector('.igrac');
var computerDiv = document.querySelector('#komp');
var playerPoints = 0;
var computerPoints = 0;
var userDidClick = false;

btn.style.display = 'none';

function showButton(){
    btn.style.top = Math.random() * (innerHeight - 100) + 'px';
    btn.style.left = Math.random() * (innerWidth - 100) + 'px';
    btn.style.display = 'block';
    setTimeout(hideButton, 1000);
}

function hideButton(){
    btn.style.display = 'none';
    if(!userDidClick){
        computerPoints++;
        computerDiv.textContent = 'kompjuter: ' + computerPoints;
    }
    userDidClick = false;
    setTimeout(showButton, 2000);
}

setTimeout(showButton, 2000);

btn.addEventListener('click', userPoints);

function userPoints(){
    if(userDidClick) return
    playerPoints++;
    userDiv.textContent = 'igrac: ' + playerPoints;
    userDidClick = true;
}