# @marcm/shallow-equal

*Mighty* fast shallow equals (~524 bytes gzipped)

## Install
```bash
npm install @marcm/shallow-equal
```
```bash
yarn add @marcm/shallow-equal
```

## Supports 
- ``Object``
- ``Array``
- ``TypedArray``
- ``RegExp``
- ``Promise``
- ``Date``
- ``NaN``
- ``Set``
- ``Map``

## Benchmark[^1] (from [fast-equals](https://github.com/planttheidea/fast-equals))
[^1]: showing benchmark 'overall averages'. Ran on an M1 Pro (macOS 13.1).
Run yourself by adding [@marcm/shallow-equal](https://github.com/MarcusMathiassen/shallow-equal) to the [fast-equals](https://github.com/planttheidea/fast-equals) benchmark

| Package | Ops / sec |
| :---        |    ---: |
| **@marcm/shallow-equal**            | ``13,079.405`` |
| fast-equals (shallowEqual)          | ``8,437.492``  |
| shallow-equal (shallowEqualObjects) | ``6,777.645``  |
| shallowequal                        | ``6,335.283``  |
| fast-shallow-equal                  | ``5,659.316``  |

Passes the full test suite of [fast-equals](https://github.com/planttheidea/fast-equals)

## Usage
```javascript
const { shallowEqual } = require('@marcm/shallow-equal')
// or
import { shallowEqual } from '@marcm/shallow-equal'

// Typed Arrays
shallowEqual(new Float32Array([3, 4, NaN]), new Float32Array([3, 4, NaN])) // true
shallowEqual(new Float32Array([3, 4, NaN]), new Float32Array([3, 4, null])) // false
// Objects and array
shallowEqual([{ a: 'a' }, { b: 'b' }], [{ a: 'a' }, { b: 'b' }]) // false
// Dates
shallowEqual(new Date('2017-06-16T21:36:48.362Z'), new Date('2016-06-16T21:36:48.362Z')) // false
shallowEqual(new Date('2017-06-16T21:36:48.362Z'), new Date('2017-06-16T21:36:48.362Z')) // true
