# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install @kylemcparland/lotide`

**Require it:**

`const _ = require('@kylemcparland/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

- `assertArraysEqual([1, 2, 3], [1, 2, 3])`: Console.logs if arrays are strictly equal
- `assertEqual()`: Console.logs if values are strictly equal
- `assertObjectsEqual()`: Console.logs if objects are strictly equal
- `countLetters()`: Returns # of times a letter appears in a string
- `countOnly()`: Returns # of times a string appears in an array
- `eqArrays()`: Returns true if arrays are identical. Otherwise, false
- `eqObjects()`: Returns true if objects are identical. Otherwise false
- `findKey()`: Returns first key with a value that passes a callback function's check
- `findKeyByValue()`: Returns key matching a defined value
- `flatten()`: Returns a single array from a defined series of nested arrays
- `letterPositions()`: Returns an object with arrays of every index each letter appeared at in a defined string
- `takeUntil()`: Returns array that includes every value of original array until callback function is triggered
- `without()`: Returns array that excludes defined values
- `head()`: Returns array with only the first value of a defined array
- `tail()`: Returns array with every value excluding the first
- `middle()`: Returns array with the center value(s) of a defined array