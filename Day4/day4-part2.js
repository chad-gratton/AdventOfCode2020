const fs = require('fs')
const readline = require('readline')
const dataFile = 'data-2.txt'
const validFields = ['byr','iyr','eyr','hgt','hcl','ecl','pid']

const content = fs.readFileSync(dataFile, 'utf-8');
let newContent = content.replace(/\r\n/gm, ' ');
let newerContent = newContent.replace(/  /g, '|')
let data = newerContent.split('|');

console.log(data)

let isValid;
let numberOfValid = 0;
data.forEach(element => {
    isValid = true;
    for (const i of validFields) {
        if (element.includes(i) == false) {
            isValid = false;
        }
    }
    if (isValid == true) {
        numberOfValid++;
    }
});
console.log(numberOfValid);