// 1

function logElements(array) {
    array.forEach(function (element) {
        console.log(element);
    });
}


// 2

function logElementsPlus2(array) {
    array.forEach(function (element) {
        console.log(element + 2);
    });
}


// 3

function logElementsPlusN(array, n) {
    array.forEach(function (element) {
        console.log(element + n);
    });
}


// 4

function callOnElements(array, callback) {
    array.forEach(callback);
}


// 5

function printStringIn2Seconds(string) {
    setTimeout(function() {
        console.log(string);
    }, 2000);
}


// 6

function printStringLetterByLetterIn2Seconds(string) {
    string.split('').forEach(function (letter) {
        setTimeout(function() {
            console.log(letter);
        }, 2000);
    });
}


// 7

function callIn2Seconds(callback) {
    setTimeout(callback, 2000);
}


// 8

function callInNSeconds(callback, n) {
    setTimeout(callback, n * 1000);
}


// 9

function sortArrayDescending(array) {
    array.sort(function (a, b) {
        return b - a;
    });
    return array;
}


// 10

function sortArrayByValuePropAscending(array) {
    array.sort(function (a, b) {
        return a.value - b.value;
    });
    return array;
}


// 11

function callFunctionNTimes(callback, n) {
    for (var i = 0; i < n; i++) {
        callback();
    }
}


// 12

function any(array, callback) {
    if (array.filter(callback).length > 0) {
        return true;
    }
    return false;
}


// 13

function every(array, callback) {
    if (array.filter(callback).length === array.length) {
        return true;
    }
    return false;
}


// 14

function attachAndCallOn(object, method) {
    object.temporaryMethod = method;
    object.temporaryMethod();
}


// 15

function callOn(object, method) {
    object.temporaryMethod = method;
    object.temporaryMethod();
    delete object.temporaryMethod;
}


// 16

function multiplyBy5(n) {
    return n * 5;
}


// 17

function getMultiplyBy5() {
    return function (x) {
        return x * 5;
    };
}


// 18

function getMultiplyByN(n) {
    return function (x) {
        return x * n;
    };
}


