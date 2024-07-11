// 1. Napisati program koji kreira tri promenljive, a, b i c. Postaviti vrednost "Ovo je neki tekst" u promenljivu a, vrednost 5 u promenljivu b i vrednost false u promenljivu c. Ispisati vrednost svih promenljivih

var a = 'Ovo je neki tekst';
var b = 5;
var c = false;
console.log(a);
console.log(b);
console.log(c);


// 2. Napisati program koja kreira promenljive a i b i dodeljuje im vrednosti 5 i 10, tim redom. Kreirati i promenljivu c i dodeliti joj zbir promenljivih a i b. Ispisati rezultat varijable c

var a = 5;
var b = 10;
var c = a + b;
console.log(c);


// 3. Napisati program koja kreira promenljive a i b i dodeljuje im vrednosti 5 i 10, tim redom. Nakon toga, promeljivu b sabrati sa brojem 3 i rezultat dodeliti opet u promenljivu b. Zatim vrednost promenljive b dodeliti u promeljivu a. Ispisati vrednost promenljive a

var a = 5;
var b = 10;
b = b + 3;
a = b;
console.log(a);


// 4. Napisati program koja kreira promenljive a i b i dodeljuje im vrednosti 5 i '5', tim redom. Ispitati da li su ove promenljive jednake i ispisati rezultat na sledeći način: 
// console.log(a);
// console.log(b);
// console.log(a == b);
// console.log(a === b);

var a = 5;
var b = '5';
console.log(a);
console.log(b);
console.log(a == b);
console.log(a === b);


// 5. Napisati program koja kreira promenljive a i b i dodeljuje im vrednosti 5 i 14, tim redom. Podeliti ove dve promenljive međusobno, dodeliti rezultat u promenljivu c i ispisati konačnu vrednost

var a = 5;
var b = 14;
var c = a / b;
console.log(c);


// 6. Napisati program koja kreira promenljive a, b, c i dodeljuje im vrednosti 6, 10, 12, tim redom. Pomnožiti ove tri promenljive, dodeliti rezultat u novu promenljivu d i ispisati konačnu vrednost

var a = 6;
var b = 10;
var c = 12;
var d = a * b * c;
console.log(d);


// 7. Napisati program koja za date tri promenljive a, b, c koje sadrže brojeve (po vašem izboru), ispisuje srednju vrednost

var a = 10;
var b = 12;
var c = 3;
console.log((a + b + c) / 3);


// 8. Napisati program koja za date tri promenljive a, b, c koje sadrže brojeve, računa srednju vrednost i deli je sa brojem 7. Ispisati rezultat

var a = 3;
var b = 42;
var c = 12;
console.log((a + b + c) / 3 / 7);


// 9. Napisati program i kreirati varijablu a sa vrednošću 10. Uvećati vrednost ove varijable za 7 pomoću operatora + i ispisati rezultat

var a = 10;
a = a + 7;
console.log(a);


// 10. Napisati program i kreirati varijablu a sa vrednošću 10. Pomnožiti vrednost sa 5 pomoću operatora *= i ispisati rezultat

var a = 10;
a *= 5;
console.log(a);


// 11. Napisati program koja za date dve promenljive a i b, koje sadrže brojeve po vašem izboru, ispisuje vrednost njihove razlike

var a = 31;
var b = 11;
console.log(a - b);


// 12. Napisati program za prikaz sledećih stringova:
// Tomorrow we’ll learn program flow control.
// Every command must end with ;

console.log('Tomorrow we\'ll learn program flow control');
// ILI:
console.log("Tomorrow we'll learn program flow control");

console.log('Every command must end with ;');


// 13. Napisati program koji ispisuje da li je proizvod dve promenljive (po izboru) veći od njihovog zbira

var a = 1;
var b = 31;
console.log(a * b > a + b);


// 14. Napisati program koji računa i ispisuje koliko sekundi je prošlo od ponoći, ako pretpostavimo da je trenutno vreme 20:31:16

var hours = 20;
var minutes = 31;
var seconds = 16;
console.log(hours * 3600 + minutes * 31 + seconds);


// 15. Napisati program koji, koristeći promenljive a i b, koje sadrže dužine stranica pravougaonika, izračunava njegov obim i površinu

var a = 13;
var b = 15;
console.log('obim: ', 2 * a + 2 * b);
console.log('povrsina: ', a * b);


// 16. Napisati program koji računa kvadrat promenljive a (tj. a²) tako što njenu vrednost množi samom sobom

var a = 16;
console.log(a * a);