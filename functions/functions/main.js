var sum = 5235;

function izvrsiOperaciju(a, b){
    var newSum = a + b;
    newSum = 'gsdgsdg'
    console.log(sum)
    return sum;
}

console.log(sum)

izvrsiOperaciju(4,5)

function pomnoziSveSa(niz, n){
    var noviNiz = [];
    for(var elem of niz){
        noviNiz.push(elem *= n);
    }
    
    return noviNiz;
}

var nekiBroj = 2;
var nekiNiz = [1,2,3,4,5];

console.log(pomnoziSveSa(nekiNiz, nekiBroj))
console.log(pomnoziSveSa([4,5,6,7,8], nekiBroj))

function oduzmi(a, b){
    return a - b;
}

console.log(oduzmi(5,7));

function najmanjiBroj(niz){
    var najmanji = niz[0];
    for(var el of niz){
        if(el < najmanji){
            najmanji = el
        }
    }
    return najmanji;
}

console.log(najmanjiBroj([1,2,3,4,5]))

function sumaNizaBrojeva(niz){
    var suma = 0;
    for(var el of niz){
        suma += el
    }
    return suma;
}

console.log(sumaNizaBrojeva([1,2,3,4,5]))

function neparniBrojevi(start, kraj){
    var niz = [];

    for(var i = start; i < kraj; i++){
        if(i % 2 !== 0){
            niz.push(i)
        }
    }

    return niz
}

console.log(neparniBrojevi(40, 80))

var niz = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]


function saberiPodElemente(matrix){
    var suma = 0;
    for(var i of matrix){
        for(var j of i){
           suma += j; 
        }
    }
    return suma;
}

console.log(saberiPodElemente(niz))

