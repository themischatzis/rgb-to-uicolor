class RGBtoUIColor {
  constructor(rgbColor) {
    this.uiColor = this.rgbToUIColor(rgbColor);
  }

  formatNumber(value) {
    return (value / 255).toFixed(2);
  }
  
  rgbToUIColor(rgbColor) {
    if (typeof rgbColor === 'string' || rgbColor instanceof String) {
      throw new Error('RGB color should not be a string.');
    }
  
    if (!rgbColor.r || !rgbColor.g || !rgbColor.b) {
      
      throw new Error('RGB color is missing either r or g or b.');
    }
  
    return {
      r: this.formatNumber(rgbColor.r),
      g: this.formatNumber(rgbColor.g),
      b: this.formatNumber(rgbColor.b),
    };
  }

  convertToObjectiveC() {
    return `[UIColor colorWithRed:${this.uiColor.r} green:${this.uiColor.g} blue:${this.uiColor.b} alpha:1.0];`
    ;
  }

  convertToSwift() {
    return `UIColor(red:${this.uiColor.r}, green:${this.uiColor.g}, blue:${this.uiColor.b}, alpha:1.0)`
    ;
  }

  convertToXamarin() {
    return `new UIColor(red:${this.uiColor.r}f, green:${this.uiColor.g}f, blue:${this.uiColor.b}f, alpha:1.0)`
    ;
  }

}

module.exports = RGBtoUIColor;

