const fs = require('fs');

const getData = fs.readFileSync('./data/day5Data.txt', 'utf-8');
const boardingPasses = getData.split('\n');
