'use strict';

module.exports = class QuickSort {
	static quicksort(list, lo, hi) {
		if (lo < hi) {
			const listPivot = QuickSort.partition(list, lo, hi);
			list = listPivot[0];
			const pivot = listPivot[1];
			QuickSort.quicksort(list, lo, pivot - 1);
			QuickSort.quicksort(list, pivot + 1, hi);
		}
		return list;
	}

	static swap(list, s, d) {
		const iVal = list[s];
		const jVal = list[d];
		list[s] = jVal;
		list[d] = iVal;
	}

	static partition(list, lo, hi) {
		const pivotVal = list[hi];
		let i = lo;
		for (let j = lo; j < hi; j++) {
			if (list[j] <= pivotVal) {
				QuickSort.swap(list, i, j);
				i = i + 1;
			}
		}
		QuickSort.swap(list, i, hi);
		return [list, i];
	}

	static run(list) {
		const sorted = QuickSort.quicksort(list, 0, list.length - 1);
		return sorted;
	}
};
