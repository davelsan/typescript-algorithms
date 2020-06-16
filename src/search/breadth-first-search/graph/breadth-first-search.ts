export type Matrix = number[][];
export type Vertex = { index: number; depth: number }
export type Edge = [ number, number ];

/**
 * Generates a blank (zeroed values) adjancency matrix with the
 * specified dimension.
 * @param dim square dimensions (m x n) of the adjacency matrix
 */
export function createAdjacencyMatrix (dim: number): Matrix {

  /**
   * Reducer function to generate the blank adjacency matrix. Each
   * iteration a new empty row is appended to the matrix.
   * @param mat generating matrix
   */
  const reducer = (mat: Matrix): Matrix => {

    // Push a new dim-sized array of zero values
    mat.push( Array(dim).fill(0) );

    // Return the matrix for the next iteration
    return mat;
  };

  // Generate and return the blank matrix
  return [ ...Array(dim).keys() ].reduce(reducer, []);
}

/**
 * Adds edges to an existing adjacency matrix. This function MUTATES
 * the input matrix.
 * @param adjMat input adjacency matrix to modify
 * @param edges array of edges
 */
export function addMatrixEdges (adjMat: Matrix, edges: Edge[]): Matrix {

  /**
   * Reducer function to modify the input matrix. Each iteration a
   * new edge is added and the modified matrix is returned.
   * @param mat input matrix to modify
   * @param edge each individual edge
   */
  const reducer = (mat: Matrix, edge: Edge): Matrix => {
    mat[edge[0]][edge[1]] = 1;
    return mat;
  };

  // Add edges to the input matrix
  return edges.reduce(reducer, adjMat);
}

/**
 * A Breadth-First Search (BFS) algorithm that returns the id and depth
 * of all nodes in the Directed Acyclic Graph (DAG).
 *
 * Each vertex __id__ corresponds to its index within the DAG matrix,
 * and the __depth__ to the minimum number of edges connecting it to
 * the specified root.
 *
 * @param adjMat input adjacency matrix representation of the DAG
 * @param root root vertex where to start the search
 */
export function breadthFirstSearch (adjMat: Matrix, root: number): Vertex[] {

  // Boolean array to keep a memory of processed vertex ids
  // A vertex is visited when it is added to the queue
  const visited = Array(adjMat.length).fill(false);

  // FIFO structure to keep track of adjacent vertices during the search
  // Initialize the root vertex at zero depth and flag it as visited
  const queue: Vertex[] = [
    {
      index: root,
      depth: 0
    }
  ];
  visited[root] = true;

  // Initialize an empty vertex array to hold the search results
  const solution: Vertex[] = [];

  // Breath-First Search
  while (queue.length > 0) {

    // Pull vertex from queue
    const vertex = queue[0];
    queue.shift();

    // Iterate adjacent vertices (i.e. visit the vertices)
    adjMat[vertex.index].forEach( (value, index) => {

      // Follow to valid edges and non-visited vertices
      if (value > 0 && !visited[index]) {

        const newVertex: Vertex = {
          index: index,
          depth: vertex.depth + 1,
        };

        // Push the adjacent vertex to the solution array
        solution.push(newVertex);

        // Push the adjacent vertex to the queue and flag it as visited
        queue.push(newVertex);
        visited[newVertex.index] = true;
      }
    });
  }

  return solution;
}