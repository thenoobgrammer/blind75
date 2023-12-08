/**
 * @param {string} s
 * @return {boolean}
 */
export const isValid = function (s: string) {
	const match = {
		')': '(',
		']': '[',
		'}': '{',
	}

	let sArray = Array.from(s)
	let stack: any = []

	for (let i = 0; i < s.length; i++) {
		stack.push(sArray.shift())

		const topOfStack = stack[stack.length - 1]
		const isClosingTag = !!match[topOfStack]

		if (isClosingTag) {
			const underTopOfStack = stack[stack.length - 2]
			if (match[topOfStack] === underTopOfStack) {
				stack.pop()
				stack.pop()
			} else {
				return false
			}
		}
	}

	if (stack.length > 0) {
		return false
	}

	return true
}

export const isValidOptmized = function (s: string) {
	const match = {
		')': '(',
		']': '[',
		'}': '{',
	}

	let stack: any = []

	for (let i = 0; i < s.length; i++) {
		stack.push(s[i])

		let topOfStack = stack[stack.length - 1]
		const isClosingTag = !!match[topOfStack]

		if (isClosingTag) {
			const closingTag = stack.pop()
			topOfStack = stack[stack.length - 1]
			if (match[closingTag] === topOfStack) {
				stack.pop()
			} else {
				return false
			}
		}
	}

	return stack.length === 0
}
