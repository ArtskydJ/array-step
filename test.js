var test = require('tap').test
var step = require('./index.js')

test('works as expected', function (t) {
	var QUEUE_LENGTH = 12
	t.plan(QUEUE_LENGTH + 1)
	var temp = {}
	var arr = [
		[0, 4, 7, 9, 11],
		[1, 5],
		[2, 6, 8, 10],
		[3]
	]
	for (var i = 0; i < QUEUE_LENGTH; i++) {
		temp = step(arr)
		arr = temp.queues
		t.equal(temp.next, i, temp.next + ' === ' + i)
	}
	temp = step(arr)
	t.deepEqual(temp.queues, [], 'queue is now an empty array')
	t.end()
})

test('original queue does not get modified', function (t) {
	t.plan(1)
	var arr = [ [0], [1] ]
	console.log(arr)
	var temp = step(arr)
	console.log(arr)
	t.notDeepEqual(arr, temp.queues, 'original queue does not get modified')
	t.end()
})
