<h1 align=center>(Graph) Breadth-First Search</h1>

<p align="center">
  <a href="https://github.com/davelsan/typescript-algorithms/actions?query=workflow%3Abreadth-first-search">
    <img alt="Build Status" src="https://github.com/davelsan/typescript-algorithms/workflows/breadth-first-search/badge.svg?branch=master"/>
  </a>
</p>

> The __Breadth-First Search__ (also __Breadth-First Traversal__) algorithm of a given directed acyclic graph (DAG), is a __layer-order__ approach to travel the __shortest path__ through all nodes in the graph.

## Considerations

The shape of the algorithm is a single function that, starting from an arbitrary root vertex, generates a __queue__ of adjacent vertices to visit. Due to the topological nature of the search, all connected vertices are visited in order via the __shortest path__ from the selected root.

## Features

### Logic

- Performs the search from any given root vertex
- Returns an ordered array that follows the shortest path to all vertices
- Has a `O(V + E)` time complexity

### I/O

- The graph is __finite__, has __no directed cycles__ and its edges are __not weighted__
- The graph input is its __adjacency matrix__ representation
- The root vertex input is its given __index__ in the matrix
- The output is an __array__ of `{ index, depth }` vertex objects

## Example

```ts
import {
  addMatrixEdges,
  breadthFirstSearch,
  createAdjacencyMatrix,
  Matrix, Vertex, Edge,
} from './breadth-first-search';

// Create an 6x6 empty adjacency matrix
let adjMat: Matrix = createAdjacencyMatrix(6);

// Add graph edges (see assets/dag.svg)
const edges: Edge[] = [
  [0,1], [0,2], [1,3], [2,1], [3,4], [3,5], [4,5]
];
addMatrixEdges(adjMat, edges);

// Expected solution from a given root vertex
const root = 0;

breadthFirstSearch(adjMat, root);
/*
[
  { index: 1, depth: 1, },
  { index: 2, depth: 1, },
  { index: 3, depth: 2, },
  { index: 4, depth: 3, },
  { index: 5, depth: 3, },
];
*/
```
