'use strict';

module.exports = class BubbleSort {
	static swap(a, b) {
		return a > b;
	}

	static bubblesort(list) {
		let swapped = false;
		for (let i = 0; i < list.length - 1; i++) {
			const el = list[i];
			const next = list[i + 1];
			if (BubbleSort.swap(el, next)) {
				list[i] = next;
				list[i + 1] = el;
				swapped = true;
			}
		}

		if (swapped) {
			return false;
		}
		return list;
	}

	static run(list) {
		// const sorted = BubbleSort.bubblesort(list);
		let sorted;
		while (!(sorted = BubbleSort.bubblesort(list))) {};
		return sorted;
	}
};
