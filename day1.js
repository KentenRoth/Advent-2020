const data = require('./data/day1Data.js');

// 2 numbers in array added together equal 2020 then multipled together
findingSum = (array) => {
	for (let i = 0; i < array.length; i++) {
		for (let j = 0; j < array.length; j++) {
			let sum = array[i] + array[j];
			if (sum === 2020) {
				equals2020(array[i], array[j]);
				return console.log(array[i], array[j]);
			}
		}
	}
};

equals2020 = (num1, num2) => {
	console.log(num1 * num2);
	return num1 * num2;
};

findingSum(data);

// what 3 numbers added together equal 2020 then mulitpled by each other
findingSum2 = (array) => {
	for (let i = 0; i < array.length; i++) {
		for (let j = 0; j < array.length; j++) {
			for (let k = 0; k < array.length; k++) {
				let sum = array[i] + array[j] + array[k];
				if (sum === 2020) {
					multiply3numbers(array[i], array[j], array[k]);
					return console.log(array[i], array[j], array[k]);
				}
			}
		}
	}
};

multiply3numbers = (num1, num2, num3) => {
	console.log(num1 * num2 * num3);
};

findingSum2(data);
