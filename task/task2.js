task 1
//https://www.codewars.com/kata/convert-a-string-to-an-array/train/javascript
function stringToArray(string){
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
let min = function(list){
  let minNumber = list[0];
    for (var i = 1; i < list.length; i++) {
        if (list[i] < minNumber) {
            minNumber = list[i];
        }
    }

    return minNumber;
}

var max = function(list){
    var maxNumber = list[0];
    for (var i = 1; i < list.length; i++) {
        if (list[i] > maxNumber) {
            maxNumber = list[i];
        }
    }
    return maxNumber;
}

var numbers = [4, 6, 2, 1, 9, 63, -134, 566];
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

console.log(min([1,2,3,4,5], 'value'));
console.log(min([1,2,3,4,5], 'index'));
