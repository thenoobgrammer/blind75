import { twoSum, twoSumOptimized } from './index'

describe('testing two sums', () => {
	it('two sums', () => {
		const test_case_1 = twoSum([2, 5, 324, 63254, 313, 3, 3413], 315)

		expect(test_case_1[0]).toBe(0)
		expect(test_case_1[1]).toBe(4)
	})
})
