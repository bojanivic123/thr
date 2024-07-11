// 1.

function oddUnder19(number) {
    return number < 19 && number % 2 === 1;
}


// 2.

for (var i = 9999999; i >= 1000000; i--) {
    if (i % 7 === 0 && i % 3 !== 0) {
        console.log(i);
        break;
    }
}


// 3.

function absoluteValue(n) {
    if (n >= 0) {
        return n;
    } else {
        return -n;
    }
}


// 4.

function allThreeDigitNumbers() {
    var arr = [];
    for (var i = 100; i < 1000; i++) {
        arr.push(i);
    }
    return arr;
}

console.log(allThreeDigitNumbers());


// 5.

function oddIndexElements(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (i % 2 === 1) {
            console.log(arr[i]);
        }
    }
}


// 6.

function sumOfddIndexElements(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        if (i % 2 === 1) {
            sum += arr[i];
        }
    }
    return sum;
}


// 7.

function oddAndEvenElementsSum(arr) {
    var evenSum = 0;
    var oddSum = 0;
    for (var element of arr) {
        if (element % 2 === 0) {
            evenSum += element;
        } else {
            oddSum += element;
        }
    }
    console.log('Even elements sum:', evenSum);
    console.log('Odd elements sum:', oddSum);
}


// 8.

function indexDivisibleBy3(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (i % 3 === 0) {
            console.log(arr[i]);
        }
    }
}


// 9.

function productOfElementsInInterval(arr, lowerBound, upperBound) {
    var product = 1;
    for (var element of arr) {
        if (element >= lowerBound && element <= upperBound) {
            product *= element;
        }
    }
    console.log(product);
}


// 10.

function sumOfUnderAverageElements(arr) {
    var sum = 0;
    for (var element of arr) {
        sum += element;
    }
    var average = sum / arr.length;

    var underAverageSum = 0;
    for (var element of arr) {
        if (element < average) {
            underAverageSum += element;
        }
    }

    return underAverageSum;
}


// 11.

function productsOfElementsAndIndexes(arr) {
    var resultArr = [];
    for (var i = 0; i < arr.length; i++) {
        resultArr.push(i * arr[i]);
    }
    return resultArr;
}


// 12. 

function printMatrixElements(matrix) {
    for (var subArr of matrix) {
        for (var element of subArr) {
            console.log(element);
        }
    }
}


// 13. 

function sumMatrixElements(matrix) {
    var sum = 0;
    for (var subArr of matrix) {
        for (var element of subArr) {
            sum += element;
        }
    }
    return sum;
}


// 14. 

function printOddMatrixElements(matrix) {
    for (var subArr of matrix) {
        for (var element of subArr) {
            if (element % 2 === 1) {
                console.log(element);
            }
        }
    }
}


// 15. 

function printOddMatrixElements(matrix) {
    var sum = 0;
    for (var subArr of matrix) {
        for (var element of subArr) {
            if (element % 2 === 1) {
                sum += element;
            }
        }
    }
    return sum;
}


// 16.

function printFirstColumnOfMatrix(matrix) {
    for (var subArr of matrix) {
        console.log(subArr[0]);
    }
}


// 17.

function sumSecondColumnOfMatrix(matrix) {
    var sum = 0;
    for (var subArr of matrix) {
        sum += subArr[1];
    }
    return sum;
}


// 18.

function generate4x4DiagonalMatrix() {
    var currentIndexOf1 = 0;
    var matrix = [];
    for (var i = 0; i < 4; i++) {
        var newArr = [];
        for (var j = 0; j < 4; j++) {
            if (j === currentIndexOf1) {
                newArr.push(1);
            } else {
                newArr.push(0);
            }
        }
        matrix.push(newArr);
        currentIndexOf1++;
    }
    return matrix;
}


// 19.

function printMessageEveryHalfSecond(message) {
    setTimeout(printTheMessage, 500);

    function printTheMessage() {
        console.log(message);
        setTimeout(printTheMessage, 500);
    }
}


// 20.

function printMessageLetterByLetter(message) {
    var currentLetterIndex = 0;

    setTimeout(printLetter, 500);

    function printLetter() {
        if (currentLetterIndex < message.length) {
            console.log(message[currentLetterIndex]);
            currentLetterIndex++;
            setTimeout(printLetter, 500);
        }
    }
}