const exp = require('constants');
const fs = require('fs')
const dataFile = 'data-2.txt'

let passwords = readData(dataFile)
let valid = 0;

for (const x of passwords) {
    let letterCount = 0;
    const policy = x.split(' ');
    const position = policy[0].split('-');
    const letter = policy[1].substring(0, policy[1].length - 1);
    
    if (policy[2].charAt(position[0] - 1) == letter) {
        letterCount++
    }

    if (policy[2].charAt(position[1] - 1) == letter) {
        letterCount++
    }

    if (letterCount == 1) {
        console.log("valid: " + x + " : " + letterCount)
        valid++
    } else {
        console.log("not valid: " + x + " : " + letterCount)
    }
}

console.log("Valid passwords: " + valid);

function readData(dataFile) {
    return dataArray = fs.readFileSync(dataFile, 'utf8').split('\r\n');
}