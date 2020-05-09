<h1 align="center">TypeScript Algorithms</h1>

<p align="center">Recurrent algorithms and data structures implemented in TypeScript</p>

<p align="center">
  <a href="https://github.com/davelsan/typescript-algorithms/actions?query=workflow%3Abuild">
    <img alt="Build Status" src="https://github.com/davelsan/typescript-algorithms/workflows/build/badge.svg?branch=master"/>
  </a>
  <a href="https://codecov.io/gh/davelsan/typescript-algorithms">
    <img alt="Code Coverage" src="https://codecov.io/gh/davelsan/typescript-algorithms/branch/master/graph/badge.svg"/>
  </a>
  <a href="https://github.com/davelsan/typescript-algorithms/blob/master/LICENSE">
    <img alt="License" src="https://img.shields.io/github/license/davelsan/typescript-algorithms"/>
  </a>
</p>

## Overview

This repository is a personal collection of recurring interview algorithms and data structures, implemented in TypeScript. The goal is to add one algorithm or data structure per week, up to a point where at least the most commonly used have been covered.

## Index

Below is a list of currently implemented algorithms and data structures.

### Algorithms

| Algorithm | Compare | Search | Sort   | Graph
| :-:       | :-:     | :-:    | :-:    | :-:
| [Symmetric Difference](./src/compare/symmetric-difference) | :heavy_check_mark: | :heavy_multiplication_x: | :heavy_multiplication_x: | :heavy_multiplication_x:

### Data Structures


| Linear | Tree | Graph
| :-:    | :-:  | :-:
| [Linked-List](./src/structure/linked-list) | - | -

## Development

This library is configured to work with [pnpm](https://pnpm.js.org/). The corresponding `pnpm-lock.yaml` shrinkwrap file is provided.

#### Commands

```bash
pnpm run build      # compile *.ts files
pnpm run lint       # lint *.ts files
pnpm run test       # run unit tests
```

### Tests

Unit tests are configured to use [Jest](https://jestjs.io/) and [ts-jest](https://kulshekhar.github.io/ts-jest/). Results are printed to standard-output.

### Lint

Linting is configured to use [ESLint](https://eslint.org/) and [typescript-eslint](https://github.com/typescript-eslint/typescript-eslint). That is the only formatting guide in the project.
