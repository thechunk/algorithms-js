'use strict';

const assert = require('assert');

function Node(k, l, r) {
	assert(!isNaN(k = Number(k)));
	this.k = k;
	if (l instanceof Node) {
		this.l = l;
	}
	if (r instanceof Node) {
		this.r = r;
	}
}

function BinarySearchTree() {
	this.root = null;
}

BinarySearchTree.prototype = {
	insert: function(root, v) {
		const child = new Node(v);
		if (root === null) {
			// Case: no nodes
			return (this.root = child);
		} else {
			if (v < root.k) {
				if (!(root.l instanceof Node)) {
					return (root.l = child);
				}
				this.insert(root.l, v);
			} else {
				if (!(root.r instanceof Node)) {
					return (root.r = child);
				}
				this.insert(root.r, v);
			}
		}
	},

	dfSearch: function(root, n) {
		let visited = [];
		visited.push(n);
		console.log('visit', n.k);

		if (n.l) {
			if (!(n.l in visited)) {
				this.dfSearch(root, n.l);
			}
		}
		if (n.r) {
			if (!(n.r in visited)) {
				this.dfSearch(root, n.r);
			}
		}
	},

	del: function(v) {
	},

	exists: function(v) {
	},

	printDescription: function() {
		console.log(JSON.stringify(this.root, null, '  '));
	}
};

module.exports = BinarySearchTree;
