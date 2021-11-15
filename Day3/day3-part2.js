const exp = require('constants');
const fs = require('fs')
const dataFile = 'data-2.txt'

let trees = readData(dataFile)
let tree = '#';
let treeHolder = 1;
const rightShift = [[1,1],[3,1],[5,1],[7,1],[1,2]];
// const rightShift = [[1,2]];

rightShift.forEach(shift => {
    let numberOfTrees = 0;
    let rowCounter = 0;
    let currentPosition = 1;
    for (const x of trees) {
        rowCounter++;
        if (shift[1] == 2 && rowCounter % 2 == 0) {
            continue;
        }
        currentPosition = currentPosition - 1;
        if (x.charAt(currentPosition) == tree) {
            numberOfTrees++
        }
        if (currentPosition + shift[0] >= x.length) {
            currentPosition = currentPosition + shift[0] - x.length;
        } else {
            currentPosition = currentPosition + shift[0];
        }
        currentPosition = currentPosition + 1;
    }

    console.log("Number of trees: " + numberOfTrees);
    console.log("Check row count: " + rowCounter);
    treeHolder = treeHolder * numberOfTrees;  
})

console.log("Multiply: " + treeHolder);

function readData(dataFile) {
    return dataArray = fs.readFileSync(dataFile, 'utf8').split('\r\n');
}