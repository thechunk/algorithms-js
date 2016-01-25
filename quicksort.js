'use strict';

module.exports = class QuickSort {
	static pick(list) {
		const pivot = list.length - 1;
		console.log('pick', `${list[pivot]}, idx: ${pivot}`);
		return pivot;
	}

	static move(arr, s, d) {
		const movEl = arr.splice(s, 1, undefined);
		arr.splice(d, 0, movEl[0]);
		if (s < d) {
			arr.splice(s, 1);
		} else {
			arr.splice(s + 1, 1);
		}
		return arr;
	}

	static partition(list, pivotIdx) {
		let o = list.slice();
		const pivotVal = o[pivotIdx];

		for (let i = pivotIdx; i >= 0; i--) {
			const el = o[i];
			if (el > pivotVal) {
				QuickSort.move(o, i, pivotIdx + 1);
				console.log('move', o);
			}
		}

		for (let i = pivotIdx; i < list.length; i++) {
			const el = o[i];
			if (el < pivotVal) {
				QuickSort.move(o, i, pivotIdx - 1);
				console.log('move', o);
			}
		}

		return o;
	}

	static start(list, pivot) {
		if (typeof pivot === 'undefined') {
			pivot = QuickSort.pick(list);
		}
		let o = QuickSort.partition(list, pivot);

		if (2 < pivot) {
			console.log('star', o, pivot - 1);
			QuickSort.start(o, --pivot);
		}
	}

	static sort(list) {
		return QuickSort.start(list);
	}
};
