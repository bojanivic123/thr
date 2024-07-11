var paragraf = document.querySelector('p')
paragraf.textContent = 'marko'
console.dir(paragraf.textContent);
console.dir(paragraf.classList.contains('prvi'));

console.dir(paragraf.classList);
paragraf.classList.add('drugi');
console.dir(paragraf.classList);
paragraf.classList.remove('drugi');
console.dir(paragraf.classList);
paragraf.classList.toggle('drugi');

paragraf.style.backgroundColor = 'green';
paragraf.style.fontSize = '30px';

console.dir(paragraf.getAttribute('style'))
paragraf.setAttribute('style', 'color: red;')
console.dir(paragraf.getAttribute('style'))

var span = document.querySelector('span');

var div = document.querySelector('div');

var newInput = document.createElement('input')

newInput.setAttribute('type', 'password')
newInput.setAttribute('placeholder', 'Enter password')
newInput.classList.add('moj-input')

div.appendChild(newInput)

var img = document.querySelector('#target-1');
var nasaoParenta = false;
var trenutniParent = img.parentElement;

while(!nasaoParenta){
    if(trenutniParent.classList.contains('wrapper') && !trenutniParent.classList.contains('row')){
        nasaoParenta = true;
    }else{
        trenutniParent = trenutniParent.parentElement;
    }
}

console.log(trenutniParent)
