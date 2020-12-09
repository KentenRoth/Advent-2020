const fs = require('fs');
const util = require('util');

const read = util.promisify(fs.readFile);

const eachRow = 31;
let x = 0;

letsGoSledding = async () => {
	let tree = 0;
	const treeOrFree = await read('./data/day3Data.txt', 'utf8').then((data) =>
		data.split('\n')
	);
	for (let i = 0; i < treeOrFree.length; i++) {
		let xLocation = x % eachRow;
		let isItATree = treeOrFree[i].split('');
		if (isItATree[xLocation] === '#') {
			tree++;
		}
		x += 3;
	}
	console.log(tree);
};

letsGoSledding();
