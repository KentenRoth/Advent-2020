const fs = require('fs');
const util = require('util');

const read = util.promisify(fs.readFile);

const eachRow = 31;

letsGoSledding = async (xValue, yValue) => {
	let tree = 0;
	let x = 0;
	const treeOrFree = await read('./data/day3Data.txt', 'utf8').then((data) =>
		data.split('\n')
	);
	for (let i = 0; i < treeOrFree.length; i += yValue) {
		let xLocation = x % eachRow;
		let isItATree = treeOrFree[i].split('');
		if (isItATree[xLocation] === '#') {
			tree++;
		}
		x += xValue;
	}
	console.log(`trees = ${tree}`);
};

letsGoSledding(1, 1); // 104
letsGoSledding(3, 1); // 230
letsGoSledding(5, 1); // 83
letsGoSledding(7, 1); // 98
letsGoSledding(1, 2); // 49

finalStar = () => {
	console.log(104 * 230 * 83 * 98 * 49);
};

finalStar();
