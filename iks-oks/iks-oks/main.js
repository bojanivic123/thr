var buttons = document.querySelectorAll('button')
var pobednik = document.querySelector('p')

var redoviIKolone = [
    [buttons[0], buttons[1], buttons[2]],
    [buttons[3], buttons[4], buttons[5]],
    [buttons[6], buttons[7], buttons[8]],
    [buttons[0], buttons[3], buttons[6]],
    [buttons[1], buttons[4], buttons[7]],
    [buttons[2], buttons[5], buttons[8]],
    [buttons[0], buttons[4], buttons[8]],
    [buttons[2], buttons[4], buttons[6]],
]

var imaPobednika = false;

var trenutniIgrac = 'X'

// buttons.forEach(function(button){
//     button.addEventListener('click', function(){
//         button.textContent = 'gsd';
//     })
// })

// for(let button of buttons){
//     button.addEventListener('click', function(){
//         button.textContent = 'gsd';
//     })
// }\

for(var button of buttons){
    button.addEventListener('click', function(event){
        if(event.target.textContent || imaPobednika) {
            return
        }
        event.target.textContent = trenutniIgrac;
        proveriPobednika();
        promeniIgraca();
    })
}

function promeniIgraca(){
    if(trenutniIgrac === 'X'){
        trenutniIgrac = 'O'
    } else {
        trenutniIgrac = 'X'
    }
}

function proveriPobednika(){
    for(var el of redoviIKolone){
        var elem = el[0].textContent + el[1].textContent + el[2].textContent;
        if(elem === "XXX" || elem === "OOO"){
            imaPobednika = true
            pobednik.textContent = 'Igrac ' + trenutniIgrac + ' je pobednik'
            return
        }
    }
}

// drugi nacin

// var klase = ['.red1', '.red2', '.red3', '.col1', '.col2', '.col3', '.diag1', '.diag2'];

// function proveri2(){
//     for(var klasa of klase){
//         var el = document.querySelectorAll(klasa)
//         var elem = el[0].textContent + el[1].textContent + el[2].textContent;
//         if(elem === "XXX" || elem === "OOO"){
//             imaPobednika = true
//             pobednik.textContent = 'Igrac ' + trenutniIgrac + ' je pobednik'
//             return
//         }
//     }
// }

