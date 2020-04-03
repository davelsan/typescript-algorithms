/**
 * Checks whether the input array has a single element
 * @param array input array
 */
function isSingle<T> (array: T[]): boolean {
  return array.length === 1;
}

/**
 * Checks whether the input array is empty
 * @param array input array
 */
function isEmpty<T> (array: T[]): boolean {
  return array.length === 0;
}

/**
 * Compute the symmetric difference of the input arrays
 * @param arrays input arrays
 */
export function symDiff<T> (...arrays: T[][]): T[] {

  if ( isSingle(arrays) ) return [ ...new Set(arrays[0]) ];
  if ( isEmpty(arrays) ) return [ ];

  let memory: Set<T>;

  const reducer = (
    accumulator: Set<T>, values: T[], index: number
  ): Set<T> => {

    // Collection of unique numbers only
    const uniques = new Set(values);

    // First iteration: initialize memory and result
    if (index === 0) {
      memory = new Set(values);
      return uniques;
    }

    // Subsequent iterations: compare, mutate, remember
    for (const x of uniques) {

      // REMOVE: value intersects
      if (accumulator.has(x) && accumulator.delete(x)) continue;

      // SKIP: value already processed
      if (memory.has(x)) continue;

      // ADD: value is new
      accumulator.add(x);
      memory.add(x);
    }

    // Return result for next reducer iteration
    return accumulator;
  };

  const result = arrays.reduce(

    /* REDUCER */
    reducer,

    /* ACCUMULATOR */
    new Set<T>()
  );

  return [ ...result ];
}
