iterate queues
==============

Basically step through array of arrays.

#Example
```js
var step = require('iterate-queues')
var arr = [
	[0, 2, 4, 5],
	[1, 3]
]

step(arr) //returns 0,         arr = [ [1, 3], [2, 4, 5] ]
step(arr) //returns 1,         arr = [ [2, 4, 5], [3] ]
step(arr) //returns 2,         arr = [ [3], [4, 5] ]
step(arr) //returns 3,         arr = [ [4, 5] ]
step(arr) //returns 4,         arr = [ [5] ]
step(arr) //returns 5,         arr = []
step(arr) //returns undefined, arr = []
```

#Usage

###obj = step(arr)

- Takes an array of arrays

Returns the element that was removed
