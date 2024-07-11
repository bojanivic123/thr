// 1.

var messageButton = document.querySelector('#message-button');
var messageInput = document.querySelector('#message-input');
messageButton.addEventListener('click', function () {
    console.log(messageInput.value);
});


// 2.

var messageButton = document.querySelector('#message-button');
var inputs = document.querySelectorAll('input');

messageButton.addEventListener('click', function () {
    for (var input of inputs) {
        console.log(input.value);
    }
});


// 3.

var colorButtons = document.querySelectorAll('.colors button');
var colorOutputDiv = document.querySelector('#color-output');
for (var colorButton of colorButtons) {
    colorButton.addEventListener('click', function (event) {
        var buttonText = event.target.textContent;
        if (buttonText === 'Crvena') {
            colorOutputDiv.style.backgroundColor = 'red';
        } else if (buttonText === 'Zuta') {
            colorOutputDiv.style.backgroundColor = 'yellow';
        } else if (buttonText === 'Plava') {
            colorOutputDiv.style.backgroundColor = 'blue';
        } else if (buttonText === 'Zelena') {
            colorOutputDiv.style.backgroundColor = 'green';
        } else {
            console.log('Nepoznata boja');
        }
    });
}


// 4.

var buttonToHide = document.querySelector('.hiding button');
buttonToHide.addEventListener('click', function (event) {
    event.target.style.display = 'none';
});


// 5.

var buttonToHide = document.querySelector('.hiding button');
buttonToHide.addEventListener('click', function (event) {
    setTimeout(function () {
        event.target.style.display = 'none';
    }, 5000);
});


// 6.

function printButtonContentOnClick(button) {
    button.addEventListener('click', function (event) {
        console.log(event.target.textContent);
    });
}

var buttonToHide = document.querySelector('.hiding button');
printButtonContentOnClick(buttonToHide);


// 7.

var input = document.querySelector('.input-to-span input');
var updateButton = document.querySelector('.input-to-span button');
var outputSpan = document.querySelector('.input-to-span span');

updateButton.addEventListener('click', function () {
    outputSpan.textContent = input.value;
});


// 8.

var list = document.querySelector('.list-items ul');
var button = document.querySelector('.list-items button');

button.addEventListener('click', function () {
    var newItem = document.createElement('li');
    newItem.textContent = 'New item';
    list.appendChild(newItem);
});


// 9.

var list = document.querySelector('.list-items ul');
var input = document.querySelector('.list-items input');
var button = document.querySelector('.list-items button');

button.addEventListener('click', function () {
    var newItem = document.createElement('li');
    newItem.textContent = input.value;
    list.appendChild(newItem);
});


// 10.

var list = document.querySelector('.list-items ul');
var input = document.querySelector('.list-items input');
var button = document.querySelector('.list-items button');

button.addEventListener('click', function () {
    var newItem = document.createElement('li');
    newItem.textContent = input.value;
    input.value = '';
    list.appendChild(newItem);
});


// 11.

var list = document.querySelector('.list-items-with-editing ul');
var input = document.querySelector('.list-items-with-editing input');
var editButtons = document.querySelectorAll('.list-items-with-editing ul button');
var updateButton = document.querySelector('.list-items-with-editing .update-button');

var currentListItem = null;


for (var editButton of editButtons) {
    editButton.addEventListener('click', function (event) {
        currentListItem = event.target.parentElement; // <li>
        input.value = currentListItem.querySelector('span').textContent;
    });
}

updateButton.addEventListener('click', function () {
    if (currentListItem === null) {
        currentListItem = createNewItem();
    }
    var currentSpan = currentListItem.querySelector('span');
    currentSpan.textContent = input.value;
    input.value = '';
    currentListItem = null;
});


function createNewItem() {
    var newItem = document.createElement('li');
    
    newItem.appendChild(document.createElement('span'));
    
    var newEditButton = document.createElement('button');
    newEditButton.textContent = 'Edit';
    newItem.appendChild(newEditButton);
    
    list.appendChild(newItem);
    return newItem;
}