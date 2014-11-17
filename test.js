var test = require('tap').test
var step = require('./index.js')

test('works as expected', function (t) {
	var QUEUE_LENGTH = 12
	t.plan(QUEUE_LENGTH + 1)
	var next = null
	var arr = [
		[0, 4, 7, 9, 11],
		[1, 5],
		[2, 6, 8, 10],
		[3]
	]
	for (var i = 0; i < QUEUE_LENGTH; i++) {
		next = step(arr)
		t.equal(next, i, next + ' === ' + i)
	}
	t.equal(arr.length, 0, 'array is empty')
	t.end()
})

test('original queue does get modified', function (t) {
	t.plan(1)
	var arr = [ [0], [1] ]
	var temp = step(arr)
	t.deepEqual(arr, temp.queues, 'original queue does get modified')
	t.end()
})
