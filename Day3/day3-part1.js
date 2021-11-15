const exp = require('constants');
const fs = require('fs')
const dataFile = 'data-2.txt'

let trees = readData(dataFile)
let currentPosition = 1;
let index = 0;
let tree = '#'
let numberOfTrees = 0;
const rightShift = 3;

for (const x of trees) {
    currentPosition = currentPosition - 1;
    console.log(x.charAt(currentPosition) + " : " + currentPosition);
    if (x.charAt(currentPosition) == tree) {
        numberOfTrees++
    }
    if (currentPosition + rightShift >= x.length) {
        currentPosition = currentPosition + rightShift - x.length;
    } else {
        currentPosition = currentPosition + rightShift;
    }
    currentPosition = currentPosition + 1;
}

console.log("Number of trees: " + numberOfTrees);

function readData(dataFile) {
    return dataArray = fs.readFileSync(dataFile, 'utf8').split('\r\n');
}