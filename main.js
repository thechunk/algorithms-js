'use strict';

const BubbleSort = require('./bubblesort');
const QuickSort = require('./quicksort');
const InsertionSort = require('./insertionsort');

function randomList(size) {
	let arr = [];
	for (let i = 0; i < size; i++) {
		arr[i] = Math.floor(Math.random() * size);
	}
	return arr;
}

function arrayEquals(a, b) {
	return JSON.stringify(a) === JSON.stringify(b);
}

function main() {
	const count = 10000;
	const unsorted = randomList(count);

	console.info('elem', count);

	console.time('Native');
	const sorted = unsorted.slice().sort((a, b) => {
		return a - b;
	});
	console.timeEnd('Native');

	console.log('--');

	let bubbleSorted = unsorted.slice();
	console.time('BubbleSort');
	BubbleSort.run(bubbleSorted);
	console.timeEnd('BubbleSort');
	console.info('pass', arrayEquals(sorted, bubbleSorted));

	console.log('--');

	let quickSorted = unsorted.slice();
	console.time('QuickSort');
	QuickSort.run(quickSorted);
	console.timeEnd('QuickSort');
	console.info('pass', arrayEquals(sorted, quickSorted));

	console.log('--');

	let insertionSorted = unsorted.slice();
	console.time('InsertionSort');
	InsertionSort.run(insertionSorted);
	console.timeEnd('InsertionSort');
	console.info('pass', arrayEquals(sorted, insertionSorted));
}

main();
