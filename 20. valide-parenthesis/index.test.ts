import { isValid } from './index'

describe('testing valid parenthesis', () => {
	it('isValid', () => {
		const test_case_1 = isValid('()[]{}')
		const test_case_2 = isValid('([]{})')
		const test_case_3 = isValid('([{}]{})')
		const test_case_4 = isValid('([{}]{)}')
		const test_case_5 = isValid('(')
		const test_case_6 = isValid('((')
		const test_case_7 = isValid('()')

		expect(test_case_1).toBeTruthy()
		expect(test_case_2).toBeTruthy()
		expect(test_case_3).toBeTruthy()
		expect(test_case_4).toBeFalsy()
		expect(test_case_5).toBeFalsy()
		expect(test_case_6).toBeFalsy()
		expect(test_case_7).toBeTruthy()
	})
})
