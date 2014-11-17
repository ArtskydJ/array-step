iterate queues
==============

Basically step through array of arrays.

#Example
```js
var step = require('iterate-queues')
var temp = {
	queues: [
		[0, 2, 4, 5],
		[1, 3]
	],
	next: null
}

temp = step(temp.queues) //returns {next: 0, queues: [ [1, 3], [2, 4, 5] ] }
temp = step(temp.queues) //returns {next: 1, queues: [ [2, 4, 5], [3] ] }
temp = step(temp.queues) //returns {next: 2, queues: [ [3], [4, 5] ] }
temp = step(temp.queues) //returns {next: 3, queues: [ [4, 5] ] }
temp = step(temp.queues) //returns {next: 4, queues: [ [5] ] }
temp = step(temp.queues) //returns {next: 5, queues: [] }
temp = step(temp.queues) //returns {next: undefined, queues: [] }
```

#Usage

###obj = step(arr)

- Takes an array of arrays OR
- an object with the property `queues` that is an array of arrays.

Returns an object
