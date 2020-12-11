const fs = require('fs');

const getData = fs.readFileSync('./data/day4Data.txt', 'utf-8');

const passports = getData.split('\n\n').map((x) => x.split('\n'));

getPassportData = (eachPassport) => {
	var neededKeys = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid'];
	let valid = 0;
	eachPassport.forEach((passports) => {
		let passport = passports
			.join(' ')
			.split(' ')
			.map((key) => key.split(':'))
			.filter((x) => x[0] !== 'cid');
		if (passport.length >= 7) {
			valid++;
		}
	});
	console.log(valid);
};

getPassportData(passports);
