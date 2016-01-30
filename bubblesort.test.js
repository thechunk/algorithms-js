'use strict';

const assert = require('assert');
const expect = require('chai').expect;

const BubbleSort = require('./bubblesort');

describe('BubbleSort', () => {
	describe('#shouldSwap', () => {
		it('true if a > b', () => {
			const o = BubbleSort.shouldSwap(1, 0);
			expect(o).to.be.true;
		});

		it('false if a < b', () => {
			const o = BubbleSort.shouldSwap(0, 1);
			expect(o).to.be.false;
		});
	});

	describe('#swap', () => {
		let list = [1, 2];

		before(() => {
			BubbleSort.swap(list, 0);
		});

		it('swaps value with next value at idx i', () => {
			expect(list).to.eql([2, 1]);
		});
	});
});
