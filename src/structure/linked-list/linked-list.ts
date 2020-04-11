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
   * Add a node element to the end of the linked list
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
   * Remove the last node element from the linked list
   */
  public pop (): T | undefined {

    const value = this._tail?.data;

    /* LIST EMPTY */
    // Nothing to do, head and tail are undefined

    /* LIST SIZE === 1 */
    if (this._size === 1) {

      this._head = this._tail = undefined;
    }

    /* LIST SIZE === 2 */
    else if (this._size === 2 && this._head) {

      this._tail = this._head;
      this._head.next = undefined;
    }

    /* LIST SIZE > 2 */
    else if (this._size > 2 && this._tail) {

      // Reverse-Link exists
      if ( (this._type = ListType.Doubly) && this._tail.prev ) {

        this._tail = this._tail.prev;
        this._tail.next = undefined;
      }

      // Iterate all nodes
      else {

        let prev = this._head;
        let curr = this._head?.next;
        while (prev) {

          // prev = reverse node (memory)
          // curr = current node (present)
          // next = forward node (future)
          const next = curr?.next;
          if (next) {
            prev = curr;
            curr = next;
          }
          else {
            this._tail = prev;
            this._tail.next = undefined;
            break;
          }
        }
      }
    }

    /* UNEXPECTED RESULT */
    // else {
    //   // Singly size === 2: head is undefined
    //   // Doubly size > 2: tail.prev is undefined
    //   throw new Error (
    //     `Error in Linked-List pop() operation: ${this._head, this._tail}`
    //   );
    // }

    // Update size
    this._size--;

    return value;
  }

  /**
   * Add a node element to the the beginning of the linked list
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
   * Remove the first element from the linked list
   */
  public shift (): T | undefined {

    // Retrieve first value
    const value = this._head?.data;

    // Assign next node to head
    this._head = this._head?.next;

    // Unset reverse-link in doubly list
    if (this._type === ListType.Doubly && this._head)
      this._head.prev = undefined;

    // Update size
    this._size--;

    return value;
  }


  /* AUXILIARY */

  /**
   * Link two adjacent nodes in the linked list
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