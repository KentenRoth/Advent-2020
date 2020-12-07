// 4-8 g: ggtxgtgbg
// the specified letter (g) must appear in the password (ggtxgtgbg) between the numbers specified (4-8)
const fs = require('fs');
const util = require('util');

const read = util.promisify(fs.readFile);

// Getting Values
getValues = async () => {
	const values = await read('./data/day2Data.txt', 'utf8').then((data) =>
		data.split('\n')
	);
	values.forEach((passwords) => {
		const getValues = passwords.split(' ');
		const numbers = getValues[0];
		const passwordKey = getValues[1];
		const password = getValues[2];
		console.log(numbers, ' ', passwordKey, ' ', password);
	});
};

getValues();
