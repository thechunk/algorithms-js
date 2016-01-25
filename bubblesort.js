'use strict';

module.exports = class BubbleSort {
	static swap(a, b) {
		return a > b;
	}

	static sort(list) {
		let o = list.slice();
		let swapped = false;
		for (let i = 0; i < o.length - 1; i++) {
			const el = o[i];
			const next = o[i + 1];
			if (BubbleSort.swap(el, next)) {
				o[i] = next;
				o[i + 1] = el;
				swapped = true;
				console.log('swap', o);
			}
		}

		if (swapped) {
			return BubbleSort.sort(o);
		}
		console.log('done', o);
		return o;
	}
};
