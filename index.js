function valid(arr) {
	return Array.isArray(arr) && arr.length > 0
}

function step(originalArr) {
	var arr = Object.create(originalArr)
	arr = arr && arr.queues
	if (!valid(arr)) {
		return new Error('No Queues')
	}
	var ele = arr.shift()
	var next = ele.shift ? ele.shift() : ele
	if (valid(ele)) {
		arr.push(ele)
	}
	return {
		next: next,
		queues: arr
	}
}

module.exports = step
