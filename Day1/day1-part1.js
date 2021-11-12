const exp = require('constants');
const fs = require('fs')
const dataFile = 'data-1.txt'
const theSum = 2020

let expense = readData(dataFile)

for (const iterator of expense) {
    let theDifference = theSum - iterator
    if (expense.includes(theDifference.toString())) {
        console.log(theDifference + " + " + iterator + " = 2020")
        console.log("Answer: " + theDifference * iterator)
        break
    }
}

function readData(dataFile) {
    return dataArray = fs.readFileSync(dataFile, 'utf8').split('\r\n');
}