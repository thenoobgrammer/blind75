/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
	let hash = {}

	for (var i = 0; i < nums.length; i++) {
		if (hash[nums[i]] !== undefined) {
			return true
		}
		hash[nums[i]] = 1
	}

	return false
}

var containsDuplicateOptimizedApparently = function (nums) {
	const set = new Set(nums)
	return set.size !== nums.length
}
