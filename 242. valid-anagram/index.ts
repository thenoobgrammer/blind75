/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s: string, t: string) {
	if (s.length !== t.length) return false

	let hash_s = {}
	let hash_t = {}

	for (let i = 0; i < s.length; i++) {
		if (!hash_s[s[i]]) {
			hash_s[s[i]] = 1
		} else {
			hash_s[s[i]] = hash_s[s[i]] + 1
		}
	}

	for (let i = 0; i < t.length; i++) {
		if (!hash_t[t[i]]) {
			hash_t[t[i]] = 1
		} else {
			hash_t[t[i]] = hash_t[t[i]] + 1
		}
	}

	for (const key in hash_s) {
		if (hash_s[key] !== hash_t[key]) {
			return false
		}
	}

	return true
}

var isAnagramOptimized = function (s, t) {}
