
// 1.

function subtract(a, b) {
    return a - b;
}

console.log(subtract(7, 3));


// 2.

function multiplyAndSubtract(a, b, c) {
    return a * b - c;
}

console.log(multiplyAndSubtract(2, 3, 5));


// 3. 

function addOrSubtract(a, b, c) {
    if (a > 0) {
        return b + c;
    } else {
        return b - c;
    }
}

console.log(addOrSubtract(2, 3, 5));


// 4.

function findMinimum(array) {
    var minimum = array[0];

    for (var element of array) {
        if (element < minimum) {
            minimum = element;
        }
    }

    return minimum;
}

console.log(findMinimum([4, 6, 8, 0, 5, 2, 4, 21]));


// 5.

function sumArray(array) {
    var sum = 0;

    for (var element of array) {
        sum += element;
    }

    return sum;
}

console.log(sumArray([4, 6, 8, 0, 5, 2, 4, 21]));


// 6. 

function multiplyArray(array) {
    var product = 1;

    for (var element of array) {
        product *= element;
    }

    return product;
}

console.log(multiplyArray([4, 6, 8, 0, 5, 2, 4, 21]));


// 7. 

function oddNumbersInRange(a, b) {
    var array = [];

    for (var i = a; i <= b; i++) {
        if (i % 2 === 1) {
            array.push(i);
        }
    }

    return i;
}


// 8.

function arrayAverage(array) {
    var sum = 0;

    for (var element of array) {
        sum += element;
    }

    return sum / array.length;
}


// 9.

function isSortedArrayInRange(sortedArray, lowerBound, upperBound) {
    var firstElement = sortedArray[0];
    var lastElement = sortedArray[sortedArray.length - 1];
    return firstElement >= lowerBound && lastElement <= upperBound;
}


// 10.

function isArrayInRange(array, lowerBound, upperBound) {
    for (var element of array) {
        if (element < lowerBound || element > upperBound) {
            return false;
        }
    }
    return true;
}


// 11.

function first10EvenNumbersFromN(n) {
    var array = [];
    var count = 0;

    var i = n;
    while (count < 10) {
        if (i % 2 === 0) {
            array.push(i);
            count++;
        }
        i++;
    }

    return array;
}


// 12.

function countOfNumberInArray(array, number) {
    var count = 0;
    for (var element of array) {
        if (element === number) {
            count++;
        }
    }
    return count;
}


// 13. 

function countOfDivisibleElementsInArray(array, number) {
    var count = 0;
    for (var element of array) {
        if (element % number === 0) {
            count++;
        }
    }
    return count;
}


// 14.

function indexOfMinimum(array) {
    var minimum = array[0];
    var minimumIndex = 0;

    for (var i = 0; i < array.length; i++) {
        if (array[i] < minimum) {
            minimum = array[i];
            minimumIndex = i;
        }
    }

    return minimumIndex;
}


// 15.

function printMatrix(matrix) {
    for (var array of matrix) {
        for (var element of array) {
            console.log(element);
        }
    }
}


// 16. 

function sumMatrix(matrix) {
    var sum = 0;
    for (var array in matrix) {
        for (var element in array) {
            sum += element;
        }
    }
    return sum;
}


// 17.

// function moveInMatrix(matrix, moveArray) {
//     var row = 0;
//     var column = 0;
//     for (var move of moveArray) {
//         if (move === 'up') {
//             row -= 1;
//         } else if (move === 'down') {
//             row += 1;
//         } else if (move === 'left') {
//             column -= 1;
//         } else if (move === 'right') {
//             column += 1;
//         }
//     }

//     return matrix[row][column];
// }


// 18.

function moveInMatrix(matrix, moveArray) {
    var row = 0;
    var column = 0;
    for (var move of moveArray) {
        if (move === 'up') {
            row -= 1;
            if (row < 0) {
                row = matrix.length - 1;
            }
        } else if (move === 'down') {
            row += 1;
            if (row >= matrix.length) {
                row = 0;
            }
        } else if (move === 'left') {
            column -= 1;
            if (column < 0) {
                column = matrix[row].length - 1;
            }
        } else if (move === 'right') {
            column += 1;
            if (column >= matrix[row].length) {
                column = 0;
            }
        }
    }

    return matrix[row][column];
}


// 19.

function sortArray(unsortedArray) {
    var sortedArray = [];
    while (unsortedArray.length > 0) {
        var minimumIndex = indexOfMinimum(unsortedArray);
        sortedArray.push(unsortedArray[minimumIndex]);
        unsortedArray.splice(minimumIndex, 1);
    }
    return sortedArray;
}


// 20.

function absoluteValue(n) {
    if (n < 0) {
        return -n;
    } else {
        return n;
    }
}

function closestElements(array) {
    var firstElement = array[0];
    var secondElement = array[1];
    var minimumDifference = absoluteValue(array[0] - array[1]);

    for (var i = 0; i < array.length; i++) {
        for (var j = 0; j < array.length; j++) {
            if (i !== j && absoluteValue(array[i] - array[j]) < minimumDifference) {
                minimumDifference = absoluteValue(array[i] - array[j]);
                firstElement = array[i];
                secondElement = array[j];
            }
        }
    }

    return [firstElement, secondElement];
}


// 21.

function countsOfOccurences(arrayToBeSearched, arrayToSearch) {
    var countsArray = [];
    
    for (var elementToSearch of arrayToSearch) {
        var count = 0;
        for (var elementToBeSearched of arrayToBeSearched) {
            if (elementToBeSearched === elementToSearch) {
                count++;
            }
        }
        countsArray.push(count);
    }

    return countsArray;
}