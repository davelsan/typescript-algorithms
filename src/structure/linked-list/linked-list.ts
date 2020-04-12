interface Node<T> {

  data: T;
  next?: Node<T>;
  prev?: Node<T>;
}

export enum ListType {
  Singly = 'SINGLY',  // forward-linked
  Doubly = 'DOUBLY',  // fwd-rev-linked
}

export class LinkedList<T> {

  private _size = 0;
  private _head?: Node<T>;
  private _tail?: Node<T>;

  /**
   * Get first element
   */
  public get first (): T | undefined { return this._head?.data; }
  /**
   * Get last element
   */
  public get last (): T | undefined { return this._tail?.data; }


  constructor (
    private _type = ListType.Singly
  ) { }

  /* OPERATIONS */

  /**
   * Add a node element to the end of the list
   * @param value node element to add
   */
  public push (value: T): void {

    // Create new node
    const node: Node<T> = { data: value };

    // Link nodes
    this.linkNodes(this._tail, node);

    // Assign new node to tail
    this._tail = node;

    // Update list size
    this._size++;
    // console.log('SIZE =', this._size);
  }

  /**
   * Remove the last node element from the list
   */
  public pop (): T | undefined {

    const value = this._tail?.data;

    /* LIST EMPTY */
    if (!this._head || !this._tail) return value;

    /* LIST SIZE === 1 */
    if (this._size === 1) {

      this._head = this._tail = undefined;
    }

    /* LIST SIZE >= 2 */
    else {

      // Reverse-Link exists
      if (this._tail.prev) {

        this._tail = this._tail.prev;
        this._tail.next = undefined;
      }

      // Iterate all nodes
      else {

        let prev = this._head;
        let curr = this._head.next;

        while (curr) {
          // [1,2,3,4,5]
          // |tail|  |prev|  |curr|
          //   1   ->  2   ->  3
          //   2   ->  3   ->  4
          //   3   ->  4   ->  5
          //   4   ->  5   ->  undefined
          this._tail = prev;
          prev = curr;
          curr = curr.next;
        }
      }
    }

    // Update size
    this._size--;

    return value;
  }

  /**
   * Add a node element to the the beginning of the list
   * @param value node element to add
   */
  public unshift (value: T): void {

    // Create new node
    const node: Node<T> = { data: value };

    // Link nodes
    this.linkNodes(node, this._head);

    // Assign new node to head
    this._head = node;

    // Update size
    this._size++;
  }

  /**
   * Remove the first element from the list
   */
  public shift (): T | undefined {

    const value = this._head?.data;

    /* EMPTY LIST  */
    if (!this._head) return value;

    /* LIST SIZE = 1 */
    if (this._size === 1) this._head = this._tail = undefined;

    /* LIST SIZE >= 2 */
    else {

      // Assign next node to head
      this._head = this._head.next;

      // Unset reverse-link in doubly list
      if (this._head?.prev) this._head.prev = undefined;
    }

    // Update size
    this._size--;

    return value;
  }


  /* AUXILIARY */

  /**
   * Link two adjacent nodes in the list
   * @param prevNode previous node element in list
   * @param nextNode next node element in the list
   */
  private linkNodes (prevNode?: Node<T>, nextNode?: Node<T>): void {

    if (prevNode) {

      // Forward-Link new node
      prevNode.next = nextNode;

      // Reverse-Link new node
      if (nextNode && this._type === ListType.Doubly)
        nextNode.prev = prevNode;

    }
    else {
      this._head = this._tail = nextNode;
    }
  }

}