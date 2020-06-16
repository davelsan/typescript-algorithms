import {
  addMatrixEdges,
  breadthFirstSearch,
  createAdjacencyMatrix,
  Matrix, Vertex, Edge,
} from './breadth-first-search';

describe('The Breadth First Search (BFS) function', () => {

  /* GENERATE MOCK DATA */

  let adjMat: Matrix;

  beforeEach( () => {

    // Create an empty adjacency matrix
    adjMat = createAdjacencyMatrix(6);

    // Add graph edges (see assets/dag.svg)
    const edges: Edge[] = [
      [0,1], [0,2], [1,3], [2,1], [3,4], [3,5], [4,5]
    ];
    addMatrixEdges(adjMat, edges);
  });

  /* RUN TEST SUITE */

  it('should correctly return vertex depths from the true root', () => {

    const root = 0;
    const solution: Vertex[] = [
      { index: 1, depth: 1, },
      { index: 2, depth: 1, },
      { index: 3, depth: 2, },
      { index: 4, depth: 3, },
      { index: 5, depth: 3, },
    ];

    expect( breadthFirstSearch(adjMat, root) ).toEqual(solution);
  });

  it('should correctly return vertex depths from an arbitrary root', () => {

    const root = 2;
    const solution: Vertex[] = [
      { index: 1, depth: 1, },
      { index: 3, depth: 2, },
      { index: 4, depth: 3, },
      { index: 5, depth: 3, },
    ];
    expect( breadthFirstSearch(adjMat, root) ).toEqual(solution);
  });
});