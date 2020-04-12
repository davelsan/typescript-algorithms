import { LinkedList, ListType } from './linked-list';


const items = [1,2,3,4,5];
const first = 0;
const last = items.length - 1;

let singly: LinkedList<number>;
let doubly: LinkedList<number>;


describe ('push() operations', () => {

  /* SETUP */

  beforeEach(() => {

    singly = new LinkedList();
    doubly = new LinkedList(ListType.Doubly);
  });

  /* TESTS */

  test ('push#1: correctly appends a node', () => {

    for (const i of items) singly.push(i);

    expect(singly.first).toEqual(items[first]);
    expect(singly.last).toEqual(items[last]);
  });


});

describe ('pop() operations', ()=> {

  /* SETUP */

  beforeEach(() => {

    singly = new LinkedList();
    doubly = new LinkedList(ListType.Doubly);
  });

  /* TESTS */

  test ('pop#1: correctly handles an empty list', () => {

    const val = singly.pop();
    expect(val).toBe(undefined);
  });

  test ('pop#2: correctly handles a one-element list', () => {

    singly.push(items[first]);

    const val = singly.pop();

    expect(val).toEqual(items[first]);
    expect(singly.first).toBe(undefined);
    expect(singly.last).toBe(undefined);
  });

  test ('pop#3: correctly handles a two-element list', () => {

    for (let i = 0; i < 2; i++) singly.push(items[i]);

    const val = singly.pop();

    expect(val).toEqual(items[1]);
    expect(singly.first).toEqual(singly.last);
  });

  test ('pop#4 correctly removes the last singly-linked node', () => {

    for (const i of items) singly.push(i);

    const value = singly.pop() ?? 0;

    expect(value).toEqual(items[last]);
    expect(singly.last).toEqual(items[last-1]);
  });

  test ('pop#5 correctly removes the last doubly-linked node', () => {

    for (const i of items) doubly.push(i);

    const value = doubly.pop() ?? 0;

    expect(value).toEqual(items[last]);
    expect(doubly.last).toEqual(items[last-1]);
  });

});

describe ('unshift() operations', () => {

  /* SETUP */

  beforeEach(() => {

    singly = new LinkedList();
    doubly = new LinkedList(ListType.Doubly);
  });

  /* TESTS */

  test ('unshift#1: correctly prepends a node', () => {

    for (const i of items) singly.unshift(i);

    expect(singly.first).toEqual(items[last]);
  });

});

describe ('shift() operations', () => {

  /* SETUP */

  beforeEach(() => {

    singly = new LinkedList();
    doubly = new LinkedList(ListType.Doubly);
  });

  /* TESTS */

  test ('shift#1: correctly removes the first node', () => {

    for (const i of items) doubly.push(i);

    const value = doubly.shift();

    expect(value).toEqual(items[first]);
    expect(doubly.first).toEqual(items[first+1]);
  });

  test ('shift#2: corrently handle an empty list', () => {

    const value = singly.shift();

    expect(value).toBe(undefined);
    expect(singly.first).toBe(undefined);
    expect(singly.last).toBe(undefined);
  });

  test ('shift#3: correctly handle a one-element list', () => {

    singly.push(items[first]);

    const value = singly.shift();

    expect(value).toEqual(items[first]);
    expect(singly.first).toBe(undefined);
    expect(singly.last).toBe(undefined);
  });

});