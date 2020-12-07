// 4-8 g: ggtxgtgbg
// the specified letter (g) must appear in the password (ggtxgtgbg) between the numbers specified (4-8)
const fs = require('fs');
const util = require('util');

const read = util.promisify(fs.readFile);

let validPassword = 0;
let passwordValidation = 0;

// Getting Values
getValues = async () => {
	const values = await read('./data/day2Data.txt', 'utf8').then((data) =>
		data.split('\n')
	);
	values.forEach((passwords) => {
		const getValues = passwords.split(' ');
		const numbers = getValues[0].split('-');
		const passwordKeys = getValues[1].split(':');

		const smallNumber = parseInt(numbers[0]);
		const largeNumber = parseInt(numbers[1]);
		const passwordKey = passwordKeys[0];
		const password = getValues[2];
		isValidPassword1(smallNumber, largeNumber, passwordKey, password);
		isValidPassword2(smallNumber, largeNumber, passwordKey, password);
	});
};

isValidPassword1 = (smallNum, largeNum, key, pass) => {
	let keyInString = 0;
	for (let i = 0; i < pass.length; i++) {
		if (pass[i] === key) {
			keyInString = keyInString + 1;
		}
	}
	if (keyInString >= smallNum && keyInString <= largeNum) {
		validPassword = validPassword + 1;
	}
};

// position 1 (4) or postion 2 (8) must be the key (g) in the password (ggtxgtgbg)
isValidPassword2 = (smallNum, largeNum, key, pass) => {
	if (pass[smallNum - 1] === key && pass[largeNum - 1] === key) {
		return;
	}

	if (pass[smallNum - 1] === key || pass[largeNum - 1] === key) {
		passwordValidation = passwordValidation + 1;
	}
	console.log(passwordValidation);
};

getValues();
