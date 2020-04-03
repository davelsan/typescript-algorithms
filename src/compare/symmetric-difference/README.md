<h1 align="center">Symmetric Difference</h1>

<p align="center">
  <a href="https://github.com/davelsan/typescript-algorithms/actions?query=workflow%3Asymmetric-difference">
    <img alt="Build Status" src="https://github.com/davelsan/typescript-algorithms/workflows/symmetric-difference/badge.svg"/>
  </a>
</p>

> The __symmetric difference__ (also __disjunctive union__) of two sets __A__ and __B__, is another set __C__ whose items are in either __A__ or __B__, but never in both.

## Considerations

The overall shape of the algorithm is a single function where:

- The input is one or more __arrays__
- The input can be empty or contain __duplicated__ values
- If the input is a __single__ array, return its unique members
- If the input is __empty__, return an empty array

```ts
export function symDiff<T> (...arrays: T[][]): T[] {

  /* logic here... */
}
```


## Code

### Input: Single or Empty

Given the above considerations, two type guards can be used to determine whether any computation is necessary at all.

```ts
export function symDiff<T> (...arrays: T[][]): T[] {

  if ( isSingle(arrays) ) return [ ...new Set(arrays[0]) ];
  if ( isEmpty(arrays) ) return [ ];

  /* logic to compute symmetric difference... */
}
```

### Input: Two or More

Assuming the input is two or more arrays, the code can be divided in two parts:

- A `reducer` function to iterate input arrays and return the computed symmetric difference
- A `memory` set to store each processed value and prevents the addition of previously deleted values

```ts
export function symDiff<T> (...arrays: T[][]): T[] {

  // type guards...

  // store processed values during each reducer iteration
  const memory = new Set<T>;

  // iterate arrays and compute the symmetric difference
  const reducer = (
    accumulator: Set<T>, values: T[], index: number
  ): Set<T> => {

    /* logic here... */
  };

  // execute reducer using an empty accumulator set for the initial value
  const result = arrays.reduce(

    /* REDUCER */
    reducer,

    /* ACCUMULATOR */
    new Set<T>()
  );

  // output the symmetric difference as an array type
  return [ ...result ];
}
```

#### Reducer

__1.__ The input array is converted to a set of unique elements.

```ts
const reducer = (
  accumulator: Set<T>, values: T[], index: number
): Set<T> => {

  // 1 Collection of unique numbers only
  const uniques = new Set(values);

  // 2. First iteration: initialize memory and result

  // 3. Subsequent iterations: compare, mutate, remember

  // 4. Return result for next reducer iteration
  return accumulator;
}
```

__2.__ In the first iteration, the set is both the first return and initial memory

```ts
const reducer = (
  accumulator: Set<T>, values: T[], index: number
): Set<T> => {

  // 1. Collection of unique numbers only

  // 2. First iteration: initialize memory and result
  if (index === 0) {
    memory = new Set(values);
    return uniques;
  }

  // 3. Subsequent iterations: compare, mutate, remember

  // 4. Return result for next reducer iteration
  return accumulator;
};
```

__3.__ In subsequent iterations, the algorithm can execute any of these three operations:

- __REMOVE__ existing values from the accumulator
- __SKIP__ already processed values
- __ADD__ new values to both the acumulator and the memory sets

```ts
const reducer = (
  accumulator: Set<T>, values: T[], index: number
): Set<T> => {

  // 1. Collection of unique numbers only

  // 2. First iteration: initialize memory and result

  // 3. Subsequent iterations: compare, mutate, remember
  for (const x of uniques) {

    // REMOVE: value intersects
    if (accumulator.has(x) && accumulator.delete(x)) continue;

    // SKIP: value already processed
    if (memory.has(x)) continue;

    // ADD: value is new
    accumulator.add(x);
    memory.add(x);
  }

  // 4. Return result for next reducer iteration
  return accumulator;
};
```

### Resources

- [DEV - Symmetric Difference Interview Question](https://dev.to/nas5w/exploring-the-symmetric-difference-interview-question-3bg5)
- [FreeCodeCamp - Algorithm Symmetric Difference](https://github.com/ashish9342/FreeCodeCamp/wiki/Algorithm-Symmetric-Difference)