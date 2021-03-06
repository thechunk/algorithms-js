'use strict';

const assert = require('assert');

function BinarySearch(data) {
	// Assume sorted dataset
	this.data = data;
}

BinarySearch.prototype = {
	search: function(haystack, needle, lo, hi) {
		assert(haystack instanceof Array);
		assert(!isNaN(needle = Number(needle)));
		assert(!isNaN(lo = Number(lo)));
		assert(!isNaN(hi = Number(hi)));

		const hayLen = hi - lo;
		const midIdx = lo + Math.floor(hayLen / 2);
		const midVal = haystack[midIdx];

		if (midVal === needle) {
			return midIdx;
		}
		if (hayLen <= 1) {
			return -1;
		}

		if (needle <= midVal) {
			return this.search(haystack, needle, 0, midIdx);
		} else {
			return this.search(haystack, needle, midIdx, hi);
		}
	},

	run: function(needle) {
		assert(!isNaN(needle = Number(needle)));
		return this.search(this.data, needle, 0, this.data.length);
	}
};

module.exports = BinarySearch;
