# rgb-to-uicolor [!(https://github.com/thchatzis/rgb-to-uicolor)]

> Convert RGB color to UIColor

## Install

```
npm install --save rgb-to-uicolor
```

## Usage

```js
import {rgbToUIColor}  from 'rgb-to-uicolor';

let rgbColor = {
  r: rgbRedValue,
  g: rgbGreenValue,
  b: rgbBlueValue
}

rgbToUIColor(rgbColor);
//=> {
  r: "UIColorRedValue",
  g: "UIColorGreenValue",
  b: "UIColorBlueValue"
  }
  
  //example
  
  let rgbColor = {
  r: 199,
  g: 46,
  b: 46
}

rgbToUIColor(rgbColor);
//=> {
  r: "0.78",
  g: "0,18",
  b: "0,18"
  }
  ```
