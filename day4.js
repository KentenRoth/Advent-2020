const fs = require('fs');
const util = require('util');

const read = util.promisify(fs.readFile);

getPassportData = async () => {
	const passportData = await read(
		'./data/day4Data.txt',
		'utf8'
	).then((data) => data.split('\n'));
};
