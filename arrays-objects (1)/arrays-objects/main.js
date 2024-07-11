var a = 4;
var b = 42;
var c = 13;

if(a > b && a > c){
    console.log("a je najveci");
    if(b > c){
        console.log('c je najmanji');
    } else {
        console.log('b je najmanji');
    }
} else if(b > a && b > c){
    console.log("b je najveci");
    if(a > c){
        console.log('c je najmanji');
    } else {
        console.log('a je najmanji');
    }
} else {
    console.log("c je najveci");
    if(a > b){
        console.log('b je najmanji');
    } else {
        console.log('a je najmanji');
    }
} 

var a = 4;
var b = 42;
var c = 13;

if(a > b && a > c){
    if(b > c){
        console.log(c, b, a);
    } else {
        console.log(b, c, a);
    }
} else if(b > a && b > c){
    if(a > c){
        console.log(c, a, b);
    } else {
        console.log(a, c, b);
    }
} else {
    if(a > b){
        console.log('b je najmanji');
    } else {
        console.log('a je najmanji');
    }
} 

var n = 11;

if (n < 10) {
    console.log('n je jednocifren');
} else if (n < 100) {
    console.log('n je dvocifren');
} else if (n < 1000) {
    console.log('n je trocifren');
} else{ 
    console.log('gskdgsd')
}

var i = 1;
var counter = 0;
while (counter < 10) {
    if (i % 2 === 1) {
        counter++;
        console.log(i);
    }
    i++;
}

var i = 1;
var counter = 0;
var sum = 0;

while (counter < 20) {
    if (i % 2 === 1) {
        sum += i;
        counter++;
    }
    i++;
}

var i = 1;
for (counter = 0; counter < 10; i++) {
    if (i % 2 === 1) {
        counter++;
        console.log(i);
    }
}

for (var i = 1; i <= 100; i++){
    if(i % 3 === 0 && i % 5 === 0){
        console.log('Fizz');
    } else if (i % 5 === 0){
        console.log('Buzz');
    } else if (i % 3 === 0){
        console.log('FizzBuzz');
    } else {
        console.log(i);
    }
}

var broj = null;

var brojBacanja = 0;

while (broj !== 6) {
    broj = Math.floor(Math.random() * 6) + 1;
    brojBacanja++;
}

console.log('Dobili smo broj 6 iz: ' + brojBacanja + ' bacanja!');

[1,2,3,4,5]
['marko', 'milos']

var a = ['marko', 5, false, 345, [4, 'gsg', []], {name: 'marko', hobbies: [{}]}]

var b = 5;

var users = [
    {name: 'gsdgs', age: 34},
    {name: 'gsdgssgfsdg', age: 54},
    {name: 'gsdgsgsfgsdgsdg', age: 14},
    {name: 'gsdgsgsfgsdgsdg', age: 14},
]

console.log(users)

// ne ovako
var numbers = [6, 5, 4, 3, 5,2,5,2,5,56];

for (var index = 0; index < 4; index++) {
    console.log(numbers[index]);
}

console.log('-------------')

for (var index = 0; index < numbers.length; index++) {
    console.log(numbers[index]);
}

console.log('-------------')

for(var el of numbers){
    console.log(el);
}

var board = [
    [ 'X', ' ', 'X' ],
    [ 'X', 'O', 'O' ],
    [ 'O', ' ', 'X' ],
];

var numbers = [6, 5, 4, 3];

numbers.splice(1, 1, 9);

console.log(numbers[235423])


const obj = {
    name: 'gsdgsgsfgsdgsdg',
    age: 14,
    false: 'gsgsd',
    35: 'gsgsdg',
    "a-b": 'gsdgsdg'
}

obj.age = 56;

console.log(obj)


var userData = {
	name: 'John Doe',
	age: 57,
};

// console.log(userData['name']);

var keys = Object.keys(userData)

// ['name', 'age']

for (var key of keys) {
	console.log(userData[key])
}

var userData = {
	name: 'John Doe',
	age: 57,
	contactInformation: {
		social_facebook: 'jack.nicholson',
		social_twitter: '@thejacknick',
        social_gplus: '+jacknicholson',
        social_skype: 'jack.nicholson',
	},
};

delete userData.name

for (var key of ['phoneNumber', 'address']) {
    userData[key] = 'gsdgsdgsd'
}

console.log(userData)



