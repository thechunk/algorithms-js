'use strict';

const BubbleSort = require('./bubblesort');

function main() {
	const unsorted = [9, 10, 4, 3, 20, 3, 1];
	console.info('init', unsorted);

	BubbleSort.sort(unsorted);
}

main();
