# react-progressbar-semicircle

> Progress bar component in the shape of a semicircle - [Try it out!](https://thomasbem.github.io/react-progressbar-semicircle/)

[![NPM](https://img.shields.io/npm/v/react-progressbar-semicircle.svg)](https://www.npmjs.com/package/react-progressbar-semicircle) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-progressbar-semicircle
```

## Usage

```jsx
import React, { Component } from "react";

import SemiCircleProgressBar from "react-progressbar-semicircle";

class Example extends Component {
  render() {
    return <SemiCircleProgressBar percentage={66} />;
  }
}
```

## API

* `props.stroke` - string, optional, color of the progress bar. (default ![#02B732](https://placehold.it/15/02B732/000000?text=+) `#02B732`)
* `props.strokeWidth` - number, optional, width of the progress bar (default `10`)
* `props.background` - string, optional, background color for the progress bar (default ![#D0D0CE](https://placehold.it/15/D0D0CE/000000?text=+) `#D0D0CE`)
* `props.diameter` - number, optional, diameter of the semicricle (default `200`)
* `props.orientation` - string, optional, specifies the orientation of the semicircle. Currently supports `'up'` and `'down'` (default `'up'`)
* `props.percentage` - number, _required_, percentage to be drawn on the bar

## [Demo](https://thomasbem.github.io/react-progressbar-semicircle/)

This repo comes with an example [create-react-app](https://github.com/facebookincubator/create-react-app) under `example/` that can be run locally to experiment with the component. This demo is also hosted [here](https://thomasbem.github.io/react-progressbar-semicircle/).

```bash
cd example
npm install
npm start
```

This will start the create-react-app dev server locally on port 3000 and open the demo app in your default browser.

## License

MIT © [ThomasBem](https://github.com/ThomasBem)
