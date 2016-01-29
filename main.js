'use strict';

const BubbleSort = require('./bubblesort');
const QuickSort = require('./quicksort');
const InsertionSort = require('./insertionsort');

const HashTable = require('./hashtable');

const BinarySearch = require('./binarysearch');

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

	console.log('--');

	let hashtable = new HashTable();
	hashtable.put(1, '5');
	hashtable.put(5, 'hello');
	hashtable.put(6, 'world');
	hashtable.put(20, 'derp');
	hashtable.put('foo', 'bar');
	console.log(hashtable.get(5));
	console.log(hashtable.get(6));
	// hashtable.printDescription();

	console.log('--');

	let binarysearch = new BinarySearch(sorted);
	const resIdx = binarysearch.run(5);
	const actualIdx = sorted.indexOf(5);

	console.log('found ', resIdx);
	console.log('native', actualIdx);
	console.log('pass', actualIdx === resIdx);

	console.log('--');
}

main();
