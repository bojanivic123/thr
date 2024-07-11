// var colors = ['white', 'green', 'red', 'blue', 'black'];
// console.log("The memory of that scene for me is like a frame of film forever frozen at that moment: the " + colors[2] + " carpet, the " + colors[1] + " lawn, the " + colors[0] + " house, the leaden sky. The new president and his first lady. - Richard M. Nixon")
// console.log(`The memory of that scene for me is like a frame of film forever frozen at that moment: the ${colors[2]} carpet, the ${colors[1]} lawn, the ${colors[0]} house, the leaden sky. The new president and his first lady. - Richard M. Nixon`)

// for(var color of colors){
//     console.log(color);
// }

// for(var i = 0; i < colors.length; i++){
//     console.log(colors[i])
// }

// var a = [1, 2, 5, 7];
// var b = [5, 1, 9];

// if(a.length > b.length){
//     for(var el of a){
//         console.log(el);
//     }
// } else {
//     for(var el of b){
//         console.log(el);
//     }
// }

// var arr = [0, 3, 5, 7, 10];
// for (var num of arr) {
//     console.log(num + 1)
// }

// for(var i = 0; i < arr.length; i++){
//     console.log(arr[i] + 1)
// }

// var arr = [0, 3, 5, 7, 10];

// for(var el of arr.reverse()){
//     console.log(el)
// }

// for (var i = 0; i < arr.length; i--) {
//     console.log(arr[i]);
// }

// var arr = [0, 3, 5, 7, 10];
// for (var i = 1; i < arr.length; i += 2) {
//     console.log(arr[i]);
// }

// var arr = [0, 3, 5, 7, 10];
// var sum = 0;

// for (var num of arr) {
//     sum += num;
// }

// for(var i = 0; i < arr.length; i++){
//     sum += arr[i];
// }
// console.log(sum);

// var capitals = [
//     { country: 'Italy', city: 'Rome' },
//     { country: 'Netherlands', city: 'Amsterdam' },
//     { country: 'Belgium', city: 'Brussels' },
//     { country: 'Denmark', city: 'Copenhagen' },
//     { country: 'Finland', city: 'Helsinki' },
// ];

// for(var i = 0; i < capitals.length; i++){
//     console.log("The capital of " + capitals[i].country + " is " + capitals[i].city)
// }

// for(var capital of capitals){
//     console.log("The capital of " + capital.country + " is " + capital.city)
// }

// var prirodniBrojevi = [];
// for (var i = 1; i <= 100; i++) {
//     prirodniBrojevi.push(i);
// }
// console.log(prirodniBrojevi);

// var parni = [];
// var neparni = [];

// for(var i = 1; i <= 100; i++){
//     if(i % 2 === 0){
//         parni.push(i);
//     }else{
//         neparni.push(i);
//     }
// }

// console.log(parni)
// console.log(neparni)

// var a = 13;
// var b = 47;
// var niz = [];

// for(var i = a; i <= b; i++){
//     niz.push(i);
// }
// console.log(niz)

// var arr = [19, 49, 10, 4, 93, 57];
// var num = 10;
// var numFound = false;

// for (var element of arr) {
//     if (element === num) {
//         numFound = true;
//         break;  // nije obavezan u ovom slucaju
//     }
// }

// if (numFound) {
//     console.log('Broj se nalazi u nizu');
// } else {
//     console.log('Broj se ne nalazi u nizu');
// }


// var arr = [19, 49, 10, 4, 93, 57];
// var maximum = arr[0];

// for (var element of arr) {
//     if (element > maximum) {
//         maximum = element;
//     }
// }

// console.log(maximum);

// var a = [4, 6, 9, 0, 1, 3, 8];
// var b = [21, 53, 12, 74, 88, 2, 5];

// for (var i = 0; i < a.length; i++) {
//     console.log(a[i] + b[i]);
// }

// var a = ['Rome', 'Amsterdam', 'Brussels', 'Copenhagen', 'Helsinki', 'Athens', 'London', 'Moscow', 'Washington DC', 'Madrid'];
// var b = ['Italy', 'Netherlands', 'Belgium', 'Denmark', 'Finland', 'Greece', 'UK', 'Russia', 'US', 'Spain'];
// var c = {};

// for(var i = 0; i < a.length; i++){
//     c[a[i]] = b[i];
// }

// console.log(c)

// var meseci = [
//     {ime: 'Januar', brojDana: 31},
//     {ime: 'Februar', brojDana: 28},
//     {ime: 'Mart', brojDana: 31},
//     {ime: 'April', brojDana: 30},
//     {ime: 'Maj', brojDana: 31},
//     {ime: 'Jun', brojDana: 30},
//     {ime: 'Jul', brojDana: 31},
//     {ime: 'Avgust', brojDana: 31},
//     {ime: 'Septembar', brojDana: 30},
//     {ime: 'Oktobar', brojDana: 31},
//     {ime: 'Novembar', brojDana: 30},
//     {ime: 'Decembar', brojDana: 31}
// ];

// for (var mesec of meseci) {
//     for(var i = 1; i <= mesec.brojDana; i++){
//         console.log(`Danas je ${i}. ${mesec.ime}`)
//     }
// }

