const fs = require('fs');

const getData = fs.readFileSync('./data/day4Data.txt', 'utf-8');

const passports = getData.split('\n\n').map((x) => x.split('\n'));

getPassportData = (eachPassport) => {
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

getPassportData2 = (eachPassport) => {
	let valid = 0;
	eachPassport.forEach((passports) => {
		let count = 0;
		let passport = passports
			.join(' ')
			.split(' ')
			.sort()
			.map((key) => key.split(':'))
			.filter((x) => x[0] !== 'cid');
		if (passport.length >= 7) {
			if (passport[0][1] <= 2002 && passport[0][1] >= 1920) {
				count++;
			}
			if (
				passport[1][1] === 'amb' ||
				passport[1][1] === 'blu' ||
				passport[1][1] === 'brn' ||
				passport[1][1] === 'gry' ||
				passport[1][1] === 'grn' ||
				passport[1][1] === 'hzl' ||
				passport[1][1] === 'oth'
			) {
				count++;
			}
			if (passport[2][1] >= 2020 && passport[2][1] <= 2030) {
				count++;
			}

			if (/^#[0-9,a-f]+/.test(passport[3][1]) === true) {
				count++;
			}

			if (
				passport[4][1].slice(-2) === 'in' &&
				passport[4][1].length === 4 &&
				passport[4][1].slice(0, 2) >= 59 &&
				passport[4][1].slice(0, 2) <= 76
			) {
				count++;
			}
			if (
				passport[4][1].slice(-2) === 'cm' &&
				passport[4][1].length === 5 &&
				passport[4][1].slice(0, 3) >= 150 &&
				passport[4][1].slice(0, 3) <= 193
			) {
				count++;
			}

			if (passport[5][1] >= 2010 && passport[5][1] <= 2020) {
				count++;
			}
			if (/^\d{9}$/.test(passport[6][1]) === true) {
				count++;
			}

			if (count === 7) {
				valid++;
			}
		}
	});
	console.log(valid);
};

getPassportData2(passports);
