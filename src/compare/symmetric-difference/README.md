<h1 align="center">Symmetric Difference</h1>

<p align="center">
  <a href="https://github.com/davelsan/typescript-algorithms/actions?query=workflow%3Asymmetric-difference">
    <img alt="Build Status" src="https://github.com/davelsan/typescript-algorithms/workflows/symmetric-difference/badge.svg?branch=develop"/>
  </a>
</p>

> The __symmetric difference__ (also __disjunctive union__) of two sets __A__ and __B__, is another set __C__ whose items are in either __A__ or __B__, but never in both.

## Considerations

The overall shape of the algorithm is a single function that __cumulatively compares__ a multiple array input, iterating each __exactly once__, and outputs a new array with the globally __unique members__ (which can be empty if none are unique). Because the algorithm uses the built-in [`Set`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set) object to remove duplicates and store array members, unique members can be __primitive values__ (e.g. `string`, `number`) or custom __object references__.

## Features

### Logic

- Can compare more than two arrays
- Performs a cumulative comparison [ (a<sub>0</sub> , a<sub>1</sub>), (a<sub>0</sub> , a<sub>2</sub>) (a<sub>1</sub> , a<sub>2</sub>) ... (a<sub>i</sub> , a<sub>j</sub>) ]
- Has `O(n)` time complexity

### I/O

- Input is one or more __arrays__
- Input can be empty or contain __duplicated__ values
- If the input is a __single__ array, the output is its unique members
- If the input is __empty__, the output is an empty array

### Diff

- Use the built-in `Set` object to store unique primitive _values_ or object _references_.

## Examples

_Value_ comparison for primitive types

```ts
import { symDiff } from './symmetric-difference';

const inputArr1 = ['a','b','c'        ];
const inputArr2 = [        'c','d','e'];
const inputArr3 = ['a',    'c',    'e'];

symDiff(inputArr1, inputArr2, inputArr3); //=> [ 'b', 'd' ]
```

_Reference_ comparison for custom types.

```ts
import { symDiff } from './symmetric-difference';

type Obj = {
  [key: string]: number;
}

const obj1 = { a: 1, b: 2             };
const obj2 = {       b: 2, c: 3,      };
const obj3 = {       b: 2,       d: 4 };
const obj4 = {       b: 2,       d: 4 }; // <- new reference

const arr1 = [ obj1,       obj3 ];
const arr2 = [ obj1, obj2,      ];
const arr3 = [       obj2  obj4 ];

symDiff<Obj>(arr1, arr2, arr3); //=> [ { b: 2, d: 4 }, { b: 2, d: 4 } ]
```

### Resources

- [DEV](https://dev.to/nas5w/exploring-the-symmetric-difference-interview-question-3bg5)
- [FreeCodeCamp](https://github.com/ashish9342/FreeCodeCamp/wiki/Algorithm-Symmetric-Difference)