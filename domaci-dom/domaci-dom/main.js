
// var unorderedList = document.querySelector('#list');
// console.log(unorderedList);

// console.log(unorderedList.children[0])

// for(var child of unorderedList.children){
//     console.log(child)
// }

// unorderedList.children[0].textContent += ' (edited)'

// // unorderedList.lastElementChild.textContent += ' (edited)'
// unorderedList.children[unorderedList.children.length - 1].textContent += ' (edited)'

// var newLi = document.createElement('li')
// newLi.textContent = 'Bilo sta'

// console.log(newLi)

// unorderedList.appendChild(newLi)

// var div = document.querySelector('#greeting')
// div.textContent = 'Hello!'

// document.body.classList.add('body-class')

// var image = document.querySelector('img')

// console.dir(image.attributes.src.value)
// // console.dir(image.src)
// // console.dir(image.getAttribute('src'))

// var divs = document.querySelectorAll('div')

// for(var div of divs){
//     console.log(div)
// }

// var images = document.querySelectorAll('img')

// for(var img of images){
//     img.attributes.src.textContent = 'https://www.morrisanimalrefuge.org/' + img.attributes.src.textContent
// }

// var elements = document.querySelectorAll('.remove-this-class')

// for(var element of elements){
//     element.classList.remove('remove-this-class')
// }

// unorderedList.style.fontFamily = 'sans-serif'
// div.style.fontFamily = 'sans-serif'

// var script = document.createElement('script')
// script.textContent = 'console.log("This is the log");'
// document.body.appendChild(script)

// for(var img of images){
//     var link = document.createElement('a')
//     var imgAddress = img.getAttribute('src')
//     link.style.display = 'block'
//     link.href = imgAddress
//     link.setAttribute('target', '_blank')
//     link.appendChild(img)
//     document.body.appendChild(link)
// }

var startingElement = document.querySelector("#target-1")
var nasaoElement = false;

var currentParent = startingElement.parentElement

while(!nasaoElement && currentParent !== null){
    // kod
    if(currentParent.classList.contains('wrapper') && !currentParent.classList.contains('row')){
        // currentParent.setAttribute('id', 'parent-1')
        // currentElement.attributes.id.textContent = "parent-1";
        currentParent.id = 'parent-1';
        nasaoElement = true;
    }else{
        currentParent = currentParent.parentElement
    }
}