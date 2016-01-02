array-step
==========

[![Build Status](https://travis-ci.org/ArtskydJ/array-step.svg)](https://travis-ci.org/ArtskydJ/array-step)

Step through an array, or an array of arrays.

# examples

Works basically like [`Array.prototype.shift`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift) when it is used on an array of non-array objects.
```js
var step = require('array-step')
var arr = [ 0, 1, 2, 3, 4]

step(arr) //returns 0,         arr = [ 1, 2, 3, 4 ]
step(arr) //returns 1,         arr = [ 2, 3, 4 ]
step(arr) //returns 2,         arr = [ 3, 4 ]
step(arr) //returns 3,         arr = [ 4 ]
step(arr) //returns 4,         arr = []
step(arr) //returns undefined, arr = []
```

This becomes much more useful when it is used with an array of arrays.

```js
var step = require('array-step')
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

# api

```js
var step = require('array-step')
```

### `step(arr)`

- Takes an array of arrays, or an array.
- Returns the element that was removed.
- Mutates the array that was passed in.

# install

Install with [npm](https://nodejs.org/download):

```
npm install array-step
```

#License

[VOL](http://veryopenlicense.com)
