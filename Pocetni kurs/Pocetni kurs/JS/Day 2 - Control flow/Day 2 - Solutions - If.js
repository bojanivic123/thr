// 1. Napisati program koji kreira promenljive a i b i dodeljuje im vrednosti 6 i 8.
// Ako je zbir ovih vrednosti veći od 10, ispisati zbir promenljivih, u suprotnom ispisati njihovu razliku

var a = 6;
var b = 8;
if (a + b > 10) {
    console.log(a + b);
} else {
    console.log(a - b);
}


// 2. Ako je jeftina struja ispisi: “Palim bojler”. Ako nije - ispisi: “Ne palim bojler”. Jeftina struja je od 10 uvece do 6 ujutru.
var trenutnoSati = 23;

if (trenutnoSati >= 22 || trenutnoSati <= 6) {
    console.log('Palim bojler');
} else {
    console.log('Ne palim bojler');
}


// 3. Napisati program koji ispisuje koji je godišnji kvartal u zavisnosti koji je mesec u godini.
// Koristiti if/else. Redni broj meseca u godini se može dobiti pomoću new Date().getMonth() + 1

var month = new Date().getMonth() + 1;
if (month <= 3) {
    console.log('Prvi kvartal');
} else if (month <= 6) {
    console.log('Drugi kvartal');
} else if (month <= 9) {
    console.log('Treci kvartal');
} else {
    console.log('Cetvrti kvartal');
}

// 4. Napraviti promenljive a i b, koje sadrže proizvoljne brojeve, i promenljivu operacija koja sadrzi string
//  sa nazivom operacije (moze da bude 'saberi', 'oduzmi', 'pomnozi', 'podeli').
//  Ispisati rezultat operacije čiji naziv je sadržan u promenljivoj operacija sa vrednostima a i b.
//  Npr. ako je vrednost promenljive operacija ‘saberi’, ispisati rezultat a + b

var a = 4;
var b = 2;
var operacija = 'podeli';

if (operacija === 'saberi') {
    console.log(a + b);
} else if (operacija === 'oduzmi') {
    console.log(a - b);
} else if (operacija === 'pomnozi') {
    console.log(a * b);
} else if (operacija === 'podeli') {
    console.log(a / b);
}


// 5. Napisati program koji na osnovu vrednosti promenljive brojBodova ispisuje konačnu ocenu. 
// Postaviti da je broj bodova proizvoljan broj od 0 do 100. Ocena se određuje na sledeći način:
// Manje od 55 poena, ocena 5
// Od 55 do 64 poena, ocena 6
// Od 65 do 74 poena, ocena 7
// Od 75 do 84 poena, ocena 8
// Od 85 do 94 poena, ocena 9
// 95 i više poena, ocena 10

var brojBodova = 48;

if (brojBodova < 55) {
    console.log(5);
} else if (brojBodova < 65) {
    console.log(6);
} else if (brojBodova < 75) {
    console.log(6);
} else if (brojBodova < 85) {
    console.log(8);
} else if (brojBodova < 95) {
    console.log(9);
} else {
    console.log(10);
}

// 6. Napisati program koji na osnovu vrednosti promenljive n, koja sadrži broj, 
// ispisuje "n je neparan broj" ako je broj neparan, u suprotnom "n je paran broj". 
// Broj je paran ako je ostatak deljenja sa 2 jednak nuli, a operator za “ostatak deljenja” je %. 
// Dakle, broj n je paran ako je n % 2 === 0

var n = 93;

if (n % 2 === 0) {
    console.log('n je paran broj');
} else {
    console.log('n je neparan broj');
}


// 7. Napisati program koji, ako je data promenljiva brojGodine (npr. 2003), 
// proverava da li je data godina prestupna. Smatrati da je godina prestupna ako je deljiva sa 4

var godina = 2020;

if (godina % 4 === 0) {
    console.log('Godina je prestupna');
} else {
    console.log('Godina nije prestupna');
}


// 8. Napisati program koji za dati celi broj ispisuje poruku da li je broj jednocifren, dvocifren, ili trocifren

var n = 49;

if (n < 10) {
    console.log('n je jednocifren');
} else if (n < 100) {
    console.log('n je dvocifren');
} else {
    console.log('n je trocifren');
}

// 9. Napisati program koji za date tri promenljive, a, b i c, koje sadrže razlicite brojeve, 
// ispisuje koja promenljiva sadrži najveći broj, a koja promenljiva najmanji

// Ova dva zadatka se mogu resiti na vise nacina. Ovde je predstavljen jedan moguci pristup

var a = 3;
var b = 29;
var c = 12;

if (a > b && a > c) {
    console.log('Najveci broj: a,', a);
    if (b > c) {
        console.log('Najmanji broj: c,', c);
    } else {
        console.log('Najmanji broj: b,', b);
    }
} else if (b > a && b > c) {
    console.log('Najveci broj: b,', b);
    if (a > c) {
        console.log('Najmanji broj: c,', c);
    } else {
        console.log('Najmanji broj: a,', a);
    }
} else {
    console.log('Najveci broj: c,', c);
    if (a > b) {
        console.log('Najmanji broj: b,', b);
    } else {
        console.log('Najmanji broj: a,', a);
    }
}


// 10. Napisati program koji za date tri promenljive a, b i c koje sadrže brojeve
//  redom ispisuje brojeve od najmanjeg ka najvećem koristeći if/else

var a = 3;
var b = 29;
var c = 12;

if (a > b && a > c) {
    if (b > c) {
        console.log(c, b, a);
    } else {
        console.log(b, c, a);
    }
} else if (b > a && b > c) {
    if (a > c) {
        console.log(c, a, b);
    } else {
        console.log(a, c, b);
    }
} else {
    if (a > b) {
        console.log(b, a, c);
    } else {
        console.log(a, b, c);
    }
}
