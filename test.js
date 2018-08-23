import test from 'ava';

import { setIn,getIn,filterIn,updateIn,deleteIn } from '.';

test('#tests 1', t => {

  const arr = [{a:11, k: 55},{bb: 22, name: ''},{ccc: {d: {e: 5}}}]

  t.deepEqual({a:11, k: 55}, getIn(arr, {k:55}))

  deleteIn(arr, {a: 11})

  t.deepEqual(arr, [{bb: 22, name: ''}, {ccc: {d: {e: 5}}}])

  setIn(arr, {bb: 22}, ['name'], "ahmet")

  t.deepEqual(arr, [{bb: 22, name: 'ahmet'}, {ccc: {d: {e: 5}}}])

  updateIn(arr, {bb: 22}, { bb: 44 })

  t.deepEqual(arr, [{bb: 44, name: 'ahmet'}, {ccc: {d: {e: 5}}}])

  t.deepEqual(filterIn(arr, { bb: 44 }), [{bb: 44, name: 'ahmet'}])

})

test('#tests 2', t => {

  Array.prototype.setIn = setIn
  Array.prototype.getIn = getIn
  Array.prototype.deleteIn = deleteIn
  Array.prototype.updateIn = updateIn
  Array.prototype.filterIn = filterIn

  const arr = [{a:11, k: 55},{bb: 22, name: ''},{ccc: {d: {e: 5}}}]

  t.deepEqual({a:11, k: 55}, arr.getIn({k:55}))

  arr.deleteIn({a: 11})

  t.deepEqual(arr, [{bb: 22, name: ''}, {ccc: {d: {e: 5}}}])

  arr.setIn({bb: 22}, ['name'], "ahmet")

  t.deepEqual(arr, [{bb: 22, name: 'ahmet'}, {ccc: {d: {e: 5}}}])

  arr.updateIn({bb: 22}, { bb: 44 })

  t.deepEqual(arr, [{bb: 44, name: 'ahmet'}, {ccc: {d: {e: 5}}}])

  t.deepEqual(arr.filterIn({ bb: 44 }), [{bb: 44, name: 'ahmet'}])

})
