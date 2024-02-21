task1
//https://www.codewars.com/kata/convert-a-string-to-an-array/train/javascript
function stringToArray(string) {
    return string.split(" ");
}

console.log(stringToArray("Robin Singh"));
console.log(stringToArray("I love arrays they are my favorite"));

task2
//https://www.codewars.com/kata/dna-to-rna-conversion/train/javascript
function DNAtoRNA(dna) {
    return dna.replace(/T/g, 'U');
}

console.log(DNAtoRNA("GCAT"));

task3
//https://www.codewars.com/kata/577a98a6ae28071780000989/train/javascript
let min = function (list) {
    let minNumber = list[0];
    for (let i = 1; i < list.length; i++) {
        if (list[i] < minNumber) {
            minNumber = list[i];
        }
    }

    return minNumber;
}

let max = function (list) {
    let maxNumber = list[0];
    for (let i = 1; i < list.length; i++) {
        if (list[i] > maxNumber) {
            maxNumber = list[i];
        }
    }
    return maxNumber;
}

let numbers = [4, 6, 2, 1, 9, 63, -134, 566];
console.log("max =", max(numbers));
console.log("min =", min(numbers));

task4
//https://www.codewars.com/kata/544a54fd18b8e06d240005c0/train/javascript
function min(arr, toReturn) {
    let minValue = Math.min(...arr);
    let minIndex = arr.indexOf(minValue);

    if (toReturn === 'value') {
        return minValue;
    } else if (toReturn === 'index') {
        return minIndex;
    }
}

console.log(min([1, 2, 3, 4, 5], 'value'));
console.log(min([1, 2, 3, 4, 5], 'index'));

task5
//https://www.codewars.com/kata/a-wolf-in-sheeps-clothing/train/javascript

function warnTheSheep(queue) {
    if (queue[queue.length - 1] === 'wolf') {
        return "Pls go away and stop eating my sheep";
    }
    for (let i = 0; i < queue.length; i++) {
        if (queue[i] === 'wolf') {
            const sheepNumber = queue.length - i - 1;
            return "Oi! Sheep number ${sheepNumber}! You are about to be eaten by a wolf!";
        }
    }
}

task6
//https://www.codewars.com/kata/beginner-lost-without-a-map

function maps(x) {
    return x.map(num => num * 2);
}

task7
//https://www.codewars.com/kata/find-the-first-non-consecutive-number/train/javascript


function firstNonConsecutive(arr) {
    if (arr.length >= 2) {
        for (let i = 1; i < arr.length; i++) {
            if ((arr[i] - 1) !== arr[i - 1]) {
                return arr[i];
            }
        }
    }
    return null;
}
