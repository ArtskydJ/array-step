function valid(arr) {
	return Array.isArray(arr) && arr.length > 0
}

function step(arr) {
	if (!valid(arr)) {
		return new Error('No Queues')
	}
	var item = arr.shift()
	var next = item.shift ? item.shift() : item
	if (valid(item)) {
		arr.push(item)
	}
	return next
}

module.exports = step
