<h1 align="center">TypeScript Algorithms</h1>

<p align="center">Recurrent algorithms implemented in TypeScript</p>

<p align="center">
  <a href="https://github.com/davelsan/typescript-algorithms/actions?query=workflow%3Abuild">
    <img alt="Build Status" src="https://github.com/davelsan/typescript-algorithms/workflows/build/badge.svg"/>
  </a>
  <a href="https://codecov.io/gh/davelsan/typescript-algorithms">
    <img alt="Code Coverage" src="https://codecov.io/gh/davelsan/typescript-algorithms/branch/master/graph/badge.svg"/>
  </a>
  <a href="https://github.com/davelsan/typescript-eslint/blob/master/LICENSE">
    <img alt="License" src="https://img.shields.io/github/license/davelsan/typescript-algorithms"/>
  </a>
</p>

## Overview

An offshoot of many other efforts out there, this repository is my own personal challenge: to prepare my future software developer self for the algorithmic trials and tribulations often faced during coding interviews, and perhaps in particular real world applications too.

## Index

| Algorithm | Compare | Search | Sort   | Graph
| :-:       | :-:     | :-:    | :-:    | :-:
| [Symmetric Difference](./src/compare/symmetric-difference) | :heavy_check_mark: | :heavy_multiplication_x: | :heavy_multiplication_x: | :heavy_multiplication_x:


## Development

This library is configured to work with [pnpm](https://pnpm.js.org/). The corresponding `pnpm-lock.yaml` shrinkwrap file is provided.

#### Commands

```bash
pnpm run build      # compile *.ts files
pnpm run lint       # lint *.ts files
pnpm run test       # run unit tests
pnpm run test:cov   # serve coverage results
pnpm run release    # standard-version prepare for release
```

### Tests

Unit tests are configured to use [Jest](https://jestjs.io/) and [ts-jest](https://kulshekhar.github.io/ts-jest/). Test results are printed to standard-output, but a simple [http-server](https://www.npmjs.com/package/http-server) can be launched to visually review code coverage.

### Lint

Linting is configured to use [ESLint](https://eslint.org/) and [typescript-eslint](https://github.com/typescript-eslint/typescript-eslint). That is the only formatting guide in the project.

### Workflow

This repository (more or less) adheres to the [git-flow](https://nvie.com/posts/a-successful-git-branching-model/) branching model. To automate the process (and try something fun), the `CHANGELOG` file and version bumps are handled using the [standard-version](https://github.com/conventional-changelog/standard-version) utility package. [Conventional Commits](https://www.conventionalcommits.org/) are not enforced, but the whole thing depends on properly formatted commit messages.
