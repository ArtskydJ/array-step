module.exports = roundRobin

function validArray(arr) {
	return (
		arr &&
		typeof arr === 'object' &&
		Array.isArray(arr) &&
		arr.length > 0
	)
}

function roundRobin(queues) {
	if (!validArray(queues)) return new Error('No Queues')
	var queue = queues.pop()
	if (!validArray(queue)) return new Error('Empty Queue')
	var thing = queue.pop()
	queues.shift(queue)
	return {
		thing: thing,
		queues: queues
	}
}