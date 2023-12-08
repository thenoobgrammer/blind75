import { maxSubArray } from './index'

describe('testing maximum subarray', () => {
	it('maxSubArray', () => {
		const test_case_1 = maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])

		expect(test_case_1).toBe(6)
	})
})
