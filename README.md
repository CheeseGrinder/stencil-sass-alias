<div align="center">
  <a href="#">
    <img alt="stencil-logo" src="./assets/stencil-logo.png" width="60">
  </a>
</div>

<h1 align="center">
  Stencil Sass Alias
</h1>

<div align="center">

A plugin for [StencilJS][stencil-site] to add aliasied path in SASS and SCSS files
</div>

<div align="center">
  <a href="https://www.npmjs.com/package/@cheese-grinder/stencil-sass-alias" target="_blank" rel="noopener noreferrer">
    <img alt="GitHub License" src="https://img.shields.io/npm/v/%40cheese-grinder%2Fstencil-sass-alias">
  </a>
  <a href="https://github.com/CheeseGrinder/stencil-sass-alias/blob/main/LICENSE" target="_blank" rel="noopener noreferrer">
    <img alt="GitHub License" src="https://img.shields.io/github/license/CheeseGrinder/stencil-sass-alias">
  </a>
</div>

---------

### Install

```bash
npm install @cheese-grinder/stencil-sass-alias --save-dev
```

### Usage

```ts
// stencil.config.ts

import { sassAlias } from '@cheese-grinder/stencil-sass-alias';
import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
  plugins: [
    sass({
      importer: [
        sassAlias()
      ]
    })
  ]
};
```

### Customization
The plugin takes one argument, which is a object with the following properties.

| property | default | optional |
| -------- | :-----: | :------: |
| path     | `src`   | `true`   |
| alias    | `@scss` | `true`   |

### Contributing

Thanks for your interest in contributing!
Please take a moment to read up on our guidelines for [contributing][contributing].
Please note that this project is released with a [Contributor Code of Conduct][code-of-conduct]. By participating in this project you agree to abide by its terms.


<!-- Links -->

[stencil-site]: https://stenciljs.com/
[contributing]: https://github.com/CheeseGrinder/stencil-sass-alias/blob/main/CONTRIBUTING.md
[code-of-conduct]: https://github.com/CheeseGrinder/stencil-sass-alias/blob/main/CODE_OF_CONDUCT.md