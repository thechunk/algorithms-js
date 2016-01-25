'use strict';

module.exports = class InsertionSort {
	static insertionsort(list) {
		for (let i = 0; i < list.length; i++) {
			for (let j = i; j > 0; j--) {
				const el = list[j];
				const backEl = list[j - 1];
				if (backEl > el) {
					InsertionSort.swap(list, j, j - 1);
				}
			}
		}
	}

	static swap(list, s, d) {
		const iVal = list[s];
		const jVal = list[d];
		list[s] = jVal;
		list[d] = iVal;
	}

	static run(list) {
		InsertionSort.insertionsort(list);
		return list;
	}
};
