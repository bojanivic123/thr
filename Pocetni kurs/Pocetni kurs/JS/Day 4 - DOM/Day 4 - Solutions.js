// 1. Napraviti promenljivu unorderedList i u nju smestiti HTML element <ul> sa ID-em list. Logovati ovaj element u konzoli

var unorderedList = document.querySelector('#list');
console.log(unorderedList);

// 2. Logovati u konzoli prvi child element unutar unorderedList

console.log(unorderedList.children[0]);

// 3. Proći kroz sve child-ove elementa unorderedList i logovati ih u konzoli

for (var child of unorderedList.children) {
    console.log(child);
}

// 4. Izmeniti tekst prvog <li> elementa u "First item (edited)"

unorderedList.children[0].textContent += ' (edited)';

// 5. Izmeniti tekst poslednjeg <li> elementa u "Last item (edited)". Uraditi ovo tako da ne zavisi od broja elemenata u <ul> (tj. program ne treba da zna da postoji tacno 3 <li> elementa u listi)

unorderedList.children[unorderedList.children.length - 1].textContent += ' (edited)';

// 6. Pomoću funkcije document.createElement napraviti novi <li> element, postaviti mu textContent na neki tekst po vašem izboru i logovati taj element u konzoli

var newLi = document.createElement('li');
newLi.textContent = 'Fourth item';

// 7. Pomoću funkcije appendChild dodati kreirani <li> element u listu

unorderedList.appendChild(newLi);

// 8. Pronaći <div> element sa ID-em 'greeting' i postaviti mu tekst 'Hello!'

document.querySelector('#greeting').textContent = 'Hello!';

// 9. Na <body> element dodati klasu 'body-class'

document.body.classList.add('body-class');

// 10. Logovati u konzoli src atribut prve slike (<img> elementa) na stranici

console.log(document.querySelector('img').src);

// 11. Logovati kroz petlju sve <div>-ove na stranici

for (var div of document.querySelectorAll('div')) {
    console.log(div);
}

// 12. Kroz petlju promeniti src atribute svih slika, tako sto se na početak doda string 'https://www.morrisanimalrefuge.org/'. Voditi računa o načinu na koji se čita stari src - u nekim slučajevima ćete dobiti na početku 'file:///', u nekim ne

for (var img of document.querySelectorAll('img')) {
    img.src = 'https://www.morrisanimalrefuge.org/' + img.attributes.src.textContent;
}

// 13. Pronaći sve elemente sa klasom remove-this-class, i ukloniti je sa tih elemenata

for (var el of document.querySelectorAll('.remove-this-class')) {
    el.classList.remove('remove-this-class');
}

// 14. Na <ul> element i <div> sa ID-em "greeting" postaviti stil font-family: sans-serif

document.querySelector('#greeting').style.fontFamily = 'sans-serif';
document.querySelector('#list').style.fontFamily = 'sans-serif';

// 15. Kroz Javascript napraviti novi <script> element, čiji sadržaj treba da sadrzi sledeći kod: `console.log("This is the log");`. Dodati ga u <body>, u konzoli treba da se pojavi ispis "This is the log"

var script = document.createElement('script');
script.textContent = 'console.log("This is the log");'
document.body.appendChild(script);

// 16. Za svaku sliku na stranici, napraviti link (<a> element) koji vodi na adresu te slike, i kao tekstualni sadržaj ima istu tu adresu

for (var img of document.querySelectorAll('img')) {
    var link = document.createElement('a');
    link.href = img.src;
    link.textContent = img.src;
    document.body.appendChild(link);
}

// 17. Promeniti kod prethodne vežbe, tako da klik na linkove otvara novi tab/prozor (postaviti HTML atribut target="_blank")

for (var img of document.querySelectorAll('img')) {
    var link = document.createElement('a');
    link.href = img.src;
    link.textContent = img.src;
    link.target = '_blank';
    document.body.appendChild(link);
}

// 18. Promeniti kod prethodne vežbe tako da linkovi nemaju tekstualni sadržaj, nego se same slike postave unutar odgovarajućih linkova kao child-ovi. Krajnji rezultat je da klik na sliku otvara tu sliku u novom tabu/prozoru

for (var img of document.querySelectorAll('img')) {
    var link = document.createElement('a');
    link.href = img.src;
    link.target = '_blank';
    link.appendChild(img);
    document.body.appendChild(link);
}

// 19. Počevši od elementa sa ID-em 'target-1', pronaći prvi parent element koji ima klasu 'wrapper' ali nema klasu 'row', i logovati ga.

var target1 = document.querySelector('#target-1');
var currentElement = target1;

while (currentElement !== null) {
    currentElement = currentElement.parentElement;
    if (currentElement.classList.contains('wrapper') && !currentElement.classList.contains('row')) {
        console.log(currentElement);
        break;
    }
}

// 20. Promeniti kod prethodne vežbe tako da, umesto da se pronađeni parent loguje, na njega se postavi ID 'parent-1'

var target1 = document.querySelector('#target-1');
var currentElement = target1;

while (currentElement !== null) {
    currentElement = currentElement.parentElement;
    if (currentElement.classList.contains('wrapper') && !currentElement.classList.contains('row')) {
        currentElement.id = 'parent-1';
        break;
    }
}
