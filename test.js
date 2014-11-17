var test = require('tap').test
var step = require('./index.js')

test('works as expected', function (t) {
	var arr = [
		[1, 5],
		[2, 6, 8, 10],
		[3],
		[4, 7, 9, 11]
	]
	for (var i = 1; i < 12; i++) {
		var next = step(arr)
		t.equal(next, i, '' + next + ' === ' + i)
	}
	t.equal(arr.length, 0, 'array is empty')
	t.end()
})

test('original queue gets modified', function (t) {
	var arr = [2, 5]
	t.equal(step(arr), 2)
	t.deepEqual(arr, [5], 'original queue gets modified')
	t.end()
})
