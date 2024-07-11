// function prodjiKrozNiz(matrix, koraci){
//     var red = 0;
//     var kolona = 0;
//     for(var korak of koraci){
//         if(korak === 'down'){
//             if(red === matrix.length - 1){
//                 red = 0;
//             }else{
//                 red++;
//             }
//         } else if(korak === 'up'){
//             if(red === 0){
//                 red = matrix.length - 1;
//             }else {
//                 red--;
//             }
//         } else if(korak === 'right'){
//             if(kolona === matrix[red].length - 1){
//                 kolona = 0;
//             }else{
//                 kolona++;
//             }
//         } else if(korak === 'left'){
//             if(kolona === 0){
//                 kolona = matrix[red].length - 1
//             }else{
//                 kolona--;
//             }
//         }
//     }

//     return matrix[red][kolona];
// }

// var matrix = [
//     [1, 2, 3, 4],
//     [5, 6, 7, 8],
//     [9, 10, 11, 12],
//     [13, 14, 15, 16]
// ];

// var koraci = ['down', 'down', 'right', 'down', 'right', 'up', 'left', 'left', 'left', 'down', 'down'];

// console.log(prodjiKrozNiz(matrix, koraci));

// function abs(n){
//     if(n < 0){
//         return -n;
//     }
//     return n;
// }

// function nadjiNajmanjuRazliku(niz){
//     var najmanjaRazlika = abs(niz[0] - niz[1]);
//     var prviBroj;
//     var drugiBroj;
//     for(var i = 0; i < niz.length; i++){
//         for(var j = 0; j < niz.length; j++){
//             if(i !== j && abs(niz[i] - niz[j]) < najmanjaRazlika){
//                 najmanjaRazlika = abs(niz[i] - niz[j])
//                 prviBroj = niz[i]
//                 drugiBroj = niz[j]
//             }
//         }
//     }

//     return [prviBroj, drugiBroj];
// }

// // console.log(nadjiNajmanjuRazliku([5, 6, 1, 9, 5]))

// function nizovi(a1, a2){
//     var noviNiz = [];
//     for(var i = 0; i < a2.length; i++){
//         var brojac = 0;
//         for(var j = 0; j < a1.length; j++){
//             if(a2[i] === a1[j]){
//                 brojac++;
//             }
//         }
//         noviNiz.push(brojac);
//     }

//     return noviNiz;
// }

// console.log(nizovi([1,3,4], [4, 3, 2, 1]))

// var exampleFunction = function() {
// 	console.log('Example function');
// }

// console.log(exampleFunction);

// exampleFunction();
// console.log(exampleFunction());

// var exampleFunctionCopy = exampleFunction;
// exampleFunctionCopy();

// function loguj(a, b){
//     console.log(a + b)
// }

// setTimeout(loguj, 2000, 4, 5);

// var button = document.querySelector('button');

// function exampleFunction(){
//     console.log('clicked');
// }

// button.addEventListener('click', exampleFunction);

// var niz = ['marko','zarko','milos','gsdjhk'];

// function loguj(el, index, niz){
//     console.log(el)
//     console.log(index)
//     console.log(niz)
// }

// function forEach2(callback){
//     for(var i = 0; i < niz.length; i++){
//         callback(niz[i], i, niz)
//     }
// }

// forEach2(loguj)

// var input = document.querySelector('input');
// input.addEventListener('input', function(){
//     if(input.value.toLowerCase() === 'marko'){
//         console.log('validno')
//     }else{
//         console.log('nije validno')
//     }
// });

// document.addEventListener('click', function(){
//     console.log('page clicked')
// })

// var div = document.querySelector('div')

// button.addEventListener('click', function(e){
//     e.preventDefault();
//     console.log('gsdgsdg')
// });

// var textInput = document.querySelector('input');
// var outputSpan = document.querySelector('span');
// var updateButton = document.querySelector('button');

// updateButton.addEventListener('click', function() {
// 	outputSpan.textContent = textInput.value;
// });

function loguj(n){
    console.log(n * 2);
}

function logujElemente(niz){
    niz.forEach(loguj)
}

logujElemente([1,2,3,4]);

function loguj2(n){
    console.log(n * 2);
}

function logujElemente2(niz){
    niz.forEach(loguj)
}

logujElemente2([1,2,3,4]);

function logujElemente3(niz, num){
    niz.forEach(function(n){
        console.log(n * num)
    })
}

logujElemente3([1,2,3,4], 5)