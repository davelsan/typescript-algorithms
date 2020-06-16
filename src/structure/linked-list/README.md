<h1 align="center">Linked List</h1>

<p align="center">
  <a href="https://github.com/davelsan/typescript-algorithms/actions?query=workflow%3Alinked-list">
    <img alt="Build Status" src="https://github.com/davelsan/typescript-algorithms/workflows/linked-list/badge.svg?branch=develop"/>
  </a>
</p>

> A __Linked-List__ is a linear data structure of __non-contiguous__ elements, linked to each other using pointers.

## Considerations

Because elements in a linked-list are stored as pointers, using this structure is preferable to an array for collections of __unknown size__, where frequent __add or remove__ operations are expected.

- The array has a more performant `O(1)` element __random access__, whereas the linked-list only supports `O(n)` __sequential access__.

- The array uses __static memory allocation__ (`stack` at `compile time`), which allows for an efficient element access. A linked-list uses __dynamic memory allocation__ (`heap` at `runtime`), which permits efficient grow and shrink operations.


## Features

Below is the list of currently supported features and operations.

### Link Type

| Singly | Doubly | Circular
| :-:    | :-:    | :-:
| :heavy_check_mark: | :heavy_check_mark: | :heavy_multiplication_x:

### Add / Remove

| Push | Pop | Unshift | Shift | Delete
| :-:  | :-: | :-:     | :-:   | :-:
| :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_multiplication_x:

### Modify

| Swap | Sort | Search
| :-:  | :-:  | :-:
| :heavy_multiplication_x: | :heavy_multiplication_x: | :heavy_multiplication_x:


## To-Do

- [ ] Investigate the possibility of adding some sort of `type guard` to check wether the `head` and `tail` pointers are `undefined`, based on the `size` property.


## Resources

- [FreeCodeCamp](https://guide.freecodecamp.org/computer-science/data-structures/linked-lists)
- [GeeksforGeeks](https://www.geeksforgeeks.org/data-structures/linked-list/)