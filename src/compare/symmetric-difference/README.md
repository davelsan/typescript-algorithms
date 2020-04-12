<h1 align="center">Symmetric Difference</h1>

<p align="center">
  <a href="https://github.com/davelsan/typescript-algorithms/actions?query=workflow%3Asymmetric-difference">
    <img alt="Build Status" src="https://github.com/davelsan/typescript-algorithms/workflows/symmetric-difference/badge.svg"/>
  </a>
</p>

> The __symmetric difference__ (also __disjunctive union__) of two sets __A__ and __B__, is another set __C__ whose items are in either __A__ or __B__, but never in both.

## Considerations

The overall shape of the algorithm is a single function that can cumulatively compares multiple arrays, iterating each array exactly once, and returns a new array with their globally unique members (which can be empty, if none are unique).

## Features

### Logic

- Can compare more than two arrays
- Performs a cumulative comparison [ (n<sub>0</sub> , n<sub>1</sub>), (n<sub>0</sub> , n<sub>2</sub>) (n<sub>1</sub> , n<sub>2</sub>) ... (n<sub>i</sub> , n<sub>j</sub>) ]
- Has `O(n)` time complexity

### I/O

- Input is one or more __arrays__
- Input can be empty or contain __duplicated__ values
- If the input is a __single__ array, the output is its unique members
- If the input is __empty__, the output is an empty array


### Resources

- [DEV](https://dev.to/nas5w/exploring-the-symmetric-difference-interview-question-3bg5)
- [FreeCodeCamp](https://github.com/ashish9342/FreeCodeCamp/wiki/Algorithm-Symmetric-Difference)