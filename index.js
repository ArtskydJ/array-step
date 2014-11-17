function valid(arr) {
	return Array.isArray(arr) && arr.length > 0
}

function step(arr) {
	if (!valid(arr)) {
		return new Error('No Queues')
	}
	var ele = arr.shift()
	var next = ele.shift ? ele.shift() : ele
	if (valid(ele)) {
		arr.push(ele)
	}
	return next
}

module.exports = step
