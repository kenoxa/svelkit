# Svelkit

## Quick start

Clone the repository and cd into the project directory.

Run `yarn install` then `yarn build`

Cd into the package that you'd like to make progress on.

## Overview

> Collection of packages to create [svelte] apps.

[![License](https://badgen.net/github/license/kenoxa/svelkit)](https://github.com/kenoxa/svelkit/blob/main/LICENSE)
[![CI](https://github.com/kenoxa/svelkit/workflows/CI/badge.svg)](https://github.com/kenoxa/svelkit/actions?query=workflow%3Aci)
[![Coverage Status](https://badgen.net/coveralls/c/github/kenoxa/svelkit/main)](https://coveralls.io/github/kenoxa/svelkit?branch=main)
[![PRs Welcome](https://badgen.net/badge/PRs/welcome/purple)](http://makeapullrequest.com)
[![Conventional Commits](https://badgen.net/badge/Conventional%20Commits/1.0.0/cyan)](https://conventionalcommits.org)

<!-- prettier-ignore-start -->
<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [Svelkit](#svelkit)
  - [Quick start](#quick-start)
  - [Overview](#overview)
  - [Usage](#usage)
    - [Baseline](#baseline)
  - [Packages](#packages)
    - [Components](#components)
    - [Service](#service)
    - [Hooks](#hooks)
  - [Support](#support)
  - [Contribute](#contribute)
    - [Develop](#develop)
  - [License](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->
<!-- prettier-ignore-end -->

## Usage

[svelkit] components work in isolation. They are self-supporting, and will only inject the styles they need to display. They don't rely on any global style-sheets such as [normalize.css](normalize.css).

You can use any of the components as demonstrated in the documentation. Please refer to each component's [demo page](https://svelkit.js.org) to see how they should be imported.

### Baseline

[svelkit] provides an optional [baseline](./packages/baseline/README.md) component. It fixes some inconsistencies across browsers and devices while providing slightly more opinionated resets to common HTML elements.

## Packages

### Components

- [@svelkit/baseline](./packages/baseline): A baseline component to kickstart an elegant, consistent, and simple baseline to build upon.
- [@svelkit/chip](./packages/chip): A chip component
- [@svelkit/delay](./packages/delay): A delay component
- [@svelkit/scoped-baseline](./packages/scoped-baseline): A scoped baseline component to progressively kickstart an elegant, consistent, and simple baseline to build upon.

### Service

- [@svelkit/graphql](./packages/graphql): A lightweight [GraphQL] client

### Hooks

## Support

This project is free and open-source, so if you think this project can help you or anyone else, you may [star it on GitHub](https://github.com/kenoxa/svelkit). Feel free to [open an issue](https://github.com/kenoxa/svelkit/issues) if you have any idea, question, or you've found a bug.

## Contribute

Thanks for being willing to contribute!

**Working on your first Pull Request?** You can learn how from this _free_ series [How to Contribute to an Open Source Project on GitHub](https://egghead.io/series/how-to-contribute-to-an-open-source-project-on-github)

We are following the [Conventional Commits](https://www.conventionalcommits.org) convention.

### Develop

- `yarn test`: Run test suite including linting
- `yarn format`: Ensure consistent code style
- ~~`yarn storybook`: Start the component showroom~~
- `yarn publish`: To publish all changed packages

## License

`svelkit` is open source software [licensed as MIT](https://github.com/kenoxa/svelkit/blob/main/LICENSE).

[svelkit]: https://svelkit.js.org/
[svelte]: https://svelte.dev/
[graphql]: https://graphql.org/
