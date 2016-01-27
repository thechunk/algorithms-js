'use strict';

const assert = require('assert');

function HashTable() {
	this.idMap = [];
	this.data = [];
	this.dataSize = 1000;
}

HashTable.prototype = {
	hash: function(v) {
		if (typeof v === 'number') {
			v = v.toString();
		}
		assert(typeof v === 'string');

		let hash = 0;
		const vLen = v.length;
		for (let i = 0; i < vLen; i++) {
			hash += v.codePointAt(i) * (31 ^ (vLen - 1 - i));
		}
		return hash;
	},

	getDest: function(hash) {
		return hash % this.dataSize;
	},

	put: function(i, v) {
		assert(typeof this.idMap[i] === 'undefined');

		const hash = this.hash(i);
		const dest = this.getDest(hash);
		if (typeof this.data[dest] === 'undefined') {
			this.data[dest] = [];
		}
		this.idMap[i] = dest;
		this.data[dest].push({ idx: i, value: v });
	},

	get: function(i) {
		const dest = this.idMap[i];

		const bucket = this.data[dest];
		const bucketLen = bucket.length;

		// Case: only one item in bucket
		if (bucketLen === 1) {
			return bucket[0].value;
		}

		// Case: multiple items in bucket
		if (0 < bucketLen) {
			for (let j = 0; j < bucketLen; j++) {
				if (bucket[j].idx === i) {
					return bucket[j].value;
				}
			}
		}
	},

	printDescription: function() {
		for (let i = 0; i < this.data.length; i++) {
			const entry = this.data[i];
			if (!entry) continue;
			console.log(i, entry);
		}
	}
};

module.exports = HashTable;
