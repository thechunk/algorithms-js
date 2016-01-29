'use strict';

const assert = require('assert');

function Circle(radius) {
	assert(!isNaN(this.radius = Number(radius)));
	this.diameter = this.radius * 2;
}

Circle.prototype = {
	getX: function(y, r) {
		assert(!isNaN(r = Number(r)));
		assert(!isNaN(y = Number(y)));
		return Math.sqrt(Math.pow(r, 2) - Math.pow(y, 2));
	},

	draw: function() {
		for (let y = -this.radius; y <= this.radius; y++) {
			let line = "";
			const rawX = this.getX(y, this.radius);
			const x = Math.floor(rawX);
			const leftX = -x;
			const rightX = x;
			for (let x = -this.radius; x <= this.radius; x++) {
				line += leftX === x || rightX === x ? "O" : " ";
			}
			console.log(line);
		}
	}
};

module.exports = Circle;
