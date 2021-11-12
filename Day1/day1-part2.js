const exp = require('constants');
const fs = require('fs')
const dataFile = 'data-2.txt'
const theSum = 2020

let expense = readData(dataFile)

for (const x of expense) {
    for (const y of expense) {
        let theDifference = theSum - (parseInt(x) + parseInt(y))
        if (expense.includes(theDifference.toString())) {
            console.log(theDifference + " + " + x + " + " + y + " = 2020")
            console.log("Answer: " + theDifference * x * y)
            break
        }     
    }

}

function readData(dataFile) {
    return dataArray = fs.readFileSync(dataFile, 'utf8').split('\r\n');
}