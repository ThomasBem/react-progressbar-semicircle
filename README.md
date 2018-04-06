# react-progressbar-semicircle

> Progress bar component in the shape of a semicircle - [Try it out!](https://thomasbem.github.io/react-progressbar-semicircle/)

[![NPM](https://img.shields.io/npm/v/react-progressbar-semicircle.svg)](https://www.npmjs.com/package/react-progressbar-semicircle) ![GZip Size](http://img.badgesize.io/https://unpkg.com/react-progressbar-semicircle/dist/index.js?compression=gzip&label=gzip%20size)

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
    return <SemiCircleProgressBar percentage={33} showPercentValue />;
  }
}
```

![SemiCircleProgressBarWithPercentValue](https://www.dropbox.com/s/b5c85vuz9jgvw3y/SemiCircleProgressBarWithPercentValue.png?raw=1)

## API

| Property         | Description                                                   | Type    | Required | Default                                                            |
| ---------------- | ------------------------------------------------------------- | ------- | -------- | ------------------------------------------------------------------ |
| stroke           | Color of the progress bar                                     | string  | false    | ![#02B732](https://placehold.it/15/02B732/000000?text=+) `#02B732` |
| strokeWidth      | Width of the progress bar                                     | number  | false    | `10`                                                               |
| background       | Background color for the progress bar                         | string  | false    | ![#D0D0CE](https://placehold.it/15/D0D0CE/000000?text=+) `#D0D0CE` |
| diameter         | Diameter of the semicircle                                    | number  | false    | `200`                                                              |
| orientation      | Orientation of the semicircle. Supports `'up'` and `'down'`   | string  | false    | `'up'`                                                             |
| direction        | Direction of the progressbar. Supports `'left'` and `'right'` | string  | false    | `'right'`                                                          |
| percentage       | Percentage to be drawn on the bar. Number between 0 - 100     | number  | true     |
| showPercentValue | Show percentage value as a number in the middle of semicircle | boolean | false    | `false`                                                            |

## [Demo](https://thomasbem.github.io/react-progressbar-semicircle/)

This repo comes with an example [create-react-app](https://github.com/facebookincubator/create-react-app) under `example/` that can be run locally to experiment with the component. This demo is also hosted [here](https://thomasbem.github.io/react-progressbar-semicircle/).

```bash
cd example
npm install
npm start
```

This will start the create-react-app dev server locally on port 3000 and open the demo app in your default browser.

## Credit

This library is bootstrapped with the use of [Create-React-Library CLI](https://github.com/transitive-bullshit/create-react-library)

## License

MIT © [ThomasBem](https://github.com/ThomasBem)
