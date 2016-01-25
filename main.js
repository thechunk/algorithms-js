'use strict';

const BubbleSort = require('./bubblesort');
const QuickSort = require('./quicksort');

function randomList(size) {
	let arr = [];
	for (let i = 0; i < size; i++) {
		arr[i] = Math.floor(Math.random() * size);
	}
	return arr;
}

function testSorted(arr) {
	for (let i = 0; i < arr.length - 1; i++) {
		if (arr[i + 1] < arr[i]) {
			return false;
		}
	}
	return true;
}

function main() {
	const unsorted = randomList(20);
	console.info('init', unsorted);
	console.time('BubbleSort');
	const bubbleSorted = BubbleSort.sort(unsorted);
	console.timeEnd('BubbleSort');
	console.info('pass', testSorted(bubbleSorted));

	console.log('--');

	console.info('init', unsorted);
	console.time('QuickSort');
	const quickSorted = QuickSort.sort(unsorted);
	console.timeEnd('QuickSort');
	console.info('pass', testSorted(quickSorted));
}

main();
