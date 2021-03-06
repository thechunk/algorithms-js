'use strict';

const BubbleSort = require('./bubblesort');
const QuickSort = require('./quicksort');
const InsertionSort = require('./insertionsort');

const HashTable = require('./hashtable');
const BinarySearchTree = require('./binarysearchtree');

const BinarySearch = require('./binarysearch');

const Circle = require('./circle');

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

	let bst = new BinarySearchTree();
	let root = bst.insert(null, 1);
	bst.insert(root, 20);
	bst.insert(root, 15);
	bst.insert(root, 16);
	bst.insert(root, 7);
	bst.insert(root, 5);
	bst.insert(root, 3);
	bst.insert(root, 2);
	bst.insert(root, 0);
	bst.insert(root, -1);
	bst.printDescription();
	bst.dfSearch(root, root);

	console.log('--');

	console.time('ForSearch');
	for (let i = 0; i < sorted.length; i++) {
		if (sorted[i] === 50) break;
	}
	console.timeEnd('ForSearch');

	console.log('--');

	let binarysearch = new BinarySearch(sorted);
	console.time('BinarySearch');
	const resIdx = binarysearch.run(50);
	console.timeEnd('BinarySearch');
	const actualIdx = sorted.indexOf(50);

	console.log('found ', resIdx);
	console.log('native', actualIdx);
	console.log('pass', actualIdx === resIdx);

	console.log('--');

	const circle = new Circle(5);
	circle.draw();
}

main();
