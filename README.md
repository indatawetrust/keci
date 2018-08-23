[![Build Status](https://travis-ci.org/indatawetrust/keci.svg?branch=master)](https://travis-ci.org/indatawetrust/keci)

simple immutable functions for arrays

#### install
```
npm i keci --save
```

#### usage
```js
const {setIn, getIn, deleteIn, updateIn, filterIn} = require('./bundle')

const arr = [{ user: "foo", age: 20 },{ user: "bar", age: 25 }, { user: "zoo", age: 20 }]

setIn(arr, { user: "foo" }, "name", "bar")

console.log(arr)

[ { user: 'foo', age: 20, name: 'bar' },
  { user: 'bar', age: 25 },
  { user: 'zoo', age: 20 } ]
  
console.log(getIn(arr, { name: "bar" }))

{ user: 'foo', age: 20, name: 'bar' }

deleteIn(arr, { age: 25 })

console.log(arr)

[ { user: 'foo', age: 20, name: 'bar' },
  { user: 'zoo', age: 20 } ]

updateIn(arr, { age: 20  }, { n: 1 })

console.log(filterIn(arr, { age: 20 }))

[ { user: 'foo', age: 20, name: 'bar', n: 1 },
  { user: 'zoo', age: 20 } ]

```
